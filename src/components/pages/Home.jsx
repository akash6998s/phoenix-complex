import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Carousel settings for testimonials
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Sample FAQ content
  const faqs = [
    {
      question: "Are there any upcoming tournaments?",
      answer: "Yes! Check out our Events section for more details on upcoming tournaments, registration fees, and more.",
    },
    {
      question: "What are the membership benefits?",
      answer: "Members enjoy priority bookings, discounts on events, and access to exclusive coaching sessions.",
    },
    {
      question: "Can I book the turf for private events?",
      answer: "Absolutely! Contact us to book our turf for private matches, training sessions, or sports events.",
    },
    {
      question: "What are the operating hours?",
      answer: "We are open from 6 AM to 11 PM every day.",
    },
    {
      question: "How can I join the community?",
      answer: "Join us by signing up on our website and becoming a member of our sports community!",
    },
  ];

  return (
    <div className="bg-sport bg-cover min-h-screen py-10 px-4 sm:px-6 md:px-12 lg:px-20 text-gray-800">
      {/* Hero Section */}
      <section className="bg-opacity-75 bg-gray-800 text-white rounded-lg p-8 mb-12 text-center">
        <h1 className="text-4xl font-bold">Welcome to Phoenix Sports Turf</h1>
        <p className="mt-4 text-lg">
          Join the best sports community and experience our state-of-the-art facilities.
        </p>
      </section>

      {/* Upcoming Tournaments */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Upcoming Tournaments</h2>
        <ul>
          <li className="py-4 border-b">
            <span className="font-semibold">Summer Soccer Cup</span> - August 15-20, 2024
          </li>
          <li className="py-4 border-b">
            <span className="font-semibold">Annual Turf Cricket League</span> - October 5-12, 2024
          </li>
          <li className="py-4">
            <span className="font-semibold">Youth Basketball Championship</span> - December 10-15, 2024
          </li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">What Our Players Say</h2>
        <Slider {...testimonialSettings}>
          {[
            "The facilities here are amazing! I've never felt more motivated to play – Alex P.",
            "Fantastic place! My skills have improved significantly thanks to the coaching staff – Jamie R.",
            "A true sports community. I’ve made friends and improved my fitness – Taylor S.",
          ].map((testimonial, index) => (
            <div key={index} className="mx-auto max-w-6xl">
              <blockquote className="italic text-lg text-gray-700 text-center">{testimonial}</blockquote>
            </div>
          ))}
        </Slider>
      </section>

      {/* FAQ Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Frequently Asked Questions</h2>
        <div className="divide-y">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion py-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full text-left font-semibold text-gray-800 hover:text-blue-600"
              >
                <span>{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 14l-8-8h16z" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-96" : "max-h-0"}`}>
                <p className="text-gray-600 text-sm mt-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
