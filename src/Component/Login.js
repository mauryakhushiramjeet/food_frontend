import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignUp, setIsSignUp] = useState(true); // Default to SignUp mode

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log("SignUp Data:", { name, email, password });
      // Call signup API here
    } else {
      console.log("Login Data:", { email, password });
      // Call login API here
    }
  };

  return (
    <div className="w-[100vw] h-[80vh] flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm">
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
                className="w-full p-2 border rounded-lg text-black focus:outline-none focus:border-blue-500"
              />
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
              className="w-full p-2 border rounded-lg text-black focus:outline-none focus:border-blue-500"
            />
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
              className="w-full p-2 border rounded-lg text-black focus:outline-none focus:border-blue-500"
            />
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
