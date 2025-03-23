import Image from "next/image";
import { FaDesktop, FaMapMarkedAlt, FaBell } from "react-icons/fa";

export default function DemoSection() {
  const demoFeatures = [
    {
      icon: FaDesktop,
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Intuitive Data Dashboard",
      description: "Centrally displays key metrics and vehicle status, enabling managers to grasp the full picture at a glance."
    },
    {
      icon: FaMapMarkedAlt,
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600",
      title: "Real-Time Location Tracking",
      description: "High-precision GPS positioning integrated with maps for real-time monitoring of vehicle locations and travel routes."
    },
    {
      icon: FaBell,
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Smart Notification System",
      description: "Automatic alerts for abnormal events with multi-channel notifications to ensure timely issue resolution."
    }
  ];

  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 inline-block text-transparent bg-clip-text">System Demo</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore the powerful features and intuitive interface of the SAVMS system, and learn how intelligent data analysis can enhance fleet management efficiency.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-2xl mx-auto max-w-4xl mb-10 relative transition-all duration-500 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-[1.02]">
          <Image 
            src="https://i.imgur.com/DEUhGUK.png" 
            alt="SAVMS Dashboard" 
            width={900}
            height={500}
            style={{width: '100%', height: 'auto'}}
            className="w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {demoFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className={`${feature.iconBgColor} p-2 rounded-full mr-3`}>
                  <feature.icon className={feature.iconColor} />
                </div>
                <h3 className="font-bold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/Erio-Harrison/SAVMS" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg inline-block font-medium transition-colors shadow-lg"
          >
            View More Demos
          </a>
        </div>
      </div>
    </section>
  );
}