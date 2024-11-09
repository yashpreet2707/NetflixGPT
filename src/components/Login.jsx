import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [IsSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm)
  }


  return (
    <div className="h-screen">
      
      <Header />

      <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg')] absolute w-full h-screen bg-no-repeat brightness-50"></div>

      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 translate-y-1/3 p-10 py-20 bg-black bg-opacity-70 rounded-lg">
        <form className="flex flex-col justify-evenly items-center text-white">
          <h1 className="text-4xl font-bold py-3 w-full px-5 mb-4">{IsSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!IsSignInForm && <input type="text" placeholder="Name" className="p-4 m-2 w-[300px] rounded-md bg-transparent border border-gray-400" />}
          <input type="text" placeholder="Email or mobile number" className="p-4 m-2 w-[300px] rounded-md bg-transparent border border-gray-400" />
          <input type="password" placeholder="Password" className="p-4 m-2 w-[300px] rounded-md bg-transparent border border-gray-400" />
          <button className="py-2 m-4 w-[300px] font-bold bg-[#E52114] rounded-md">{IsSignInForm ? "Sign In" : "Sign Up"}</button>
          <span className="cursor-pointer">Fogot password?</span>
          <div className="flex gap-x-2 w-full mt-5 ml-10">
            <input type="checkbox" />
            <label htmlFor="">Remember me</label>
          </div>
          <p className="w-full ml-10 mt-2 cursor-pointer" onClick={toggleSignInForm}>{IsSignInForm ? "Already Registered? Sign In now." : "New to Netflix? Sign up now."}</p>
        </form>
      </div>

    </div>
  );
};

export default Login;
