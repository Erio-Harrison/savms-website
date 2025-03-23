"use client";

import { useState } from "react";
import { 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaPaperPlane
} from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null as string | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    try {
      // In a real application, you would send this data to your server
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", formData);
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isSubmitted: false }));
      }, 5000);
      
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: "Submission failed, please try again later." 
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 inline-block text-transparent bg-clip-text">Contact Us</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have any questions or collaboration interests? Please reach out to us through the following methods, and we’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">u7541840@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Address</h4>
                    <p className="text-gray-600">123 Smart Transportation Avenue, Innovation Tech Park</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <FaGithub className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">GitHub</h4>
                    <p className="text-gray-600">
                      <a 
                        href="https://github.com/Erio-Harrison/SAVMS" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        github.com/Erio-Harrison/SAVMS
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-medium text-gray-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">Name</label>
                  <input 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    id="name" 
                    type="text" 
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <input 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    id="email" 
                    type="email" 
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="subject">Subject</label>
                  <input 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    id="subject" 
                    type="text" 
                    placeholder="Message Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">Message</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    id="message" 
                    rows={4} 
                    placeholder="Please enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex justify-center items-center" 
                  type="submit"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? "Sending..." : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
                {formStatus.isSubmitted && (
                  <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                    Message sent successfully, we will reply to you as soon as possible.
                  </div>
                )}
                {formStatus.error && (
                  <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                    {formStatus.error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}