'use client';

import React, { useState } from 'react';
import { 
  Shield, 
  Users, 
  BarChart3, 
  FileText, 
  MapPin, 
  AlertCircle,
  CheckCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  Settings,
  Bell,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  MoreVertical,
  Home,
  Building,
  Sprout,
  Globe,
  Lock,
  Server,
  Database,
  Cpu,
  Network,
  Activity,
  ChevronRight,
  UserCheck,
  UserX,
  DollarSign,
  PieChart,
  Calendar,
  RefreshCw,
  PlusCircle,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState('30d');

  // Admin stats
  const stats = [
    { 
      title: 'Total Properties', 
      value: '1,842', 
      change: '+12%', 
      trend: 'up',
      icon: Home, 
      color: 'text-blue-400', 
      bgColor: 'bg-blue-500/10' 
    },
    { 
      title: 'Active Users', 
      value: '3,156', 
      change: '+8%', 
      trend: 'up',
      icon: Users, 
      color: 'text-emerald-400', 
      bgColor: 'bg-emerald-500/10' 
    },
    { 
      title: 'Pending Approvals', 
      value: '47', 
      change: '-5', 
      trend: 'down',
      icon: AlertCircle, 
      color: 'text-amber-400', 
      bgColor: 'bg-amber-500/10' 
    },
    { 
      title: 'Revenue', 
      value: '245M XAF', 
      change: '+18%', 
      trend: 'up',
      icon: DollarSign, 
      color: 'text-green-400', 
      bgColor: 'bg-green-500/10' 
    },
  ];

  // Recent activities
  const activities = [
    { id: 1, type: 'registration', user: 'John Doe', action: 'Property registration approved', time: '5 min ago', status: 'success' },
    { id: 2, type: 'dispute', user: 'Sarah Johnson', action: 'Boundary dispute filed', time: '15 min ago', status: 'warning' },
    { id: 3, type: 'user', user: 'Admin', action: 'New admin user added', time: '30 min ago', status: 'info' },
    { id: 4, type: 'system', user: 'System', action: 'Database backup completed', time: '2 hours ago', status: 'success' },
    { id: 5, type: 'security', user: 'Security', action: 'Unauthorized access attempt blocked', time: '4 hours ago', status: 'danger' },
  ];

  // Pending approvals
  const pendingApprovals = [
    { id: 1, type: 'property', title: 'Commercial Plot Registration', user: 'Global Enterprises', submitted: '2 days ago', priority: 'high' },
    { id: 2, type: 'user', title: 'New Government Officer Account', user: 'Ministry of Lands', submitted: '1 day ago', priority: 'high' },
    { id: 3, type: 'document', title: 'Land Survey Verification', user: 'Surveyor Ltd', submitted: '3 days ago', priority: 'medium' },
    { id: 4, type: 'dispute', title: 'Boundary Dispute Resolution', user: 'Two landowners', submitted: '5 days ago', priority: 'high' },
    { id: 5, type: 'system', title: 'API Access Request', user: 'Development Team', submitted: '1 week ago', priority: 'low' },
  ];

  // System metrics
  const systemMetrics = [
    { label: 'API Response Time', value: '124ms', status: 'good', icon: Cpu },
    { label: 'Server Uptime', value: '99.98%', status: 'excellent', icon: Server },
    { label: 'Active Sessions', value: '842', status: 'normal', icon: Users },
    { label: 'Database Size', value: '2.4 GB', status: 'normal', icon: Database },
    { label: 'Blockchain Nodes', value: '12', status: 'good', icon: Network },
    { label: 'Security Level', value: 'High', status: 'excellent', icon: ShieldCheck },
  ];

  // Regional distribution
  const regionalData = [
    { region: 'Centre', properties: 452, users: 845, revenue: '68M XAF' },
    { region: 'Littoral', properties: 387, users: 721, revenue: '58M XAF' },
    { region: 'West', properties: 256, users: 432, revenue: '34M XAF' },
    { region: 'Southwest', properties: 189, users: 321, revenue: '28M XAF' },
    { region: 'North', properties: 142, users: 256, revenue: '22M XAF' },
    { region: 'Far North', properties: 98, users: 178, revenue: '15M XAF' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Shield className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Administrator Dashboard</h1>
                <p className="text-sm text-slate-400">System overview and management</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 hover:bg-slate-800/50 rounded-lg transition relative">
                  <Bell className="h-5 w-5 text-slate-400" />
                  <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                </button>
              </div>
              
              <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg">
                <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-400 font-bold">A</span>
                </div>
                <div>
                  <div className="text-sm font-medium">Administrator</div>
                  <div className="text-xs text-slate-400">Super Admin</div>
                </div>
              </div>
              
              <button className="p-2 hover:bg-slate-800/50 rounded-lg transition border border-slate-700">
                <Settings className="h-5 w-5 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className={`flex items-center space-x-1 text-sm font-medium ${
                  stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {stat.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.title}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - System & Activities */}
          <div className="lg:col-span-2 space-y-8">
            {/* System Health */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">System Health</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-emerald-400">All systems operational</span>
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {systemMetrics.map((metric, index) => (
                  <div key={index} className="bg-slate-900/30 border border-slate-700 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 rounded-lg ${
                        metric.status === 'excellent' ? 'bg-emerald-500/10' :
                        metric.status === 'good' ? 'bg-blue-500/10' :
                        'bg-slate-800'
                      }`}>
                        <metric.icon className={`h-4 w-4 ${
                          metric.status === 'excellent' ? 'text-emerald-400' :
                          metric.status === 'good' ? 'text-blue-400' :
                          'text-slate-400'
                        }`} />
                      </div>
                      <div className="text-sm font-medium">{metric.label}</div>
                    </div>
                    <div className={`text-xl font-bold ${
                      metric.status === 'excellent' ? 'text-emerald-400' :
                      metric.status === 'good' ? 'text-blue-400' :
                      'text-white'
                    }`}>
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Regional Distribution */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Regional Distribution</h2>
                <select 
                  className="bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-1 text-sm text-white"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                </select>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 text-sm font-medium text-slate-400">Region</th>
                      <th className="text-left py-3 text-sm font-medium text-slate-400">Properties</th>
                      <th className="text-left py-3 text-sm font-medium text-slate-400">Users</th>
                      <th className="text-left py-3 text-sm font-medium text-slate-400">Revenue</th>
                      <th className="text-left py-3 text-sm font-medium text-slate-400">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regionalData.map((region, index) => (
                      <tr key={index} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                        <td className="py-3">
                          <div className="flex items-center space-x-2">
                            <Globe className="h-4 w-4 text-blue-400" />
                            <span className="font-medium">{region.region}</span>
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center space-x-2">
                            <Home className="h-4 w-4 text-slate-500" />
                            <span>{region.properties}</span>
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-slate-500" />
                            <span>{region.users}</span>
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center space-x-2">
                            <DollarSign className="h-4 w-4 text-slate-500" />
                            <span>{region.revenue}</span>
                          </div>
                        </td>
                        <td className="py-3">
                          <button className="text-xs text-blue-400 hover:text-blue-300">
                            View details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Actions & Notifications */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Quick Actions</h2>
                <span className="text-sm text-slate-500">Admin tools</span>
              </div>
              
              <div className="space-y-3">
                <Link
                  href="/admin/users"
                  className="flex items-center space-x-3 p-3 bg-slate-900/50 hover:bg-slate-900 border border-slate-700 rounded-lg transition group"
                >
                  <Users className="h-5 w-5 text-blue-400 group-hover:scale-110 transition" />
                  <div>
                    <div className="font-medium">User Management</div>
                    <div className="text-xs text-slate-500">Manage user accounts and permissions</div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-500 ml-auto" />
                </Link>
                
                <Link
                  href="/admin/approvals"
                  className="flex items-center space-x-3 p-3 bg-slate-900/50 hover:bg-slate-900 border border-slate-700 rounded-lg transition group"
                >
                  <CheckCircle className="h-5 w-5 text-emerald-400 group-hover:scale-110 transition" />
                  <div>
                    <div className="font-medium">Pending Approvals</div>
                    <div className="text-xs text-slate-500">Review and approve submissions</div>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded">47</span>
                  </div>
                </Link>
                
                <Link
                  href="/admin/audit"
                  className="flex items-center space-x-3 p-3 bg-slate-900/50 hover:bg-slate-900 border border-slate-700 rounded-lg transition group"
                >
                  <FileText className="h-5 w-5 text-purple-400 group-hover:scale-110 transition" />
                  <div>
                    <div className="font-medium">Audit Logs</div>
                    <div className="text-xs text-slate-500">View system activity logs</div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-500 ml-auto" />
                </Link>
                
                <Link
                  href="/admin/settings"
                  className="flex items-center space-x-3 p-3 bg-slate-900/50 hover:bg-slate-900 border border-slate-700 rounded-lg transition group"
                >
                  <Settings className="h-5 w-5 text-slate-400 group-hover:scale-110 transition" />
                  <div>
                    <div className="font-medium">System Settings</div>
                    <div className="text-xs text-slate-500">Configure system parameters</div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-500 ml-auto" />
                </Link>
              </div>
            </div>

            {/* Pending Approvals */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Pending Approvals</h2>
                <Link href="/admin/approvals" className="text-sm text-blue-400 hover:text-blue-300">
                  View all
                </Link>
              </div>
              
              <div className="space-y-4">
                {pendingApprovals.map((approval) => (
                  <div key={approval.id} className="p-4 bg-slate-900/30 rounded-lg border border-slate-700">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-medium text-white mb-1">{approval.title}</div>
                        <div className="text-sm text-slate-400">Submitted by {approval.user}</div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        approval.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                        approval.priority === 'medium' ? 'bg-amber-500/20 text-amber-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {approval.priority}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-slate-500">{approval.submitted}</span>
                      <button className="text-xs text-blue-400 hover:text-blue-300">
                        Review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity & Security */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Activity */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Recent Activity</h2>
              <RefreshCw className="h-4 w-4 text-slate-400" />
            </div>
            
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${
                    activity.status === 'success' ? 'bg-emerald-500/10' :
                    activity.status === 'warning' ? 'bg-amber-500/10' :
                    activity.status === 'danger' ? 'bg-red-500/10' :
                    'bg-blue-500/10'
                  }`}>
                    {activity.type === 'registration' && <Home className="h-4 w-4 text-blue-400" />}
                    {activity.type === 'dispute' && <AlertCircle className="h-4 w-4 text-amber-400" />}
                    {activity.type === 'user' && <Users className="h-4 w-4 text-purple-400" />}
                    {activity.type === 'system' && <Server className="h-4 w-4 text-emerald-400" />}
                    {activity.type === 'security' && <Shield className="h-4 w-4 text-red-400" />}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white">{activity.action}</div>
                    <div className="text-xs text-slate-500">
                      {activity.user} • {activity.time}
                    </div>
                  </div>
                  <button className="text-slate-500 hover:text-white">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Security Overview */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Security Overview</h2>
              <Shield className="h-5 w-5 text-emerald-400" />
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-400">System Security Score</span>
                  <span className="text-emerald-400 font-bold">94/100</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-900/30 rounded-lg border border-slate-700">
                  <Lock className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-white">Encryption</div>
                  <div className="text-xs text-slate-400">AES-256</div>
                </div>
                
                <div className="text-center p-4 bg-slate-900/30 rounded-lg border border-slate-700">
                  <ShieldCheck className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-white">Authentication</div>
                  <div className="text-xs text-slate-400">2FA Enabled</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm">Active Threat Protection</span>
                  </div>
                  <span className="text-xs text-emerald-400">Enabled</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm">Regular Security Audits</span>
                  </div>
                  <span className="text-xs text-emerald-400">Last: 2 days ago</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-4 w-4 text-amber-400" />
                    <span className="text-sm">Suspicious Login Attempts</span>
                  </div>
                  <span className="text-xs text-amber-400">3 today</span>
                </div>
              </div>
              
              <button className="w-full py-2 text-sm bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition border border-blue-500/30">
                View Security Report
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <PieChart className="h-5 w-5 text-blue-400" />
              <h3 className="font-medium">Performance</h3>
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.7%</div>
            <div className="text-sm text-slate-400">System uptime this month</div>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <UserCheck className="h-5 w-5 text-emerald-400" />
              <h3 className="font-medium">User Satisfaction</h3>
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.8/5</div>
            <div className="text-sm text-slate-400">Based on 156 reviews</div>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="h-5 w-5 text-purple-400" />
              <h3 className="font-medium">Compliance</h3>
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-sm text-slate-400">Regulatory requirements met</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Activity className="h-3 w-3 text-emerald-400" />
                <span>System Status: Operational</span>
              </div>
              <span className="text-slate-600">•</span>
              <span>Last updated: {new Date().toLocaleTimeString()}</span>
            </div>
            
            <div className="mt-2 md:mt-0">
              Smart Land Registry Admin • Version 2.1.4 • Ministry of Lands & Survey
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}