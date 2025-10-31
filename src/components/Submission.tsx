import React from 'react';
import { FileCheck, Send, CheckCircle } from 'lucide-react';

const Submission = () => {
  return (
    <section id="submission" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Paper Submission Guidelines:</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              Original, unpublished research papers, articles, and working papers are invited for presentation and publication in the proceedings of the International Conference on "Recent Advances in Artificial Intelligence, Communication and Electronic Systems (RAICE 2025)."
            </p>
            <p className="font-semibold">Please adhere to the following guidelines for paper submission:</p>
            <ul className="space-y-2 ml-6">
              <li>• All papers must be submitted online via the Microsoft CMT Submission Portal. (Paper submission: link)</li>
              <li>• Each submission will undergo a DOUBLE-BLINDED peer-review process. Authors are instructed not to mention the name & affiliation in the manuscript anywhere while submitting the paper.</li>
              <li>• The authors are advised to select only one (i.e. the most suitable) Primary area/track and any two Secondary (most close) track mentioned in Microsoft CMT.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Publication Opportunities:</h3>
          <div className="space-y-6 text-gray-700">
            <p>Selected and presented papers will be published in</p>
            
            <div>
              <h4 className="font-semibold text-lg mb-2">SCIE– Johnson Matthey Technology Review (JMTR):</h4>
              <p>The best papers selected in the Conference by the Conference Reviewers will be recommended to the SCIE journal. The journal withholds the final acceptance based upon its peer review process.</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">ESCI– Journal of Information and Optimization Sciences (JIOS):</h4>
              <p>The best papers selected in the Conference by the Conference Reviewers will be recommended to the ESCI journal. These papers would be selected for publication after the peer review process by JIOS Journal.</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Scopus- Upcoming……….</h4>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Publication in UGC Indexed ICTACT Journals – International Publications of ICT Academy:</h4>
              <p className="mb-3">The best papers selected in the Conference by the Conference Judges/Reviewers will be recommended for possible publication in the respective scopes of ICTACT Journals. These papers would be selected for publication after the peer review process by ICT Academy. ICT Academy currently publishes four International Journals:</p>
              <ul className="ml-6 space-y-1">
                <li>• ICTACT Journal on Communication Technology</li>
                <li>• ICTACT Journal on Soft Computing</li>
                <li>• ICTACT Journal on Image & Video Processing</li>
                <li>• ICTACT Journal on Microelectronics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Plagiarism Policy:</h3>
          <p className="text-gray-700">
            To maintain academic integrity and uphold ethical standards in research, all authors are requested to ensure the submitted paper does not exceed 20% similarity content.
          </p>
          <p className="text-gray-700 mt-4 font-medium">
            Thank you for your valuable contributions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Submission;