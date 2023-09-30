import { Elements } from "@stripe/react-stripe-js";
import Checkout from "../../stripe/Checkout";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Modal = ({ fees }) => {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello! Welcome to MobileLibrary</h3>
        <p className="py-4">You are going to explore a Newer World!</p>
        <Elements stripe={stripePromise}>
          <Checkout fees={fees}></Checkout>
        </Elements>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
