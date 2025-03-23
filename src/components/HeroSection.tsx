import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] pt-32 pb-20 relative overflow-hidden">
      {/* Decorative dots background */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[length:25px_25px] opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Intelligent Autonomous<br/>Vehicle Management System
            </h1>
            <p className="text-blue-100 text-xl mt-6 max-w-lg">
              SAVMS is a next-generation intelligent vehicle management platform that integrates data collection, fault prediction, energy optimization, and safety management, making your fleet management smarter, safer, and more efficient.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="#demo" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium text-lg transition-colors shadow-lg text-center"
              >
                Demo
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="animate-[float_4s_ease-in-out_infinite]">
              <svg width="500" height="400" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Map base */}
                <rect x="50" y="50" width="400" height="300" rx="8" fill="#1e3a8a" opacity="0.6" />
                
                {/* Route path with animation */}
                <path 
                  d="M100,250 Q150,100 250,150 T400,100" 
                  stroke="#4f46e5" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeDasharray="10"
                  className="animate-[dash_20s_linear_infinite]"
                />
                
                {/* Vehicle marker */}
                <circle cx="250" cy="150" r="8" fill="#38bdf8" />
                <circle cx="250" cy="150" r="16" fill="#38bdf8" opacity="0.3">
                  <animate attributeName="r" values="16;24;16" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
                
                {/* Charging station marker */}
                <rect x="380" y="80" width="20" height="20" rx="4" fill="#a3e635" />
                <circle cx="390" cy="90" r="16" fill="#a3e635" opacity="0.3">
                  <animate attributeName="r" values="16;24;16" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
                
                {/* Warning marker */}
                <circle cx="130" cy="220" r="8" fill="#ef4444" />
                <circle cx="130" cy="220" r="16" fill="#ef4444" opacity="0.3">
                  <animate attributeName="r" values="16;24;16" dur="1s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="1s" repeatCount="indefinite" />
                </circle>
                
                {/* Data indicators */}
                <rect x="320" y="200" width="120" height="60" rx="8" fill="white" opacity="0.1" />
                <text x="330" y="225" fill="white" fontSize="12">Vehicle Status: Normal</text>
                <text x="330" y="245" fill="white" fontSize="12">Battery Level: 78%</text>
                
                <rect x="80" y="100" width="120" height="60" rx="8" fill="white" opacity="0.1" />
                <text x="90" y="125" fill="white" fontSize="12">Speed: 65 km/h</text>
                <text x="90" y="145" fill="white" fontSize="12">Temperature: 27.5°C</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,80C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}