import React from 'react';
import { FileText } from 'lucide-react';

const CallForPapers = () => {
  const tracks = [
    {
      title: 'Artificial Intelligence',
      topics: [
        'Machine Learning and Deep Learning',
        'Natural Language Processing',
        'Computer Vision and Image Processing',
        'Robotics and Autonomous Systems',
        'Expert Systems and Knowledge Representation',
        'Neural Networks and Fuzzy Systems',
        'AI in Healthcare and Medicine',
        'Reinforcement Learning',
        'Explainable AI and Interpretability',
        'AI Ethics and Fairness'
      ]
    },
    {
      title: 'Communication Technologies',
      topics: [
        '5G and Beyond Wireless Networks',
        'Internet of Things (IoT) Communications',
        'Satellite Communication Systems',
        'Optical Communication Networks',
        'Network Security and Privacy',
        'Software Defined Networks (SDN)',
        'Mobile Ad-hoc Networks',
        'Cognitive Radio Networks',
        'Wireless Sensor Networks',
        'Network Protocols and Standards'
      ]
    },
    {
      title: 'Electronic Systems',
      topics: [
        'VLSI Design and Testing',
        'Embedded Systems and Applications',
        'Digital Signal Processing',
        'Microprocessors and Microcontrollers',
        'Power Electronics and Systems',
        'Analog and Mixed-Signal Circuits',
        'RF and Microwave Electronics',
        'Biomedical Electronics',
        'Renewable Energy Systems',
        'Electronic Instrumentation and Control'
      ]
    }
  ];

  return (
    <section id="call-for-papers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The International Conference on Recent Advances in Artificial Intelligence, Communication and Electronic Systems (RAICE 2025) invites researchers, professionals, and academicians to contribute to the exploration of cutting-edge developments in diverse tracks encompassing Artificial Intelligence, Communication Technologies, and Electronic Systems. This conference serves as a dynamic platform to foster the exchange of ideas, drive innovation, and shape the future of technology. We welcome submissions that delve into the following tracks but are not limited to:
            </p>
          </div>
        </div>

        <div className="mb-12">
          <div className="space-y-8">
            {tracks.map((track, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <h4 className="text-xl font-bold text-amber-600 mb-6 text-center">{track.title}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {track.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;