import React from 'react';
import { Users, Mail, ExternalLink } from 'lucide-react';

const CallForSpecialSession = () => {
  const specialSessions = [
    {
      title: 'AI-Driven Time Series Forecasting and Decision-Making in Next-Generation Computational Systems',
      organizers: [
        'Dr. Hardeo Kumar Thakur, Associate Professor, Bennett University, Gr. Noida(INDIA)',
        'Dr. Neeraj, Assistant Professor, Bennett University, Gr. Noida(INDIA)',
        'Dr. Jagendra Singh, Associate Professor, Bennett University, Gr. Noida(INDIA)'
      ],
      emails: ['hardeokumar@gmail.com', 'Hardeo.Thakur@bennett.edu.in', 'neeraj@bennett.edu.in', 'jagendra.singh@bennett.edu.in'],
      mobile: '+ 91 – 9560794409'
    },
    {
      title: 'Machine Learning for Enhanced Network Performance and Security',
      organizers: [
        'Dr. Nitima Malsa, Assistant Professor, JSS Academy of Technical Education, Noida',
        'Mr. Vimal Gupta, Assistant Professor, JSS Academy of Technical Education, Noida',
        'Dr. Gyanendra kumar, Assistant Professor, Manipal University Jaipur, India',
        'Dr. Sur Singh Rawat, Assistant Professor, JSS Academy of Technical Education, Noida'
      ],
      emails: ['nitimamalsa@jssaten.ac.in', 'vimalgupta@jssaten.ac.in', 'maurya.gyanendra@gmail.com', 'sur.rawat@jssaten.ac.in']
    },
    {
      title: 'Advances in Deep Learning Methods for Cognitive Applications using IoT',
      organizers: [
        'Dr. Geetanjali Sharma, Assistant Professor, MSIT',
        'Dr. Sonika Malik, Assistant Professor, MSIT'
      ],
      emails: ['gsharma@msit.in', 'sonika.malik@msit.in']
    },
    {
      title: 'Next-Gen Robotics and AI in Healthcare',
      organizers: [
        'Dr. Shraddha Arora, Assistant Professor, The NorthCap University',
        'Dr. Meenakshi Malik, Assistant Professor, BML Munjal University',
        'Dr. Monika Lamba, Assistant Professor, The NorthCap University',
        'Dr. Nishu, Assistant Professor, The NorthCap University'
      ],
      emails: ['Chaudhary.shraddha18@gmail.com', 'Meenakshi.malik@bmu.edu.in', 'missmonikalamba@gmail.com', 'nishu@ncuindia.edu']
    },
    {
      title: 'Advanced Computational techniques for Global Development and Social Welfare',
      organizers: [
        'Dr. Deepika Varshney, Assistant Professor, Jaypee Institute of Information Technology, Noida',
        'Dr. Megha Rathi, Assistant Professor, Jaypee Institute of Information Technology, Noida'
      ],
      emails: ['deepika.varshney@mail.jiit.ac.in', 'deepikavarshney06@gmail.com', 'megha.rathi@mail.jiit.ac.in', 'drmegharathi.25@gmail.com']
    },
    {
      title: 'Harnessing AI, Machine Learning and Intelligent Systems for a Sustainable Future',
      organizers: [
        'Dr. Shaifali M. Arora, Associate Professor, Maharaja Surajmal Institute of Technology, New Delhi, India',
        'Dr. Poonam, Assistant Professor, Maharaja Surajmal Institute of Technology, New Delhi, India',
        'Dr. Anshul Pareek, Assistant Professor, Maharaja Surajmal Institute of Technology, New Delhi, India'
      ],
      emails: ['shaifali04@msit.in', 'poonam.dahiya@msit.in', 'er.anshulpareek@msit.in']
    },
    {
      title: 'Future of Technology with Blockchain and Machine Learning',
      organizers: [
        'Dr. Riya Sapra, Associate Professor, Amity University Haryana',
        'Dr. Sarita, Assistant Professor, Amity University Haryana',
        'Dr. Ekta Soni, Assistant Professor, Amity University Haryana',
        'Dr. Gaganjot Kaur, Associate Professor, Raj Kumar Goel Institute of Technology, Ghaziabad'
      ],
      emails: ['riasapra@gmail.com', 'sarita10103@gmail.com', 'er.ekta.soni@gmail.com', 'gaganfcs@rkgit.edu.in']
    }
  ];

  return (
    <section id="call-for-special-session" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">RAICE2025 Special Sessions</h2>
        </div>

        <div className="space-y-8 mb-12">
          {specialSessions.map((session, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-amber-600">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Session {index + 1}: {session.title}
                </h3>
                <div className="flex items-center space-x-2 mb-4">
                  <ExternalLink className="h-4 w-4 text-amber-600" />
                  <span className="text-amber-600 font-medium cursor-pointer hover:underline">(More Details)</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Users className="h-4 w-4 text-amber-600 mr-2" />
                  SESSION ORGANIZERS:
                </h4>
                <div className="space-y-2">
                  {session.organizers.map((organizer, orgIndex) => (
                    <p key={orgIndex} className="text-gray-700 ml-6">{organizer}</p>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-amber-600" />
                  <span className="text-sm font-medium text-gray-700">Emails:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {session.emails.map((email, emailIndex) => (
                    <a
                      key={emailIndex}
                      href={`mailto:${email}`}
                      className="text-sm text-amber-600 hover:text-amber-700 hover:underline"
                    >
                      {email}
                    </a>
                  ))}
                </div>
                {session.mobile && (
                  <div className="text-sm text-gray-600">
                    Mobile: {session.mobile}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Call for Special Session</h3>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            The Organizing Committee of the International Conference on "Recent Advances in Artificial Intelligence, 
            Communication and Electronic Systems" (RAICE 2025) invites the submission of proposals for Special Sessions. 
            These sessions will focus on groundbreaking topics within the realms of Artificial Intelligence, Communication, 
            and Electronic Systems, poised to have a significant impact on the future of these fields.
          </p>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-8 text-white">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 rounded-lg p-8 text-white">
          <div className="text-center mb-8">
            <h4 className="text-xl font-bold text-center">Submission Guidelines</h4>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-6">
            <p className="text-amber-100 mb-4">
              Proposals for Special Sessions should encompass the following details:
            </p>
            <div className="space-y-3 text-amber-100">
              <div>
                <strong>Title of the Proposed Special Session:</strong> Clearly define the theme and focus of the session.
              </div>
              <div>
                <strong>Description of the Proposed Session:</strong> Present an overview of the session topic in approx 100 words: 
                Elaborate on why the proposed topic is fitting for a Special Session at RAICE 2025.
              </div>
              <div>
                <strong>Contributed Papers:</strong> Expected Numbers of Papers to be submitted (min 10)
              </div>
              <div>
                <strong>Paper Submission Template:</strong> Word, PDF
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default CallForSpecialSession;