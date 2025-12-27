"use client";

import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  Search, 
  X, 
  Filter, 
  Calendar, 
  User, 
  MapPin, 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  MoreVertical,
  Download,
  Share2,
  MessageSquare,
  Lock,
  Unlock,
  Eye,
  Edit,
  Trash2,
  Plus,
  ChevronDown,
  TrendingUp,
  BarChart3,
  Bell,
  Upload,
  Award,
  Scale,
  Users,
  Landmark,
  Archive,
  RefreshCw,
  ExternalLink,
  List
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

// Mock dispute data
const mockDisputes = [
  {
    id: 'DIS-001',
    title: 'Boundary Encroachment Dispute',
    description: 'A dispute has been raised by neighbor John Doe concerning boundary encroachment of 2.5 meters on Plot 123-A. Survey reports indicate a deviation from official records. The dispute involves historical land use patterns.',
    status: 'open',
    priority: 'high',
    date: '2024-03-15',
    lastUpdated: '2024-03-20',
    claimant: 'John Doe',
    defendant: 'Sarah Chen',
    propertyId: 'PROP-7890',
    location: 'District 5, Sector B',
    category: 'boundary',
    assignedTo: 'Officer Zhang',
    evidenceCount: 8,
    hearingDate: '2024-04-10',
    estimatedResolution: '30 days',
    tags: ['survey', 'encroachment', 'neighbor'],
  },
  {
    id: 'DIS-002',
    title: 'Multiple Ownership Claim',
    description: 'Two parties claiming ownership of Property #456-C based on inheritance documents from 1985. Requires verification of historical records and title chain analysis.',
    status: 'open',
    priority: 'critical',
    date: '2024-03-10',
    lastUpdated: '2024-03-19',
    claimant: 'Michael Rodriguez',
    defendant: 'Elizabeth Wong',
    propertyId: 'PROP-4567',
    location: 'Northern Region',
    category: 'ownership',
    assignedTo: 'Arbitrator Kim',
    evidenceCount: 15,
    hearingDate: '2024-04-05',
    estimatedResolution: '45 days',
    tags: ['inheritance', 'title', 'historical'],
  },
  {
    id: 'DIS-003',
    title: 'Land Titling Error',
    description: 'Government registry identified incorrect dimensions in official land title for Parcel 789-B. Requires coordinate verification and GIS alignment.',
    status: 'resolved',
    priority: 'medium',
    date: '2024-02-01',
    lastUpdated: '2024-02-28',
    claimant: 'Land Registry Dept',
    defendant: 'N/A',
    propertyId: 'PROP-1234',
    location: 'Central Zone',
    category: 'administrative',
    assignedTo: 'Officer Patel',
    evidenceCount: 12,
    hearingDate: '2024-02-15',
    resolvedDate: '2024-02-28',
    resolution: 'Title corrected; boundaries updated',
    tags: ['government', 'correction', 'GIS'],
  },
  {
    id: 'DIS-004',
    title: 'Easement Rights Dispute',
    description: 'Access road usage rights dispute between commercial property owner and residential community.',
    status: 'in_progress',
    priority: 'high',
    date: '2024-03-05',
    lastUpdated: '2024-03-18',
    claimant: 'Green Valley Community',
    defendant: 'Skyline Developers',
    propertyId: 'PROP-9012',
    location: 'Western Suburb',
    category: 'easement',
    assignedTo: 'Mediator Singh',
    evidenceCount: 6,
    hearingDate: '2024-03-25',
    estimatedResolution: '60 days',
    tags: ['access', 'community', 'development'],
  },
  {
    id: 'DIS-005',
    title: 'Inheritance Document Verification',
    description: 'Verification required for 1950s inheritance documents presented as proof of ownership.',
    status: 'pending_review',
    priority: 'medium',
    date: '2024-03-12',
    lastUpdated: '2024-03-12',
    claimant: 'Robert Johnson',
    defendant: 'State Registry',
    propertyId: 'PROP-3456',
    location: 'Historic District',
    category: 'verification',
    assignedTo: 'Review Committee',
    evidenceCount: 4,
    hearingDate: 'TBD',
    estimatedResolution: '90 days',
    tags: ['verification', 'document', 'historic'],
  },
  {
    id: 'DIS-006',
    title: 'Construction Permit Violation',
    description: 'Alleged violation of construction boundaries by adjacent property development.',
    status: 'escalated',
    priority: 'critical',
    date: '2024-03-08',
    lastUpdated: '2024-03-21',
    claimant: 'Residents Association',
    defendant: 'BuildCorp Inc.',
    propertyId: 'PROP-6789',
    location: 'Riverside Area',
    category: 'construction',
    assignedTo: 'Senior Arbitrator Lee',
    evidenceCount: 9,
    hearingDate: '2024-04-02',
    estimatedResolution: '20 days',
    tags: ['construction', 'violation', 'safety'],
  },
];

