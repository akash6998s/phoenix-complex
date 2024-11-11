import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="font-sans bg-gray-100">
      <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-12">
        <div className="grid lg:grid-cols-2 items-center gap-8 max-w-6xl w-full">
          {/* Form Section */}
          <form
            className="w-full max-w-md bg-white shadow-xl rounded-lg p-8"
            onSubmit={handleSubmit}
          >
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Login</h3>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm mb-2">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm mb-2">
                Password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                Login
              </button>
            </div>

            {/* Signup Link */}
            <p className="text-sm text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign up here
              </Link>
            </p>
          </form>

          {/* Image Section */}
          <div className="hidden lg:block h-full">
            <img
              src="https://readymadeui.com/login-image.webp"
              alt="Login Illustration"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
