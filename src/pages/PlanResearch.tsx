import React, { useState } from 'react';
import { Calendar, Target, Plus, CheckCircle, Clock, AlertCircle, Users, FileText } from 'lucide-react';

const PlanResearch = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      id: 1,
      title: 'AI Ethics in Healthcare',
      description: 'Investigating ethical implications of AI adoption in medical diagnostics',
      status: 'active',
      progress: 75,
      deadline: '2024-03-15',
      milestones: 4,
      completedMilestones: 3,
      team: ['Dr. Sarah Johnson', 'Prof. Michael Chen'],
      priority: 'high'
    },
    {
      id: 2,
      title: 'Climate Data Analysis',
      description: 'Analyzing long-term climate patterns using machine learning',
      status: 'planning',
      progress: 20,
      deadline: '2024-05-20',
      milestones: 6,
      completedMilestones: 1,
      team: ['Prof. Emily Rodriguez'],
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Social Media Behavior Study',
      description: 'Understanding user engagement patterns across platforms',
      status: 'completed',
      progress: 100,
      deadline: '2024-01-10',
      milestones: 5,
      completedMilestones: 5,
      team: ['Dr. David Kim', 'Lisa Chen'],
      priority: 'low'
    }
  ];

  const upcomingMilestones = [
    {
      id: 1,
      project: 'AI Ethics in Healthcare',
      title: 'Final Report Submission',
      date: '2024-02-15',
      status: 'upcoming',
      daysLeft: 12
    },
    {
      id: 2,
      project: 'Climate Data Analysis',
      title: 'Data Collection Complete',
      date: '2024-02-20',
      status: 'upcoming',
      daysLeft: 17
    },
    {
      id: 3,
      project: 'AI Ethics in Healthcare',
      title: 'Peer Review Feedback',
      date: '2024-02-08',
      status: 'overdue',
      daysLeft: -5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-blue-600 bg-blue-100';
      case 'planning': return 'text-yellow-600 bg-yellow-100';
      case 'completed': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getMilestoneStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'text-blue-600 bg-blue-100';
      case 'overdue': return 'text-red-600 bg-red-100';
      case 'completed': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Target className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-gray-900">Plan My Research</h2>
              <p className="text-gray-600">Research project planning and organization</p>
            </div>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Projects</p>
              <p className="text-2xl font-semibold text-gray-900">
                {projects.filter(p => p.status === 'active').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Upcoming Deadlines</p>
              <p className="text-2xl font-semibold text-gray-900">
                {upcomingMilestones.filter(m => m.status === 'upcoming').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-semibold text-gray-900">
                {projects.filter(p => p.status === 'completed').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Overdue Tasks</p>
              <p className="text-2xl font-semibold text-gray-900">
                {upcomingMilestones.filter(m => m.status === 'overdue').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('projects')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'projects'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('milestones')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'milestones'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Timeline
            </button>
          </nav>
        </div>

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="p-6">
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)}`}>
                          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                        </span>
                        <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(project.priority)}`}>
                          {project.priority.charAt(0).toUpperCase() + project.priority.slice(1)} Priority
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          Due {project.deadline}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          {project.completedMilestones}/{project.milestones} Milestones
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          {project.team.length} Team Members
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Target className="h-4 w-4 mr-2" />
                          {project.progress}% Complete
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">Progress</span>
                          <span className="text-gray-900 font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-600 h-2 rounded-full" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Team:</span>
                        {project.team.map((member, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 ml-4">
                      <button className="flex items-center px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                        <FileText className="h-4 w-4 mr-1" />
                        View Details
                      </button>
                      <button className="flex items-center px-3 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                        <Target className="h-4 w-4 mr-1" />
                        Manage
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timeline Tab */}
        {activeTab === 'milestones' && (
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Milestones</h3>
            <div className="space-y-4">
              {upcomingMilestones.map((milestone) => (
                <div key={milestone.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-medium text-gray-900">{milestone.title}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${getMilestoneStatusColor(milestone.status)}`}>
                          {milestone.status === 'overdue' ? 'Overdue' : 'Upcoming'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{milestone.project}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {milestone.date}
                        <span className="ml-4">
                          {milestone.status === 'overdue' 
                            ? `${Math.abs(milestone.daysLeft)} days overdue`
                            : `${milestone.daysLeft} days left`
                          }
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-sm bg-gray-100 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition-colors">
                        Update
                      </button>
                      <button className="text-sm bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition-colors">
                        Complete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanResearch;