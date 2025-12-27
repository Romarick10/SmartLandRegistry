'use client';

import React, { useState } from 'react';
import { 
  Shield, 
  MapPin, 
  FileText, 
  Users, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3,
  PieChart,
  Filter,
  Search,
  Download,
  PlusCircle,
  Eye,
  Edit,
  MoreVertical,
  Calendar,
  Bell,
  Settings,
  RefreshCw,
  Landmark,
  Home,
  Building,
  Globe,
  Lock
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState('30days');

  // Dashboard stats
  const stats = [
    { 
      title: 'Total Properties', 
      value: '24', 
      change: '+3', 
      icon: Home, 
      color: 'text-blue-400', 
      bgColor: 'bg-blue-500/10' 
    },
    { 
      title: 'Documents', 
      value: '48', 
      change: '+12', 
      icon: FileText, 
      color: 'text-emerald-400', 
      bgColor: 'bg-emerald-500/10' 
    },
    { 
      title: 'Pending Actions', 
      value: '7', 
      change: '-2', 
      icon: AlertCircle, 
      color: 'text-amber-400', 
      bgColor: 'bg-amber-500/10' 
    },
    { 
      title: 'Completed', 
      value: '18', 
      change: '+5', 
      icon: CheckCircle, 
      color: 'text-green-400', 
      bgColor: 'bg-green-500/10' 
    },
  ];

  // Recent activities
  const activities = [
    { id: 1, type: 'registration', title: 'Land Parcel Registered', property: 'Plot #456-789', time: '2 hours ago', status: 'completed' },
    { id: 2, type: 'transfer', title: 'Ownership Transfer Initiated', property: 'Plot #123-456', time: '1 day ago', status: 'pending' },
    { id: 3, type: 'document', title: 'Survey Document Uploaded', property: 'Plot #789-012', time: '2 days ago', status: 'completed' },
    { id: 4, type: 'dispute', title: 'Boundary Dispute Filed', property: 'Plot #345-678', time: '3 days ago', status: 'under-review' },
    { id: 5, type: 'verification', title: 'Property Verification Complete', property: 'Plot #901-234', time: '1 week ago', status: 'completed' },
  ];

  // Quick actions
  const quickActions = [
    { title: 'Register New Property', icon: PlusCircle, color: 'text-blue-400', href: '/land/register' },
    { title: 'Upload Documents', icon: FileText, color: 'text-emerald-400', href: '/documents/upload' },
    { title: 'Verify Ownership', icon: CheckCircle, color: 'text-green-400', href: '/verify' },
    { title: 'View GIS Map', icon: Globe, color: 'text-purple-400', href: '/maps' },
  ];

  // Property list
  const properties = [
    { id: 1, name: 'Residential Plot', location: 'Yaoundé, Centre', area: '500m²', status: 'registered', lastUpdate: '2 days ago' },
    { id: 2, name: 'Commercial Land', location: 'Douala, Littoral', area: '1200m²', status: 'pending', lastUpdate: '1 week ago' },
    { id: 3, name: 'Agricultural Land', location: 'Bafoussam, West', area: '5000m²', status: 'registered', lastUpdate: '1 month ago' },
    { id: 4, name: 'Industrial Plot', location: 'Limbe, Southwest', area: '2500m²', status: 'under-review', lastUpdate: '3 days ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Dashboard Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Dashboard</h1>
                  <p className="text-sm text-slate-400">Welcome back, John Doe</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 transition">
                  <Calendar className="h-4 w-4" />
                  <span>Last 30 days</span>
                </button>
              </div>
              
              <button className="p-2 hover:bg-slate-800/50 rounded-lg transition border border-slate-700">
                <Bell className="h-5 w-5 text-slate-400" />
              </button>
              
              <button className="p-2 hover:bg-slate-800/50 rounded-lg transition border border-slate-700">
                <Settings className="h-5 w-5 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-sm font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                  {stat.change}
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.title}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Quick Actions & Recent Activity */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Quick Actions</h2>
                <RefreshCw className="h-4 w-4 text-slate-400" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    href={action.href}
                    className="group bg-slate-900/50 hover:bg-slate-900 border border-slate-700 rounded-lg p-4 transition hover:border-blue-500/30"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-slate-800/50 group-hover:scale-110 transition ${action.color.replace('text-', 'bg-')}/10`}>
                        <action.icon className={`h-5 w-5 ${action.color}`} />
                      </div>
                      <div className="text-sm font-medium">{action.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Recent Activity</h2>
                <Link href="/activity" className="text-sm text-blue-400 hover:text-blue-300">
                  View all
                </Link>
              </div>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-start justify-between p-4 bg-slate-900/30 rounded-lg border border-slate-700">
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${
                        activity.status === 'completed' ? 'bg-green-500/10' :
                        activity.status === 'pending' ? 'bg-amber-500/10' :
                        'bg-blue-500/10'
                      }`}>
                        {activity.type === 'registration' && <Home className="h-4 w-4 text-blue-400" />}
                        {activity.type === 'transfer' && <Users className="h-4 w-4 text-purple-400" />}
                        {activity.type === 'document' && <FileText className="h-4 w-4 text-emerald-400" />}
                        {activity.type === 'dispute' && <AlertCircle className="h-4 w-4 text-red-400" />}
                        {activity.type === 'verification' && <CheckCircle className="h-4 w-4 text-green-400" />}
                      </div>
                      <div>
                        <div className="font-medium text-white">{activity.title}</div>
                        <div className="text-sm text-slate-400">{activity.property}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-500">{activity.time}</div>
                      <div className={`text-xs px-2 py-1 rounded-full mt-1 ${
                        activity.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        activity.status === 'pending' ? 'bg-amber-500/20 text-amber-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {activity.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Properties & Analytics */}
          <div className="space-y-8">
            {/* Properties Overview */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">My Properties</h2>
                <Link href="/land" className="text-sm text-blue-400 hover:text-blue-300">
                  Manage all
                </Link>
              </div>
              <div className="space-y-4">
                {properties.map((property) => (
                  <div key={property.id} className="p-4 bg-slate-900/30 rounded-lg border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-white">{property.name}</div>
                      <div className={`text-xs px-2 py-1 rounded ${
                        property.status === 'registered' ? 'bg-green-500/20 text-green-400' :
                        property.status === 'pending' ? 'bg-amber-500/20 text-amber-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {property.status}
                      </div>
                    </div>
                    <div className="text-sm text-slate-400 mb-3">{property.location}</div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-slate-500">{property.area}</div>
                      <div className="text-slate-500">Updated {property.lastUpdate}</div>
                    </div>
                    <div className="flex items-center space-x-2 mt-3">
                      <button className="flex-1 py-1.5 text-xs text-slate-400 hover:text-white hover:bg-slate-800 rounded transition">
                        <Eye className="h-3 w-3 inline mr-1" /> View
                      </button>
                      <button className="flex-1 py-1.5 text-xs text-slate-400 hover:text-white hover:bg-slate-800 rounded transition">
                        <Edit className="h-3 w-3 inline mr-1" /> Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Blockchain Status */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="h-5 w-5 text-blue-400" />
                <h2 className="text-xl font-bold">Blockchain Status</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-400">Last Block</div>
                  <div className="font-mono text-sm text-white">#15,842,367</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-400">Network</div>
                  <div className="text-sm text-emerald-400">Operational</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-400">Security Level</div>
                  <div className="text-sm text-green-400">High</div>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <div className="text-xs text-slate-500">
                    All transactions are secured with blockchain technology
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-5 w-5 text-amber-400" />
                <h2 className="text-xl font-bold">Upcoming Deadlines</h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-amber-500/5 rounded-lg border border-amber-500/20">
                  <div>
                    <div className="text-sm font-medium">Tax Payment</div>
                    <div className="text-xs text-slate-400">Due in 5 days</div>
                  </div>
                  <AlertCircle className="h-4 w-4 text-amber-400" />
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-500/5 rounded-lg border border-blue-500/20">
                  <div>
                    <div className="text-sm font-medium">Document Renewal</div>
                    <div className="text-xs text-slate-400">Due in 14 days</div>
                  </div>
                  <FileText className="h-4 w-4 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Analytics Overview</h2>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition">
                7D
              </button>
              <button className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-lg">
                30D
              </button>
              <button className="px-3 py-1 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition">
                90D
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-slate-900/30 rounded-lg border border-slate-700">
              <PieChart className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">85%</div>
              <div className="text-sm text-slate-400">Properties Registered</div>
            </div>
            
            <div className="text-center p-4 bg-slate-900/30 rounded-lg border border-slate-700">
              <TrendingUp className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">+24%</div>
              <div className="text-sm text-slate-400">Growth This Month</div>
            </div>
            
            <div className="text-center p-4 bg-slate-900/30 rounded-lg border border-slate-700">
              <Users className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">3,842</div>
              <div className="text-sm text-slate-400">Active Users</div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-5 w-5 text-green-400" />
              <h3 className="font-medium">Security Score</h3>
            </div>
            <div className="text-3xl font-bold text-white mb-2">98/100</div>
            <div className="text-sm text-slate-400">Excellent security rating</div>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="h-5 w-5 text-blue-400" />
              <h3 className="font-medium">Coverage</h3>
            </div>
            <div className="text-3xl font-bold text-white mb-2">8/10</div>
            <div className="text-sm text-slate-400">Regions covered in Cameroon</div>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-5 w-5 text-amber-400" />
              <h3 className="font-medium">Efficiency</h3>
            </div>
            <div className="text-3xl font-bold text-white mb-2">92%</div>
            <div className="text-sm text-slate-400">Faster than manual process</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 mt-8 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <div>
              Smart Land Registry Dashboard • Ministry of Lands & Survey
            </div>
            <div className="mt-2 md:mt-0">
              Last updated: {new Date().toLocaleDateString()} • 
              <button className="ml-2 text-blue-400 hover:text-blue-300">
                <RefreshCw className="h-3 w-3 inline mr-1" /> Refresh
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}