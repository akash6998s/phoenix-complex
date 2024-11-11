import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 w-full flex flex-col items-center justify-center border-t">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24">
        <p className="font-normal text-sm text-center sm:text-left">
          &copy; 2023 Phoenix Sports. All Rights Reserved.
        </p>
        <ul className="flex flex-wrap items-center gap-4 mt-4 sm:mt-0">
          <li>
            <Link
              to="/"
              className="font-normal text-sm transition-colors hover:text-blue-400 focus:text-blue-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="font-normal text-sm transition-colors hover:text-blue-400 focus:text-blue-400"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="font-normal text-sm transition-colors hover:text-blue-400 focus:text-blue-400"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-normal text-sm transition-colors hover:text-blue-400 focus:text-blue-400"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-4 text-sm text-center text-gray-400">
        Designed with 💙 by Phoenix Sports Team
      </div>
    </footer>
  );
}

export default Footer;
