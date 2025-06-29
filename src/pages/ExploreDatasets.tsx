import React, { useState } from 'react';
import { Database, Search, Filter, Star, Download, Eye, Calendar } from 'lucide-react';

const ExploreDatasets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'All Categories',
    'Healthcare',
    'Climate Science',
    'Social Sciences',
    'Economics',
    'Technology',
    'Education'
  ];

  const datasets = [
    {
      id: 1,
      title: 'Global COVID-19 Research Database',
      description: 'Comprehensive collection of COVID-19 research papers and clinical data from multiple countries.',
      category: 'Healthcare',
      size: '2.3 GB',
      records: '45,782',
      updated: '2024-01-15',
      rating: 4.8,
      downloads: '12.3k',
      featured: true
    },
    {
      id: 2,
      title: 'Climate Change Impact Dataset',
      description: 'Long-term environmental data tracking climate change indicators across different regions.',
      category: 'Climate Science',
      size: '1.7 GB',
      records: '28,456',
      updated: '2024-01-10',
      rating: 4.6,
      downloads: '8.7k',
      featured: true
    },
    {
      id: 3,
      title: 'Educational Technology Usage',
      description: 'Student learning outcomes and technology adoption patterns in educational institutions.',
      category: 'Education',
      size: '890 MB',
      records: '15,923',
      updated: '2024-01-08',
      rating: 4.4,
      downloads: '5.2k',
      featured: false
    },
    {
      id: 4,
      title: 'Economic Indicators 2020-2024',
      description: 'Comprehensive economic data including GDP, inflation, employment rates across multiple countries.',
      category: 'Economics',
      size: '1.2 GB',
      records: '34,567',
      updated: '2024-01-12',
      rating: 4.7,
      downloads: '9.8k',
      featured: false
    },
    {
      id: 5,
      title: 'Social Media Sentiment Analysis',
      description: 'Labeled dataset for sentiment analysis research with social media posts and engagement metrics.',
      category: 'Social Sciences',
      size: '3.1 GB',
      records: '89,345',
      updated: '2024-01-14',
      rating: 4.5,
      downloads: '15.6k',
      featured: true
    },
    {
      id: 6,
      title: 'AI Technology Adoption Survey',
      description: 'Enterprise AI adoption patterns and implementation challenges across various industries.',
      category: 'Technology',
      size: '650 MB',
      records: '12,876',
      updated: '2024-01-07',
      rating: 4.3,
      downloads: '4.1k',
      featured: false
    }
  ];

  const filteredDatasets = datasets.filter(dataset => {
    const matchesSearch = dataset.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dataset.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           dataset.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const featuredDatasets = datasets.filter(dataset => dataset.featured);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center">
          <Database className="h-8 w-8 text-teal-600" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-gray-900">Explore Datasets</h2>
            <p className="text-gray-600">Browse and search available research datasets</p>
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
              placeholder="Search datasets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              {categories.map((category, index) => (
                <option key={index} value={index === 0 ? 'all' : category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Featured Datasets */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Star className="h-5 w-5 text-yellow-500 mr-2" />
          Featured Datasets
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredDatasets.map((dataset) => (
            <div key={dataset.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-gray-900 text-sm">{dataset.title}</h4>
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
              </div>
              <p className="text-xs text-gray-600 mb-3">{dataset.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded">{dataset.category}</span>
                <div className="flex items-center">
                  <Download className="h-3 w-3 mr-1" />
                  {dataset.downloads}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dataset List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">All Datasets ({filteredDatasets.length})</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredDatasets.map((dataset) => (
            <div key={dataset.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <h4 className="text-lg font-medium text-gray-900">{dataset.title}</h4>
                    {dataset.featured && (
                      <Star className="h-4 w-4 text-yellow-500 fill-current ml-2" />
                    )}
                  </div>
                  <p className="text-gray-600 mt-1">{dataset.description}</p>
                  
                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">{dataset.category}</span>
                    <span>{dataset.size}</span>
                    <span>{dataset.records} records</span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {dataset.updated}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(dataset.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-1 text-sm text-gray-600">{dataset.rating}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Download className="h-4 w-4 mr-1" />
                      {dataset.downloads} downloads
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <button className="flex items-center px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                    <Eye className="h-4 w-4 mr-1" />
                    Preview
                  </button>
                  <button className="flex items-center px-3 py-2 text-sm bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors">
                    <Download className="h-4 w-4 mr-1" />
                    Download
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

export default ExploreDatasets;