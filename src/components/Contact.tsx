import React from 'react';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600">conference@icacs2024.org</p>
                <p className="text-gray-600">info@icacs2024.org</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-gray-600">
                  Bharati Vidyapeeth College of Engineering<br />
                  Sector 7, CBD Belapur<br />
                  Navi Mumbai, Maharashtra 400614<br />
                  India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <ExternalLink className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Official Website</h3>
                <a 
                  href="https://bvcoenm.edu.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-700 hover:underline"
                >
                  https://bvcoenm.edu.in/
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <h3 className="text-xl font-bold mb-6 p-6 pb-0">Location</h3>
            <div className="h-96">
              <iframe
                src="https://maps.google.com/maps?q=19.026111,73.055278&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bharati Vidyapeeth College of Engineering, Navi Mumbai Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;