// Dispute card component
const DisputeCard = ({ dispute, onSelect, onAction }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'open': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'resolved': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'in_progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'pending_review': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'escalated': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-emerald-500';
      default: return 'bg-slate-500';
    }
  };

  return (
    <div 
      className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer"
      onClick={() => onSelect(dispute)}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${getStatusColor(dispute.status)}`}>
              {dispute.status.replace('_', ' ').toUpperCase()}
            </span>
            <div className={`w-2 h-2 rounded-full ${getPriorityColor(dispute.priority)}`} />
          </div>
          <h3 className="text-lg font-bold text-white truncate group-hover:text-blue-400 transition-colors">
            {dispute.title}
          </h3>
          <p className="text-sm text-slate-400 mt-1">ID: {dispute.id} • {dispute.category}</p>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onAction(dispute);
          }}
          className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
        >
          <MoreVertical className="w-5 h-5 text-slate-400" />
        </button>
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-slate-500 text-xs">Claimant</p>
            <p className="text-white font-medium truncate">{dispute.claimant}</p>
          </div>
          <div>
            <p className="text-slate-500 text-xs">Property ID</p>
            <p className="text-white font-medium">{dispute.propertyId}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-slate-500" />
              <span className="text-sm text-slate-400">{dispute.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <FileText className="w-4 h-4 text-slate-500" />
              <span className="text-sm text-slate-400">{dispute.evidenceCount} docs</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {dispute.tags.slice(0, 2).map((tag, idx) => (
              <span key={idx} className="px-2 py-1 bg-slate-800/50 text-slate-300 text-xs rounded-md">
                {tag}
              </span>
            ))}
            {dispute.tags.length > 2 && (
              <span className="px-2 py-1 bg-slate-800/50 text-slate-300 text-xs rounded-md">
                +{dispute.tags.length - 2}
              </span>
            )}
          </div>
        </div>

        {dispute.status === 'open' && dispute.hearingDate && (
          <div className="mt-3 pt-3 border-t border-slate-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-amber-400">Hearing: {dispute.hearingDate}</span>
              </div>
              <span className="text-xs text-slate-500">{dispute.estimatedResolution}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Stats card component
const StatsCard = ({ title, value, change, icon: Icon, color, trend }) => {
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <div className={`p-2 rounded-lg bg-${color}-500/10`}>
          <Icon className={`w-6 h-6 text-${color}-400`} />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-sm ${trend > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            <TrendingUp className={`w-4 h-4 ${trend > 0 ? '' : 'rotate-180'}`} />
            {Math.abs(trend)}%
          </div>
        )}
      </div>
      <div>
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-sm text-slate-400 mt-1">{title}</p>
        {change && (
          <p className="text-xs text-slate-500 mt-2">{change}</p>
        )}
      </div>
    </div>
  );
};

// Filter sidebar component
const FilterSidebar = ({ filters, onFilterChange, categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg mb-4"
      >
        <Filter className="w-5 h-5" />
        <span>Filters</span>
      </button>

      <div className={`
        ${isOpen ? 'block' : 'hidden'}
        md:block fixed md:relative inset-0 md:inset-auto z-40 md:z-auto
        bg-slate-900 md:bg-transparent p-4 md:p-0
      `}>
        {isOpen && (
          <div className="absolute top-4 right-4 md:hidden">
            <button onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
        )}
        
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filters
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Status</label>
              <div className="space-y-2">
                {['all', 'open', 'in_progress', 'pending_review', 'escalated', 'resolved'].map(status => (
                  <button
                    key={status}
                    onClick={() => onFilterChange('status', status)}
                    className={`flex items-center justify-between w-full p-2 rounded-lg text-sm transition-colors ${
                      filters.status === status
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'hover:bg-slate-800/50 text-slate-400'
                    }`}
                  >
                    <span>{status.replace('_', ' ').toUpperCase()}</span>
                    <span className="text-xs text-slate-500">
                      {mockDisputes.filter(d => status === 'all' || d.status === status).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Priority</label>
              <div className="space-y-2">
                {['all', 'critical', 'high', 'medium', 'low'].map(priority => (
                  <button
                    key={priority}
                    onClick={() => onFilterChange('priority', priority)}
                    className={`flex items-center justify-between w-full p-2 rounded-lg text-sm transition-colors ${
                      filters.priority === priority
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'hover:bg-slate-800/50 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        priority === 'critical' ? 'bg-red-500' :
                        priority === 'high' ? 'bg-orange-500' :
                        priority === 'medium' ? 'bg-yellow-500' :
                        priority === 'low' ? 'bg-emerald-500' :
                        'bg-slate-500'
                      }`} />
                      <span>{priority.toUpperCase()}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => onFilterChange('category', category)}
                    className={`flex items-center justify-between w-full p-2 rounded-lg text-sm transition-colors ${
                      filters.category === category
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'hover:bg-slate-800/50 text-slate-400'
                    }`}
                  >
                    <span>{category.toUpperCase()}</span>
                    <span className="text-xs text-slate-500">
                      {mockDisputes.filter(d => d.category === category).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => onFilterChange('reset', null)}
            className="w-full mt-6 px-4 py-2 text-sm bg-slate-800/50 text-slate-400 hover:text-white rounded-lg border border-slate-700 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </>
  );
};

// Advanced modal component - FIXED VERSION
const DisputeModal = ({ dispute, onClose, onResolve, onAction }) => {
  if (!dispute) return null;

  const renderTimeline = () => {
    const timeline = [
      { date: dispute.date, event: 'Dispute Filed', status: 'filed' },
      { date: '2024-03-18', event: 'Evidence Submitted', status: 'evidence' },
      { date: dispute.hearingDate, event: 'Hearing Scheduled', status: 'scheduled' },
      ...(dispute.status === 'resolved' ? [
        { date: dispute.resolvedDate, event: 'Resolved', status: 'resolved' }
      ] : [])
    ];

    return (
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-white">Timeline</h4>
        <div className="relative pl-8">
          {timeline.map((item, index) => (
            <div key={index} className="relative pb-8 last:pb-0">
              {index < timeline.length - 1 && (
                <div className="absolute left-[15px] top-6 bottom-0 w-0.5 bg-slate-700" />
              )}
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                  item.status === 'resolved' ? 'border-emerald-500' :
                  item.status === 'scheduled' ? 'border-blue-500' :
                  'border-slate-500'
                }`}>
                  <div className={`w-3 h-3 rounded-full ${
                    item.status === 'resolved' ? 'bg-emerald-500' :
                    item.status === 'scheduled' ? 'bg-blue-500' :
                    'bg-slate-500'
                  }`} />
                </div>
                <div>
                  <p className="font-medium text-white">{item.event}</p>
                  <p className="text-sm text-slate-400">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex-shrink-0">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                  dispute.status === 'open' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                  dispute.status === 'resolved' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
                  'bg-blue-500/20 text-blue-400 border-blue-500/30'
                }`}>
                  {dispute.status.replace('_', ' ').toUpperCase()}
                </span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  dispute.priority === 'critical' ? 'bg-red-500 text-white' :
                  dispute.priority === 'high' ? 'bg-orange-500 text-white' :
                  dispute.priority === 'medium' ? 'bg-yellow-500 text-black' :
                  'bg-emerald-500 text-white'
                }`}>
                  {dispute.priority.toUpperCase()}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white">{dispute.title}</h2>
              <p className="text-slate-400 mt-1">ID: {dispute.id} • Category: {dispute.category}</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                <Download className="w-5 h-5 text-slate-400" />
              </button>
              <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                <Share2 className="w-5 h-5 text-slate-400" />
              </button>
              <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Content - Now scrollable but doesn't push buttons off screen */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Description</h3>
                <p className="text-slate-300 bg-slate-800/30 p-4 rounded-lg border border-slate-700">
                  {dispute.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700">
                  <h4 className="text-sm font-medium text-slate-400 mb-2">Claimant</h4>
                  <p className="text-white font-medium">{dispute.claimant}</p>
                </div>
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700">
                  <h4 className="text-sm font-medium text-slate-400 mb-2">Defendant</h4>
                  <p className="text-white font-medium">{dispute.defendant}</p>
                </div>
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700">
                  <h4 className="text-sm font-medium text-slate-400 mb-2">Property ID</h4>
                  <p className="text-white font-medium">{dispute.propertyId}</p>
                </div>
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700">
                  <h4 className="text-sm font-medium text-slate-400 mb-2">Assigned To</h4>
                  <p className="text-white font-medium">{dispute.assignedTo}</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-3">Evidence & Documents</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[...Array(dispute.evidenceCount)].map((_, i) => (
                    <div key={i} className="bg-slate-800/30 border border-slate-700 rounded-lg p-3">
                      <FileText className="w-8 h-8 text-blue-400 mb-2" />
                      <p className="text-sm text-white truncate">Document_{i + 1}.pdf</p>
                      <p className="text-xs text-slate-500">2.4 MB</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {renderTimeline()}

              <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700">
                <h4 className="text-lg font-bold text-white mb-3">Key Details</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-slate-400">Date Filed</p>
                    <p className="text-white font-medium">{dispute.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Last Updated</p>
                    <p className="text-white font-medium">{dispute.lastUpdated}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="text-white font-medium">{dispute.location}</p>
                  </div>
                  {dispute.hearingDate && (
                    <div>
                      <p className="text-sm text-slate-400">Hearing Date</p>
                      <p className="text-white font-medium">{dispute.hearingDate}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700">
                <h4 className="text-lg font-bold text-white mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {dispute.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions - Now always visible at bottom */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex-shrink-0">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm">
              <Lock className="w-4 h-4" />
              <span>Secure Case #{dispute.id}</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {dispute.status !== 'resolved' && (
                <>
                  <button className="px-3 py-1.5 text-xs sm:text-sm bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1">
                    <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Comment</span>
                  </button>
                  <button
                    onClick={() => onResolve(dispute.id)}
                    className="px-3 py-1.5 text-xs sm:text-sm bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-1"
                  >
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Resolve</span>
                  </button>
                  <button className="px-3 py-1.5 text-xs sm:text-sm bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-1">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Schedule</span>
                  </button>
                </>
              )}
              <button className="px-3 py-1.5 text-xs sm:text-sm bg-slate-800 text-slate-300 font-medium rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-1">
                <Archive className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Archive</span>
              </button>
              {dispute.status === 'resolved' && (
                <button className="px-3 py-1.5 text-xs sm:text-sm bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-1">
                  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Certificate</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component
const DisputePage = () => {
  const [disputes, setDisputes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDispute, setSelectedDispute] = useState(null);
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    category: 'all',
    search: ''
  });
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setDisputes(mockDisputes);
      setLoading(false);
    }, 1500);
  }, []);

  const handleFilterChange = (type, value) => {
    if (type === 'reset') {
      setFilters({
        status: 'all',
        priority: 'all',
        category: 'all',
        search: ''
      });
    } else {
      setFilters(prev => ({ ...prev, [type]: value }));
    }
  };

  const handleResolveDispute = (id) => {
    setDisputes(prevDisputes =>
      prevDisputes.map(d => 
        d.id === id 
          ? { 
              ...d, 
              status: 'resolved',
              resolvedDate: new Date().toISOString().split('T')[0],
              resolution: 'Dispute resolved through mediation'
            } 
          : d
      )
    );
    setSelectedDispute(prev => 
      prev && prev.id === id 
        ? { 
            ...prev, 
            status: 'resolved',
            resolvedDate: new Date().toISOString().split('T')[0],
            resolution: 'Dispute resolved through mediation'
          } 
        : prev
    );
  };

  const filteredDisputes = disputes.filter(dispute => {
    if (filters.status !== 'all' && dispute.status !== filters.status) return false;
    if (filters.priority !== 'all' && dispute.priority !== filters.priority) return false;
    if (filters.category !== 'all' && dispute.category !== filters.category) return false;
    if (filters.search && !dispute.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !dispute.id.toLowerCase().includes(filters.search.toLowerCase()) &&
        !dispute.description.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });

  const stats = {
    total: disputes.length,
    open: disputes.filter(d => d.status === 'open').length,
    resolved: disputes.filter(d => d.status === 'resolved').length,
    critical: disputes.filter(d => d.priority === 'critical').length,
  };

  const categoryData = [
    { name: 'Boundary', value: disputes.filter(d => d.category === 'boundary').length },
    { name: 'Ownership', value: disputes.filter(d => d.category === 'ownership').length },
    { name: 'Administrative', value: disputes.filter(d => d.category === 'administrative').length },
    { name: 'Easement', value: disputes.filter(d => d.category === 'easement').length },
    { name: 'Construction', value: disputes.filter(d => d.category === 'construction').length },
  ];

  const categories = [...new Set(disputes.map(d => d.category))];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 text-slate-100 p-4 md:p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl">
              <ShieldAlert className="w-10 h-10 text-red-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Dispute Resolution Center
              </h1>
              <p className="text-slate-400 mt-1">Manage property conflicts with advanced arbitration tools</p>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all">
            <Plus className="w-5 h-5" />
            File New Dispute
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg bg-blue-500/10`}>
                <Scale className={`w-6 h-6 text-blue-400`} />
              </div>
              <div className={`flex items-center gap-1 text-sm text-emerald-400`}>
                <TrendingUp className={`w-4 h-4`} />
                12%
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{stats.total}</p>
              <p className="text-sm text-slate-400 mt-1">Total Disputes</p>
              <p className="text-xs text-slate-500 mt-2">+12% from last month</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg bg-red-500/10`}>
                <AlertTriangle className={`w-6 h-6 text-red-400`} />
              </div>
              <div className={`flex items-center gap-1 text-sm text-emerald-400`}>
                <TrendingUp className={`w-4 h-4`} />
                8%
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{stats.open}</p>
              <p className="text-sm text-slate-400 mt-1">Open Cases</p>
              <p className="text-xs text-slate-500 mt-2">Requires attention</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg bg-emerald-500/10`}>
                <CheckCircle className={`w-6 h-6 text-emerald-400`} />
              </div>
              <div className={`flex items-center gap-1 text-sm text-emerald-400`}>
                <TrendingUp className={`w-4 h-4`} />
                15%
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{stats.resolved}</p>
              <p className="text-sm text-slate-400 mt-1">Resolved</p>
              <p className="text-xs text-slate-500 mt-2">87% success rate</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg bg-orange-500/10`}>
                <Bell className={`w-6 h-6 text-orange-400`} />
              </div>
              <div className={`flex items-center gap-1 text-sm text-red-400`}>
                <TrendingUp className={`w-4 h-4 rotate-180`} />
                5%
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{stats.critical}</p>
              <p className="text-sm text-slate-400 mt-1">Critical Priority</p>
              <p className="text-xs text-slate-500 mt-2">Immediate action needed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <FilterSidebar 
            filters={filters} 
            onFilterChange={handleFilterChange}
            categories={categories}
          />

          {/* Analytics Card */}
          <div className="mt-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Analytics
            </h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value} cases`, 'Count']}
                    contentStyle={{ 
                      backgroundColor: '#1e293b',
                      borderColor: '#475569',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-slate-400 mt-2">Disputes by Category</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Search and Controls */}
          <div className="mb-6 p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search disputes by ID, title, or description..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-slate-900/50 border border-slate-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-slate-800 text-white' : 'text-slate-400'}`}
                  >
                    <div className="grid grid-cols-2 gap-1 w-5 h-5">
                      <div className="bg-current rounded-sm" />
                      <div className="bg-current rounded-sm" />
                      <div className="bg-current rounded-sm" />
                      <div className="bg-current rounded-sm" />
                    </div>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-slate-800 text-white' : 'text-slate-400'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
                <button className="p-2.5 bg-slate-900/50 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors">
                  <RefreshCw className="w-5 h-5" />
                </button>
                <button className="p-2.5 bg-slate-900/50 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-slate-800 mb-6 overflow-x-auto">
            {['all', 'open', 'in_progress', 'pending_review', 'escalated', 'resolved'].map(tab => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  handleFilterChange('status', tab === 'all' ? 'all' : tab);
                }}
                className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? 'text-blue-400 border-b-2 border-blue-500'
                    : 'text-slate-400 hover:text-slate-300'
                }`}
              >
                {tab.replace('_', ' ').toUpperCase()}
                <span className="ml-2 text-xs bg-slate-800 px-2 py-1 rounded">
                  {disputes.filter(d => tab === 'all' || d.status === tab).length}
                </span>
              </button>
            ))}
          </div>

          {/* Disputes Grid/List */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-slate-800/20 border border-slate-700 rounded-xl p-4 animate-pulse">
                  <div className="h-4 bg-slate-700 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-slate-700 rounded w-1/2 mb-4" />
                  <div className="space-y-2">
                    <div className="h-2 bg-slate-700 rounded" />
                    <div className="h-2 bg-slate-700 rounded w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Error Loading Disputes</h3>
              <p className="text-slate-400">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
              >
                Retry
              </button>
            </div>
          ) : filteredDisputes.length > 0 ? (
            <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'space-y-4'} gap-4`}>
              {filteredDisputes.map(dispute => (
                <DisputeCard 
                  key={dispute.id} 
                  dispute={dispute} 
                  onSelect={setSelectedDispute}
                  onAction={(d) => console.log('Action on:', d.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No Disputes Found</h3>
              <p className="text-slate-400 mb-6 max-w-md mx-auto">
                No disputes match your current filters. Try adjusting your search criteria or create a new dispute.
              </p>
              <div className="flex gap-3 justify-center">
                <button 
                  onClick={() => handleFilterChange('reset', null)}
                  className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
                >
                  Clear Filters
                </button>
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                  File New Dispute
                </button>
              </div>
            </div>
          )}

          {/* Quick Stats Bar */}
          <div className="mt-8 p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{disputes.length}</p>
                <p className="text-sm text-slate-400">Total Cases</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-400">
                  {disputes.filter(d => d.status === 'resolved').length}
                </p>
                <p className="text-sm text-slate-400">Resolved</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-400">
                  {disputes.filter(d => d.priority === 'high' || d.priority === 'critical').length}
                </p>
                <p className="text-sm text-slate-400">High Priority</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">
                  {Math.round((disputes.filter(d => d.status === 'resolved').length / disputes.length) * 100) || 0}%
                </p>
                <p className="text-sm text-slate-400">Resolution Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisputeModal 
        dispute={selectedDispute} 
        onClose={() => setSelectedDispute(null)} 
        onResolve={handleResolveDispute}
        onAction={(action) => console.log('Modal action:', action)}
      />

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-slate-800 text-center text-sm text-slate-500">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <ShieldAlert className="w-4 h-4" />
            <span>Secure Dispute Resolution System v2.1</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-blue-400">{filteredDisputes.length} cases shown</span>
            <span>•</span>
            <span>Last updated: Today</span>
            <span>•</span>
            <button className="text-blue-400 hover:text-blue-300 transition-colors">
              Help & Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisputePage;