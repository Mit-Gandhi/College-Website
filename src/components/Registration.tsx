import React from 'react';
import { Users, GraduationCap, Building, Globe, UserCheck, CreditCard } from 'lucide-react';

const Registration = () => {
  const registrationData = [
    {
      category: 'Industry',
      amount: 'INR 10,000',
      icon: Building
    },
    {
      category: 'Academia (Scholars & Faculty)',
      amount: 'INR 8,000',
      icon: GraduationCap
    },
    {
      category: 'Foreign Authors',
      amount: 'USD 350',
      icon: Globe
    },
    {
      category: 'Attendee',
      amount: 'INR 2,000',
      icon: UserCheck
    }
  ];

  return (
    <section id="registration" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">RAICE2025 Registration Details</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-amber-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Category</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Registration Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {registrationData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-5 w-5 text-amber-600" />
                        <span className="text-gray-900 font-medium">{item.category}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-semibold">{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">MODE OF PAYMENT</h3>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-amber-600 text-white px-6 py-4">
              <h4 className="text-xl font-semibold flex items-center">
                <CreditCard className="h-6 w-6 mr-2" />
                Online Payment through NEFT/RTGS
              </h4>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Details</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">For Delegates</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">Name</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Bharati Vidyapeeth College of Engineering, New Delhi</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">A/C Number</td>
                      <td className="px-4 py-3 text-sm text-gray-700">31976258020</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">IFSC Code/MICR Code</td>
                      <td className="px-4 py-3 text-sm text-gray-700">SBIN0006623</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">Bank Name</td>
                      <td className="px-4 py-3 text-sm text-gray-700">State Bank of India</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">Bank Branch Address</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Jawala Heri, Paschim Vihar, New Delhi</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">Address</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Delhi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;