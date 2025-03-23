import Link from "next/link";
import { 
  FaTwitter, 
  FaLinkedinIn, 
  FaFacebookF, 
  FaYoutube,
  FaPaperPlane
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-xl font-bold text-white">SAVMS</span>
            </div>
            <p className="text-gray-400 mb-6">
              A next-generation intelligent autonomous vehicle management system, making your fleet management smarter, safer, and more efficient.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#technology" className="text-gray-400 hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="#demo" className="text-gray-400 hover:text-white transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Technical Support</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://github.com/Erio-Harrison/SAVMS/wiki" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition  transition-colors">
                  Documentation Center
                </a>
              </li>
              <li>
                <a href="https://github.com/Erio-Harrison/SAVMS/blob/main/API.md" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="https://github.com/Erio-Harrison/SAVMS/issues" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="https://github.com/Erio-Harrison/SAVMS/discussions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Developer Community
                </a>
              </li>
              <li>
                <a href="https://github.com/Erio-Harrison/SAVMS/releases" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Version Updates
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Subscribe to Updates</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive the latest product updates and technical insights.
            </p>
            <form className="flex">
              <input type="email" placeholder="Your email address" className="w-full px-4 py-2 rounded-l-md text-gray-900 focus:outline-none" />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors">
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {currentYear} SAVMS. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}