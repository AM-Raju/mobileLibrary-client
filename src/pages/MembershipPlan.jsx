import React, { useState } from "react";
import Banner from "../components/shared/Banner";
import membershipBanner from "../assets/banner/membershipBanner.jpg";
import Container from "../components/shared/Container";
import Plan from "./Plan";
import Modal from "../components/shared/Modal";
import { Helmet } from "react-helmet-async";
import favicon from "../assets/icons/favicon.png";

const MembershipPlan = () => {
  const features = {
    Basic: ["Free Ebooks", "Free Newsletter"],
    Standard: ["Free Ebooks", "Free Newsletter", "One book/week", "* Gift Coupon"],
    Premium: [
      "Free Ebooks",
      "Free Newsletter",
      "Two books/week",
      "Rare Books",
      "* Special Gift Coupon",
    ],
  };

  const [fees, setFees] = useState(null);

  const showMyModal = (fees) => {
    setFees(fees);
    document.getElementById("my_modal_5").showModal();
  };
  return (
    <div>
      <Helmet>
        <title>Pricing | MobileLibrary</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
      <Banner banner={membershipBanner}>Membership Plan</Banner>
      <Container>
        <div className="cyan flex flex-col md:flex-row justify-around md:max-xl:gap-3 gap-y-5 w-5/6 mx-auto my-10">
          <Plan
            basicFeatures={features.Basic}
            title={"Basic"}
            pricing={"Free"}
            color={"[#339DB3]"}
            showMyModal={showMyModal}
          ></Plan>
          <Plan
            basicFeatures={features.Standard}
            title={"Standard"}
            pricing={100}
            color={"[#3E73A7]"}
            showMyModal={showMyModal}
          ></Plan>
          <Plan
            basicFeatures={features.Premium}
            title={"Premium"}
            pricing={150}
            color={"[#F55653]"}
            showMyModal={showMyModal}
          ></Plan>
        </div>
        <p className="text-red-500 mb-10">
          * Top 20 readers/category will be eligible for gift coupon each year.
        </p>
      </Container>
      <Modal fees={fees}></Modal>
    </div>
  );
};

export default MembershipPlan;
