import axios from "axios";
import React, { useState } from "react";

function SignUp({ setIsOpen }) {
  const [input, setInput] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const register = async (e) => {
    console.log(input);
    e.preventDefault();
    try {
      const res = await axios.post("/user", input);
      console.log(res.data);
      setIsOpen(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className=" flex justify-center items-center  ">
      <div className="p-16  rounded-2xl w-full">
        <div className="font-bold text-3xl my-8 text-gray-800 flex justify-center  ">
          Create your account
        </div>
        <form className="flex flex-col gap-4 " onSubmit={(e) => register(e)}>
          <div className="w-full border border-gray-200 rounded-md">
            <input
              type="text"
              className="  w-full p-3 bg-white outline-0  text-gray-600 text-sm rounded-md"
              placeholder="Name"
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </div>
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
          <button className=" mt-4 bg-gray-500 text-white font-medium py-3 flex justify-center rounded-3xl ">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
