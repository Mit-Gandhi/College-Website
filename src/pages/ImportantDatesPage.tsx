import React from 'react';
import ImportantDates from '../components/ImportantDates';
import PageHeader from '../components/PageHeader';

const ImportantDatesPage = () => {
  return (
    <div>
      <PageHeader />
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Important Dates
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mark your calendar with these key deadlines
          </p>
        </div>
      </div>
      <ImportantDates />
    </div>
  );
};

export default ImportantDatesPage;