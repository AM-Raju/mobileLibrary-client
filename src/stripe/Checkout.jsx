import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";

import "../stripe/checkout.css";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const Checkout = ({ fees }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { fees: fees })
      .then((res) => setClientSecret(res.data.clientSecret));
  }, [fees, axiosSecure]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    //
    // Confirm a card payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || "unknown",
          email: user?.email || "anonymous",
        },
      },
    });

    // Error handling of confirm paymentIntent
    if (confirmError) {
      setCardError(confirmError.message);
    } else {
      if (paymentIntent.status === "succeeded") {
        let paymentInfo;
        // Set condition for standard reader
        if (fees === 100) {
          paymentInfo = {
            role: "standard reader",
            transactionIds: [paymentIntent.id],
            joiningDate: new Date(),
          };
        }

        // Set condition for premium reader
        if (fees === 150) {
          paymentInfo = {
            role: "premium reader",
            transactionIds: [paymentIntent.id],
            joiningDate: new Date(),
          };
        }

        // Save user info into DB after payment
        axiosSecure.patch(`/users/${user?.email}`, paymentInfo).then((res) => {
          console.log("response after payment success", res.data);
          if (res.data.modifiedCount > 0) {
            toast.success("Payment Done");
            event.target.reset();
          }
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="bg-green-500 px-4 py-2 relative top-14 rounded-md"
        type="submit"
        disabled={!stripe || !user}
      >
        Pay ${fees}
      </button>
    </form>
  );
};

export default Checkout;
