import React from "react";

const Contact = () => {
  return (
    <div className="my-16 p-4 sm:px-8 md:px-16 lg:px-32 bg-white font-[sans-serif]">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-screen-xl mx-auto">
        {/* Left Section: Contact Info */}
        <div>
          <h1 className="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
          <p className="text-sm text-gray-500 mt-4 max-w-md">
            Have a big idea or brand to develop? Reach out—we'd love to hear
            about your project and offer our help.
          </p>

          {/* Email */}
          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                  </svg>
                </div>
                <a
                  href="mailto:info@example.com"
                  className="text-[#007bff] text-sm ml-4"
                >
                  <small className="block">Mail</small>
                  <strong>info@example.com</strong>
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Socials</h2>
            <ul className="flex mt-4 space-x-4">
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z" />
                  </svg>
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 511 512"
                  >
                    <path d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0" />
                  </svg>
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.2 0 3.6.012 4.8.07 1.3.065 2.3.425 3.1 1.4.8.8 1.4 1.8 1.4 3.1.058 1.2.07 1.6.07 4.8 0 3.2-.012 3.6-.07 4.8-.065 1.3-.425 2.3-1.4 3.1-.8.8-1.8 1.4-3.1 1.4-1.2.058-1.6.07-4.8.07-3.2 0-3.6-.012-4.8-.07-1.3-.065-2.3-.425-3.1-1.4-.8-.8-1.4-1.8-1.4-3.1-.058-1.2-.07-1.6-.07-4.8 0-3.2.012-3.6.07-4.8.065-1.3.425-2.3 1.4-3.1.8-.8 1.8-1.4 3.1-1.4 1.2-.058 1.6-.07 4.8-.07zM12 0C8.7 0 8.1.012 7.3.07 5.9.137 4.9.537 4.1 1.4 3.3 2.2 2.9 3.2 2.9 4.6c-.058 1.2-.07 1.6-.07 4.8s.012 3.6.07 4.8c.065 1.3.425 2.3 1.4 3.1.8.8 1.8 1.4 3.1 1.4 1.2.058 1.6.07 4.8.07 3.2 0 3.6-.012 4.8-.07 1.3-.065 2.3-.425 3.1-1.4.8-.8 1.4-1.8 1.4-3.1.058-1.2.07-1.6.07-4.8s-.012-3.6-.07-4.8c-.065-1.3-.425-2.3-1.4-3.1-.8-.8-1.8-1.4-3.1-1.4-1.2-.058-1.6-.07-4.8-.07zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 10.6c-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.4 2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4zM17.2 4.5c.7 0 1.3-.6 1.3-1.3 0-.7-.6-1.3-1.3-1.3-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3z" />
                  </svg>
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.2 19.2c7.4 0 11.5-6.1 11.5-11.5 0-.175 0-.349-.012-.523a8.212 8.212 0 0 0 2-2.1 8.29 8.29 0 0 1-2.4.7A4.116 4.116 0 0 0 22 3.4a8.33 8.33 0 0 1-2.6.9A4.1 4.1 0 0 0 16.9.7a4.09 4.09 0 0 0-4.1 4.1c0 .32.04.633.11.932a11.51 11.51 0 0 1-8.4-4.3 4.086 4.086 0 0 0-.56 2.1c0 1.5.8 2.8 2 3.6a4.09 4.09 0 0 1-1.9-.5c-.1 1.8 1.3 3.5 3.2 3.8a4.11 4.11 0 0 1-1.9.1c.5 1.6 2 2.7 3.7 2.8a8.267 8.267 0 0 1-5.1 1.8c-.33 0-.66-.02-.98-.06 1.82 1.2 4.0 1.9 6.3 1.9" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div>
          <form>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-600"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-2 p-3 border border-[#e6e6e6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-2 p-3 border border-[#e6e6e6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-600"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full mt-2 p-3 border border-[#e6e6e6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#007bff] text-white rounded-md hover:bg-[#0069d9] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
