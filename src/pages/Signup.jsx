import React, { useContext, useState } from "react";
import Container from "../components/shared/Container";
import Logo from "../components/shared/Logo";
import SocialIcon from "../components/shared/SocialIcon";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import SocialLogin from "../components/shared/SocialLogin";

const Signup = () => {
  const { createUser, loading, setLoading } = useContext(AuthContext);
  /* States */
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Signup page", data);
    const { email, password } = data;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Registration Successful");
        reset();
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        reset();
        setLoading(false);
      });
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
              {/* Name block */}
              <label htmlFor="">Name</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                {...register("name")}
                type="text"
                placeholder="Name"
              />
            </div>
            {/* Image block */}
            {/* <div>
              <label htmlFor="">User Photo</label>
              <input className="mt-1 block" {...register("image")} type="file" />
            </div> */}
            {/* Email block */}
            <div className="w-full">
              <label htmlFor="">Email</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                {...register("email")}
                type="email"
                placeholder="Email Here"
              />
            </div>
            {/* Password block */}
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
          <SocialLogin></SocialLogin>
          <p className="text-green-500 text-sm">{success}</p>
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
