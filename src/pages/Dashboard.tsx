import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Clock, 
  BookOpen, 
  Database, 
  FileText, 
  Sparkles,
  ArrowRight,
  Activity,
  Target,
  Users
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back to ResearchMate</h2>
        <p className="text-blue-100">Your central hub for academic research and discovery</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Saved Papers</p>
              <p className="text-2xl font-semibold text-gray-900">42</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Database className="h-6 w-6 text-teal-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Datasets Explored</p>
              <p className="text-2xl font-semibold text-gray-900">18</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Target className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Projects</p>
              <p className="text-2xl font-semibold text-gray-900">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Research Score</p>
              <p className="text-2xl font-semibold text-gray-900">87%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/papers"
            className="flex items-center p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
          >
            <FileText className="h-8 w-8 text-gray-400 group-hover:text-blue-500" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Find Papers</p>
              <p className="text-xs text-gray-500">Discover research</p>
            </div>
          </Link>

          <Link
            to="/datasets"
            className="flex items-center p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-teal-300 hover:bg-teal-50 transition-colors group"
          >
            <Database className="h-8 w-8 text-gray-400 group-hover:text-teal-500" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Browse Datasets</p>
              <p className="text-xs text-gray-500">Explore data</p>
            </div>
          </Link>

          <Link
            to="/summary"
            className="flex items-center p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors group"
          >
            <Sparkles className="h-8 w-8 text-gray-400 group-hover:text-orange-500" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Generate Summary</p>
              <p className="text-xs text-gray-500">AI-powered</p>
            </div>
          </Link>

          <Link
            to="/plan"
            className="flex items-center p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors group"
          >
            <Target className="h-8 w-8 text-gray-400 group-hover:text-green-500" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Plan Research</p>
              <p className="text-xs text-gray-500">Organize projects</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Activity & Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <Activity className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="ml-3 text-sm text-gray-600">Saved "Machine Learning in Healthcare" paper</p>
              <span className="ml-auto text-xs text-gray-400">2h ago</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="ml-3 text-sm text-gray-600">Completed "AI Ethics" research milestone</p>
              <span className="ml-auto text-xs text-gray-400">1d ago</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <p className="ml-3 text-sm text-gray-600">Generated summary for COVID-19 dataset</p>
              <span className="ml-auto text-xs text-gray-400">2d ago</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Research Progress</h3>
            <Target className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">AI Ethics Project</span>
                <span className="text-gray-900 font-medium">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Healthcare ML Research</span>
                <span className="text-gray-900 font-medium">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-teal-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Climate Data Analysis</span>
                <span className="text-gray-900 font-medium">20%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;