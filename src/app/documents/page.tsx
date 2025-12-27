'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Search, 
  Filter, 
  Upload, 
  Download, 
  Eye, 
  MoreVertical,
  CheckCircle,
  Clock,
  Archive,
  Shield,
  Folder,
  FolderOpen,
  File,
  FileImage,
  FileType,
  ChevronDown,
  Grid,
  List,
  Calendar,
  User,
  RefreshCw,
  X,
  PlusCircle,
  Trash2,
  Printer,
  Share2,
  Copy,
  Lock,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export default function DocumentsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedDocs, setSelectedDocs] = useState<number[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Document data
  const documents = [
    {
      id: 1,
      name: 'Land Survey Report',
      type: 'pdf',
      size: '2.4 MB',
      uploaded: '2024-01-15',
      status: 'verified',
      property: 'Plot #456-789',
      category: 'survey',
      owner: 'John Doe',
      tags: ['survey', 'approved', 'signed'],
      shared: 2
    },
    {
      id: 2,
      name: 'Property Deed',
      type: 'pdf',
      size: '1.8 MB',
      uploaded: '2024-02-10',
      status: 'pending',
      property: 'Plot #123-456',
      category: 'ownership',
      owner: 'Global Enterprises',
      tags: ['legal', 'pending-review'],
      shared: 0
    },
    {
      id: 3,
      name: 'Tax Clearance Certificate',
      type: 'pdf',
      size: '1.2 MB',
      uploaded: '2023-11-05',
      status: 'verified',
      property: 'Plot #789-012',
      category: 'tax',
      owner: 'Jane Smith',
      tags: ['tax', 'verified', 'current'],
      shared: 1
    },
    {
      id: 4,
      name: 'Boundary Photos',
      type: 'image',
      size: '4.7 MB',
      uploaded: '2024-03-01',
      status: 'processing',
      property: 'Plot #345-678',
      category: 'photos',
      owner: 'Surveyor Ltd',
      tags: ['photos', 'geotagged'],
      shared: 3
    },
    {
      id: 5,
      name: 'Purchase Agreement',
      type: 'pdf',
      size: '3.1 MB',
      uploaded: '2024-01-30',
      status: 'verified',
      property: 'Plot #901-234',
      category: 'legal',
      owner: 'Government',
      tags: ['agreement', 'signed', 'notarized'],
      shared: 1
    },
    {
      id: 6,
      name: 'GIS Boundary Data',
      type: 'geojson',
      size: '5.8 MB',
      uploaded: '2023-12-20',
      status: 'verified',
      property: 'Plot #567-890',
      category: 'gis',
      owner: 'Development Corp',
      tags: ['gis', 'blockchain', 'verified'],
      shared: 4
    },
    {
      id: 7,
      name: 'Construction Permit',
      type: 'pdf',
      size: '2.1 MB',
      uploaded: '2024-02-28',
      status: 'expired',
      property: 'Plot #234-567',
      category: 'permits',
      owner: 'Construction Ltd',
      tags: ['permit', 'expired', 'renewable'],
      shared: 0
    },
    {
      id: 8,
      name: 'Property Valuation Report',
      type: 'pdf',
      size: '3.4 MB',
      uploaded: '2024-03-10',
      status: 'draft',
      property: 'Plot #890-123',
      category: 'valuation',
      owner: 'Valuation Inc',
      tags: ['draft', 'confidential'],
      shared: 2
    },
  ];

  const categories = [
    { id: 'all', name: 'All Documents', count: documents.length, icon: FolderOpen },
    { id: 'survey', name: 'Survey Reports', count: 1, icon: FileType },
    { id: 'ownership', name: 'Ownership Docs', count: 2, icon: FileText },
    { id: 'tax', name: 'Tax Documents', count: 1, icon: File },
    { id: 'legal', name: 'Legal Documents', count: 2, icon: FileType },
    { id: 'gis', name: 'GIS Data', count: 1, icon: File },
    { id: 'photos', name: 'Property Photos', count: 1, icon: FileImage },
  ];

  const filters = [
    { value: 'all', label: 'All', count: documents.length },
    { value: 'verified', label: 'Verified', count: 4 },
    { value: 'pending', label: 'Pending', count: 2 },
    { value: 'processing', label: 'Processing', count: 1 },
    { value: 'expired', label: 'Expired', count: 1 },
  ];

  const filteredDocs = documents.filter(doc => {
    if (activeFilter !== 'all' && doc.status !== activeFilter) return false;
    if (searchQuery && !doc.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !doc.property.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const stats = [
    { label: 'Total Docs', value: '8', icon: FileText, color: 'text-blue-400', smLabel: 'Total' },
    { label: 'Verified', value: '4', icon: CheckCircle, color: 'text-green-400', smLabel: 'Verified' },
    { label: 'Pending', value: '2', icon: Clock, color: 'text-amber-400', smLabel: 'Pending' },
    { label: 'Storage', value: '24.5 MB', icon: Archive, color: 'text-purple-400', smLabel: 'Storage' },
  ];

  const handleSelectDoc = (id: number) => {
    setSelectedDocs(prev => 
      prev.includes(id) ? prev.filter(did => did !== id) : [...prev, id]
    );
  };

  const getFileIcon = (type: string) => {
    switch(type) {
      case 'pdf': return FileType;
      case 'image': return FileImage;
      case 'geojson': return File;
      default: return FileText;
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'verified': return 'bg-green-500/10 text-green-400';
      case 'pending': return 'bg-amber-500/10 text-amber-400';
      case 'processing': return 'bg-blue-500/10 text-blue-400';
      case 'expired': return 'bg-red-500/10 text-red-400';
      case 'draft': return 'bg-slate-500/10 text-slate-400';
      default: return 'bg-slate-500/10 text-slate-400';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return isMobile 
      ? `${date.getDate()}/${date.getMonth() + 1}`
      : dateString;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Mobile Header with Hamburger */}
      {isMobile && (
        <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="p-2 hover:bg-slate-800 rounded-lg"
              >
                <div className="space-y-1">
                  <div className="w-4 h-0.5 bg-slate-300"></div>
                  <div className="w-4 h-0.5 bg-slate-300"></div>
                  <div className="w-4 h-0.5 bg-slate-300"></div>
                </div>
              </button>
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-blue-500/20 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-400" />
                </div>
                <h1 className="text-lg font-bold">Documents</h1>
              </div>
            </div>
            <Link
              href="/documents/upload"
              className="p-2 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg shadow-lg shadow-blue-500/30"
            >
              <Upload className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Sidebar Overlay */}
      {showMobileMenu && isMobile && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setShowMobileMenu(false)}
          />
          <div className="fixed inset-y-0 left-0 w-64 bg-slate-900 z-50 overflow-y-auto">
            <div className="p-4 border-b border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-blue-500/20 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-400" />
                  </div>
                  <h2 className="text-lg font-bold">Document Center</h2>
                </div>
                <button
                  onClick={() => setShowMobileMenu(false)}
                  className="p-2 hover:bg-slate-800 rounded-lg"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              {/* Search in mobile sidebar */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search documents..."
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Mobile Filters */}
            <div className="p-4 border-b border-slate-800">
              <h3 className="text-sm font-medium text-white mb-3">Filter by Status</h3>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => {
                      setActiveFilter(filter.value);
                      setShowMobileMenu(false);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs transition ${
                      activeFilter === filter.value 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {filter.label} ({filter.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Categories in mobile sidebar */}
            <div className="p-4 border-b border-slate-800">
              <h3 className="text-sm font-medium text-white mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      console.log('Filter by category:', category.id);
                      setShowMobileMenu(false);
                    }}
                    className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-slate-800 transition group"
                  >
                    <div className="flex items-center space-x-2">
                      <category.icon className="h-4 w-4 text-slate-500 group-hover:text-blue-400" />
                      <span className="text-sm text-slate-300 group-hover:text-white">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-xs bg-slate-800 px-2 py-0.5 rounded">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions in mobile sidebar */}
            <div className="p-4">
              <h3 className="text-sm font-medium text-white mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <button className="flex items-center space-x-2 p-3 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition w-full group">
                  <Download className="h-4 w-4 text-blue-400" />
                  <span>Export All</span>
                </button>
                <button className="flex items-center space-x-2 p-3 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition w-full group">
                  <Printer className="h-4 w-4 text-purple-400" />
                  <span>Print Reports</span>
                </button>
                <button className="flex items-center space-x-2 p-3 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition w-full group">
                  <Archive className="h-4 w-4 text-emerald-400" />
                  <span>Archive Old</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Desktop Header */}
      {!isMobile && (
        <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-1.5 bg-blue-500/20 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Document Center</h1>
                  <p className="text-sm text-slate-400">Manage and access all property documents</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Link
                  href="/documents/upload"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-lg transition shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 flex items-center space-x-2"
                >
                  <Upload className="h-4 w-4" />
                  <span>Upload Documents</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
        {/* Stats - Responsive Grid */}
        <div className={`grid ${isMobile ? 'grid-cols-2 gap-2' : 'grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4'} mb-4 sm:mb-6`}>
          {stats.map((stat, index) => (
            <div key={index} className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-3 ${isMobile ? 'p-2' : 'sm:p-4'}`}>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className={`${isMobile ? 'p-1' : 'p-1.5 sm:p-2'} rounded-lg ${stat.color.replace('text-', 'bg-')}/10`}>
                  <stat.icon className={`${isMobile ? 'h-3.5 w-3.5' : 'h-4 w-4'} ${stat.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`${isMobile ? 'text-base' : 'text-lg sm:text-xl'} font-bold text-white truncate`}>
                    {stat.value}
                  </div>
                  <div className={`${isMobile ? 'text-xs' : 'text-sm'} text-slate-400 truncate`}>
                    {isMobile ? stat.smLabel : stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {/* Desktop Left Sidebar */}
          {!isMobile && (
            <div className="lg:w-1/4 space-y-4 sm:space-y-6">
              {/* Search */}
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search documents..."
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-10 pr-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                
                <div className="flex items-center justify-between mt-3">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white"
                  >
                    <Filter className="h-4 w-4" />
                    <span>Filters</span>
                  </button>
                  
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-sm text-slate-500 hover:text-slate-300"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Quick Filters */}
              {showFilters && (
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
                  <h3 className="text-sm font-medium text-white mb-3">Filter by Status</h3>
                  <div className="space-y-2">
                    {filters.map((filter) => (
                      <button
                        key={filter.value}
                        onClick={() => setActiveFilter(filter.value)}
                        className={`flex items-center justify-between w-full p-2.5 rounded-lg transition text-sm ${
                          activeFilter === filter.value 
                            ? 'bg-blue-500/20 text-blue-400' 
                            : 'hover:bg-slate-800/50 text-slate-400'
                        }`}
                      >
                        <span>{filter.label}</span>
                        <span className="bg-slate-800/50 px-2 py-1 rounded text-xs">
                          {filter.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
                <h3 className="text-sm font-medium text-white mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => console.log('Filter by category:', category.id)}
                      className="flex items-center justify-between w-full p-2.5 rounded-lg hover:bg-slate-800/50 transition group"
                    >
                      <div className="flex items-center space-x-2">
                        <category.icon className="h-4 w-4 text-slate-500 group-hover:text-blue-400" />
                        <span className="text-sm text-slate-300 group-hover:text-white">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-xs bg-slate-800/50 px-2 py-1 rounded">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
                <h3 className="text-sm font-medium text-white mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="flex items-center space-x-2 p-2.5 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition w-full group">
                    <Download className="h-4 w-4 text-blue-400 group-hover:scale-110" />
                    <span>Export All</span>
                  </button>
                  <button className="flex items-center space-x-2 p-2.5 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition w-full group">
                    <Printer className="h-4 w-4 text-purple-400 group-hover:scale-110" />
                    <span>Print Reports</span>
                  </button>
                  <button className="flex items-center space-x-2 p-2.5 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition w-full group">
                    <Archive className="h-4 w-4 text-emerald-400 group-hover:scale-110" />
                    <span>Archive Old</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Main Content - Documents */}
          <div className={`${isMobile ? 'w-full' : 'lg:w-3/4'}`}>
            {/* Header Actions */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center justify-between sm:justify-start space-x-3">
                  <div className="flex items-center space-x-2">
                    {!isMobile && (
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
                    )}
                    
                    {isMobile && (
                      <div className="text-xs text-slate-400">
                        {filteredDocs.length} docs
                      </div>
                    )}
                    
                    {!isMobile && (
                      <div className="text-sm text-slate-400">
                        Showing <span className="font-medium text-white">{filteredDocs.length}</span> of {documents.length} documents
                      </div>
                    )}
                    
                    {selectedDocs.length > 0 && (
                      <div className={`${isMobile ? 'text-xs' : 'text-sm'} text-blue-400`}>
                        {selectedDocs.length} selected
                      </div>
                    )}
                  </div>
                  
                  {isMobile && (
                    <button
                      onClick={() => setShowFilters(!showFilters)}
                      className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg border border-slate-700"
                    >
                      <Filter className="h-4 w-4" />
                    </button>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  {selectedDocs.length > 0 && (
                    <>
                      <button className={`${isMobile ? 'p-2' : 'p-2.5'} text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition border border-slate-700`}>
                        <Download className="h-4 w-4" />
                      </button>
                      <button className={`${isMobile ? 'p-2' : 'p-2.5'} text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition border border-red-500/30`}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </>
                  )}
                  
                  <button className={`${isMobile ? 'p-2' : 'p-2.5'} text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition border border-slate-700`}>
                    <RefreshCw className="h-4 w-4" />
                  </button>
                  
                  {isMobile && (
                    <button
                      onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                      className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg border border-slate-700"
                    >
                      {viewMode === 'grid' ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
                    </button>
                  )}
                </div>
              </div>
              
              {/* Mobile inline filters */}
              {isMobile && showFilters && (
                <div className="mt-3 pt-3 border-t border-slate-700">
                  <div className="flex flex-wrap gap-2">
                    {filters.map((filter) => (
                      <button
                        key={filter.value}
                        onClick={() => setActiveFilter(filter.value)}
                        className={`px-3 py-1.5 rounded-lg text-xs transition ${
                          activeFilter === filter.value 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Documents Grid/List */}
            {viewMode === 'grid' ? (
              <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'}`}>
                {filteredDocs.map((doc) => {
                  const FileIcon = getFileIcon(doc.type);
                  return (
                    <div key={doc.id} className="group">
                      <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg sm:rounded-xl overflow-hidden hover:border-blue-500/30 transition h-full">
                        {/* Document Header */}
                        <div className={`${isMobile ? 'p-3' : 'p-4'} border-b border-slate-700`}>
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center space-x-3 flex-1 min-w-0">
                              <div className="p-2 bg-slate-900/50 rounded-lg flex-shrink-0">
                                <FileIcon className="h-5 w-5 text-blue-400" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-white truncate`}>
                                  {doc.name}
                                </div>
                                <div className={`${isMobile ? 'text-xs' : 'text-sm'} text-slate-400 truncate mt-0.5`}>
                                  {doc.property}
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => handleSelectDoc(doc.id)}
                              className={`flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center ${
                                selectedDocs.includes(doc.id)
                                  ? 'bg-blue-500 border-blue-500'
                                  : 'border-slate-600'
                              }`}
                            >
                              {selectedDocs.includes(doc.id) && (
                                <CheckCircle className="h-3 w-3 text-white" />
                              )}
                            </button>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-slate-500`}>
                                {doc.size}
                              </span>
                              <span className="text-slate-600">•</span>
                              <span className={`px-2 py-1 rounded ${getStatusColor(doc.status)} ${isMobile ? 'text-xs' : 'text-sm'}`}>
                                {doc.status}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Document Details */}
                        <div className={`${isMobile ? 'p-3' : 'p-4'}`}>
                          <div className={`grid ${isMobile ? 'grid-cols-2 gap-2' : 'grid-cols-2 gap-3'} mb-3`}>
                            <div>
                              <div className={`${isMobile ? 'text-xs' : 'text-sm'} text-slate-500`}>Uploaded</div>
                              <div className={`${isMobile ? 'text-sm' : 'text-base'} text-white flex items-center space-x-2`}>
                                <Calendar className="h-3.5 w-3.5" />
                                <span>{formatDate(doc.uploaded)}</span>
                              </div>
                            </div>
                            <div>
                              <div className={`${isMobile ? 'text-xs' : 'text-sm'} text-slate-500`}>Owner</div>
                              <div className={`${isMobile ? 'text-sm' : 'text-base'} text-white flex items-center space-x-2`}>
                                <User className="h-3.5 w-3.5" />
                                <span className="truncate">{doc.owner}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {doc.tags.slice(0, isMobile ? 2 : 3).map((tag, idx) => (
                              <span
                                key={idx}
                                className={`${isMobile ? 'text-xs px-2 py-1' : 'text-sm px-2 py-1'} bg-slate-800/50 text-slate-400 rounded`}
                              >
                                {tag}
                              </span>
                            ))}
                            {doc.tags.length > (isMobile ? 2 : 3) && (
                              <span className={`${isMobile ? 'text-xs px-2 py-1' : 'text-sm px-2 py-1'} bg-slate-800/50 text-slate-400 rounded`}>
                                +{doc.tags.length - (isMobile ? 2 : 3)}
                              </span>
                            )}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center space-x-2 pt-4 border-t border-slate-700">
                            <button className="flex-1 py-2 text-sm bg-slate-900/50 hover:bg-slate-900 text-white rounded transition flex items-center justify-center space-x-2">
                              <Eye className="h-4 w-4" />
                              <span className={isMobile ? 'hidden sm:inline' : ''}>View</span>
                            </button>
                            <button className="flex-1 py-2 text-sm bg-slate-900/50 hover:bg-slate-900 text-white rounded transition flex items-center justify-center space-x-2">
                              <Download className="h-4 w-4" />
                              <span className={isMobile ? 'hidden sm:inline' : ''}>Download</span>
                            </button>
                            <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded transition border border-slate-700">
                              <MoreVertical className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* List View */
              <div className="space-y-3">
                {filteredDocs.map((doc) => {
                  const FileIcon = getFileIcon(doc.type);
                  return (
                    <div key={doc.id} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                          <button
                            onClick={() => handleSelectDoc(doc.id)}
                            className={`flex-shrink-0 ${isMobile ? 'w-5 h-5' : 'w-5 h-5'} rounded border flex items-center justify-center ${
                              selectedDocs.includes(doc.id)
                                ? 'bg-blue-500 border-blue-500'
                                : 'border-slate-600'
                            }`}
                          >
                            {selectedDocs.includes(doc.id) && (
                              <CheckCircle className="h-3 w-3 text-white" />
                            )}
                          </button>
                          
                          <div className={`p-2 bg-slate-900/50 rounded-lg ${isMobile ? 'p-1.5' : ''}`}>
                            <FileIcon className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'} text-blue-400`} />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-white truncate`}>
                              {doc.name}
                            </div>
                            <div className={`${isMobile ? 'text-xs' : 'text-sm'} text-slate-400 truncate`}>
                              {doc.property} • {doc.owner}
                            </div>
                          </div>
                        </div>
                        
                        {!isMobile ? (
                          <div className="flex items-center space-x-6">
                            <div className="text-right">
                              <div className="text-sm text-white">{doc.size}</div>
                              <div className="text-xs text-slate-500">Size</div>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-sm text-white">{doc.uploaded}</div>
                              <div className="text-xs text-slate-500">Uploaded</div>
                            </div>
                            
                            <span className={`px-3 py-1.5 rounded text-sm ${getStatusColor(doc.status)}`}>
                              {doc.status}
                            </span>
                            
                            <div className="flex items-center space-x-2">
                              <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition">
                                <Download className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        ) : (
                          <button className="p-2 text-slate-400 hover:text-white">
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                      
                      {/* Mobile details for list view */}
                      {isMobile && (
                        <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-700">
                          <div className="text-center">
                            <div className="text-sm text-white">{doc.size}</div>
                            <div className="text-xs text-slate-500">Size</div>
                          </div>
                          <div className="text-center">
                            <div className={`text-sm ${getStatusColor(doc.status).split(' ')[1]}`}>
                              {doc.status}
                            </div>
                            <div className="text-xs text-slate-500">Status</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-white">{doc.uploaded.split('-')[2]}</div>
                            <div className="text-xs text-slate-500">Day</div>
                          </div>
                          <div className="col-span-3 flex items-center justify-center space-x-4 mt-2">
                            <button className="flex items-center space-x-1 text-blue-400 text-sm">
                              <Eye className="h-4 w-4" />
                              <span>View</span>
                            </button>
                            <button className="flex items-center space-x-1 text-blue-400 text-sm">
                              <Download className="h-4 w-4" />
                              <span>Download</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Empty State */}
            {filteredDocs.length === 0 && (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">No documents found</h3>
                <p className="text-sm text-slate-400 mb-6 max-w-md mx-auto">
                  {searchQuery 
                    ? `No documents match "${searchQuery}"`
                    : 'Try adjusting your filters or upload new documents'
                  }
                </p>
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="px-6 py-2.5 text-sm bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700 hover:border-blue-500/30 transition"
                  >
                    Clear search
                  </button>
                ) : (
                  <Link
                    href="/documents/upload"
                    className="inline-flex items-center space-x-2 px-6 py-2.5 text-sm bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-lg transition shadow-lg shadow-blue-500/30"
                  >
                    <Upload className="h-4 w-4" />
                    <span>Upload Documents</span>
                  </Link>
                )}
              </div>
            )}

            {/* Security Notice */}
            {!isMobile && (
              <div className="mt-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-white mb-1">Document Security</div>
                    <div className="text-sm text-slate-400">
                      All documents are encrypted with AES-256 and stored on blockchain. 
                      Access is logged and monitored for security purposes.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Security Notice */}
      {isMobile && (
        <div className="mt-4 mx-3 mb-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <Shield className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs font-medium text-white mb-1">Document Security</div>
              <div className="text-xs text-slate-400">
                All documents are encrypted and stored securely with blockchain technology.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="border-t border-slate-800 py-4">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className={`flex ${isMobile ? 'flex-col items-center text-center space-y-2' : 'flex-row items-center justify-between'} text-sm text-slate-500`}>
            <div className={isMobile ? 'text-xs' : ''}>
              Smart Land Registry Document Center
            </div>
            <div className={isMobile ? 'text-xs' : ''}>
              <span className="text-blue-400">{filteredDocs.length}</span> documents shown • 
              <Link href="/help/documents" className="ml-1.5 text-blue-400 hover:text-blue-300 text-sm">
                Help & Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}