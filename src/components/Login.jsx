import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";

const Login = () => {

  const dispatch = useDispatch() ;

  const [IsSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm)
  }

  const name = useRef(null) ;
  const email = useRef(null) ;
  const password = useRef(null) ;

  const [ErrorMessage, setErrorMessage] = useState(null)

  const handleSubmitButton = () => {
    // validate the form data
    const result = checkValidData(email.current.value, password.current.value) ;
    setErrorMessage(result)

    if (result) return ;

    // sign in / sign up
    if (!IsSignInForm) {
        // sign up logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName} = auth.currentUser;
            dispatch(addUser({
              uid: uid, 
              email: email, 
              displayName: displayName
            }))
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error)
          });
        })
        .catch((error) => {8
          const errorCode = error.code;
          const errorMessage = error.message;
          
          setErrorMessage(errorCode + " " + errorMessage)
        });

    } else {
      // sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " " + errorMessage)
      });
    }

  }


  return (
    <div className="h-screen">

      {/* header  */}
      <Header />

      <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg')] absolute w-full h-screen bg-no-repeat brightness-50"></div>

      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 translate-y-1/3 p-7 xl:p-10 py-14 xl:py-20 bg-black bg-opacity-70 rounded-lg">

        <form onSubmit={(e)=>{e.preventDefault()}} className="flex flex-col justify-evenly items-center text-white">

          <h1 className="text-4xl font-bold py-3 w-full px-5 mb-4">{IsSignInForm ? "Sign In" : "Sign Up"}</h1>

          {!IsSignInForm && <input ref={name} type="text" placeholder="Full name" className="p-4 m-2 w-[300px] rounded-md bg-transparent border border-gray-400" />}

          <input ref={email} type="text" placeholder="Email or mobile number" className="p-4 m-2 w-[300px] rounded-md bg-transparent border border-gray-400" />

          <input ref={password} type="password" placeholder="Password" className="p-4 m-2 w-[300px] rounded-md bg-transparent border border-gray-400" />

          {ErrorMessage && <p className="w-[300px] text-sm my-2 mb-3 text-[#E52114] font-bold">{ErrorMessage}</p>}

          <button className="py-2 m-4 w-[300px] font-bold bg-[#E52114] rounded-md" onClick={handleSubmitButton}>{IsSignInForm ? "Sign In" : "Sign Up"}</button>

          <span id="forgotpass" className="cursor-pointer hover:text-[#E52114] hover:font-bold">Fogot password?</span>

          <div className="flex gap-x-2 w-full mt-5 ml-10">
            <input id="remember-check" type="checkbox" className="cursor-pointer" />
            <label htmlFor="remember-check" className="cursor-pointer">Remember me</label>
          </div>

          <p className="w-full ml-10 mt-2 cursor-pointer" onClick={toggleSignInForm}>{IsSignInForm ? "New to Netflix? Sign up now." : "Already Registered? Sign In now."}</p>

        </form>
      </div>

    </div>
  );
};

export default Login;
