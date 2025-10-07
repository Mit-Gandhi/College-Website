import React from 'react';
import { Clock } from 'lucide-react';

const ImportantDates = () => {
  const dates = [
    { event: 'Paper Submission Deadline', date: 'January 15, 2026', status: 'upcoming' },
    { event: 'Notification of Acceptance', date: 'March 20, 2026', status: 'upcoming' },
    { event: 'Camera-Ready Submission', date: 'April 15, 2026', status: 'upcoming' },
    { event: 'Conference Dates', date: 'May 15-17, 2026', status: 'main' }
  ];

  return (
    <section id="important-dates" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {dates.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row justify-between items-center p-6 rounded-lg shadow-md ${
                  item.status === 'main' 
                    ? 'bg-amber-600 text-white' 
                    : 'bg-gray-50 hover:bg-gray-100'
                } transition-colors duration-200`}
              >
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <Clock className={`h-6 w-6 ${item.status === 'main' ? 'text-amber-200' : 'text-amber-600'}`} />
                  <h3 className={`text-lg font-semibold ${item.status === 'main' ? 'text-white' : 'text-gray-900'}`}>
                    {item.event}
                  </h3>
                </div>
                <div className={`text-lg font-medium ${item.status === 'main' ? 'text-amber-100' : 'text-amber-600'}`}>
                  {item.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;