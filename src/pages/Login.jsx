/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import api from "../utils/api";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", { email, password });
      login(res.data.token);
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  const handleSignUpClick = (e) => {
    e.preventDefault();
    alert(
      "Sign Up feature is coming soon! For now, use test credentials:\nEmail: user1@example.com\nPassword: password123",
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen items-center justify-center bg-lightBg px-4"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-100"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">
          Login to Arittro
        </h2>

        {error && (
          <p className="text-red-600 bg-red-50 p-3 rounded mb-6 text-center font-medium">
            {error}
          </p>
        )}

        <div className="mb-5">
          <label className="block text-left text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-left text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-[#1d734c] bg-black hover:bg-green-500 text-black font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
        >
          Login
        </button>

        {/* Sign Up section */}
        <div className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={handleSignUpClick}
            className="text-primary font-semibold hover:underline transition"
          >
            Sign Up
          </button>
        </div>

        {/*Forgot password link */}
        <div className="mt-2 text-center">
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-primary transition"
          >
            Forgot password?
          </a>
        </div>
      </form>
    </motion.div>
  );
};

export default Login;
