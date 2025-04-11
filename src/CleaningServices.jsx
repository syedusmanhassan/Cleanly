import React from "react";

import { Check } from "lucide-react";
import WomenVacuum from "./picture/WomenVacuum.png";
import WomenSpray from "./picture/Womenspray.png";
import WomenClean from "./picture/WomenClean.png";

const CleaningServices = () => {
  return (
    <div className="container mx-auto px-4 lg:px-40 py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        {/* Left side - Image collage */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative h-[400px] md:h-[450px]  rounded-lg overflow-hidden">
            {/* Main image (vacuum cleaner) */}
            <img
              src={WomenVacuum}
              alt="Cleaning professional using vacuum cleaner"
              width={400}
              height={450}
              className="object-contain w-full h-full rounded-lg lg:ml-8"
            />
          </div>

          {/* Top left image - positioned outside container */}
          <div className="absolute -top-14 w-36 h-36 md:w-40 md:h-40 rounded-lg overflow-hidden border-4 border-white shadow-md z-50 bg-white lg:top-12 lg:left-[45px] -left-2 ipad-pro:-left-14 ">
            <img
              src={WomenSpray}
              alt="Cleaning professional with spray bottle"
              width={160}
              height={160}
              className="object-cover w-full h-full "
            />
          </div>

          {/* Bottom right image - positioned outside container */}
          <div className="absolute -bottom-9 -right-1 w-32 h-32 md:w-36 md:h-36 rounded-lg overflow-hidden border-4 border-white shadow-md z-50 bg-white lg:bottom-12 lg:-right-0 ipad-pro:-right-[50px]">
            <img
              src={WomenClean}
              alt="Cleaning professional with yellow gloves"
              width={144}
              height={144}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl ipad-pro:text-2xl font-bold text-gray-900 mb-4 text-left">
            We Are Very Experienced
            <br />
            In Cleaning Services
          </h2>

          <p className="text-gray-600 mb-8 text-left">
            Lorem ipsum dolor sit amet, consectetur dipiscing elit eius mod tempor incididunt ut labore
          </p>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center">
                <Check className="h-4 w-4 text-cyan-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 text-left">We are Committed</h3>
                <p className="text-gray-600 text-left">
                  Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod tempor incididunt
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center">
                <Check className="h-4 w-4 text-cyan-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 text-left">Trusted Professionals</h3>
                <p className="text-gray-600 text-left">
                  Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod tempor incididunt
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center">
                <Check className="h-4 w-4 text-cyan-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 text-left">Highly Rated Cleaning</h3>
                <p className="text-gray-600 text-left">
                  Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod tempor incididunt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningServices;