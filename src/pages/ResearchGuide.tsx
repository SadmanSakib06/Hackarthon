import React from 'react';
import { BookOpen, PlayCircle, CheckCircle, Users, Lightbulb, Target } from 'lucide-react';

const ResearchGuide = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center">
          <BookOpen className="h-8 w-8 text-blue-600" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-gray-900">Research Guide</h2>
            <p className="text-gray-600">Educational resources and tutorials to enhance your research skills</p>
          </div>
        </div>
      </div>

      {/* Getting Started Guides */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <PlayCircle className="h-5 w-5 text-green-600 mr-2" />
          Getting Started Guides
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <h4 className="font-medium text-gray-900 mb-2">Research Fundamentals</h4>
            <p className="text-sm text-gray-600 mb-3">Learn the basics of academic research methodology</p>
            <div className="flex items-center text-sm text-green-600">
              <CheckCircle className="h-4 w-4 mr-1" />
              Beginner Friendly
            </div>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <h4 className="font-medium text-gray-900 mb-2">Literature Review Techniques</h4>
            <p className="text-sm text-gray-600 mb-3">Master the art of comprehensive literature reviews</p>
            <div className="flex items-center text-sm text-blue-600">
              <PlayCircle className="h-4 w-4 mr-1" />
              Interactive Tutorial
            </div>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <h4 className="font-medium text-gray-900 mb-2">Data Collection Methods</h4>
            <p className="text-sm text-gray-600 mb-3">Explore various approaches to gathering research data</p>
            <div className="flex items-center text-sm text-orange-600">
              <Target className="h-4 w-4 mr-1" />
              Practical Examples
            </div>
          </div>
        </div>
      </div>

      {/* Research Methodologies */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Target className="h-5 w-5 text-teal-600 mr-2" />
          Research Methodologies
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-medium text-gray-900">Quantitative Research</h4>
            <p className="text-sm text-gray-600 mt-1">Statistical analysis, surveys, and experimental design principles</p>
            <div className="mt-2">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Statistics</span>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded ml-2">Data Analysis</span>
            </div>
          </div>
          
          <div className="border-l-4 border-teal-500 pl-4">
            <h4 className="font-medium text-gray-900">Qualitative Research</h4>
            <p className="text-sm text-gray-600 mt-1">Interviews, case studies, and thematic analysis approaches</p>
            <div className="mt-2">
              <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">Interviews</span>
              <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded ml-2">Case Studies</span>
            </div>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-medium text-gray-900">Mixed Methods</h4>
            <p className="text-sm text-gray-600 mt-1">Combining quantitative and qualitative approaches effectively</p>
            <div className="mt-2">
              <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Integration</span>
              <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded ml-2">Triangulation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tips and Best Practices */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Lightbulb className="h-5 w-5 text-yellow-600 mr-2" />
          Tips and Best Practices
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Research Planning</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Define clear research objectives and questions
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Create a detailed timeline with milestones
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Establish ethical considerations early
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Plan for data management and storage
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Quality Assurance</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Conduct thorough peer reviews
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Validate findings with multiple sources
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Document methodology transparently
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Follow reproducibility guidelines
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Community Resources */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6 border border-gray-200">
        <div className="flex items-center mb-4">
          <Users className="h-6 w-6 text-blue-600 mr-3" />
          <h3 className="text-lg font-semibold text-gray-900">Community Resources</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Connect with fellow researchers and access additional learning materials
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Join Discussion Forum
          </button>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md border border-blue-600 hover:bg-blue-50 transition-colors">
            Download Resource Pack
          </button>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md border border-blue-600 hover:bg-blue-50 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchGuide;