import { 
    FaChartLine, 
    FaBatteryThreeQuarters, 
    FaRoute, 
    FaShieldAlt, 
    FaTools, 
    FaTachometerAlt 
  } from "react-icons/fa";
  import FeatureCard from "./FeatureCard";
  
  export default function FeaturesSection() {
    const features = [
      {
        icon: FaChartLine,
        iconBgColor: "bg-blue-100",
        iconColor: "text-blue-600",
        title: "AI-Driven Anomaly Detection",
        description: "Real-time monitoring of vehicle status using deep learning algorithms to predict potential issues, advancing fault warnings by 30%.",
        features: [
          "Multi-dimensional anomaly detection",
          "Dynamic adaptive threshold adjustment",
          "Intelligent fault root cause analysis"
        ]
      },
      {
        icon: FaBatteryThreeQuarters,
        iconBgColor: "bg-green-100",
        iconColor: "text-green-600",
        title: "Battery Health Management",
        description: "Precisely monitor battery health, optimize charging and discharging strategies, extend battery lifespan, and reduce replacement costs.",
        features: [
          "Personalized charging strategy optimization",
          "Battery health predictive analysis",
          "Temperature management and heat dissipation control"
        ]
      },
      {
        icon: FaRoute,
        iconBgColor: "bg-purple-100",
        iconColor: "text-purple-600",
        title: "Intelligent Route Optimization",
        description: "Smart route planning based on real-time traffic, weather, and vehicle status to reduce energy consumption and improve operational efficiency.",
        features: [
          "Multi-factor path planning algorithm",
          "Real-time traffic condition adaptation",
          "Energy efficiency optimization"
        ]
      },
      {
        icon: FaShieldAlt,
        iconBgColor: "bg-yellow-100",
        iconColor: "text-yellow-600",
        title: "Safety Protection System",
        description: "Multi-layered safety monitoring and anomaly behavior detection to identify potential risks in real-time, ensuring vehicle and data security.",
        features: [
          "Abnormal access behavior monitoring",
          "Real-time security threat protection",
          "Multi-layer authentication system"
        ]
      },
      {
        icon: FaTools,
        iconBgColor: "bg-red-100",
        iconColor: "text-red-600",
        title: "Predictive Maintenance",
        description: "Leverage machine learning to analyze historical data, predict equipment failure timing, enable proactive maintenance, and reduce downtime.",
        features: [
          "Fault probability predictive analysis",
          "Optimized maintenance scheduling",
          "Automated maintenance recommendations"
        ]
      },
      {
        icon: FaTachometerAlt,
        iconBgColor: "bg-indigo-100",
        iconColor: "text-indigo-600",
        title: "Digital Twin Visualization",
        description: "Create a digital twin model of the vehicle, displaying real-time vehicle status and key metrics for intuitive data visualization.",
        features: [
          "3D vehicle status visualization",
          "Component health monitoring",
          "Historical data trend analysis"
        ]
      }
    ];
  
    return (
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 inline-block text-transparent bg-clip-text">Core Features</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              SAVMS provides a comprehensive intelligent vehicle management solution, from data collection to predictive analytics, making your fleet management more efficient and smart.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                iconBgColor={feature.iconBgColor}
                iconColor={feature.iconColor}
                title={feature.title}
                description={feature.description}
                features={feature.features}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }