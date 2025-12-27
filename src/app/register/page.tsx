'use client';

import React, { useState } from 'react';
import { Shield, Mail, Lock, User, Eye, EyeOff, Check, MapPin, Phone, Building, Globe, Award } from 'lucide-react';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('individual');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    organization: '',
    role: ''
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = () => {
    if (!agreedToTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy');
      return;
    }
    console.log('Register submitted:', { ...formData, userType });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getPasswordStrength = () => {
    const password = formData.password;
    if (!password) return { strength: 0, label: '', color: '' };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    const levels = [
      { strength: 1, label: 'Weak', color: 'bg-red-500' },
      { strength: 2, label: 'Fair', color: 'bg-orange-500' },
      { strength: 3, label: 'Good', color: 'bg-yellow-500' },
      { strength: 4, label: 'Strong', color: 'bg-green-500' }
    ];

    return levels[strength - 1] || { strength: 0, label: '', color: '' };
  };

  const passwordStrength = getPasswordStrength();

  const renderStep1 = () => (
    <>
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-white mb-1">Choose Account Type</h1>
        <p className="text-slate-400 text-sm">Select how you'll use the platform</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <button
          onClick={() => setUserType('individual')}
          className={`p-3 rounded-lg border transition-all ${userType === 'individual' 
            ? 'bg-blue-500/20 border-blue-500/50' 
            : 'bg-slate-900/30 border-slate-700 hover:border-slate-600'}`}
        >
          <User className={`h-5 w-5 mx-auto mb-2 ${userType === 'individual' ? 'text-blue-400' : 'text-slate-400'}`} />
          <div className="text-sm font-medium text-white">Individual</div>
          <div className="text-xs text-slate-400 mt-1">Property Owner</div>
        </button>

        <button
          onClick={() => setUserType('organization')}
          className={`p-3 rounded-lg border transition-all ${userType === 'organization' 
            ? 'bg-blue-500/20 border-blue-500/50' 
            : 'bg-slate-900/30 border-slate-700 hover:border-slate-600'}`}
        >
          <Building className={`h-5 w-5 mx-auto mb-2 ${userType === 'organization' ? 'text-blue-400' : 'text-slate-400'}`} />
          <div className="text-sm font-medium text-white">Organization</div>
          <div className="text-xs text-slate-400 mt-1">Agency or Company</div>
        </button>
      </div>

      <button
        onClick={() => setStep(2)}
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm font-medium py-2.5 rounded-lg transition"
      >
        Continue
      </button>
    </>
  );

  const renderStep2 = () => (
    <>
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
            <Check className="h-3 w-3 text-white" />
          </div>
          <span className="text-xs text-white">Account Type</span>
        </div>
        <div className="h-0.5 w-8 bg-blue-600"></div>
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
            <div className="text-xs text-white">2</div>
          </div>
          <span className="text-xs text-white">Details</span>
        </div>
        <div className="h-0.5 w-8 bg-slate-700"></div>
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 rounded-full bg-slate-700 flex items-center justify-center">
            <div className="text-xs text-slate-400">3</div>
          </div>
          <span className="text-xs text-slate-400">Complete</span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full bg-slate-900/30 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition"
              placeholder="John Doe"
              required
            />
          </div>
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full bg-slate-900/30 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        {/* Phone Input */}
        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-slate-300 mb-1">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full bg-slate-900/30 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition"
              placeholder="+237 XXX XXX XXX"
            />
          </div>
        </div>

        {/* Organization Input (conditional) */}
        {userType === 'organization' && (
          <div>
            <label htmlFor="organization" className="block text-xs font-medium text-slate-300 mb-1">
              Organization Name
            </label>
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                id="organization"
                type="text"
                value={formData.organization}
                onChange={(e) => handleChange('organization', e.target.value)}
                className="w-full bg-slate-900/30 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition"
                placeholder="Your company name"
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setStep(1)}
            className="bg-slate-900/30 hover:bg-slate-900 border border-slate-700 text-white text-sm font-medium py-2 rounded-lg transition"
          >
            Back
          </button>
          <button
            onClick={() => setStep(3)}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm font-medium py-2 rounded-lg transition"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );

  const renderStep3 = () => (
    <>
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
            <Check className="h-3 w-3 text-white" />
          </div>
          <span className="text-xs text-white">Account Type</span>
        </div>
        <div className="h-0.5 w-8 bg-blue-600"></div>
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
            <Check className="h-3 w-3 text-white" />
          </div>
          <span className="text-xs text-white">Details</span>
        </div>
        <div className="h-0.5 w-8 bg-blue-600"></div>
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
            <div className="text-xs text-white">3</div>
          </div>
          <span className="text-xs text-white">Security</span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-xs font-medium text-slate-300 mb-1">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              className="w-full bg-slate-900/30 border border-slate-700 rounded-lg pl-9 pr-10 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-400 transition"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          
          {/* Password Strength Indicator */}
          {formData.password && (
            <div className="mt-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-400">Password strength</span>
                <span className={`text-xs font-medium ${
                  passwordStrength.strength === 1 ? 'text-red-400' :
                  passwordStrength.strength === 2 ? 'text-orange-400' :
                  passwordStrength.strength === 3 ? 'text-yellow-400' :
                  'text-green-400'
                }`}>
                  {passwordStrength.label}
                </span>
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      level <= passwordStrength.strength
                        ? passwordStrength.color
                        : 'bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Password Requirements */}
          <div className="mt-3 space-y-1">
            {[
              { label: 'At least 8 characters', check: formData.password.length >= 8 },
              { label: 'Uppercase & lowercase letters', check: /[a-z]/.test(formData.password) && /[A-Z]/.test(formData.password) },
              { label: 'At least one number', check: /[0-9]/.test(formData.password) },
              { label: 'At least one special character', check: /[^a-zA-Z0-9]/.test(formData.password) }
            ].map((req, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <div className={`h-3 w-3 rounded-full flex items-center justify-center ${
                  req.check ? 'bg-green-500/20' : 'bg-slate-700/50'
                }`}>
                  {req.check && <Check className="h-2 w-2 text-green-400" />}
                </div>
                <span className={`text-xs ${req.check ? 'text-green-400' : 'text-slate-500'}`}>
                  {req.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Terms Agreement */}
        <div className="flex items-start space-x-2 pt-2">
          <button
            type="button"
            onClick={() => setAgreedToTerms(!agreedToTerms)}
            className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition ${
              agreedToTerms
                ? 'bg-blue-600 border-blue-600'
                : 'bg-slate-900/50 border-slate-600 hover:border-slate-500'
            }`}
          >
            {agreedToTerms && <Check className="h-2.5 w-2.5 text-white" />}
          </button>
          <label className="text-xs text-slate-300 cursor-pointer" onClick={() => setAgreedToTerms(!agreedToTerms)}>
            I agree to the{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
            {' '}and confirm I'm at least 18 years old
          </label>
        </div>

        {/* Security Features */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 mt-2">
          <div className="flex items-center space-x-2 mb-1">
            <Shield className="h-3 w-3 text-blue-400" />
            <span className="text-xs font-medium text-blue-300">Security Features</span>
          </div>
          <div className="text-xs text-blue-400/80">
            Your data is encrypted with AES-256 and backed by blockchain technology
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={() => setStep(2)}
            className="bg-slate-900/30 hover:bg-slate-900 border border-slate-700 text-white text-sm font-medium py-2 rounded-lg transition"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm font-medium py-2 rounded-lg transition shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!agreedToTerms}
          >
            Create Account
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-sm">
        {/* Logo/Brand */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center space-x-2 mb-3">
            <Shield className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white">Smart Land Registry</span>
          </div>
          <p className="text-slate-400 text-sm">Secure land management platform</p>
        </div>

        {/* Register Card */}
        <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-xl p-6 shadow-xl">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}

          {/* Login Link */}
          <p className="mt-6 text-center text-xs text-slate-400">
            Already have an account?{' '}
            <a href="/login" className="text-blue-400 hover:text-blue-300 font-medium transition">
              Sign in
            </a>
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-2 mt-6">
          <div className="text-center p-2 bg-slate-800/30 rounded-lg">
            <Lock className="h-3 w-3 text-green-400 mx-auto mb-1" />
            <div className="text-xs text-slate-300">Blockchain</div>
          </div>
          <div className="text-center p-2 bg-slate-800/30 rounded-lg">
            <Globe className="h-3 w-3 text-blue-400 mx-auto mb-1" />
            <div className="text-xs text-slate-300">GIS Mapping</div>
          </div>
          <div className="text-center p-2 bg-slate-800/30 rounded-lg">
            <Award className="h-3 w-3 text-amber-400 mx-auto mb-1" />
            <div className="text-xs text-slate-300">Govt Verified</div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-slate-500 mt-6">
          Supported by Ministry of Lands & Survey • Cameroon
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;