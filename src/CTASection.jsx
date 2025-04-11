import React from 'react';
// import Decor from "./picture/decor.png";

const CTASection = () => {
  return (
    <div className="relative overflow-hidden bg-white py-16">
      {/* Background image */}
      <div className="absolute inset-0 z-0 bg-[url('./picture/decor.png')] bg-cover bg-center  bg-no-repeat opacity-100">
        {/* Optional overlay if needed */}
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl text-left font-poppins">
            Are You Ready To Work With Us Now?
          </h2>
          <p className="mt-4 text-gray-600 text-left font-poppins">
            What do you think after seeing the good response from our previous customers
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              className="rounded-full bg-amber-400 px-8 py-3 font-semibold text-gray-800 shadow-md hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
            >
              Order Now
            </button>
            <button
              className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-3 font-semibold text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-400 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-3 w-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;