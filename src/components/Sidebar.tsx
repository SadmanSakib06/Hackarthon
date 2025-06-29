import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Database, 
  FileText, 
  Library, 
  Sparkles, 
  Calendar, 
  MessageSquare,
  X,
  Microscope
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Research Guide', href: '/guide', icon: BookOpen },
  { name: 'Explore Datasets', href: '/datasets', icon: Database },
  { name: 'Start Exploring Papers', href: '/papers', icon: FileText },
  { name: 'Saved Paper Library', href: '/library', icon: Library },
  { name: 'Auto Summary Generator', href: '/summary', icon: Sparkles },
  { name: 'Plan My Research', href: '/plan', icon: Calendar },
  { name: 'Discussion Forum', href: '/forum', icon: MessageSquare },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={onClose}>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </div>
      )}

      {/* Sidebar */}
      <div className={`h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0 fixed top-0 left-0 z-50' : '-translate-x-full fixed top-0 left-0 z-50'
      } lg:translate-x-0 lg:relative lg:shadow-none lg:border-r lg:border-gray-200`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center">
            <Microscope className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">ResearchMate</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 transition-colors ${
                      isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                  />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          {/* Built with Bolt.new Badge */}
          <div className="mb-4">
            <a
              href="https://bolt.new"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">⚡</span>
                </div>
                <div className="text-center">
                  <div className="text-xs font-semibold">Built with</div>
                  <div className="text-sm font-bold tracking-wide">Bolt.new</div>
                </div>
              </div>
            </a>
          </div>
          
          <div className="text-xs text-gray-500 text-center">
            ResearchMate v1.0
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;