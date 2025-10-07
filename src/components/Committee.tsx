import React from 'react';

const Committee = () => {
  const committeeStructure = [
    {
      title: 'Chief Patron',
      members: [
        {
          name: 'Prof. (Dr.) Shivajiraoji Kadam',
          position: 'Chancellor',
          affiliation: 'Bharati Vidyapeeth (Deemed to be University) Pune, Maharashtra (INDIA)'
        }
      ]
    },
    {
      title: 'Patron',
      members: [
        {
          name: 'Dr. Vishwajit Kadam',
          position: 'Member of Legislative Assembly Govt. of Maharashtra, Maharashtra (INDIA)',
          affiliation: 'Secretary Bharati Vidyapeeth, Pune, Maharashtra (INDIA)'
        }
      ]
    },
    {
      title: 'General Chair',
      members: [
        {
          name: 'Mr. C B Sawant',
          position: 'Regional Director, BVRO, New Delhi'
        },
        {
          name: 'Prof. Dharmender Saini',
          position: 'Principal',
          affiliation: 'Bharati Vidyapeeth\'s College of Engineering, New Delhi'
        }
      ]
    },
    {
      title: 'Conference Chairperson',
      members: [
        {
          name: 'Prof. Kirti Gupta',
          position: 'Vice Principal (academics), HoD (ECE)',
          affiliation: 'Bharati Vidyapeeth\'s College of Engineering, New Delhi'
        }
      ]
    },
    {
      title: 'Conference Convener',
      members: [
        {
          name: 'Dr. Yugnanda Puri',
          position: '(Dean R&D), ECE',
          affiliation: 'Bharati Vidyapeeth\'s College of Engineering, New Delhi'
        }
      ]
    },
    {
      title: 'Organizing Secretary',
      members: [
        {
          name: 'Dr. Manoj Sharma',
          position: 'ECE',
          affiliation: 'Bharati Vidyapeeth\'s College of Engineering, New Delhi'
        }
      ]
    },
    {
      title: 'Conference Co-Conveners',
      members: [
        {
          name: 'Dr. Saji M Antony',
          position: 'ECE',
          affiliation: 'Bharati Vidyapeeth\'s College of Engineering, New Delhi'
        },
        {
          name: 'Dr. Monica Gupta',
          position: 'ECE',
          affiliation: 'Bharati Vidyapeeth\'s College of Engineering, New Delhi'
        },
        {
          name: 'Dr. Monica Bhutani',
          position: 'ECE',
          affiliation: 'Bharati Vidyapeeth\'s College of Engineering, New Delhi'
        }
      ]
    },
    {
      title: 'Organizing Team',
      members: [
        {
          name: 'Dr. Yogita Arora',
          position: 'ECE',
          affiliation: 'Bharati Vidyapeeth\'s College of Engineering, New Delhi'
        }
      ]
    }
  ];

  return (
    <section id="committee" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 text-center">
          {committeeStructure.map((section, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-amber-600 mb-6">{section.title}</h3>
              <div className="space-y-4">
                {section.members.map((member, memberIndex) => (
                  <div key={memberIndex} className="text-gray-700">
                    <div className="font-bold text-lg text-gray-900">{member.name}</div>
                    {member.position && (
                      <div className="text-gray-600 font-medium">{member.position}</div>
                    )}
                    {member.affiliation && (
                      <div className="text-gray-600">{member.affiliation}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committee;