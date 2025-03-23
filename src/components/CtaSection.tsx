import { FaGithub } from "react-icons/fa";

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1e40af] to-[#3b82f6]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Get Started with SAVMS to Enhance Your Fleet Management</h2>
        <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
          Join the SAVMS open-source community to explore the latest intelligent vehicle management technologies and collaborate with developers to unlock more possibilities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="https://github.com/Erio-Harrison/SAVMS" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium text-lg transition-colors shadow-lg flex items-center justify-center"
          >
            <FaGithub className="mr-2" />
            Visit GitHub
          </a>
          <a 
            href="#contact" 
            className="bg-transparent text-white border border-white hover:bg-white hover:bg-opacity-10 px-8 py-4 rounded-lg font-medium text-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}