import React, { useState } from "react";
import click from "../assets/click.png";

const Register = () => {
  const [RegisterData, setRegisterData] = useState({
    fullName:"",
    email: "",
    password: "",
  });

  const [validateError, setValidateError] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setRegisterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here, e.g., send loginData to the server
    //Validate loginData

    console.log("Register data submitted:", registerData);

    const payload = {
        fullName: RegisterData.fullName.name,
      email: RegisterData.email.toLowerCase(),
      password: RegisterData.password,
    };
  };

  return (
    <>
      <div className="h-[90vh] bg-linear-to-r from-(--secondary) to-(--primary) grid grid-cols-2 p-10 ">
        <div className="hidden md:block">
          <img src={click} alt="" className="rotate-y-180 size-2/3" />
        </div>
        <div className="w-md bg-(--background) rounded shadow p-10 flex flex-col justify-center">
          <div>Register Now!!!</div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={RegisterData.fullName}
                onChange={handleChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={RegisterData.email}
                onChange={handleChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={RegisterData.password}
                onChange={handleChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)"
              />
            </div>
            <button
              type="submit"
              className="mt-6 bg-(--primary) text-white py-2 px-4 rounded hover:bg-(--accent)"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;