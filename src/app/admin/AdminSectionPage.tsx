'use client';

import React from 'react';
import { Users, FileText, Home, ArrowRightLeft, ShieldAlert, BookCheck } from 'lucide-react';

const AdminSectionPage = ({ sectionName, icon: Icon }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <Icon className="h-10 w-10 text-emerald-400" />
          <h1 className="text-4xl font-bold">{sectionName} Management</h1>
        </div>
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <p className="text-slate-300">Manage all {sectionName.toLowerCase()} here. This includes viewing, editing, and deleting records, as well as managing related settings.</p>
          {/* Placeholder for management table/content */}
          <div className="mt-6 h-64 border-2 border-dashed border-slate-600 rounded-lg flex items-center justify-center">
            <p className="text-slate-500">[Management Interface for {sectionName} will be displayed here]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSectionPage;
