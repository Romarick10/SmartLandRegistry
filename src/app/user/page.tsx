'use client';

import React, { useState } from 'react';
import { User, Shield, Bell, AlertTriangle, Pencil, Mail, Phone, MapPin, Eye, EyeOff, CheckCircle } from 'lucide-react';

const UserProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+237 6XX XXX XXX',
    address: '1234 Freedom St, Douala, Cameroon',
  });

  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateProfile = () => {
    setIsEditing(false);
    setUpdateSuccess(true);
    console.log('Profile updated:', userData);
    setTimeout(() => setUpdateSuccess(false), 3000); // Hide success message after 3 seconds
  };

  const InfoField = ({ icon: Icon, label, value }) => (
    <div>
      <label className="text-xs text-slate-400 font-medium flex items-center">
        <Icon className="w-3 h-3 mr-2" />
        {label}
      </label>
      <p className="text-white font-medium">{value}</p>
    </div>
  );

  const EditField = ({ icon: Icon, label, name, value, type = 'text' }) => (
    <div>
      <label htmlFor={name} className="text-xs text-slate-400 font-medium flex items-center mb-1">
        <Icon className="w-3 h-3 mr-2" />
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleInputChange}
        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition"
      />
    </div>
  );

  const renderProfileSection = () => (
    <div className="bg-slate-800/30 border border-slate-700 rounded-xl">
      <div className="p-6 border-b border-slate-700 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-white">Public Profile</h2>
          <p className="text-sm text-slate-400">This information may be visible to others.</p>
        </div>
        {!isEditing && (
          <button 
            onClick={() => setIsEditing(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition"
          >
            <Pencil className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>
        )}
      </div>
      
      <div className="p-6">
        {isEditing ? (
          <div className="space-y-4">
            <EditField icon={User} label="Full Name" name="name" value={userData.name} />
            <EditField icon={Mail} label="Email Address" name="email" value={userData.email} type="email" />
            <EditField icon={Phone} label="Phone Number" name="phone" value={userData.phone} type="tel" />
            <EditField icon={MapPin} label="Address" name="address" value={userData.address} />
            <div className="flex justify-end space-x-3 pt-4">
              <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-white rounded-lg transition">Cancel</button>
              <button onClick={handleUpdateProfile} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">Save Changes</button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoField icon={User} label="Full Name" value={userData.name} />
            <InfoField icon={Mail} label="Email Address" value={userData.email} />
            <InfoField icon={Phone} label="Phone Number" value={userData.phone} />
            <InfoField icon={MapPin} label="Address" value={userData.address} />
          </div>
        )}
      </div>
    </div>
  );

  const renderSecuritySection = () => (
    <div className="bg-slate-800/30 border border-slate-700 rounded-xl">
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-xl font-bold text-white">Password</h2>
        <p className="text-sm text-slate-400">Manage your password for account security.</p>
      </div>
      <div className="p-6 space-y-4">
        <div className="relative">
            <input type={showCurrentPassword ? "text" : "password"} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white" placeholder="Current Password" />
            <button onClick={() => setShowCurrentPassword(!showCurrentPassword)} className="absolute right-3 top-2.5 text-slate-400">{showCurrentPassword ? <EyeOff/> : <Eye/>}</button>
        </div>
        <div className="relative">
            <input type={showNewPassword ? "text" : "password"} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white" placeholder="New Password" />
            <button onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-3 top-2.5 text-slate-400">{showNewPassword ? <EyeOff/> : <Eye/>}</button>
        </div>
        <input type="password" placeholder="Confirm New Password" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white"/>
        <div className="flex justify-end pt-2">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">Update Password</button>
        </div>
      </div>
    </div>
  );

  const renderNotificationsSection = () => (
    <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
      <h2 className="text-xl font-bold text-white">Notifications</h2>
      <p className="text-sm text-slate-400">Notification settings are not yet available.</p>
    </div>
  );

  const renderDangerZoneSection = () => (
    <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
      <h2 className="text-xl font-bold text-red-400">Danger Zone</h2>
      <p className="text-sm text-slate-400 mb-4">Proceed with caution. These actions are irreversible.</p>
      <button onClick={() => alert('This will permanently delete your account!')} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition">Delete Account</button>
    </div>
  );

  const NavLink = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => setActiveSection(id)}
      className={`flex items-center space-x-3 w-full p-3 rounded-lg transition text-left ${activeSection === id ? 'bg-slate-700/50 text-white' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}>
      <Icon className={`w-5 h-5 ${activeSection === id ? 'text-blue-400' : ''}`} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
            <h1 className="text-3xl font-bold text-white">Account Settings</h1>
            <p className="text-slate-400 mt-1">Manage your profile, security, and preferences.</p>
        </header>

        {updateSuccess && (
          <div className="fixed top-20 right-5 flex items-center space-x-3 p-4 bg-green-500/20 border border-green-500/30 rounded-lg shadow-lg z-50">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <p className="text-sm font-medium text-green-300">Profile updated successfully!</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
            <nav className="space-y-2">
              <NavLink id="profile" icon={User} label="Profile" />
              <NavLink id="security" icon={Shield} label="Security" />
              <NavLink id="notifications" icon={Bell} label="Notifications" />
              <NavLink id="danger" icon={AlertTriangle} label="Danger Zone" />
            </nav>
          </aside>
          <main className="md:col-span-3">
            {activeSection === 'profile' && renderProfileSection()}
            {activeSection === 'security' && renderSecuritySection()}
            {activeSection === 'notifications' && renderNotificationsSection()}
            {activeSection === 'danger' && renderDangerZoneSection()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;