import React, { useState } from 'react';
import { MessageSquare, Users, Search, Plus, ThumbsUp, MessageCircle, Calendar, Eye, Star, CheckCircle } from 'lucide-react';

const DiscussionForum = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All Topics',
    'Machine Learning',
    'Healthcare Research',
    'Climate Science',
    'Social Sciences',
    'Methodology',
    'Data Analysis',
    'General Discussion'
  ];

  const discussions = [
    {
      id: 1,
      title: 'Best practices for handling bias in medical AI datasets',
      category: 'Machine Learning',
      author: 'Dr. Sarah Johnson',
      authorRole: 'Senior Researcher',
      created: '2024-01-15',
      replies: 24,
      likes: 45,
      views: 189,
      lastActivity: '2h ago',
      tags: ['AI', 'Bias', 'Healthcare', 'Ethics'],
      featured: true,
      excerpt: 'I\'ve been working on a medical imaging AI project and facing challenges with dataset bias. What are the current best practices for identifying and mitigating bias in medical AI training data?'
    },
    {
      id: 2,
      title: 'Climate data visualization techniques for research papers',
      category: 'Climate Science',
      author: 'Prof. Michael Chen',
      authorRole: 'Climate Scientist',
      created: '2024-01-14',
      replies: 18,
      likes: 32,
      views: 156,
      lastActivity: '4h ago',
      tags: ['Visualization', 'Climate', 'Data'],
      featured: false,
      excerpt: 'Looking for recommendations on effective visualization techniques for presenting long-term climate data trends in academic publications.'
    },
    {
      id: 3,
      title: 'Statistical significance vs practical significance in psychology research',
      category: 'Social Sciences',
      author: 'Dr. Emily Rodriguez',
      authorRole: 'Psychology Researcher',
      created: '2024-01-13',
      replies: 31,
      likes: 67,
      views: 234,
      lastActivity: '1d ago',
      tags: ['Statistics', 'Psychology', 'Methodology'],
      featured: true,
      excerpt: 'Discussion on the ongoing debate between statistical significance and practical significance in psychological research. How do you balance both in your studies?'
    },
    {
      id: 4,
      title: 'Open source tools for qualitative data analysis',
      category: 'Data Analysis',
      author: 'Lisa Thompson',
      authorRole: 'Research Assistant',
      created: '2024-01-12',
      replies: 15,
      likes: 28,
      views: 123,
      lastActivity: '1d ago',
      tags: ['Qualitative', 'Tools', 'Open Source'],
      featured: false,
      excerpt: 'Can anyone recommend good open-source alternatives to NVivo for qualitative data analysis? Working with limited budget for my thesis research.'
    },
    {
      id: 5,
      title: 'Reproducibility crisis: What can we do as individual researchers?',
      category: 'Methodology',
      author: 'Dr. David Kim',
      authorRole: 'Postdoc',
      created: '2024-01-11',
      replies: 42,
      likes: 89,
      views: 298,
      lastActivity: '2d ago',
      tags: ['Reproducibility', 'Research Ethics', 'Methodology'],
      featured: true,
      excerpt: 'The reproducibility crisis affects many fields. What practical steps can individual researchers take to ensure their work is reproducible and contributes to better science?'
    }
  ];

  const topContributors = [
    { name: 'Dr. Sarah Johnson', posts: 127, reputation: 2489 },
    { name: 'Prof. Michael Chen', posts: 98, reputation: 1876 },
    { name: 'Dr. Emily Rodriguez', posts: 85, reputation: 1654 },
    { name: 'Dr. David Kim', posts: 73, reputation: 1432 }
  ];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || discussion.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredDiscussions = discussions.filter(discussion => discussion.featured);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MessageSquare className="h-8 w-8 text-indigo-600" />
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-gray-900">Discussion Forum</h2>
              <p className="text-gray-600">Community interaction and collaboration</p>
            </div>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            New Discussion
          </button>
        </div>
      </div>

      {/* Forum Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <MessageSquare className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Discussions</p>
              <p className="text-2xl font-semibold text-gray-900">
                {discussions.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Users className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Community Members</p>
              <p className="text-2xl font-semibold text-gray-900">
                1,248
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <MessageCircle className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Replies</p>
              <p className="text-2xl font-semibold text-gray-900">
                {discussions.reduce((sum, discussion) => sum + discussion.replies, 0)}
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
              placeholder="Search discussions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Discussion List */}
        <div className="lg:col-span-2 space-y-6">
          {/* Featured Discussions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              Featured Discussions
            </h3>
            <div className="space-y-4">
              {featuredDiscussions.map((discussion) => (
                <div key={discussion.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{discussion.title}</h4>
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{discussion.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">{discussion.category}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        {discussion.replies}
                      </span>
                      <span className="flex items-center">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        {discussion.likes}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Discussions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">All Discussions ({filteredDiscussions.length})</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {filteredDiscussions.map((discussion) => (
                <div key={discussion.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h4 className="text-lg font-medium text-gray-900 hover:text-indigo-600 cursor-pointer">
                          {discussion.title}
                        </h4>
                        {discussion.featured && (
                          <Star className="h-4 w-4 text-yellow-500 fill-current ml-2" />
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                        <span>{discussion.author}</span>
                        <span className="text-xs text-gray-500">({discussion.authorRole})</span>
                      </div>
                      
                      <p className="text-gray-600 mt-2 text-sm">{discussion.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-1 mt-3">
                        {discussion.tags.map((tag, index) => (
                          <span key={index} className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">{discussion.category}</span>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {discussion.created}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {discussion.replies} replies
                        </div>
                        <div className="flex items-center">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {discussion.likes} likes
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {discussion.views} views
                        </div>
                      </div>
                    </div>
                    
                    <div className="ml-4 text-sm text-gray-500">
                      <span>Last activity {discussion.lastActivity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Top Contributors */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="h-5 w-5 text-indigo-600 mr-2" />
              Top Contributors
            </h3>
            <div className="space-y-4">
              {topContributors.map((contributor, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-full flex items-center justify-center font-medium">
                      {contributor.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{contributor.name}</p>
                      <p className="text-xs text-gray-500">{contributor.posts} posts</p>
                    </div>
                  </div>
                  <div className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">
                    {contributor.reputation} rep
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.slice(1).map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                    selectedCategory === category
                      ? 'bg-indigo-100 text-indigo-800'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
            <h3 className="text-lg font-semibold text-indigo-900 mb-3">Community Guidelines</h3>
            <ul className="space-y-2 text-sm text-indigo-800">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-indigo-600" />
                Be respectful and constructive in discussions
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-indigo-600" />
                Provide evidence and citations when possible
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-indigo-600" />
                Stay on topic and use appropriate categories
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-indigo-600" />
                Respect intellectual property and privacy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionForum;