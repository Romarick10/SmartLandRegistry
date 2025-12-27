'use client';

import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Search, 
  Filter, 
  PlusCircle, 
  Download, 
  Eye, 
  Edit, 
  MoreVertical,
  Layers,
  Globe,
  Ruler,
  Home,
  Building,
  Mountain,
  AlertCircle,
  CheckCircle,
  Clock,
  ChevronRight,
  Grid,
  List,
  Share2,
  Printer,
  BarChart3,
  Shield,
  Users,
  FileText,
  ArrowUpRight,
  X,
  RefreshCw
} from 'lucide-react';
import Link from 'next/link';

export default function LandPage() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [selectedProperties, setSelectedProperties] = useState<number[]>([]);
  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
    region: 'all',
    areaRange: [0, 10000]
  });
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Property data
  const properties = [
    {
      id: 1,
      name: 'Residential Plot',
      location: 'Yaoundé, Centre Region',
      coordinates: '3.8480° N, 11.5021° E',
      area: '500m²',
      price: '15,000,000 XAF',
      status: 'registered',
      type: 'residential',
      registrationDate: '2024-01-15',
      owner: 'John Doe',
      documents: 5,
      boundaries: true,
      verified: true,
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      name: 'Commercial Land',
      location: 'Douala, Littoral Region',
      coordinates: '4.0511° N, 9.7679° E',
      area: '1200m²',
      price: '45,000,000 XAF',
      status: 'pending',
      type: 'commercial',
      registrationDate: '2024-02-10',
      owner: 'Global Enterprises Ltd',
      documents: 3,
      boundaries: false,
      verified: true,
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      name: 'Agricultural Land',
      location: 'Bafoussam, West Region',
      coordinates: '5.4667° N, 10.4167° E',
      area: '5000m²',
      price: '25,000,000 XAF',
      status: 'registered',
      type: 'agricultural',
      registrationDate: '2023-11-05',
      owner: 'Jane Smith',
      documents: 7,
      boundaries: true,
      verified: true,
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      name: 'Industrial Plot',
      location: 'Limbe, Southwest Region',
      coordinates: '4.0244° N, 9.2149° E',
      area: '2500m²',
      price: '35,000,000 XAF',
      status: 'under-review',
      type: 'industrial',
      registrationDate: '2024-03-01',
      owner: 'Tech Industries Inc.',
      documents: 4,
      boundaries: true,
      verified: false,
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      name: 'Vacant Land',
      location: 'Garoua, North Region',
      coordinates: '9.3077° N, 13.4025° E',
      area: '800m²',
      price: '8,000,000 XAF',
      status: 'available',
      type: 'residential',
      registrationDate: '2024-01-30',
      owner: 'Government',
      documents: 2,
      boundaries: true,
      verified: true,
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      name: 'Mixed-Use Development',
      location: 'Bamenda, Northwest Region',
      coordinates: '5.9631° N, 10.1591° E',
      area: '3500m²',
      price: '60,000,000 XAF',
      status: 'registered',
      type: 'mixed',
      registrationDate: '2023-12-20',
      owner: 'Development Corp',
      documents: 9,
      boundaries: true,
      verified: true,
      image: '/api/placeholder/400/300'
    },
  ];

  // Filtered properties
  const filteredProperties = properties.filter(property => {
    if (searchQuery && !property.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !property.location.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    if (filters.status !== 'all' && property.status !== filters.status) {
      return false;
    }
    
    if (filters.type !== 'all' && property.type !== filters.type) {
      return false;
    }
    
    const area = parseFloat(property.area.replace('m²', ''));
    if (area < filters.areaRange[0] || area > filters.areaRange[1]) {
      return false;
    }
    
    return true;
  });

  const stats = [
    { label: 'Total Properties', value: '24', icon: Layers, color: 'text-blue-400' },
    { label: 'Registered', value: '18', icon: CheckCircle, color: 'text-green-400' },
    { label: 'Pending Review', value: '4', icon: Clock, color: 'text-amber-400' },
    { label: 'Available', value: '2', icon: Home, color: 'text-purple-400' },
  ];

  const propertyTypes = [
    { value: 'residential', label: 'Residential', icon: Home, count: 12 },
    { value: 'commercial', label: 'Commercial', icon: Building, count: 6 },
    { value: 'agricultural', label: 'Agricultural', icon:  Mountain, count: 4 },
    { value: 'industrial', label: 'Industrial', icon: Building, count: 2 },
  ];

  const handleSelectProperty = (id: number) => {
    setSelectedProperties(prev => 
      prev.includes(id) 
        ? prev.filter(pid => pid !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <MapPin className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Land Registry</h1>
                  <p className="text-sm text-slate-400">Manage and explore land properties in Cameroon</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Link
                href="/land/map"
                className="px-4 py-2 text-sm bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg transition flex items-center space-x-2"
              >
                <Globe className="h-4 w-4" />
                <span>View GIS Map</span>
              </Link>
              
              <Link
                href="/land/register"
                className="px-4 py-2 text-sm bg-gradient-to-r from-emerald-600 to-cyan-400 text-white rounded-lg transition shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 flex items-center space-x-2"
              >
                <PlusCircle className="h-4 w-4" />
                <span>Register New</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-slate-800/50 rounded-lg">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters & Actions */}
          <div className="lg:w-1/4 space-y-6">
            {/* Search Box */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search properties..."
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white"
                >
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                  {showFilters && <ChevronRight className="h-4 w-4 transform rotate-90" />}
                </button>
                <button
                  onClick={() => {
                    setFilters({
                      status: 'all',
                      type: 'all',
                      region: 'all',
                      areaRange: [0, 10000]
                    });
                    setSearchQuery('');
                  }}
                  className="text-sm text-slate-500 hover:text-slate-300"
                >
                  <RefreshCw className="h-4 w-4 inline mr-1" />
                  Reset
                </button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <h3 className="font-medium text-white mb-4">Property Type</h3>
              <div className="space-y-2">
                {propertyTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setFilters({...filters, type: type.value})}
                    className={`flex items-center justify-between w-full p-2 rounded-lg transition ${
                      filters.type === type.value 
                        ? 'bg-emerald-500/20 text-emerald-400' 
                        : 'hover:bg-slate-800/50 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <type.icon className="h-4 w-4" />
                      <span>{type.label}</span>
                    </div>
                    <span className="text-xs bg-slate-800/50 px-2 py-1 rounded">{type.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <h3 className="font-medium text-white mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Link 
                  href="/land/register"
                  className="flex items-center space-x-2 p-3 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition group"
                >
                  <PlusCircle className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition" />
                  <span>Register New Property</span>
                </Link>
                <Link 
                  href="/land/map"
                  className="flex items-center space-x-2 p-3 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition group"
                >
                  <Globe className="h-4 w-4 text-blue-400 group-hover:scale-110 transition" />
                  <span>View GIS Map</span>
                </Link>
                <Link 
                  href="/land/analytics"
                  className="flex items-center space-x-2 p-3 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition group"
                >
                  <BarChart3 className="h-4 w-4 text-purple-400 group-hover:scale-110 transition" />
                  <span>View Analytics</span>
                </Link>
                <button className="flex items-center space-x-2 p-3 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition group">
                  <Download className="h-4 w-4 text-amber-400 group-hover:scale-110 transition" />
                  <span>Export Data</span>
                </button>
              </div>
            </div>

            {/* Map Preview */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-white">Map Preview</h3>
                <Link href="/land/map" className="text-xs text-emerald-400 hover:text-emerald-300">
                  Full screen
                </Link>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-12 w-12 text-slate-600 mx-auto mb-2" />
                  <div className="text-sm text-slate-500">Interactive GIS Map</div>
                  <div className="text-xs text-slate-600 mt-1">Click to explore properties</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Properties Grid */}
          <div className="lg:w-3/4">
            {/* Header Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl">
              <div className="mb-4 sm:mb-0">
                <div className="text-sm text-slate-400">
                  Showing <span className="font-medium text-white">{filteredProperties.length}</span> of {properties.length} properties
                </div>
                {selectedProperties.length > 0 && (
                  <div className="text-sm text-emerald-400 mt-1">
                    {selectedProperties.length} selected
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
                
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition border border-slate-700">
                    <Share2 className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition border border-slate-700">
                    <Printer className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Properties Grid */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProperties.map((property) => (
                  <div key={property.id} className="group">
                    <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-emerald-500/30 transition">
                      {/* Property Header */}
                      <div className="p-5 border-b border-slate-700">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg text-white mb-1">{property.name}</h3>
                            <div className="flex items-center text-sm text-slate-400">
                              <MapPin className="h-3 w-3 mr-1" />
                              {property.location}
                            </div>
                          </div>
                          <button
                            onClick={() => handleSelectProperty(property.id)}
                            className={`w-5 h-5 rounded border flex items-center justify-center ${
                              selectedProperties.includes(property.id)
                                ? 'bg-emerald-500 border-emerald-500'
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
                          <div className={`px-2 py-1 rounded text-xs ${
                            property.status === 'registered' ? 'bg-green-500/20 text-green-400' :
                            property.status === 'pending' ? 'bg-amber-500/20 text-amber-400' :
                            property.status === 'under-review' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-purple-500/20 text-purple-400'
                          }`}>
                            {property.status}
                          </div>
                          {property.verified && (
                            <div className="flex items-center space-x-1 text-emerald-400">
                              <Shield className="h-3 w-3" />
                              <span className="text-xs">Verified</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Property Details */}
                      <div className="p-5">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-xs text-slate-500">Owner</div>
                            <div className="text-sm text-white">{property.owner}</div>
                          </div>
                          <div>
                            <div className="text-xs text-slate-500">Price</div>
                            <div className="text-sm text-white">{property.price}</div>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-xs text-slate-500 mb-1">Documents</div>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1 text-sm">
                              <FileText className="h-3 w-3 text-slate-400" />
                              <span>{property.documents} files</span>
                            </div>
                            {property.boundaries && (
                              <div className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                                Boundaries mapped
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-2 pt-4 border-t border-slate-700">
                          <Link
                            href={`/land/${property.id}`}
                            className="flex-1 py-2 text-sm bg-slate-900/50 hover:bg-slate-900 text-white rounded-lg transition flex items-center justify-center space-x-2"
                          >
                            <Eye className="h-4 w-4" />
                            <span>View Details</span>
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
                              ? 'bg-emerald-500 border-emerald-500'
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
                          {property.type === 'agricultural' && < Mountain className="h-5 w-5 text-emerald-400" />}
                          {property.type === 'industrial' && <Building className="h-5 w-5 text-amber-400" />}
                        </div>
                        
                        <div>
                          <div className="font-medium text-white">{property.name}</div>
                          <div className="text-sm text-slate-400">{property.location}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <div className="text-sm text-white">{property.area}</div>
                          <div className="text-xs text-slate-500">Area</div>
                        </div>
                        
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
                          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition">
                            <Edit className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Empty State */}
            {filteredProperties.length === 0 && (
              <div className="text-center py-16">
                <MapPin className="h-16 w-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">No properties found</h3>
                <p className="text-slate-400 mb-6">Try adjusting your filters or search terms</p>
                <button
                  onClick={() => {
                    setFilters({
                      status: 'all',
                      type: 'all',
                      region: 'all',
                      areaRange: [0, 10000]
                    });
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 text-sm bg-emerald-500/20 text-emerald-400 rounded-lg border border-emerald-500/30 hover:bg-emerald-500/30 transition"
                >
                  Reset all filters
                </button>
              </div>
            )}

            {/* Map Legend */}
            <div className="mt-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <h3 className="font-medium text-white mb-3">Map Legend</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-slate-400">Registered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <span className="text-sm text-slate-400">Pending</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-slate-400">Under Review</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-slate-400">Available</span>
                </div>
              </div>
            </div>
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
              <span className="text-emerald-400">{filteredProperties.length}</span> properties shown • 
              <Link href="/land/map" className="ml-2 text-blue-400 hover:text-blue-300">
                <Globe className="h-3 w-3 inline mr-1" /> Open GIS Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}