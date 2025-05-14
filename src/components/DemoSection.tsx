import {FaMapMarkedAlt, FaSignInAlt, FaCarAlt, FaTasks, FaPython, FaDatabase } from "react-icons/fa";

export default function DemoSection() {
  const demoFeatures = [
    {
      icon: FaSignInAlt,
      iconBgColor: "bg-teal-100",
      iconColor: "text-teal-600",
      title: "Login & Registration with JWT",
      description: "Secure authentication system with JWT tokens. Backend interceptor validates tokens for protected API calls without persistent storage."
    },
    {
      icon: FaMapMarkedAlt,
      iconBgColor: "bg-teal-100",
      iconColor: "text-teal-600",
      title: "Detouring Detection",
      description: "SimpleDetourDetector that uses DeepSeek to determine if a driver is detouring from the intended route by analyzing source, destination and current position."
    },
    {
      icon: FaCarAlt,
      iconBgColor: "bg-teal-100",
      iconColor: "text-teal-600",
      title: "Vehicle Tracking & Navigation",
      description: "Display current vehicles on map with interactive features. Retrieve vehicle information by dragging or zooming the map and perform routing with destination input."
    },
    {
      icon: FaTasks,
      iconBgColor: "bg-teal-100",
      iconColor: "text-teal-600",
      title: "Task and Order Management",
      description: "Manage vehicle orders and create new orders through an intuitive interface with map visualization for task locations."
    },
    {
      icon: FaPython,
      iconBgColor: "bg-teal-100",
      iconColor: "text-teal-600",
      title: "Real-Time Python Simulator",
      description: "Python simulator running on Flask server provides live data through endpoint: http://localhost:5000/latest-data with MongoDB integration."
    },
    {
      icon: FaDatabase,
      iconBgColor: "bg-teal-100",
      iconColor: "text-teal-600",
      title: "Vehicle Management Frontend",
      description: "Complete management interface showing popover windows, vehicle lists, and add vehicle functionality with MongoDB collection schema."
    }
  ];
  
  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <a 
            href="https://docs.google.com/presentation/d/19DF5FjfnmZIG2Z2Ec05oYX7oqYhfQQu7/edit?slide=id.p1#slide=id.p1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 inline-block text-transparent bg-clip-text">System Demo (Click here to see more)</h2>
          </a>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore the powerful features and intuitive interface of the SCUVMS system, and learn how intelligent data analysis can enhance fleet management efficiency.
          </p>
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
      </div>
    </section>
  );
}