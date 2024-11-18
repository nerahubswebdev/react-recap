// src/LoginForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //axios with credentials
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("invalid login details");
      return;
    }

    // the login starts here
    axios
      .post("https://cohort3-backend.onrender.com/auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log("the login response => ", response);
        setEmail("");
        setPassword("");
        navigate("/profile/hdhdhdhdhdhd");
      })
      .catch((error) => {
        if (error instanceof axios.AxiosError) {
          console.log("the login error from axios => ", error?.response?.data);
        } else {
          console.log("login error => ", error);
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl border border-red-400">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="shadow-md shadow-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="shadow-md shadow-blue-500 appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
    // <div>
    //   <h2>Login</h2>
    //   <div>
    //     <div>
    //       <label for="email">Email</label>
    //       <input
    //         type="email"
    //         id="email"
    //         placeholder="you@example.com"
    //         required
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label for="password">Password</label>
    //       <input
    //         type="password"
    //         id="password"
    //         placeholder="********"
    //         required
    //         max={7}
    //         value={password}
    //         onChange={(event) => setPassword(event.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <button onClick={handleSubmit}>Login</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LoginForm;
