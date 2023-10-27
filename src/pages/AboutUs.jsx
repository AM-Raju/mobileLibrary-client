import React from "react";
import { Helmet } from "react-helmet-async";
import favicon from "../assets/icons/favicon.png";
import Container from "../components/shared/Container";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Us | MobileLibrary</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  mx-5 lg:max-3xl:mx-8  my-10 border border-t-0 lg:border-t lg:border-l-0 border-[#F55653]">
          {/* About Us Section */}
          <div className="lg:mr-10 lg:py-5 px-5 lg:px-0">
            <h2 className="text-4xl font-semibold mb-2">About Us</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos vero, quia saepe quam
              itaque voluptatem esse beatae deleniti reiciendis ullam porro sit, voluptatum error ex
              blanditiis eos velit officia eveniet iusto! Nobis impedit nemo ullam enim eligendi
              aperiam, dolores nam dignissimos modi, natus commodi architecto, quas officia. Minus,
              optio consequatur!
            </p>
            {/* Address */}
            <div className="mt-5">
              <h4 className="text-2xl">Address:</h4>
              <p>
                <span className="font-semibold">Street:</span> 6610 N Lamar Blvd
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +15123809199
              </p>
              <p>
                <span className="font-semibold">Email:</span> contact@mobilelibrary.com
              </p>
              <p>
                <span className="font-semibold">City:</span> Austin
              </p>
              <p>
                <span className="font-semibold">State:</span> Texas
              </p>
              <p>USA</p>
            </div>
          </div>
          {/* Contact Us form */}
          <div className="bg-[#F55653] py-10 px-5 sm:px-10 2xl:px-32">
            <form action="">
              <div>
                <label className="block mb-2" htmlFor="">
                  Name
                </label>
                <input
                  className="w-full py-2 px-5 outline-none"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <label className="block mb-2 mt-3" htmlFor="">
                  Email
                </label>
                <input
                  className="w-full py-2 px-5 outline-none"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="block mb-2 mt-3" htmlFor="">
                  Message
                </label>
                <textarea
                  className="w-full py-1 px-5 outline-none resize-none"
                  name="message"
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="w-fit mx-auto lg:mx-0">
                <input
                  className="border border-white hover:bg-white hover:border-[#F55653] text-center text-lg font-semibold text-white hover:text-[#F55653] cursor-pointer transition-all duration-500 px-8 py-1 mt-3 "
                  type="button"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
