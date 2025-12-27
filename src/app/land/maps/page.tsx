'use client';

import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Search, 
  Filter, 
  Layers, 
  Globe, 
  ZoomIn, 
  ZoomOut, 
  Navigation, 
  Ruler,
  Home,
  Building,
  Sprout,
  Eye,
  ChevronLeft,
  ChevronRight,
  Settings,
  Download,
  Printer,
  Share2,
  RefreshCw,
  X,
  Plus,
  Minus,
  Compass,
  Satellite,
  Map as MapIcon,
  AlertCircle,
  Shield,
  BarChart3,
  Info
} from 'lucide-react';
import Link from 'next/link';

export default function MapPage() {
  const [mapView, setMapView] = useState<'satellite' | 'street' | 'topographic'>('satellite');
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);
  const [drawMode, setDrawMode] = useState<'none' | 'polygon' | 'measure' | 'marker'>('none');
  const [zoom, setZoom] = useState(12);
  const [center, setCenter] = useState({ lat: 3.848, lng: 11.502 });
  const [showSidebar, setShowSidebar] = useState(true);
  const [showLayerPanel, setShowLayerPanel] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample properties for the map
  const properties = [
    {
      id: 1,
      name: 'Residential Plot',
      location: 'Yaoundé, Centre',
      coordinates: { lat: 3.848, lng: 11.502 },
      type: 'residential',
      status: 'registered',
      area: '500m²',
      owner: 'John Doe',
      color: '#3B82F6' // blue
    },
    {
      id: 2,
      name: 'Commercial Land',
      location: 'Douala, Bonanjo',
      coordinates: { lat: 4.051, lng: 9.767 },
      type: 'commercial',
      status: 'pending',
      area: '1200m²',
      owner: 'Global Enterprises',
      color: '#8B5CF6' // purple
    },
    {
      id: 3,
      name: 'Farmland',
      location: 'Bafoussam',
      coordinates: { lat: 5.466, lng: 10.416 },
      type: 'agricultural',
      status: 'registered',
      area: '5000m²',
      owner: 'Jane Smith',
      color: '#10B981' // emerald
    },
    {
      id: 4,
      name: 'Industrial Plot',
      location: 'Limbe',
      coordinates: { lat: 4.024, lng: 9.214 },
      type: 'industrial',
      status: 'under-review',
      area: '2500m²',
      owner: 'Tech Industries',
      color: '#F59E0B' // amber
    },
    {
      id: 5,
      name: 'Vacant Land',
      location: 'Garoua',
      coordinates: { lat: 9.307, lng: 13.402 },
      type: 'residential',
      status: 'available',
      area: '800m²',
      owner: 'Government',
      color: '#6B7280' // gray
    },
  ];

  // Cameroon regions
  const regions = [
    { name: 'Centre', capital: 'Yaoundé', coordinates: { lat: 3.848, lng: 11.502 }, properties: 24 },
    { name: 'Littoral', capital: 'Douala', coordinates: { lat: 4.051, lng: 9.767 }, properties: 18 },
    { name: 'West', capital: 'Bafoussam', coordinates: { lat: 5.466, lng: 10.416 }, properties: 12 },
    { name: 'Southwest', capital: 'Buea', coordinates: { lat: 4.158, lng: 9.242 }, properties: 8 },
    { name: 'North', capital: 'Garoua', coordinates: { lat: 9.307, lng: 13.402 }, properties: 6 },
    { name: 'Far North', capital: 'Maroua', coordinates: { lat: 10.592, lng: 14.315 }, properties: 4 },
  ];

  // Map layers
  const layers = [
    { id: 'property-boundaries', name: 'Property Boundaries', enabled: true, icon: MapPin },
    { id: 'land-use', name: 'Land Use Zones', enabled: true, icon: Layers },
    { id: 'infrastructure', name: 'Infrastructure', enabled: false, icon: Navigation },
    { id: 'protected-areas', name: 'Protected Areas', enabled: true, icon: Shield },
    { id: 'disputed-areas', name: 'Disputed Areas', enabled: true, icon: AlertCircle },
    { id: 'government-lands', name: 'Government Lands', enabled: false, icon: Building },
  ];

  // Filtered properties based on search
  const filteredProperties = properties.filter(property =>
    property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle map interactions
  const handleZoomIn = () => setZoom(prev => Math.min(prev + 1, 18));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 1, 5));
  const handleCenterMap = (lat: number, lng: number) => {
    setCenter({ lat, lng });
    setZoom(14);
  };

  // Handle drawing modes
  const handleDrawMode = (mode: 'none' | 'polygon' | 'measure' | 'marker') => {
    setDrawMode(mode);
    alert(`Drawing mode: ${mode}. In a real app, this would enable drawing tools.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link
                href="/land"
                className="p-2 hover:bg-slate-800/50 rounded-lg transition"
              >
                <ChevronLeft className="h-5 w-5 text-slate-400" />
              </Link>
              <div>
                <h1 className="text-xl font-bold">GIS Land Registry Map</h1>
                <p className="text-sm text-slate-400">Interactive property mapping across Cameroon</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="p-2 hover:bg-slate-800/50 rounded-lg transition border border-slate-700"
              >
                {showSidebar ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>
              <button className="p-2 hover:bg-slate-800/50 rounded-lg transition border border-slate-700">
                <Settings className="h-5 w-5 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Map Content */}
      <div className="flex h-[calc(100vh-5rem)]">
        {/* Left Sidebar */}
        {showSidebar && (
          <div className="w-full md:w-96 bg-slate-900/50 backdrop-blur-sm border-r border-slate-800 overflow-y-auto">
            <div className="p-4">
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search properties or locations..."
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Map Controls */}
              <div className="mb-6">
                <h3 className="font-medium text-white mb-3">Map Controls</h3>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setMapView('satellite')}
                    className={`p-3 rounded-lg border transition ${
                      mapView === 'satellite'
                        ? 'bg-emerald-500/20 border-emerald-500/50'
                        : 'bg-slate-900/30 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <Satellite className="h-5 w-5 mx-auto mb-1" />
                    <div className="text-xs">Satellite</div>
                  </button>
                  <button
                    onClick={() => setMapView('street')}
                    className={`p-3 rounded-lg border transition ${
                      mapView === 'street'
                        ? 'bg-emerald-500/20 border-emerald-500/50'
                        : 'bg-slate-900/30 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <MapIcon className="h-5 w-5 mx-auto mb-1" />
                    <div className="text-xs">Street</div>
                  </button>
                  <button
                    onClick={() => setMapView('topographic')}
                    className={`p-3 rounded-lg border transition ${
                      mapView === 'topographic'
                        ? 'bg-emerald-500/20 border-emerald-500/50'
                        : 'bg-slate-900/30 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <Layers className="h-5 w-5 mx-auto mb-1" />
                    <div className="text-xs">Topographic</div>
                  </button>
                </div>
              </div>

              {/* Drawing Tools */}
              <div className="mb-6">
                <h3 className="font-medium text-white mb-3">Drawing Tools</h3>
                <div className="grid grid-cols-4 gap-2">
                  <button
                    onClick={() => handleDrawMode('polygon')}
                    className={`p-3 rounded-lg border transition ${
                      drawMode === 'polygon'
                        ? 'bg-blue-500/20 border-blue-500/50'
                        : 'bg-slate-900/30 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <div className="w-6 h-6 mx-auto border border-current rounded" />
                    <div className="text-xs mt-1">Boundary</div>
                  </button>
                  <button
                    onClick={() => handleDrawMode('measure')}
                    className={`p-3 rounded-lg border transition ${
                      drawMode === 'measure'
                        ? 'bg-blue-500/20 border-blue-500/50'
                        : 'bg-slate-900/30 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <Ruler className="h-5 w-5 mx-auto mb-1" />
                    <div className="text-xs">Measure</div>
                  </button>
                  <button
                    onClick={() => handleDrawMode('marker')}
                    className={`p-3 rounded-lg border transition ${
                      drawMode === 'marker'
                        ? 'bg-blue-500/20 border-blue-500/50'
                        : 'bg-slate-900/30 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <MapPin className="h-5 w-5 mx-auto mb-1" />
                    <div className="text-xs">Marker</div>
                  </button>
                  <button
                    onClick={() => handleDrawMode('none')}
                    className="p-3 rounded-lg border bg-slate-900/30 border-slate-700 hover:border-slate-600 transition"
                  >
                    <X className="h-5 w-5 mx-auto mb-1" />
                    <div className="text-xs">Clear</div>
                  </button>
                </div>
              </div>

              {/* Regions */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-white">Regions of Cameroon</h3>
                  <span className="text-xs text-slate-500">Click to view</span>
                </div>
                <div className="space-y-2">
                  {regions.map((region) => (
                    <button
                      key={region.name}
                      onClick={() => handleCenterMap(region.coordinates.lat, region.coordinates.lng)}
                      className="w-full flex items-center justify-between p-3 bg-slate-900/30 hover:bg-slate-800/50 rounded-lg border border-slate-700 transition group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                          <MapPin className="h-4 w-4 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{region.name}</div>
                          <div className="text-xs text-slate-500">{region.capital}</div>
                        </div>
                      </div>
                      <div className="text-xs bg-slate-800/50 px-2 py-1 rounded">
                        {region.properties} properties
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Properties List */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-white">Properties in View</h3>
                  <span className="text-xs text-slate-500">{filteredProperties.length} shown</span>
                </div>
                <div className="space-y-2">
                  {filteredProperties.map((property) => (
                    <button
                      key={property.id}
                      onClick={() => {
                        setSelectedProperty(property.id);
                        handleCenterMap(property.coordinates.lat, property.coordinates.lng);
                      }}
                      className={`w-full flex items-center justify-between p-3 rounded-lg border transition ${
                        selectedProperty === property.id
                          ? 'bg-blue-500/20 border-blue-500/50'
                          : 'bg-slate-900/30 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: property.color }}
                        />
                        <div>
                          <div className="text-sm font-medium text-white text-left">{property.name}</div>
                          <div className="text-xs text-slate-500 text-left">{property.location}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-white">{property.area}</div>
                        <div className={`text-xs ${
                          property.status === 'registered' ? 'text-green-400' :
                          property.status === 'pending' ? 'text-amber-400' :
                          property.status === 'under-review' ? 'text-blue-400' :
                          'text-slate-400'
                        }`}>
                          {property.status}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Map Container */}
        <div className="flex-1 relative">
          {/* Map Controls Overlay */}
          <div className="absolute top-4 left-4 z-10">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => setShowLayerPanel(!showLayerPanel)}
                className="p-3 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg hover:bg-slate-800 transition"
              >
                <Layers className="h-5 w-5" />
              </button>
              <button className="p-3 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg hover:bg-slate-800 transition">
                <Compass className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Zoom Controls */}
          <div className="absolute right-4 top-4 z-10">
            <div className="flex flex-col space-y-2">
              <button
                onClick={handleZoomIn}
                className="p-3 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg hover:bg-slate-800 transition"
              >
                <Plus className="h-5 w-5" />
              </button>
              <div className="px-3 py-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg text-center text-sm">
                {zoom}x
              </div>
              <button
                onClick={handleZoomOut}
                className="p-3 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg hover:bg-slate-800 transition"
              >
                <Minus className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Layer Panel */}
          {showLayerPanel && (
            <div className="absolute top-20 left-4 z-10 w-64 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-white">Map Layers</h3>
                <button
                  onClick={() => setShowLayerPanel(false)}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-2">
                {layers.map((layer) => (
                  <div key={layer.id} className="flex items-center justify-between p-2 hover:bg-slate-800/50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <layer.icon className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-300">{layer.name}</span>
                    </div>
                    <div className={`w-8 h-4 rounded-full transition ${layer.enabled ? 'bg-emerald-500' : 'bg-slate-700'}`}>
                      <div className={`w-4 h-4 rounded-full bg-white transform transition ${layer.enabled ? 'translate-x-4' : ''}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Property Info Panel */}
          {selectedProperty && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-md">
              <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-xl p-4 mx-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-white">
                      {properties.find(p => p.id === selectedProperty)?.name}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {properties.find(p => p.id === selectedProperty)?.location}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProperty(null)}
                    className="text-slate-400 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-slate-500">Area</div>
                    <div className="text-sm text-white">
                      {properties.find(p => p.id === selectedProperty)?.area}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Status</div>
                    <div className={`text-sm ${
                      properties.find(p => p.id === selectedProperty)?.status === 'registered' ? 'text-green-400' :
                      properties.find(p => p.id === selectedProperty)?.status === 'pending' ? 'text-amber-400' :
                      'text-blue-400'
                    }`}>
                      {properties.find(p => p.id === selectedProperty)?.status}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Link
                    href={`/land/${selectedProperty}`}
                    className="flex-1 py-2 text-sm bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition border border-blue-500/30 flex items-center justify-center space-x-2"
                  >
                    <Eye className="h-4 w-4" />
                    <span>View Details</span>
                  </Link>
                  <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition border border-slate-700">
                    <Navigation className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Map Display Area */}
          <div className="h-full w-full bg-slate-800/50 relative overflow-hidden">
            {/* Simulated Map */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Globe className="h-32 w-32 text-slate-600 mx-auto mb-4 opacity-50" />
                <div className="text-lg text-slate-500">Interactive GIS Map</div>
                <div className="text-sm text-slate-600 mt-2">Center: {center.lat.toFixed(4)}°, {center.lng.toFixed(4)}° • Zoom: {zoom}x</div>
                <div className="text-xs text-slate-700 mt-1">Map view: {mapView}</div>
                
                {/* Simulated Property Markers */}
                <div className="absolute inset-0 pointer-events-none">
                  {properties.map((property) => (
                    <div
                      key={property.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `${((property.coordinates.lng + 180) / 360) * 100}%`,
                        top: `${((90 - property.coordinates.lat) / 180) * 100}%`,
                      }}
                      onClick={() => setSelectedProperty(property.id)}
                    >
                      <div
                        className={`w-6 h-6 rounded-full border-4 cursor-pointer transition-transform hover:scale-125 ${
                          selectedProperty === property.id ? 'scale-125' : ''
                        }`}
                        style={{
                          backgroundColor: `${property.color}80`,
                          borderColor: property.color
                        }}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          {property.type === 'residential' && <Home className="h-3 w-3 text-white" />}
                          {property.type === 'commercial' && <Building className="h-3 w-3 text-white" />}
                          {property.type === 'agricultural' && <Sprout className="h-3 w-3 text-white" />}
                          {property.type === 'industrial' && <Building className="h-3 w-3 text-white" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Coordinates Display */}
            <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg px-3 py-2">
              <div className="text-xs text-slate-400">Coordinates</div>
              <div className="text-sm font-mono text-white">
                {center.lat.toFixed(6)}° N, {center.lng.toFixed(6)}° E
              </div>
            </div>

            {/* Map Actions */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button className="p-3 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg hover:bg-slate-800 transition">
                <Download className="h-5 w-5" />
              </button>
              <button className="p-3 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg hover:bg-slate-800 transition">
                <Printer className="h-5 w-5" />
              </button>
              <button className="p-3 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg hover:bg-slate-800 transition">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-xs">Residential</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-xs">Commercial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs">Agricultural</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span className="text-xs">Industrial</span>
              </div>
            </div>
            
            <div className="mt-2 md:mt-0">
              Smart Land Registry GIS • Ministry of Lands & Survey Cameroon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}