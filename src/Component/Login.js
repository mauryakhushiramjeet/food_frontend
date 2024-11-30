import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { backendUrl } from "../App.js";
import { useDispatch } from "react-redux";
import { setLoninTrue } from "../Utill/LoginSlice.js";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); // Default to SignUp mode
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = {
    email,
    password,
    name,
  };
  const loginData = {
    email,
    password,
  };

  const handleSubmit = async (e) => {
    // console.log(backendUrl,"hgjh")
    e.preventDefault();
    console.log("button clicked");
    try {
      if (isSignUp) {
        const response = await fetch(backendUrl + "/api/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const json = await response.json();

        console.log(json);
        setMessage(json);
        if (json.success) {
          setIsSignUp(false);
        }
      } else {
        const response = await fetch(backendUrl + "/api/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        });
        const json = await response.json();
        console.log(json);

        setMessage(json);
        if (json.success) {
                    navigate("/body");

          dispatch(setLoninTrue());

          // toast.success(json.message);
        }
      }
    } catch (error) {
      console.log(error);
      // toast.error(error.message);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full sm:w-[95%] md:w-[80%] lg:w-[40%] max-w-md">
        <h2 className="text-3xl font-semibold text-center text-[#0d7c66] mb-6">
          {isSignUp ? "Sign Up" : "Log In"}
        </h2>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full p-2 text-sm sm:text-base md:text-sm border rounded-lg text-black focus:outline-none focus:border-blue-500"
              />
              <p className="p-2 text-red-700 md:text-sm">
                {message.messagefiled}
              </p>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full p-2 text-sm sm:text-base md:text-sm border rounded-lg text-black focus:outline-none focus:border-blue-500"
            />
            <p className="p-2 text-red-700 md:text-sm">
              {message.messageEmail}
            </p>
            {/* {console.log(message)} */}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full p-2 text-sm sm:text-base md:text-sm border rounded-lg text-black focus:outline-none focus:border-blue-500"
            />
            <p className="p-2 text-red-700 md:text-sm">
              {message.messagePassword}
            </p>
            {console.log(message.messagePassword)}
          </div>
          <button
            type="submit"
            className="w-full bg-[#0d7c66] text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
          <p className="mt-4 text-center text-sm">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-500 cursor-pointer underline"
            >
              {isSignUp ? "Log In" : "Sign Up"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
