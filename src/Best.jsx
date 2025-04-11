import React from "react";
import { Home, Star, Trash2, Send } from "lucide-react";

const Best = () => {
  return (
    <div className="bg-[rgba(244,246,251,1)]  py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-5xl font-bold text-black text-left font-poppins">
              Always Provide The <br /> Best Service
            </h2>
          </div>
          <div>
            <h3 className="text-xl font-medium text-[rgba(254,116,67,1)] mb-2 text-left font-poppins">Our Services</h3>
            <p className="text-gray-600 text-left font-poppins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard icon={<Home className="w-8 h-8 text-blue-500" />} title="House Cleaning" />
          <ServiceCard icon={<Star className="w-8 h-8 text-blue-300" />} title="Office Cleaning" />
          <ServiceCard icon={<Trash2 className="w-8 h-8 text-blue-500" />} title="Toilet Cleaning" />
          <ServiceCard icon={<Send className="w-8 h-8 text-blue-300" />} title="Window Cleaning" />
        </div>
      </div>
    </div>
  );
};

function ServiceCard({ icon, title }) {
  return (
    <div className="bg-[rgba(244,246,251,1)] p-8 rounded-md  hover:shadow-lg transition-shadow">
      <div className="mb-4 flex  justify-center">{icon}</div>
      <h3 className="text-lg font-medium text-gray-900 mb-3 text-left font-poppins">{title}</h3>
      <p className="text-gray-600 text-sm text-left font-poppins ">Make your product more eye-catching with a touch of illustration</p>
    </div>
  );
}

export default Best;