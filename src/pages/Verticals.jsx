import React from "react";
import { Link } from "react-router-dom";

const Verticals = () => {
  const verticals = [
    {
      title: "Information Technology",
      desc: "We deliver cutting-edge digital solutions to IT firms, helping them innovate faster and scale efficiently.",
      icon: "💻",
    },
    {
      title: "Education",
      desc: "Empowering schools, colleges, and ed-tech platforms with smart learning tools and digital platforms.",
      icon: "📚",
    },
    {
      title: "Healthcare",
      desc: "Providing reliable and secure digital tools to hospitals and health-tech companies to enhance patient care.",
      icon: "🏥",
    },
    {
      title: "Retail & E-Commerce",
      desc: "Creating seamless shopping experiences and scalable e-commerce platforms to grow online businesses.",
      icon: "🛒",
    },
    {
      title: "Finance & Banking",
      desc: "We build secure, fast, and intelligent financial applications tailored for banks, fintechs, and NBFCs.",
      icon: "💰",
    },
    {
      title: "Logistics & Supply Chain",
      desc: "Enabling better coordination, tracking, and management with smart logistics software solutions.",
      icon: "🚚",
    },
  ];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 md:px-16 bg-white text-gray-800">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-orange-500 mb-4">
        Industries We Serve
      </h1>
      <p className="text-center max-w-3xl mx-auto text-gray-600 text-base sm:text-lg mb-12">
        At <strong>MTBYOWN</strong>, we provide tailored digital solutions across various sectors to help businesses thrive in the modern era.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {verticals.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 rounded-xl p-6 text-center shadow hover:shadow-lg transition duration-300"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-orange-600 mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Looking for a Custom Solution?</h2>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          Let’s discuss your unique business needs and how we can help.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Verticals;
