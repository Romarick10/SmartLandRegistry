'use client';

import React, { useState } from 'react';
import { Search, Map, ListFilter, FileText, Building, User, Landmark } from 'lucide-react';

const SearchLandPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('properties');

  const renderResults = () => {
    // Placeholder for search results
    return (
      <div className="mt-8">
        <p className="text-slate-400">Search results for "{searchQuery}" will appear here.</p>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-2">Advanced Search</h1>
        <p className="text-slate-400 mb-6">Find land parcels, properties, documents, and more.</p>

        {/* Search Input */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by keyword, address, owner, or parcel ID..."
            className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-12 pr-4 py-3 text-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
        </div>

        {/* Search Tabs */}
        <div className="border-b border-slate-700">
          <nav className="-mb-px flex space-x-6" aria-label="Tabs">
            <button onClick={() => setActiveTab('properties')} className={`${activeTab === 'properties' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-400 hover:text-white hover:border-slate-500'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}>
              <Landmark className="h-4 w-4 mr-2"/> Properties
            </button>
            <button onClick={() => setActiveTab('documents')} className={`${activeTab === 'documents' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-400 hover:text-white hover:border-slate-500'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}>
              <FileText className="h-4 w-4 mr-2"/> Documents
            </button>
            <button onClick={() => setActiveTab('owners')} className={`${activeTab === 'owners' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-400 hover:text-white hover:border-slate-500'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}>
              <User className="h-4 w-4 mr-2"/> Owners
            </button>
          </nav>
        </div>

        {/* Filters and Results */}
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Search Results</h2>
            <button className="flex items-center text-sm text-slate-400 hover:text-white">
              <ListFilter className="h-4 w-4 mr-2" />
              Filters
            </button>
          </div>

          {renderResults()}
        </div>
      </div>
    </div>
  );
};

export default SearchLandPage;
