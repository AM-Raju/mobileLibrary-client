import React, { useContext, useState } from "react";
import Container from "../components/shared/Container";
import Logo from "../components/shared/Logo";
import SocialIcon from "../components/shared/SocialIcon";
import { useForm } from "react-hook-form";
import googleLogo from "../assets/icons/google.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import SocialLogin from "../components/shared/SocialLogin";
import { toast } from "react-hot-toast";

const Login = () => {
  const { user, loading, setLoading, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login data", data);
    const { email, password } = data;

    login(email, password)
      .then((result) => {
        console.log("Logged User", result.user);
        toast.success("Login Successful");
        reset();
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
        reset();
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
          <h3 className="text-5xl text-center mb-10">Login</h3>
          <form
            className="flex flex-col gap-4 w-full items-start"
            onSubmit={handleSubmit(onSubmit)}
          >
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
                className="block hover:bg-[#F55653] border hover:border-[#F55653] text-xl text-white px-7 py-2 w-full"
                type="submit"
              >
                Login
              </button>
              <p className="text-sm">
                Not registered yet?{" "}
                <Link className="text-yellow-500" to="/signup">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
          {/* Social Login */}
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </Container>
  );
};

export default Login;
