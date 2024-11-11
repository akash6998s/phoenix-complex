import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between p-6 lg:px-8 relative"
      >
        {/* Logo - positioned on the top-left */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden relative">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open user menu</span>
            <UserIcon aria-hidden="true" className="h-6 w-6" />{" "}
            {/* Profile icon here */}
          </button>

          {/* Dropdown menu for mobile devices */}
          {mobileMenuOpen && (
            <div
              ref={mobileMenuRef} // Attach the ref here
              className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md"
            >
              <Link
                to="/login"
                className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50"
              >
                Login 
              </Link>

              <Link
                to="/signup"
                className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50"
              >
                Signup
              </Link>
            </div>
          )}
        </div>

        {/* Popover menu for larger screens */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm/6 font-semibold text-gray-900">
            Home
          </Link>
          <Link to="/about" className="text-sm/6 font-semibold text-gray-900">
            About Us
          </Link>
          <Link
            to="/services"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Services
          </Link>
          <Link to="/contact" className="text-sm/6 font-semibold text-gray-900">
            Contact Us
          </Link>
        </div>

        {/* Login button - positioned on the top-right */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login" className="text-sm/6 font-semibold text-gray-900">
            Login <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}

      {/* Mobile Footer Navigation - This will be at the bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md flex justify-around items-center">
        <Link to="/" className="text-sm/6 font-semibold text-gray-900">
          Home
        </Link>
        <Link to="/about" className="text-sm/6 font-semibold text-gray-900">
          About Us
        </Link>
        <Link to="/services" className="text-sm/6 font-semibold text-gray-900">
          Services
        </Link>
        <Link to="/contact" className="text-sm/6 font-semibold text-gray-900">
          Contact Us
        </Link>
      </div>
    </header>
  );
}

export default Header;
