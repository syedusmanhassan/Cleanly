import React from 'react'

const Pricing = () => {
    return (
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-700 mb-6 md:mb-0 max-w-md font-poppins">
            Choose Your Best Service Package
          </h1>
          <div className="max-w-sm">
            <h2 className="text-2xl font-semibold text-orange-500 mb-2 text-left font-poppins">Pricing List</h2>
            <p className="text-slate-600 text-left font-poppins">Have many related needs, we present a suitable package for you needs</p>
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Regular Package */}
          <div className="rounded-lg p-8 bg-blue-100 transition-all duration-300 hover:scale-105 hover:bg-[rgba(202,232,253,1)] shadow-md hover:shadow-lg">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-blue-500 text-left font-poppins">
                $99<span className="text-lg font-normal text-slate-600">/Services</span>
              </h3>
              <h4 className="text-xl font-semibold text-slate-700 mt-4 text-left font-poppins">Regular</h4>
              <p className="text-slate-600 mt-2 text-left font-poppins">Everything you need for your business identity</p>
            </div>
  
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-slate-600 font-poppins">2 Bedrooms Cleaning</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 font-poppins"></div>
                <span className="text-slate-600 font-poppins">Steam Service</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-slate-600 font-poppins">Window Cleaning</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-slate-600 font-poppins">1 Livingroom Cleaning</span>
              </li>
            </ul>
  
            <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-medium py-2 px-6 rounded-full transition-colors">
              Choose Package
            </button>
          </div>
  
          {/* Deluxe Package */}
          <div className="rounded-lg p-8 bg-gray-50 border border-gray-100 transition-all duration-300 hover:scale-105 hover:bg-[rgba(202,232,253,1)] shadow-md hover:shadow-lg">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-blue-500 text-left font-poppins">
                $199<span className="text-lg font-normal text-slate-600">/Services</span>
              </h3>
              <h4 className="text-xl font-semibold text-slate-700 mt-4 text-left font-poppins">Deluxe</h4>
              <p className="text-slate-600 mt-2 text-left font-poppins">Everything you need for your business identity</p>
            </div>
  
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-slate-600 font-poppins">2 Bedrooms Cleaning</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-slate-600 font-poppins">Steam Service</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-slate-600 font-poppins">Window Cleaning</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-slate-600 font-poppins">2 Livingroom Cleaning</span>
              </li>
            </ul>
          </div>
  
          {/* Superior Package */}
          <div className="rounded-lg p-8 bg-gray-50 border border-gray-100 transition-all duration-300 hover:scale-105 hover:bg-[rgba(202,232,253,1)] shadow-md hover:shadow-lg">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-blue-500 text-left font-poppins">
                $299<span className="text-lg font-normal text-slate-600">/Services</span>
              </h3>
              <h4 className="text-xl font-semibold text-slate-700 mt-4 text-left font-poppins">Superior</h4>
              <p className="text-slate-600 mt-2 text-left font-poppins">Everything you need for your business identity</p>
            </div>
  
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-slate-600 font-poppins">2 Bedrooms Cleaning</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-slate-600 font-poppins">Steam Service</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-slate-600 font-poppins">Window Cleaning</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-slate-600 font-poppins">3 Livingroom Cleaning</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Pricing;