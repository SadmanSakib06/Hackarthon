import React, { useState } from 'react';
import { FileText, Search, Filter, Star, ExternalLink, Calendar, Users, Eye } from 'lucide-react';

const ExplorePapers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const fields = ['All Fields', 'Computer Science', 'Medicine', 'Physics', 'Biology', 'Psychology', 'Economics'];
  const years = ['All Years', '2024', '2023', '2022', '2021', '2020'];

  const papers = [
    {
      id: 1,
      title: 'Advances in Machine Learning for Healthcare Diagnostics',
      authors: ['Dr. Sarah Johnson', 'Prof. Michael Chen', 'Dr. Emily Rodriguez'],
      journal: 'Nature Medicine',
      year: 2024,
      citations: 145,
      field: 'Medicine',
      abstract: 'This paper explores the latest developments in machine learning algorithms specifically designed for healthcare diagnostics, focusing on improved accuracy and reduced computational requirements.',
      keywords: ['Machine Learning', 'Healthcare', 'Diagnostics', 'AI'],
      doi: '10.1038/s41591-024-0001-1',
      openAccess: true,
      recommended: true
    },
    {
      id: 2,
      title: 'Climate Change Impact on Biodiversity: A Global Analysis',
      authors: ['Dr. James Wilson', 'Prof. Lisa Thompson'],
      journal: 'Science',
      year: 2024,
      citations: 89,
      field: 'Biology',
      abstract: 'A comprehensive study analyzing the correlation between climate change indicators and biodiversity loss across different ecosystems worldwide.',
      keywords: ['Climate Change', 'Biodiversity', 'Ecosystems', 'Conservation'],
      doi: '10.1126/science.2024.001',
      openAccess: false,
      recommended: true
    },
    {
      id: 3,
      title: 'Quantum Computing Applications in Cryptography',
      authors: ['Prof. Alan Kumar', 'Dr. Rachel Lee', 'Dr. Mark Davis'],
      journal: 'Physical Review A',
      year: 2023,
      citations: 267,
      field: 'Physics',
      abstract: 'An exploration of quantum computing capabilities in modern cryptographic systems and their implications for cybersecurity.',
      keywords: ['Quantum Computing', 'Cryptography', 'Security', 'Algorithms'],
      doi: '10.1103/PhysRevA.2023.042301',
      openAccess: true,
      recommended: false
    },
    {
      id: 4,
      title: 'Social Media Impact on Mental Health in Adolescents',
      authors: ['Dr. Patricia Morgan', 'Dr. David Kim'],
      journal: 'Journal of Adolescent Health',
      year: 2023,
      citations: 156,
      field: 'Psychology',
      abstract: 'A longitudinal study examining the relationship between social media usage patterns and mental health outcomes in teenagers.',
      keywords: ['Social Media', 'Mental Health', 'Adolescents', 'Digital Wellness'],
      doi: '10.1016/j.jadohealth.2023.12.001',
      openAccess: true,
      recommended: true
    },
    {
      id: 5,
      title: 'Economic Models for Sustainable Development',
      authors: ['Prof. Robert Anderson', 'Dr. Maria Santos'],
      journal: 'Economic Journal',
      year: 2022,
      citations: 98,
      field: 'Economics',
      abstract: 'Novel economic frameworks that balance growth objectives with environmental sustainability requirements.',
      keywords: ['Economics', 'Sustainability', 'Development', 'Policy'],
      doi: '10.1111/ecoj.12345',
      openAccess: false,
      recommended: false
    }
  ];

  const filteredPapers = papers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         paper.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesField = selectedField === 'all' || paper.field === selectedField;
    const matchesYear = selectedYear === 'all' || paper.year.toString() === selectedYear;
    return matchesSearch && matchesField && matchesYear;
  });

  const recommendedPapers = papers.filter(paper => paper.recommended);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center">
          <FileText className="h-8 w-8 text-blue-600" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-gray-900">Start Exploring Papers</h2>
            <p className="text-gray-600">Academic paper search and discovery</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search papers, authors, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-600">Filters:</span>
            </div>
            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {fields.map((field, index) => (
                <option key={index} value={index === 0 ? 'all' : field}>
                  {field}
                </option>
              ))}
            </select>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {years.map((year, index) => (
                <option key={index} value={index === 0 ? 'all' : year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Paper Recommendations */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Star className="h-5 w-5 text-yellow-500 mr-2" />
          Recommended Papers
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {recommendedPapers.slice(0, 4).map((paper) => (
            <div key={paper.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-gray-900 text-sm line-clamp-2">{paper.title}</h4>
                <Star className="h-4 w-4 text-yellow-500 fill-current flex-shrink-0 ml-2" />
              </div>
              <p className="text-xs text-gray-600 mb-2">
                {paper.authors.slice(0, 2).join(', ')}{paper.authors.length > 2 ? ` +${paper.authors.length - 2}` : ''}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{paper.field}</span>
                <span>{paper.citations} citations</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Results */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Search Results ({filteredPapers.length})</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredPapers.map((paper) => (
            <div key={paper.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <h4 className="text-lg font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                      {paper.title}
                    </h4>
                    {paper.recommended && (
                      <Star className="h-4 w-4 text-yellow-500 fill-current ml-2" />
                    )}
                    {paper.openAccess && (
                      <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        Open Access
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    {paper.authors.join(', ')}
                  </div>
                  
                  <p className="text-gray-600 mt-2 text-sm">{paper.abstract}</p>
                  
                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">{paper.field}</span>
                    <span className="font-medium">{paper.journal}</span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {paper.year}
                    </div>
                    <span>{paper.citations} citations</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mt-2">
                    {paper.keywords.map((keyword, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <button className="flex items-center px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                    <Eye className="h-4 w-4 mr-1" />
                    Preview
                  </button>
                  <button className="flex items-center px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    <Star className="h-4 w-4 mr-1" />
                    Save
                  </button>
                  <button className="flex items-center px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Full
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePapers;