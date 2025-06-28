// import React from "react";

// const Hero = () => {
//   return (
//     <section
//       className="h-screen flex items-center justify-center text-white relative bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url(https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?auto=format&fit=crop&w=1400&q=80)",
//       }}
//     >
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
//       <div className="relative z-10 text-center max-w-2xl px-4">
//         <h2 className="text-5xl font-bold mb-4 drop-shadow-xl">
//           Empowering Innovation with AI
//         </h2>
//         <p className="text-lg text-gray-200 mb-6">
//           We deliver next-gen digital solutions for startups & enterprises.
//         </p>
//         <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition">
//           Get Started
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";

const Hero = () => {
  return (
    <section
      className="pt-24 relative h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?auto=format&fit=crop&w=1400&q=80')"
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative text-center max-w-3xl px-4">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Independent Software Testing <br /> Company with <span className="text-orange-500">AI Precision</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-8">
          Your trusted partner for comprehensive software testing, leveraging advanced AI technologies to ensure quality, efficiency, and seamless user experiences.
        </p>
        <button className="px-8 py-3 bg-transparent border-2 border-orange-500 text-white font-medium rounded-full hover:bg-orange-500 hover:border-orange-500 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
