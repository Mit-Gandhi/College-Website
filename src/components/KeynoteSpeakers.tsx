import React from 'react';
import { User, Building } from 'lucide-react';

const KeynoteSpeakers = () => {
  const speakers = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Professor of Computer Science',
      institution: 'MIT',
      expertise: 'Artificial Intelligence & Machine Learning',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Prof. Michael Chen',
      title: 'Director of AI Research',
      institution: 'Stanford University',
      expertise: 'Deep Learning & Neural Networks',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Chief Technology Officer',
      institution: 'Google Research',
      expertise: 'Quantum Computing & Cryptography',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="keynote-speakers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <User className="h-4 w-4 text-gray-500" />
                  <p className="text-gray-600">{speaker.title}</p>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <Building className="h-4 w-4 text-gray-500" />
                  <p className="text-gray-600">{speaker.institution}</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-amber-800">{speaker.expertise}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeynoteSpeakers;