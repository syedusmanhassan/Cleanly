import React from "react";
import Jessica from "./picture/Jessica.png";
import Sonya from "./picture/Sonya.png";
import Sob from "./picture/Sob.png";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Jessica Brown",
      role: "Home Cleaner",
      image: Jessica,
    },
    {
      name: "Sonya Angela",
      role: "Window Cleaner",
      image: Sonya,
    },
    {
      name: "Sabrina Teo",
      role: "Toilet Cleaner",
      image: Sob,
    },
    {
      name: "Megan Blatt",
      role: "Window Cleaner",
      image: Jessica,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 md:mb-0 font-poppins">Our Best Team Ever</h2>
        <div className="max-w-md">
          <p className="text-gray-600 mb-2 text-left font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
          </p>
          <a href="#" className="text-blue-500 font-medium hover:underline flex font-poppins">
            Meet Our Professional Team
          </a>
        </div>
      </div>

      {/* Decorative dots pattern */}
      <div className="relative">
        <div className="absolute -top-8 left-16 w-24 h-24 opacity-10">
          <div className="grid grid-cols-5 gap-1">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-black lg:ml-48 lg:-top-12"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm w-full max-w-[260px] mx-auto">
            <div className="relative h-96 w-full">
              <img 
                src={member.image || "/placeholder.svg"} 
                alt={member.name} 
                className="object-contain w-full h-full"
              />
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;