import React from 'react';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-amber-400" />
              <span className="ml-2 text-xl font-bold">ICACS 2024</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              International Conference on Advanced Computer Science - Bringing together researchers, 
              academics, and industry professionals to explore the latest advances in computer science.
            </p>
            <div className="flex space-x-4">
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#call-for-papers" className="text-gray-300 hover:text-white transition-colors">Call for Papers</a></li>
              <li><a href="#submission" className="text-gray-300 hover:text-white transition-colors">Submission</a></li>
              <li><a href="#registration" className="text-gray-300 hover:text-white transition-colors">Registration</a></li>
              <li><a href="#important-dates" className="text-gray-300 hover:text-white transition-colors">Important Dates</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-400" />
                <span className="text-gray-300 text-sm">conference@icacs2024.org</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-amber-400 mt-1" />
                <span className="text-gray-300 text-sm">
                  Bharati Vidyapeeth College of Engineering<br />
                  Sector 7, CBD Belapur<br />
                  Navi Mumbai, Maharashtra 400614<br />
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 International Conference on Advanced Computer Science. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;