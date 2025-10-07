import React from 'react';
import Contact from '../components/Contact';
import PageHeader from '../components/PageHeader';

const ContactPage = () => {
  return (
    <div>
      <PageHeader />
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with our organizing committee
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;