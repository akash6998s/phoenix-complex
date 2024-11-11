import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="mb-6">
      {/* Profile Section */}
      <section className="mx-auto flex items-center justify-between p-6 max-w-md">
        <div className="flex items-center gap-6">
          <img
            src=""
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-blue-500 object-cover"
          />
          <div className="flex flex-col">
            <h6 className="text-2xl font-semibold text-gray-800">
              Akash Singh
            </h6>
            <p className="text-sm text-gray-600">
              9315729158{" "}
              <span className="text-green-500 ml-2 cursor-pointer hover:underline">
                Change
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="px-4">
        {/* Personal Details Section */}
        <section className="mx-auto p-4 bg-white rounded-lg shadow-lg px-4 my-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Personal Details
            </h3>
            <button className="text-blue-500 font-medium hover:underline cursor-pointer">
              Edit
            </button>
          </div>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-4">
              <i className="fas fa-envelope w-6 h-6 text-blue-500"></i>
              <span className="font-medium">Email:</span>
              <p>akash6998s@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-birthday-cake w-6 h-6 text-blue-500"></i>
              <span className="font-medium">Date of Birth:</span>
              <p>dd-mm-yyyy</p>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-venus-mars w-6 h-6 text-blue-500"></i>
              <span className="font-medium">Gender:</span>
              <p>Male/Female</p>
            </div>
          </div>
        </section>

        {/* Booked Events Section */}
        <section className="mx-auto p-4 bg-white rounded-lg shadow-lg px-4 my-2 hover:cursor-pointer hover:font-semibold  transition duration-300">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Booked Events
              </h3>
              <p className="text-gray-600">
                View your booked events and venues
              </p>
            </div>
            <button className="text-blue-500 font-medium hover:underline cursor-pointer">
              <i className="fas fa-calendar-alt w-6 h-6 text-blue-500"></i>
            </button>
          </div>
        </section>

        {/* Saved Payment Methods Section */}
        <section className="mx-auto p-4 bg-white rounded-lg shadow-lg px-4 my-2 hover:cursor-pointer hover:font-semibold  transition duration-300">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Saved Payment Methods
              </h3>
              <p className="text-gray-600">View your saved payment methods</p>
            </div>
            <button className="text-blue-500 font-medium hover:underline cursor-pointer">
              <i className="fas fa-credit-card w-6 h-6 text-blue-500"></i>
            </button>
          </div>
        </section>

        {/* Logout Section */}
        <section className="bg-white rounded-lg shadow-lg max-w-lg mx-auto mt-4">
          <div className="flex justify-center">
            <Link to="/login" className="text-center w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200">
              Logout
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;
