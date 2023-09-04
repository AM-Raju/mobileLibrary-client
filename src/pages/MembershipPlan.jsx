import React from "react";
import Banner from "../components/shared/Banner";
import membershipBanner from "../assets/banner/membershipBanner.jpg";
import Container from "../components/shared/Container";

import Plan from "./Plan";

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
  return (
    <div>
      <Banner banner={membershipBanner}>Membership Plan</Banner>
      <Container>
        <div className="cyan flex justify-around w-5/6 mx-auto my-10">
          <Plan
            basicFeatures={features.Basic}
            title={"Basic"}
            pricing={"Free"}
            color={"[#339DB3]"}
          ></Plan>
          <Plan
            basicFeatures={features.Standard}
            title={"Standard"}
            pricing={"$100/Year"}
            color={"[#3E73A7]"}
          ></Plan>
          <Plan
            basicFeatures={features.Premium}
            title={"Premium"}
            pricing={"$150/Year"}
            color={"[#F55653]"}
          ></Plan>
        </div>
        <p className="text-red-500 mb-10">
          * Top 20 readers/category will be eligible for gift coupon each year.
        </p>
      </Container>
    </div>
  );
};

export default MembershipPlan;
