import React from 'react';
import { Award, Users, Star, Crown, Briefcase, Megaphone, FileText, DollarSign } from 'lucide-react';

interface LeadershipCardProps {
  name: string;
  role: string;
  description: string;
  photo: string;
  isSpecial?: boolean;
  icon?: React.ReactNode;
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({ name, role, description, photo, isSpecial, icon }) => {
  if (isSpecial) {
    return (
      <div className="group relative bg-gradient-to-br from-amber-50 via-white to-amber-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-amber-200">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-300/20 to-transparent rounded-bl-full"></div>
        <div className="relative p-8">
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-amber-400 ring-offset-4 shadow-2xl">
                <img 
                  src={photo} 
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full p-3 shadow-lg">
                {icon}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{name}</h3>
            <div className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-md">
              {role}
            </div>
            <p className="text-gray-700 text-center leading-relaxed text-base">{description}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-amber-300">
      <div className="p-6">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-gray-200 group-hover:ring-amber-400 transition-all duration-300 shadow-md">
              <img 
                src={photo} 
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {icon && (
              <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-2 shadow-md">
                {icon}
              </div>
            )}
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">{name}</h3>
          <div className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-4 py-1 rounded-full text-xs font-semibold mb-3">
            {role}
          </div>
          <p className="text-gray-600 text-center text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ConferenceLeadership = () => {
  const specialLeaders = [
    {
      name: "Dr. John Smith",
      role: "International Chair",
      description: "Renowned expert in AI and Machine Learning with over 25 years of experience. Professor at MIT and recipient of the Turing Award. Leading researcher in neural networks and deep learning architectures.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      icon: <Crown className="w-5 h-5 text-white" />
    },
    {
      name: "Dr. Emily Johnson",
      role: "Keynote Speaker",
      description: "Distinguished professor of Computer Science at Stanford University. Pioneer in quantum computing and cryptography. Author of 150+ publications and holder of 20+ patents in emerging technologies.",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      icon: <Star className="w-5 h-5 text-white" />
    }
  ];

  const otherLeaders = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Inspiration",
      description: "Visionary leader inspiring innovation and excellence in research.",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      icon: <Award className="w-4 h-4 text-white" />
    },
    {
      name: "Dr. Priya Sharma",
      role: "Chief Patron",
      description: "Guiding the conference with extensive academic leadership experience.",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      icon: <Crown className="w-4 h-4 text-white" />
    },
    {
      name: "Prof. Michael Chen",
      role: "Organizing Chair",
      description: "Leading the organizational efforts with dedication and expertise.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      icon: <Users className="w-4 h-4 text-white" />
    },
    {
      name: "Dr. Sarah Williams",
      role: "Convener",
      description: "Coordinating activities to ensure seamless conference execution.",
      photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
      icon: <Briefcase className="w-4 h-4 text-white" />
    },
    {
      name: "Prof. David Brown",
      role: "Convener",
      description: "Managing logistics and ensuring smooth conference operations.",
      photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop",
      icon: <Briefcase className="w-4 h-4 text-white" />
    },
    {
      name: "Dr. Anita Patel",
      role: "Program Chair",
      description: "Curating an exceptional technical program for all participants.",
      photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop",
      icon: <FileText className="w-4 h-4 text-white" />
    },
    {
      name: "Prof. James Wilson",
      role: "Publicity Chair",
      description: "Promoting conference visibility and reaching global audiences.",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
      icon: <Megaphone className="w-4 h-4 text-white" />
    },
    {
      name: "Dr. Lisa Anderson",
      role: "Organizing Secretary",
      description: "Maintaining records and coordinating administrative functions.",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      icon: <FileText className="w-4 h-4 text-white" />
    },
    {
      name: "Prof. Robert Taylor",
      role: "Organizing Committee",
      description: "Contributing expertise to overall conference organization.",
      photo: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop",
      icon: <Users className="w-4 h-4 text-white" />
    },
    {
      name: "Dr. Maria Garcia",
      role: "Organizing Secretary",
      description: "Ensuring efficient communication and documentation processes.",
      photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop",
      icon: <FileText className="w-4 h-4 text-white" />
    },
    {
      name: "Prof. Thomas Lee",
      role: "Treasurer",
      description: "Managing financial operations and budget allocation efficiently.",
      photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop",
      icon: <DollarSign className="w-4 h-4 text-white" />
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conference <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Leadership</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the distinguished leaders and organizers driving this conference forward
          </p>
        </div>

        {/* Special Leaders Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Distinguished Leaders</h3>
            <p className="text-gray-600">Our esteemed international chairs and keynote speakers</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {specialLeaders.map((leader, index) => (
              <LeadershipCard
                key={index}
                {...leader}
                isSpecial={true}
              />
            ))}
          </div>
        </div>

        {/* Other Leaders Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Organizing Team</h3>
            <p className="text-gray-600">Dedicated professionals ensuring conference excellence</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {otherLeaders.map((leader, index) => (
              <LeadershipCard
                key={index}
                {...leader}
                isSpecial={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceLeadership;
