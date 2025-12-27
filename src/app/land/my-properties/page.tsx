'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Home, 
  Building, 
  Sprout, 
  Filter, 
  Search, 
  Download, 
  Share2, 
  Eye,
  Edit,
  MoreVertical,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  BarChart3,
  PlusCircle,
  Grid,
  List,
  ChevronDown,
  Ruler,
  Users,
  Calendar,
  Shield,
  ArrowUpRight,
  Trash2,
  RefreshCw,
  Printer
} from 'lucide-react';
import Link from 'next/link';

export default function MyPropertiesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProperties, setSelectedProperties] = useState<number[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // User's properties data
  const userProperties = [
    {
      id: 1,
      name: 'Family Residential Plot',
      location: 'Yaoundé, Centre Region',
      coordinates: '3.8480° N, 11.5021° E',
      area: '500m²',
      price: '15,000,000 XAF',
      status: 'registered',
      type: 'residential',
      registrationDate: '2024-01-15',
      lastUpdated: '2 days ago',
      documents: 5,
      boundaries: true,
      verified: true,
      taxPaid: true,
      mortgage: false,
      images: 3,
      nextDeadline: '2024-12-31',
      ownerShare: '100%'
    },
    {
      id: 2,
      name: 'Commercial Plaza Site',
      location: 'Douala, Bonanjo',
      coordinates: '4.0511° N, 9.7679° E',
      area: '1200m²',
      price: '45,000,000 XAF',
      status: 'pending',
      type: 'commercial',
      registrationDate: '2024-02-10',
      lastUpdated: '1 week ago',
      documents: 3,
      boundaries: false,
      verified: true,
      taxPaid: false,
      mortgage: true,
      images: 2,
      nextDeadline: '2024-06-30',
      ownerShare: '100%'
    },
    {
      id: 3,
      name: 'Farmland',
      location: 'Bafoussam, West Region',
      coordinates: '5.4667° N, 10.4167° E',
      area: '5000m²',
      price: '25,000,000 XAF',
      status: 'registered',
      type: 'agricultural',
      registrationDate: '2023-11-05',
      lastUpdated: '1 month ago',
      documents: 7,
      boundaries: true,
      verified: true,
      taxPaid: true,
      mortgage: false,
      images: 5,
      nextDeadline: '2024-10-15',
      ownerShare: '100%'
    },
    {
      id: 4,
      name: 'Co-owned Plot',
      location: 'Limbe, Southwest',
      coordinates: '4.0244° N, 9.2149° E',
      area: '2500m²',
      price: '35,000,000 XAF',
      status: 'under-review',
      type: 'residential',
      registrationDate: '2024-03-01',
      lastUpdated: '3 days ago',
      documents: 4,
      boundaries: true,
      verified: false,
      taxPaid: true,
      mortgage: false,
      images: 1,
      nextDeadline: '2024-04-15',
      ownerShare: '50%'
    },
    {
      id: 5,
      name: 'Vacant Investment Plot',
      location: 'Garoua, North Region',
      coordinates: '9.3077° N, 13.4025° E',
      area: '800m²',
      price: '8,000,000 XAF',
      status: 'available',
      type: 'residential',
      registrationDate: '2024-01-30',
      lastUpdated: '2 weeks ago',
      documents: 2,
      boundaries: true,
      verified: true,
      taxPaid: true,
      mortgage: false,
      images: 0,
      nextDeadline: '2024-09-30',
      ownerShare: '100%'
    },
    {
      id: 6,
      name: 'Industrial Zone Plot',
      location: 'Bamenda, Northwest',
      coordinates: '5.9631° N, 10.1591° E',
      area: '3500m²',
      price: '60,000,000 XAF',
      status: 'registered',
      type: 'industrial',
      registrationDate: '2023-12-20',
      lastUpdated: '3 months ago',
      documents: 9,
      boundaries: true,
      verified: true,
      taxPaid: true,
      mortgage: true,
      images: 4,
      nextDeadline: '2024-11-20',
      ownerShare: '75%'
    },
  ];

  const filters = [
    { value: 'all', label: 'All Properties', count: userProperties.length },
    { value: 'registered', label: 'Registered', count: 4 },
    { value: 'pending', label: 'Pending', count: 1 },
    { value: 'under-review', label: 'Under Review', count: 1 },
    { value: 'mortgage', label: 'With Mortgage', count: 2 },
    { value: 'co-owned', label: 'Co-owned', count: 1 },
  ];

  const filteredProperties = userProperties.filter(property => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'registered') return property.status === 'registered';
    if (activeFilter === 'pending') return property.status === 'pending';
    if (activeFilter === 'under-review') return property.status === 'under-review';
    if (activeFilter === 'mortgage') return property.mortgage === true;
    if (activeFilter === 'co-owned') return property.ownerShare !== '100%';
    return true;
  }).filter(property => 
    property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = [
    { label: 'Total Value', value: '188M XAF', icon: BarChart3, color: 'text-blue-400', change: '+12%' },
    { label: 'Tax Status', value: '5/6 Paid', icon: CheckCircle, color: 'text-green-400', status: 'Good' },
    { label: 'Upcoming Deadlines', value: '3', icon: Calendar, color: 'text-amber-400', alert: true },
    { label: 'Document Compliance', value: '92%', icon: FileText, color: 'text-purple-400', status: 'Excellent' },
  ];

  const handleSelectProperty = (id: number) => {
    setSelectedProperties(prev => 
      prev.includes(id) 
        ? prev.filter(pid => pid !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedProperties.length === filteredProperties.length) {
      setSelectedProperties([]);
    } else {
      setSelectedProperties(filteredProperties.map(p => p.id));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Home className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">My Properties</h1>
                  <p className="text-sm text-slate-400">Manage all your registered land properties</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Link
                href="/land/register"
                className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-lg transition shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 flex items-center space-x-2"
              >
                <PlusCircle className="h-4 w-4" />
                <span>Add Property</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color.replace('text-', 'bg-')}/10`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                {stat.change && (
                  <div className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                    {stat.change}
                  </div>
                )}
                {stat.status && (
                  <div className={`text-xs font-medium px-2 py-1 rounded ${
                    stat.status === 'Good' ? 'bg-green-500/20 text-green-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {stat.status}
                  </div>
                )}
                {stat.alert && (
                  <div className="text-xs font-medium bg-amber-500/20 text-amber-400 px-2 py-1 rounded">
                    Attention
                  </div>
                )}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters & Quick Actions */}
          <div className="lg:w-1/4 space-y-6">
            {/* Search */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search properties..."
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Quick Filters */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <h3 className="font-medium text-white mb-4">Filter Properties</h3>
              <div className="space-y-2">
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`flex items-center justify-between w-full p-3 rounded-lg transition ${
                      activeFilter === filter.value 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'hover:bg-slate-800/50 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {filter.value === 'all' && <Home className="h-4 w-4" />}
                      {filter.value === 'registered' && <CheckCircle className="h-4 w-4" />}
                      {filter.value === 'pending' && <Clock className="h-4 w-4" />}
                      {filter.value === 'under-review' && <AlertCircle className="h-4 w-4" />}
                      {filter.value === 'mortgage' && <FileText className="h-4 w-4" />}
                      {filter.value === 'co-owned' && <Users className="h-4 w-4" />}
                      <span className="text-sm">{filter.label}</span>
                    </div>
                    <span className="text-xs bg-slate-800/50 px-2 py-1 rounded">{filter.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <h3 className="font-medium text-white mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="flex items-center space-x-2 p-3 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition w-full group">
                  <Download className="h-4 w-4 text-blue-400 group-hover:scale-110 transition" />
                  <span>Export Portfolio</span>
                </button>
                <button className="flex items-center space-x-2 p-3 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition w-full group">
                  <Printer className="h-4 w-4 text-purple-400 group-hover:scale-110 transition" />
                  <span>Print Reports</span>
                </button>
                <button className="flex items-center space-x-2 p-3 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition w-full group">
                  <BarChart3 className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition" />
                  <span>View Analytics</span>
                </button>
                <Link 
                  href="/land/map"
                  className="flex items-center space-x-2 p-3 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition group"
                >
                  <MapPin className="h-4 w-4 text-amber-400 group-hover:scale-110 transition" />
                  <span>View on Map</span>
                </Link>
              </div>
            </div>

            {/* Property Types */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <h3 className="font-medium text-white mb-4">Property Types</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2">
                  <div className="flex items-center space-x-2">
                    <Home className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-slate-400">Residential</span>
                  </div>
                  <span className="text-sm text-white">3</span>
                </div>
                <div className="flex items-center justify-between p-2">
                  <div className="flex items-center space-x-2">
                    <Building className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-slate-400">Commercial</span>
                  </div>
                  <span className="text-sm text-white">1</span>
                </div>
                <div className="flex items-center justify-between p-2">
                  <div className="flex items-center space-x-2">
                    <Sprout className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm text-slate-400">Agricultural</span>
                  </div>
                  <span className="text-sm text-white">1</span>
                </div>
                <div className="flex items-center justify-between p-2">
                  <div className="flex items-center space-x-2">
                    <Building className="h-4 w-4 text-amber-400" />
                    <span className="text-sm text-slate-400">Industrial</span>
                  </div>
                  <span className="text-sm text-white">1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Header Actions */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleSelectAll}
                    className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white"
                  >
                    <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                      selectedProperties.length === filteredProperties.length && filteredProperties.length > 0
                        ? 'bg-blue-500 border-blue-500'
                        : 'border-slate-600'
                    }`}>
                      {selectedProperties.length === filteredProperties.length && filteredProperties.length > 0 && (
                        <CheckCircle className="h-3 w-3 text-white" />
                      )}
                    </div>
                    <span>Select all ({filteredProperties.length})</span>
                  </button>
                  
                  {selectedProperties.length > 0 && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-blue-400">{selectedProperties.length} selected</span>
                      <button className="text-sm text-red-400 hover:text-red-300 flex items-center space-x-1">
                        <Trash2 className="h-4 w-4" />
                        <span>Delete</span>
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex items-center bg-slate-900/50 border border-slate-700 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-slate-800 text-white' : 'text-slate-400'}`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-slate-800 text-white' : 'text-slate-400'}`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition border border-slate-700">
                    <RefreshCw className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Properties Grid */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProperties.map((property) => (
                  <div key={property.id} className="group">
                    <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/30 transition">
                      {/* Property Header */}
                      <div className="p-5 border-b border-slate-700">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              {property.type === 'residential' && <Home className="h-5 w-5 text-blue-400" />}
                              {property.type === 'commercial' && <Building className="h-5 w-5 text-purple-400" />}
                              {property.type === 'agricultural' && <Sprout className="h-5 w-5 text-emerald-400" />}
                              {property.type === 'industrial' && <Building className="h-5 w-5 text-amber-400" />}
                              
                              <div>
                                <h3 className="font-bold text-lg text-white">{property.name}</h3>
                                <div className="flex items-center text-sm text-slate-400">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {property.location}
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => handleSelectProperty(property.id)}
                            className={`w-5 h-5 rounded border flex items-center justify-center ${
                              selectedProperties.includes(property.id)
                                ? 'bg-blue-500 border-blue-500'
                                : 'border-slate-600'
                            }`}
                          >
                            {selectedProperties.includes(property.id) && (
                              <CheckCircle className="h-3 w-3 text-white" />
                            )}
                          </button>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <Ruler className="h-3 w-3 text-slate-500" />
                            <span>{property.area}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className={`px-2 py-1 rounded text-xs ${
                              property.status === 'registered' ? 'bg-green-500/20 text-green-400' :
                              property.status === 'pending' ? 'bg-amber-500/20 text-amber-400' :
                              property.status === 'under-review' ? 'bg-blue-500/20 text-blue-400' :
                              'bg-purple-500/20 text-purple-400'
                            }`}>
                              {property.status}
                            </span>
                          </div>
                          {property.ownerShare !== '100%' && (
                            <div className="flex items-center space-x-1 text-blue-400">
                              <Users className="h-3 w-3" />
                              <span className="text-xs">{property.ownerShare}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Property Details */}
                      <div className="p-5">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-xs text-slate-500">Value</div>
                            <div className="text-sm text-white">{property.price}</div>
                          </div>
                          <div>
                            <div className="text-xs text-slate-500">Registered</div>
                            <div className="text-sm text-white">{property.registrationDate}</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-xs text-slate-500">Documents</div>
                            <div className="flex items-center space-x-2">
                              <FileText className="h-3 w-3 text-slate-400" />
                              <span className="text-sm text-white">{property.documents}</span>
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-slate-500">Tax Status</div>
                            <div className="flex items-center space-x-1">
                              {property.taxPaid ? (
                                <>
                                  <CheckCircle className="h-3 w-3 text-green-400" />
                                  <span className="text-xs text-green-400">Paid</span>
                                </>
                              ) : (
                                <>
                                  <AlertCircle className="h-3 w-3 text-amber-400" />
                                  <span className="text-xs text-amber-400">Pending</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {property.verified && (
                            <div className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded">
                              <Shield className="h-3 w-3 inline mr-1" />
                              Verified
                            </div>
                          )}
                          {property.boundaries && (
                            <div className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                              Boundaries Mapped
                            </div>
                          )}
                          {property.mortgage && (
                            <div className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded">
                              Mortgage
                            </div>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-2 pt-4 border-t border-slate-700">
                          <Link
                            href={`/land/${property.id}`}
                            className="flex-1 py-2 text-sm bg-slate-900/50 hover:bg-slate-900 text-white rounded-lg transition flex items-center justify-center space-x-2"
                          >
                            <Eye className="h-4 w-4" />
                            <span>View</span>
                          </Link>
                          <Link
                            href={`/land/${property.id}/edit`}
                            className="flex-1 py-2 text-sm bg-slate-900/50 hover:bg-slate-900 text-white rounded-lg transition flex items-center justify-center space-x-2"
                          >
                            <Edit className="h-4 w-4" />
                            <span>Edit</span>
                          </Link>
                          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition border border-slate-700">
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* List View */
              <div className="space-y-4">
                {filteredProperties.map((property) => (
                  <div key={property.id} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => handleSelectProperty(property.id)}
                          className={`w-5 h-5 rounded border flex items-center justify-center ${
                            selectedProperties.includes(property.id)
                              ? 'bg-blue-500 border-blue-500'
                              : 'border-slate-600'
                          }`}
                        >
                          {selectedProperties.includes(property.id) && (
                            <CheckCircle className="h-3 w-3 text-white" />
                          )}
                        </button>
                        
                        <div className="p-2 bg-slate-800/50 rounded-lg">
                          {property.type === 'residential' && <Home className="h-5 w-5 text-blue-400" />}
                          {property.type === 'commercial' && <Building className="h-5 w-5 text-purple-400" />}
                          {property.type === 'agricultural' && <Sprout className="h-5 w-5 text-emerald-400" />}
                          {property.type === 'industrial' && <Building className="h-5 w-5 text-amber-400" />}
                        </div>
                        
                        <div>
                          <div className="font-medium text-white">{property.name}</div>
                          <div className="text-sm text-slate-400">{property.location}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <div className="text-sm text-white">{property.price}</div>
                          <div className="text-xs text-slate-500">Value</div>
                        </div>
                        
                        <div className={`px-3 py-1 rounded text-xs ${
                          property.status === 'registered' ? 'bg-green-500/20 text-green-400' :
                          property.status === 'pending' ? 'bg-amber-500/20 text-amber-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {property.status}
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Link
                            href={`/land/${property.id}`}
                            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition"
                          >
                            <Eye className="h-4 w-4" />
                          </Link>
                          <Link
                            href={`/land/${property.id}/edit`}
                            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition"
                          >
                            <Edit className="h-4 w-4" />
                          </Link>
                          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition">
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional Info Row */}
                    <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t border-slate-700">
                      <div className="text-center">
                        <div className="text-sm text-white">{property.area}</div>
                        <div className="text-xs text-slate-500">Area</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white">{property.documents}</div>
                        <div className="text-xs text-slate-500">Documents</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-sm ${property.taxPaid ? 'text-green-400' : 'text-amber-400'}`}>
                          {property.taxPaid ? 'Tax Paid' : 'Tax Pending'}
                        </div>
                        <div className="text-xs text-slate-500">Status</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white">{property.lastUpdated}</div>
                        <div className="text-xs text-slate-500">Updated</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Empty State */}
            {filteredProperties.length === 0 && (
              <div className="text-center py-16">
                <Home className="h-16 w-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">No properties found</h3>
                <p className="text-slate-400 mb-6">You haven't registered any properties yet or they don't match your filters</p>
                <Link
                  href="/land/register"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-lg transition shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 inline-flex items-center space-x-2"
                >
                  <PlusCircle className="h-5 w-5" />
                  <span>Register Your First Property</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 mt-8 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <div>
              Smart Land Registry • Ministry of Lands & Survey Cameroon
            </div>
            <div className="mt-2 md:mt-0">
              Showing <span className="text-white">{filteredProperties.length}</span> of {userProperties.length} properties • 
              <Link href="/land/map" className="ml-2 text-blue-400 hover:text-blue-300">
                <MapPin className="h-3 w-3 inline mr-1" /> View on Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}