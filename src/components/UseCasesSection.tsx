import { FaTruck, FaTaxi, FaIndustry, FaCheckCircle } from "react-icons/fa";

export default function UseCasesSection() {
  const useCases = [
    {
      icon: FaTruck,
      bgColor: "bg-blue-600",
      title: "Logistics Delivery Fleet",
      description: "Optimize delivery routes, increase vehicle utilization, reduce operational costs, and improve delivery efficiency and safety.",
      benefits: [
        { text: "Reduce operational costs by 25%" },
        { text: "Increase delivery efficiency by 30%" }
      ]
    },
    {
      icon: FaTaxi,
      bgColor: "bg-green-600",
      title: "Autonomous Taxis",
      description: "Enhance vehicle availability, optimize charging schedules, ensure passenger safety, and improve user experience.",
      benefits: [
        { text: "Increase vehicle availability by 35%" },
        { text: "Reduce response time by 40%" }
      ]
    },
    {
      icon: FaIndustry,
      bgColor: "bg-purple-600",
      title: "Industrial Park Fleet",
      description: "Enable unified AGV management in the park, optimize material transportation, improve production efficiency, and reduce safety risks.",
      benefits: [
        { text: "Increase production efficiency by 22%" },
        { text: "Reduce maintenance costs by 18%" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 inline-block text-transparent bg-clip-text">Industry Use Cases</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            SAVMS is suitable for various autonomous vehicle management scenarios, providing tailored solutions for different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className={`h-48 ${useCase.bgColor} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <useCase.icon className="text-white text-5xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">
                  {useCase.description}
                </p>
                {useCase.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-500 mt-1">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    {benefit.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}