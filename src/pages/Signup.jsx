import React from "react";
import Container from "../components/shared/Container";
import Logo from "../components/shared/Logo";
import SocialIcon from "../components/shared/SocialIcon";
import { useForm } from "react-hook-form";
import googleLogo from "../assets/icons/google.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <div className="flex w-2/3 mx-auto h-auto my-20">
        {/* SignUP intro */}
        <div className="w-1/2  p-16 bg-[#339DB3] flex items-center">
          <div className="h-fit my-auto">
            <Logo></Logo>
            <p className="mb-7 mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia consectetur nam
              porro modi aperiam magnam perspiciatis. Obcaecati nesciunt, consequuntur.
            </p>
            <SocialIcon></SocialIcon>
          </div>
        </div>

        {/* SignUp Form */}
        <div className="p-10 w-1/2 bg-[#3E73A7] text-white">
          <h3 className="text-5xl text-center mb-10">Sign Up</h3>
          <form
            className="flex flex-col gap-4 w-full items-start"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full">
              <label htmlFor="">Name</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                {...register("name")}
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="">User Photo</label>
              <input className="mt-1 block" {...register("image")} type="file" />
            </div>
            <div className="w-full">
              <label htmlFor="">Email</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                {...register("email")}
                type="email"
                placeholder="Email Here"
              />
            </div>
            <div className="w-full">
              <label htmlFor="">Password</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                {...register("password")}
                type="password"
                placeholder="Password Here"
              />
            </div>

            <div className="w-full">
              <button
                className="block hover:bg-red-500 border hover:border-red-500 text-xl text-white px-7 py-2 w-full"
                type="submit"
              >
                Sign Up
              </button>
              <p className="text-sm">
                Already a member? Please{" "}
                <Link className="text-yellow-500" to="/login">
                  login
                </Link>
              </p>
            </div>
          </form>
          {/* Social Login */}
          <div className="relative mt-3">
            <img className="absolute w-12 bg-white h-[46px] p-1" src={googleLogo} alt="" />
            <button className="border w-full py-2 text-xl hover:bg-blue-500 hover:border-blue-500">
              Google Login
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
