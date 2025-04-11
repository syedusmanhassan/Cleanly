import React from 'react'

const UpperFooter =()=> {
  return (
    <footer className="w-full py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-[#FF7846] font-poppins">Services</h3>
            <nav className="flex flex-col space-y-3 font-poppins">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Home Cleaning
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Window Cleaning
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Toilet Cleaning
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Room Cleaning
              </a>
            </nav>
          </div>

          {/* Information Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-[#FF7846] font-poppins">Information</h3>
            <nav className="flex flex-col space-y-3 font-poppins">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Our Features
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Sign Up
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Join Community
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Newsletter
              </a>
            </nav>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-[#FF7846] font-poppins">Company</h3>
            <nav className="flex flex-col space-y-3 font-poppins">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Partnership
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Social Media
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                About Company
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Terms & Use
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </nav>
          </div>

          {/* About Us Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-[#FF7846] font-poppins">About Us</h3>
            <p className="text-gray-700 font-poppins">
              Lorem ipsum dolor sit amet, consectetur dipiscing elit eius mod tempor incididunt
            </p>
            <div className="space-y-2 pt-2">
              <p className="text-gray-700 font-poppins">(021) 098 734 332</p>
              <p className="text-gray-700 font-poppins">hello@cleany.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default UpperFooter;
