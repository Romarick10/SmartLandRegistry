'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Home, 
  AlertTriangle, 
  FileText, 
  Lock, 
  ArrowLeft, 
  Search, 
  Map, 
  Shield, 
  X,
  Navigation,
  RefreshCw,
  HelpCircle,
  Mail,
  ExternalLink,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import Pathname from '../components/Pathname';

export default function NotFound() {
  const router = useRouter();
  const [previousPath, setPreviousPath] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const searchInputRef = useRef(null);
  
  // Track previous page
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const referrer = document.referrer;
      const lastPath = sessionStorage.getItem('lastPath') || '/';
      setPreviousPath(lastPath);
      
      // Store current path for future navigation
      sessionStorage.setItem('lastPath', window.location.pathname);
    }
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const goBack = () => {
    setIsLoading(true);
    if (previousPath && previousPath !== window.location.pathname) {
      router.push(previousPath);
    } else {
      router.back();
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsLoading(true);
      // Simulate search and redirect
      setTimeout(() => {
        router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      }, 300);
    }
  };

  const commonPaths = [
    { name: 'Land Registry', path: '/land', icon: Map, color: 'text-emerald-400' },
    { name: 'Document Center', path: '/documents', icon: FileText, color: 'text-blue-400' },
    { name: 'GIS Maps', path: '/maps', icon: Navigation, color: 'text-purple-400' },
    { name: 'User Dashboard', path: '/dashboard', icon: Shield, color: 'text-amber-400' },
    { name: 'Transaction History', path: '/transactions', icon: RefreshCw, color: 'text-cyan-400' },
  ];

  const quickActions = [
    {
      title: 'Report Broken Link',
      description: 'Help us fix this issue',
      icon: Mail,
      action: () => window.location.href = 'mailto:support@smartland.cm?subject=Broken%20Link%20Report'
    },
    {
      title: 'Contact Support',
      description: '24/7 technical support',
      icon: HelpCircle,
      action: () => router.push('/support')
    },
    {
      title: 'System Status',
      description: 'Check service availability',
      icon: Zap,
      action: () => router.push('/status')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                            linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">

        {/* Main Content */}
        <div className="text-center mb-12 animate-in fade-in duration-700">
          {/* 404 Display */}
          <div className="relative inline-block mb-8">
            <div className="relative">
              <AlertTriangle className="h-48 w-48 text-yellow-400/20 animate-pulse-slow" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl font-bold text-yellow-400 relative">
                  <span className="text-outline">404</span>
                  <div className="absolute -inset-4 bg-yellow-400/10 blur-3xl rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Animated ring */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 border-2 border-yellow-400/30 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 border-2 border-blue-400/20 rounded-full animate-spin-slow-reverse"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-in slide-in-from-top duration-500">
            Page Not Found
          </h1>
          
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto animate-in slide-in-from-top duration-500 delay-100">
            The requested resource could not be located in our blockchain registry.
            The URL may be incorrect or the page has been moved.
          </p>

          {/* Path Indicator */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/50 rounded-full mb-8 border border-slate-700 animate-in fade-in delay-200">
            <div className="text-xs text-slate-400">Current URL:</div>
            <Pathname />
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-12 animate-in slide-in-from-bottom duration-500 delay-300">
          <form onSubmit={handleSearch} className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-500" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for land parcels, documents, or services..."
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl pl-12 pr-32 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-cyan-700 transition disabled:opacity-50"
            >
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </form>
          <p className="text-center text-sm text-slate-500 mt-2">
            Try searching for what you were looking for
          </p>
        </div>

        {/* Action Buttons Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 animate-in slide-in-from-bottom duration-500 delay-400">
          {/* Go Back Card */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <ArrowLeft className="h-5 w-5 text-blue-400 group-hover:animate-bounce-x" />
                  <h3 className="text-lg font-semibold text-white">Return to Previous</h3>
                </div>
                <p className="text-sm text-slate-400">
                  Go back to where you came from
                </p>
              </div>
              <div className="text-xs text-slate-500 bg-slate-900/50 px-2 py-1 rounded">
                {previousPath ? `From: ${previousPath}` : 'History available'}
              </div>
            </div>
            <button
              onClick={goBack}
              disabled={isLoading}
              className="w-full bg-slate-900/50 hover:bg-slate-900 text-white px-4 py-3 rounded-lg font-medium transition border border-slate-700 hover:border-blue-500/50 flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Loading...</span>
                </>
              ) : (
                <>
                  <ArrowLeft className="h-4 w-4" />
                  <span>Go Back</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className="w-full flex items-center justify-between p-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700/30 rounded-lg transition group"
                >
                  <div className="flex items-center space-x-3">
                    <action.icon className="h-4 w-4 text-blue-400" />
                    <div className="text-left">
                      <div className="font-medium">{action.title}</div>
                      <div className="text-xs text-slate-500">{action.description}</div>
                    </div>
                  </div>
                  <ExternalLink className="h-3 w-3 text-slate-500 group-hover:text-blue-400" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Common Destinations */}
        <div className="mb-12 animate-in slide-in-from-bottom duration-500 delay-500">
          <h3 className="text-lg font-semibold text-white mb-6 text-center">
            Popular Destinations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {commonPaths.map((path, index) => (
              <Link
                key={index}
                href={path.path}
                className="bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center transition hover:scale-105 hover:border-blue-500/30 group"
              >
                <path.icon className={`h-6 w-6 mx-auto mb-2 ${path.color} group-hover:scale-110 transition-transform`} />
                <div className="text-sm text-white font-medium">{path.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Detailed Navigation */}
        <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 mb-8 animate-in fade-in delay-600">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                User Services
              </h4>
              <div className="space-y-2">
                <Link href="/login" className="block text-sm text-slate-400 hover:text-blue-400 transition py-1">
                  Login / Register
                </Link>
                <Link href="/profile" className="block text-sm text-slate-400 hover:text-blue-400 transition py-1">
                  User Profile
                </Link>
                <Link href="/settings" className="block text-sm text-slate-400 hover:text-blue-400 transition py-1">
                  Account Settings
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                Land Services
              </h4>
              <div className="space-y-2">
                <Link href="/land/register" className="block text-sm text-slate-400 hover:text-emerald-400 transition py-1">
                  Register Property
                </Link>
                <Link href="/land/search" className="block text-sm text-slate-400 hover:text-emerald-400 transition py-1">
                  Search Properties
                </Link>
                <Link href="/land/transfer" className="block text-sm text-slate-400 hover:text-emerald-400 transition py-1">
                  Transfer Ownership
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                Legal Services
              </h4>
              <div className="space-y-2">
                <Link href="/dispute" className="block text-sm text-slate-400 hover:text-red-400 transition py-1">
                  Dispute Resolution
                </Link>
                <Link href="/audit" className="block text-sm text-slate-400 hover:text-amber-400 transition py-1">
                  Audit Trail
                </Link>
                <Link href="/support" className="block text-sm text-slate-400 hover:text-cyan-400 transition py-1">
                  Technical Support
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-slate-500 mb-4">
            Error Code: 404 • Session ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
          <p className="text-xs text-slate-600">
            Smart Land Registry System • Ministry of Lands & Survey Cameroon
            <br />
            All rights reserved • This incident has been logged for security purposes
          </p>
        </div>
      </div>

      {/* Emergency Exit */}
      <button
        onClick={() => router.push('/')}
        className="fixed bottom-4 right-4 bg-red-600/20 hover:bg-red-600/30 text-red-400 text-xs px-3 py-2 rounded-lg border border-red-500/30 transition backdrop-blur-sm z-50"
      >
        Emergency Exit
      </button>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-5px); }
        }
        
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
        
        .animate-bounce-x {
          animation: bounce-x 1s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .text-outline {
          -webkit-text-stroke: 2px rgba(251, 191, 36, 0.3);
          paint-order: stroke fill;
        }
      `}</style>
    </div>
  );
}
