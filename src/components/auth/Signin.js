import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Signin({ setIsOpen }) {
  const router = useRouter();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();
    console.log("hello", input);
    try {
      const res = await signIn("credentials", {
        email: input.email,
        password: input.password,
        redirect: false,
      });
      setIsOpen(false);
      console.log(res, "reddd");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex justify-center items-center  ">
      <div className="p-16  rounded-2xl w-full">
        <div className="font-bold text-3xl my-8 text-gray-800 flex justify-center  ">
          Create your account
        </div>
        <form className="flex flex-col gap-4 " onSubmit={(e) => login(e)}>
          <div className="w-full border border-gray-200 rounded-md">
            <input
              type="email"
              className="w-full p-3 bg-white outline-0 border-0 text-gray-600 text-sm rounded-md"
              placeholder="Email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="w-full border border-gray-200 rounded-md">
            <input
              type="password"
              className="w-full p-3 bg-white outline-0 border-0 text-gray-600 text-sm rounded-md"
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button
            type="submit"
            className=" mt-4 bg-gray-500 text-white font-medium py-3 flex justify-center rounded-3xl "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
