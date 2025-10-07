import React from 'react';
import Registration from '../components/Registration';
import { Calendar, MapPin } from 'lucide-react';

const RegistrationPage = () => {
  return (
    <div>
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: 'url("/image.png")', backgroundPosition: 'center center' }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
            International Conference on
            <span className="block text-amber-300">Advanced Computer Science</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto drop-shadow-md">
            Join leading researchers, academics, and industry professionals in exploring the latest advances in computer science and technology.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-amber-300" />
              <span className="text-lg text-white drop-shadow-md">May 15-17, 2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-amber-300" />
              <span className="text-lg text-white drop-shadow-md">Bharati Vidyapeeth College of Engineering, Navi Mumbai</span>
            </div>
          </div>
        </div>
      </section>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Registration
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose your registration category and secure your spot
          </p>
        </div>
      </div>
      <Registration />
    </div>
  );
};

export default RegistrationPage;
