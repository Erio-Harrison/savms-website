import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  iconBgColor: string;
  iconColor: string;
  title: string;
  description: string;
  features: string[];
}

export default function FeatureCard({ 
  icon: Icon, 
  iconBgColor, 
  iconColor, 
  title, 
  description, 
  features 
}: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className={`${iconBgColor} rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
        <Icon className={`${iconColor} text-2xl transition-transform duration-300 group-hover:scale-110`} />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-4">
        {description}
      </p>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}