import React, { useState } from 'react';
import { Library, Search, Filter, Star, FileText, Calendar, Tag, Trash2, Eye, Edit3 } from 'lucide-react';

const SavedLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const savedPapers = [
    {
      id: 1,
      title: 'Advances in Machine Learning for Healthcare Diagnostics',
      authors: ['Dr. Sarah Johnson', 'Prof. Michael Chen'],
      savedDate: '2024-01-15',
      tags: ['Machine Learning', 'Healthcare', 'Important'],
      notes: 'Excellent methodology section. Could be useful for chapter 3 of my thesis.',
      status: 'reading',
      progress: 75,
      rating: 5
    },
    {
      id: 2,
      title: 'Climate Change Impact on Biodiversity',
      authors: ['Dr. James Wilson', 'Prof. Lisa Thompson'],
      savedDate: '2024-01-12',
      tags: ['Climate Change', 'Biology', 'Reference'],
      notes: 'Good statistical analysis approach. Check figures 3-5 for methodology.',
      status: 'completed',
      progress: 100,
      rating: 4
    },
    {
      id: 3,
      title: 'Quantum Computing Applications in Cryptography',
      authors: ['Prof. Alan Kumar', 'Dr. Rachel Lee'],
      savedDate: '2024-01-10',
      tags: ['Quantum Computing', 'Security', 'To Review'],
      notes: 'Complex but important for understanding quantum security implications.',
      status: 'todo',
      progress: 0,
      rating: 0
    },
    {
      id: 4,
      title: 'Social Media Impact on Mental Health',
      authors: ['Dr. Patricia Morgan'],
      savedDate: '2024-01-08',
      tags: ['Psychology', 'Social Media', 'Research'],
      notes: 'Interesting correlation findings. Need to review methodology for my own study.',
      status: 'reading',
      progress: 45,
      rating: 4
    }
  ];

  const allTags = ['all', ...Array.from(new Set(savedPapers.flatMap(paper => paper.tags)))];

  const filteredPapers = savedPapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         paper.notes.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'all' || paper.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'reading': return 'text-blue-600 bg-blue-100';
      case 'todo': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'reading': return 'Reading';
      case 'todo': return 'To Read';
      default: return 'Unknown';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Library className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-gray-900">Saved Paper Library</h2>
              <p className="text-gray-600">Manage your saved research papers and notes</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">{savedPapers.length}</p>
            <p className="text-sm text-gray-600">Saved Papers</p>
          </div>
        </div>
      </div>

      {/* Library Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-semibold text-gray-900">
                {savedPapers.filter(p => p.status === 'completed').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Eye className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Currently Reading</p>
              <p className="text-2xl font-semibold text-gray-900">
                {savedPapers.filter(p => p.status === 'reading').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-gray-100 rounded-lg">
              <Calendar className="h-6 w-6 text-gray-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">To Read</p>
              <p className="text-2xl font-semibold text-gray-900">
                {savedPapers.filter(p => p.status === 'todo').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search your library..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag === 'all' ? 'All Tags' : tag}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Saved Papers List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Your Library ({filteredPapers.length})</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredPapers.map((paper) => (
            <div key={paper.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-lg font-medium text-gray-900">{paper.title}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(paper.status)}`}>
                      {getStatusText(paper.status)}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2">
                    {paper.authors.join(', ')}
                  </p>
                  
                  {paper.notes && (
                    <div className="bg-gray-50 p-3 rounded-md mb-3">
                      <p className="text-sm text-gray-700 italic">"{paper.notes}"</p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {paper.tags.map((tag, index) => (
                      <span key={index} className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded">
                        <Tag className="h-3 w-3 inline mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {paper.status === 'reading' && (
                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Reading Progress</span>
                        <span className="text-gray-900 font-medium">{paper.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${paper.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Saved {paper.savedDate}
                    </div>
                    {paper.rating > 0 && (
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < paper.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <button className="flex items-center px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                    <Edit3 className="h-4 w-4 mr-1" />
                    Edit Notes
                  </button>
                  <button className="flex items-center px-3 py-2 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                    <Eye className="h-4 w-4 mr-1" />
                    Open
                  </button>
                  <button className="flex items-center px-3 py-2 text-sm bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Remove
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

export default SavedLibrary;