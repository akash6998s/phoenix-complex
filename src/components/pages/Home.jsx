import React, { useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Testimonials carousel settings
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const faqs = [
    {
      question: "Are there any special discounts or promotions available during the event?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia. Proin aliquam turpis at erat venenatis malesuada.",
    },
    {
      question: "What are the dates and locations for the product launch events?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia.",
    },
    {
      question: "Can I bring a guest with me to the product launch event?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia.",
    },
    {
      question: "How can I register for the event?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia.",
    },
    {
      question: "Is there parking available at the venue?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia.",
    },
    {
      question: "How can I contact the event organizers?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Testimonials Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-12 mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          What Our Players Say
        </h2>
        <Slider {...testimonialSettings}>
          {[
            "Absolutely amazing facility! The pitch is top-notch, and the coaching sessions have helped improve my game significantly. – John D.",
            "Great atmosphere, and the floodlights make evening matches so much more enjoyable. Highly recommend! – Sarah L.",
            "The coaching staff is very professional, and I've seen a huge improvement in my skills. – Mike T."
          ].map((testimonial, index) => (
            <div key={index} className="mx-auto max-w-6xl">
              <blockquote className="italic text-lg text-gray-700 text-center">
                {testimonial}
              </blockquote>
            </div>
          ))}
        </Slider>
      </section>

      {/* FAQ Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-12 mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Frequently Asked Questions
        </h2>
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
                  className={`w-4 h-4 transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                    }`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 14l-8-8h16z" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-96" : "max-h-0"
                  }`}
              >
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
