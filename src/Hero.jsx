
import { Play } from "lucide-react"
import Women from "./picture/women.png"

export default function CleaningServiceHero() {
  return (
    <div className="lg:min-h-screen min-h-12 ipad-pro:min-h-10 bg-[rgba(244,246,251,1)]">
      
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-24 md:px-10 md:py-24 ipad-pro:pt-[3rem]">
          <div className="flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100">
              <svg className="h-4 w-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm font-medium uppercase tracking-wider text-cyan-500 font-poppins">Established since 2000</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl text-left ipad-pro:text-[2.75rem] "> 
            A New Solutions For
            <br />
            Your Home Cleaning
          </h1>

          <p className="mt-4 max-w-md text-gray-500 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>

          <div className="mt-8 flex space-x-4">
            <a
              href="/order"
              className="rounded-full bg-[rgba(255,186,24,1)] px-8 py-3 font-medium text-gray-900 hover:bg-yellow-500 flex items-center ipad-pro:w-[165px] ipad-pro:h-[48px]"
            >
              Order Now
            </a>
            <a href="/demo" className="flex items-center space-x-2 rounded-full px-6 py-3 hover:bg-gray-100 ipad-pro:h-[50px]">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                <Play className="h-4 w-4 text-cyan-500" />
              </div>
              <span className="text-gray-700">Watch Demo</span>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex-1 hidden lg:block">
          <div className="h-[630px] w-[630px] bg-[rgba(128,193,239,1)] rounded-bl-[30%] lg:ml-[120px] lg:-mt-[72px] ipad-pro:w-[600px] ipad-pro:h-[580px]">
            <div className="absolute bottom-0 right-0 h-full w-full  overflow-hidden ">
              <div className="absolute bottom-0 right-0 h-[90%] w-[90%] overflow-hidden  ">
                <img
                  src={Women}
                  alt="Cleaning professional with gloves"
                  className="absolute bottom-0 right-0 h-full w-full object-contain ipad-pro:w-[50%] ipad-pro:right-[193px] ipad-pro:bottom-[32px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
