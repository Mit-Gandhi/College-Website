import React from 'react';
import { FileText } from 'lucide-react';

const CallForPapers = () => {
  const departments = [
    {
      title: 'MECHANICAL ENGINEERING',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'from-blue-50 to-white',
      subThemes: [
        {
          name: 'Design, Manufacturing, and Production',
          topics: [
            'Advanced Manufacturing and Automation',
            'Computer-Aided Design and Manufacturing (CAD/CAM/CAE)',
            'Additive Manufacturing & 3D Printing',
            'Industrial Engineering and Production Systems',
            'Smart and Sustainable Manufacturing'
          ]
        },
        {
          name: 'Thermal and Fluid Sciences',
          topics: [
            'Heat Transfer and Thermodynamics',
            'Renewable and Non-renewable Energy Systems',
            'Fluid Mechanics and Fluid Power Systems',
            'Computational Fluid Dynamics (CFD)',
            'HVAC and Refrigeration Technologies'
          ]
        },
        {
          name: 'Materials and Metallurgy',
          topics: [
            'Advanced Materials and Composites',
            'Nanomaterials and Smart Materials',
            'Surface Engineering and Coatings',
            'Corrosion, Fatigue, and Failure Analysis',
            'Materials Characterization and Testing'
          ]
        },
        {
          name: 'Robotics, Automation, and Mechatronics',
          topics: [
            'Robotics and Autonomous Systems',
            'Control Systems and Artificial Intelligence in Manufacturing',
            'Mechatronic Design and Applications',
            'Industrial Automation and IoT in Mechanical Systems'
          ]
        },
        {
          name: 'Automotive and Aerospace Engineering',
          topics: [
            'Vehicle Dynamics and Control',
            'Electric, Hybrid, and Autonomous Vehicles',
            'Aerospace Materials and Propulsion Systems',
            'Aerodynamics and Flight Mechanics'
          ]
        },
        {
          name: 'Energy, Environment, and Sustainability',
          topics: [
            'Renewable Energy Technologies (Solar, Wind, Bioenergy)',
            'Energy Management and Conservation',
            'Green Manufacturing and Sustainable Design',
            'Environmental Pollution Control and Climate Impact'
          ]
        },
        {
          name: 'Dynamics, Vibration, and Acoustics',
          topics: [
            'Structural Dynamics and Vibrations',
            'Noise and Acoustics Engineering',
            'Rotor Dynamics and Condition Monitoring',
            'Finite Element Analysis and Simulation'
          ]
        },
        {
          name: 'Industrial and Applied Mechanics',
          topics: [
            'Structural Analysis and Optimization',
            'Applied Mechanics and Tribology',
            'Machine Design and Condition Monitoring',
            'Maintenance Engineering and Reliability'
          ]
        },
        {
          name: 'Emerging Technologies',
          topics: [
            'Smart Materials and MEMS',
            'Artificial Intelligence and Machine Learning in Mechanical Systems',
            'Digital Twins and Industry 4.0',
            'Human–Robot Collaboration'
          ]
        }
      ]
    },
    {
      title: 'COMPUTER ENGINEERING',
      color: 'from-purple-500 to-purple-700',
      bgColor: 'from-purple-50 to-white',
      subThemes: [
        {
          name: 'Artificial Intelligence and Machine Learning',
          topics: [
            'Deep Learning and Neural Networks',
            'Natural Language Processing (NLP)',
            'Computer Vision and Image Processing',
            'AI in Healthcare, Education, and Industry',
            'Explainable and Responsible AI'
          ]
        },
        {
          name: 'Data Science and Big Data Analytics',
          topics: [
            'Data Mining and Knowledge Discovery',
            'Predictive Analytics and Business Intelligence',
            'Cloud-based Data Management',
            'Data Visualization Techniques',
            'Edge and Stream Data Analytics'
          ]
        },
        {
          name: 'Cybersecurity and Privacy',
          topics: [
            'Network Security and Cryptography',
            'Cyber Threat Intelligence',
            'Blockchain for Security',
            'IoT Security',
            'Digital Forensics and Risk Management'
          ]
        },
        {
          name: 'Internet of Things (IoT) and Embedded Systems',
          topics: [
            'Smart Cities and Smart Devices',
            'Sensor Networks',
            'Industrial IoT (IIoT)',
            'Edge and Fog Computing',
            'IoT Applications in Agriculture, Healthcare, and Automation'
          ]
        },
        {
          name: 'Cloud Computing and Virtualization',
          topics: [
            'Cloud Infrastructure and Services',
            'Serverless Computing',
            'Cloud Security',
            'Green and Sustainable Cloud Computing',
            'Hybrid and Multi-cloud Architecture'
          ]
        },
        {
          name: 'Software Engineering and Applications',
          topics: [
            'Agile Development and DevOps',
            'Software Testing and Quality Assurance',
            'Human–Computer Interaction',
            'Software Metrics and Project Management',
            'AI-Assisted Software Development'
          ]
        },
        {
          name: 'Networking and Communication Technologies',
          topics: [
            '5G/6G Networks',
            'Wireless and Mobile Networks',
            'Optical and Ad Hoc Networks',
            'Network Simulation and Optimization',
            'Software Defined Networks (SDN)'
          ]
        },
        {
          name: 'Computational Intelligence and Optimization',
          topics: [
            'Swarm Intelligence and Evolutionary Algorithms',
            'Fuzzy Systems',
            'Genetic Algorithms and Optimization Techniques',
            'Hybrid Intelligent Systems'
          ]
        },
        {
          name: 'Emerging Technologies',
          topics: [
            'Quantum Computing',
            'Blockchain and Web 3.0',
            'Augmented, Virtual, and Mixed Reality (AR/VR/MR)',
            'Metaverse Applications',
            'Edge and Neuromorphic Computing'
          ]
        },
        {
          name: 'Information Systems and Applications',
          topics: [
            'E-Governance and Smart Infrastructure',
            'Knowledge Management Systems',
            'IT in Education, Healthcare, and Finance',
            'ERP and Cloud-based Enterprise Systems'
          ]
        }
      ]
    },
    {
      title: 'CHEMICAL ENGINEERING',
      color: 'from-green-500 to-green-700',
      bgColor: 'from-green-50 to-white',
      subThemes: [
        {
          name: 'Advances in Chemical Process Engineering',
          topics: [
            'Process design, modeling, and optimization',
            'Process intensification and simulation'
          ]
        },
        {
          name: 'Sustainable and Green Chemical Technologies',
          topics: [
            'Renewable energy and biofuels',
            'Waste minimization and circular economy',
            'Environmental and sustainable process engineering'
          ]
        },
        {
          name: 'Energy and Environmental Engineering',
          topics: [
            'Carbon capture and storage',
            'Energy-efficient process systems',
            'Pollution control and treatment technologies'
          ]
        },
        {
          name: 'Nanotechnology and Material Engineering',
          topics: [
            'Nanomaterials synthesis and applications',
            'Functional and smart materials',
            'Catalysis and advanced materials'
          ]
        },
        {
          name: 'Biochemical and Bioprocess Engineering',
          topics: [
            'Industrial biotechnology and fermentation technology',
            'Bioseparation processes',
            'Bioreactor design and optimization'
          ]
        },
        {
          name: 'Polymer Science and Engineering',
          topics: [
            'Polymer synthesis, characterization, and applications',
            'Smart and biodegradable polymers',
            'Composite materials'
          ]
        },
        {
          name: 'Computational Chemical Engineering',
          topics: [
            'Process modeling and simulation',
            'Computational fluid dynamics (CFD)',
            'Artificial intelligence and machine learning in chemical processes'
          ]
        },
        {
          name: 'Thermodynamics and Reaction Engineering',
          topics: [
            'Kinetics and catalysis',
            'Reaction modeling and design',
            'Thermophysical properties of materials'
          ]
        },
        {
          name: 'Food, Pharma, and Chemical Product Engineering',
          topics: [
            'Food process technology',
            'Pharmaceutical process engineering',
            'Product formulation and design'
          ]
        },
        {
          name: 'Industrial Safety and Process Control',
          topics: [
            'Process monitoring and automation',
            'Safety, risk, and hazard analysis',
            'Industrial process control systems'
          ]
        }
      ]
    },
    {
      title: 'ELECTRONICS ENGINEERING',
      color: 'from-amber-500 to-amber-700',
      bgColor: 'from-amber-50 to-white',
      subThemes: [
        {
          name: 'Analog and Digital Electronics',
          topics: [
            'VLSI design, embedded systems, microcontrollers, and FPGA technologies',
            'Power electronics, signal processing, and IoT-based electronic systems'
          ]
        },
        {
          name: 'Instrumentation and Measurement Systems',
          topics: [
            'Sensors and transducers for industrial, biomedical, and environmental applications',
            'Measurement techniques, precision instrumentation, and calibration methodologies'
          ]
        },
        {
          name: 'Control Systems and Automation',
          topics: [
            'Industrial automation, robotics, and process control',
            'Smart instrumentation for Industry 4.0 applications'
          ]
        },
        {
          name: 'Communication and Signal Processing',
          topics: [
            'Wireless, optical, and IoT communication technologies',
            'Digital signal processing, image processing, and data acquisition systems'
          ]
        },
        {
          name: 'Emerging Trends and Technologies',
          topics: [
            'Artificial intelligence in instrumentation and electronics',
            'Wearable electronics, smart devices, and cyber-physical systems'
          ]
        },
        {
          name: 'Applications in Industry & Research',
          topics: [
            'Instrumentation in chemical, mechanical, and electrical systems',
            'Innovative electronic solutions for healthcare, agriculture, and energy sectors'
          ]
        }
      ]
    }
  ];

  return (
    <section id="call-for-papers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Conference on Emerging Technologies and Recent Advancements in Engineering and Technology invites researchers, professionals, and academicians to contribute to the exploration of cutting-edge developments across multiple engineering disciplines. This conference serves as a dynamic platform to foster the exchange of ideas, drive innovation, and shape the future of technology. We welcome submissions that delve into the following tracks but are not limited to:
            </p>
          </div>
        </div>

        <div className="mb-12">
          <div className="space-y-12">
            {departments.map((department, deptIndex) => (
              <div key={deptIndex} className={`bg-gradient-to-br ${department.bgColor} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border-2 border-gray-200`}>
                {/* Department Header */}
                <div className="mb-8 text-center">
                  <h3 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${department.color} text-transparent bg-clip-text mb-3`}>
                    {department.title}
                  </h3>
                  <div className={`w-32 h-1 bg-gradient-to-r ${department.color} mx-auto rounded-full`}></div>
                </div>

                {/* Sub-themes Grid */}
                <div className="space-y-6">
                  {department.subThemes.map((subTheme, subIndex) => (
                    <div key={subIndex} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${department.color} mr-3`}></span>
                        {subTheme.name}
                      </h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 ml-5">
                        {subTheme.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1.5">•</span>
                            <span className="text-gray-700 text-sm leading-relaxed">{topic}</span>
                          </div>
                        ))}
                      </div>
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