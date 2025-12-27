'use client';

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Check, 
  Smartphone, 
  Fingerprint, 
  MapPin, 
  Globe, 
  Key, 
  UserCheck,
  Home,
  AlertCircle,
  Loader2,
  QrCode,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email'); // 'email', 'phone', 'biometric'
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [mfaStep, setMfaStep] = useState(0); // 0 = main login, 1 = 2FA
  const [mfaCode, setMfaCode] = useState(['', '', '', '', '', '']);
  const router = useRouter();

  // Load saved credentials
  useEffect(() => {
    const savedEmail = localStorage.getItem('slr_saved_email');
    const savedPhone = localStorage.getItem('slr_saved_phone');
    const savedRemember = localStorage.getItem('slr_remember_me');
    
    if (savedRemember === 'true') {
      setRememberMe(true);
      if (savedEmail) {
        setFormData(prev => ({ ...prev, email: savedEmail }));
      }
      if (savedPhone) {
        setFormData(prev => ({ ...prev, phone: savedPhone }));
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    if (!formData.password || (!formData.email && !formData.phone)) {
      setError('Please fill in all required fields');
      return;
    }

    setIsLoading(true);

    // Save credentials if remember me is checked
    if (rememberMe) {
      localStorage.setItem('slr_remember_me', 'true');
      if (formData.email) localStorage.setItem('slr_saved_email', formData.email);
      if (formData.phone) localStorage.setItem('slr_saved_phone', formData.phone);
    } else {
      localStorage.removeItem('slr_remember_me');
      localStorage.removeItem('slr_saved_email');
      localStorage.removeItem('slr_saved_phone');
    }

    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock authentication - in real app, this would be API call
    if (formData.password === 'demo123') {
      // Simulate 2FA step for demo
      setMfaStep(1);
    } else {
      setError('Invalid credentials. Try: demo123');
    }
    
    setIsLoading(false);
  };

  const handleMfaSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate MFA verification
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful login
    console.log('Login successful:', { 
      method: loginMethod, 
      identifier: loginMethod === 'email' ? formData.email : formData.phone 
    });
    
    // Redirect to dashboard
    router.push('/dashboard');
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  const handleMfaCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...mfaCode];
      newCode[index] = value;
      setMfaCode(newCode);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`mfa-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !mfaCode[index] && index > 0) {
      const prevInput = document.getElementById(`mfa-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleQuickLogin = (method: string) => {
    console.log(`Quick login with ${method}`);
    // In production, this would trigger OAuth or other auth methods
    alert(`${method} login coming soon!`);
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
    // In production, this would open a modal or redirect
    alert('Password reset instructions will be sent to your email/phone');
  };

  const renderMainLogin = () => (
    <>
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-white mb-1">Welcome Back</h1>
        <p className="text-slate-400 text-sm">Access your land records securely</p>
      </div>

      {/* Login Method Toggle */}
      <div className="flex mb-4 rounded-lg overflow-hidden border border-slate-700">
        <button
          type="button"
          onClick={() => setLoginMethod('email')}
          className={`flex-1 py-2.5 text-sm font-medium transition ${loginMethod === 'email' 
            ? 'bg-blue-500/20 text-blue-300' 
            : 'bg-slate-900/30 text-slate-400 hover:text-slate-300'}`}
        >
          <Mail className="h-4 w-4 inline mr-2" />
          Email
        </button>
        <button
          type="button"
          onClick={() => setLoginMethod('phone')}
          className={`flex-1 py-2.5 text-sm font-medium transition ${loginMethod === 'phone' 
            ? 'bg-blue-500/20 text-blue-300' 
            : 'bg-slate-900/30 text-slate-400 hover:text-slate-300'}`}
        >
          <Smartphone className="h-4 w-4 inline mr-2" />
          Phone
        </button>
        <button
          type="button"
          onClick={() => handleQuickLogin('biometric')}
          className="flex-1 py-2.5 text-sm font-medium bg-slate-900/30 text-slate-400 hover:text-slate-300 transition"
        >
          <Fingerprint className="h-4 w-4 inline mr-2" />
          Biometric
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
          <div className="flex items-center space-x-2 text-red-400 text-sm">
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email/Phone Input */}
        <div>
          <label htmlFor="identifier" className="block text-xs font-medium text-slate-300 mb-1">
            {loginMethod === 'email' ? 'Email Address' : 'Phone Number'}
          </label>
          <div className="relative">
            {loginMethod === 'email' ? (
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
            ) : (
              <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
            )}
            <input
              id="identifier"
              type={loginMethod === 'email' ? 'email' : 'tel'}
              value={loginMethod === 'email' ? formData.email : formData.phone}
              onChange={(e) => handleChange(loginMethod === 'email' ? 'email' : 'phone', e.target.value)}
              className="w-full bg-slate-900/30 border border-slate-700 rounded-lg pl-9 pr-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition"
              placeholder={loginMethod === 'email' ? 'you@example.com' : '+237 6XX XXX XXX'}
              required
            />
          </div>
        </div>

        {/* Password Input */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="password" className="block text-xs font-medium text-slate-300">
              Password
            </label>
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-xs text-blue-400 hover:text-blue-300 transition"
            >
              Forgot password?
            </button>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              className="w-full bg-slate-900/30 border border-slate-700 rounded-lg pl-9 pr-10 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition"
              placeholder="Enter your password"
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
        </div>

        {/* Remember Me & Demo */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setRememberMe(!rememberMe)}
            className="flex items-center space-x-2 group"
          >
            <div className={`w-4 h-4 rounded border flex items-center justify-center transition ${rememberMe
              ? 'bg-blue-600 border-blue-600'
              : 'bg-slate-900/50 border-slate-600 group-hover:border-slate-500'
            }`}>
              {rememberMe && <Check className="h-2.5 w-2.5 text-white" />}
            </div>
            <span className="text-xs text-slate-300">Remember me</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setFormData({
                email: 'demo@smartland.cm',
                phone: '+237 600 000 000',
                password: 'demo123'
              });
            }}
            className="text-xs text-slate-500 hover:text-slate-300 transition"
          >
            Use demo account
          </button>
        </div>

        {/* Security Status */}
        <div className="flex items-center justify-center space-x-2 text-xs">
          <ShieldCheck className="h-3 w-3 text-green-400" />
          <span className="text-green-400 font-medium">Secure Connection</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-500">TLS 1.3 Encrypted</span>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm font-medium py-2.5 rounded-lg transition shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              Signing in...
            </>
          ) : (
            'Sign In'
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-700"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-2 bg-slate-800/40 text-xs text-slate-400">or continue with</span>
        </div>
      </div>

      {/* Quick Login Options */}
      <div className="grid grid-cols-3 gap-2">
        <button
          type="button"
          onClick={() => handleQuickLogin('government')}
          className="flex items-center justify-center space-x-1 bg-slate-900/30 hover:bg-slate-900 border border-slate-700 text-white py-2 rounded-lg transition group"
        >
          <UserCheck className="h-4 w-4 text-green-400 group-hover:scale-110 transition" />
          <span className="text-xs">Gov ID</span>
        </button>
        
        <button
          type="button"
          onClick={() => handleQuickLogin('qr')}
          className="flex items-center justify-center space-x-1 bg-slate-900/30 hover:bg-slate-900 border border-slate-700 text-white py-2 rounded-lg transition group"
        >
          <QrCode className="h-4 w-4 text-purple-400 group-hover:scale-110 transition" />
          <span className="text-xs">QR Code</span>
        </button>
        
        <button
          type="button"
          onClick={() => handleQuickLogin('smartcard')}
          className="flex items-center justify-center space-x-1 bg-slate-900/30 hover:bg-slate-900 border border-slate-700 text-white py-2 rounded-lg transition group"
        >
          <Key className="h-4 w-4 text-amber-400 group-hover:scale-110 transition" />
          <span className="text-xs">Smart Card</span>
        </button>
      </div>
    </>
  );

  const renderMfaVerification = () => (
    <>
      <div className="text-center mb-6">
        <div className="inline-flex p-3 bg-blue-500/20 rounded-full mb-4">
          <Shield className="h-8 w-8 text-blue-400" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-1">Two-Factor Authentication</h1>
        <p className="text-slate-400 text-sm">
          Enter the 6-digit code sent to your {loginMethod === 'email' ? 'email' : 'phone'}
        </p>
        <div className="text-xs text-slate-500 mt-2">
          {loginMethod === 'email' ? formData.email : formData.phone}
        </div>
      </div>

      <form onSubmit={handleMfaSubmit} className="space-y-6">
        {/* MFA Code Inputs */}
        <div className="flex justify-center space-x-2">
          {mfaCode.map((digit, index) => (
            <input
              key={index}
              id={`mfa-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleMfaCodeChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 bg-slate-900/30 border border-slate-700 rounded-lg text-center text-xl font-bold text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
              pattern="\d*"
              required
            />
          ))}
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={() => console.log('Resend code')}
            className="text-xs text-blue-400 hover:text-blue-300 transition"
          >
            Didn't receive code? Resend
          </button>
        </div>

        {/* Security Note */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
          <div className="flex items-start space-x-2">
            <ShieldCheck className="h-4 w-4 text-blue-400 mt-0.5" />
            <div className="text-xs text-blue-400/80">
              For security, this code expires in 5 minutes. Never share your authentication code.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setMfaStep(0)}
            className="bg-slate-900/30 hover:bg-slate-900 border border-slate-700 text-white text-sm font-medium py-2.5 rounded-lg transition"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={isLoading || mfaCode.some(digit => !digit)}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm font-medium py-2.5 rounded-lg transition shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Verifying...
              </>
            ) : (
              'Verify & Continue'
            )}
          </button>
        </div>
      </form>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-sm">
        {/* Logo/Brand */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center space-x-2 mb-3">
            <Shield className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white">Smart Land Registry</span>
          </div>
          <p className="text-slate-400 text-sm">Secure access to your land records</p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-xl p-6 shadow-xl">
          {mfaStep === 0 ? renderMainLogin() : renderMfaVerification()}

          {/* Register Link */}
          <p className="mt-6 text-center text-xs text-slate-400">
            Don't have an account?{' '}
            <Link href="/register" className="text-blue-400 hover:text-blue-300 font-medium transition">
              Register now
            </Link>
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-2 mt-6">
          <div className="text-center p-2 bg-slate-800/30 rounded-lg">
            <Globe className="h-3 w-3 text-blue-400 mx-auto mb-1" />
            <div className="text-xs text-slate-300">24/7 Access</div>
          </div>
          <div className="text-center p-2 bg-slate-800/30 rounded-lg">
            <MapPin className="h-3 w-3 text-emerald-400 mx-auto mb-1" />
            <div className="text-xs text-slate-300">GIS Maps</div>
          </div>
          <div className="text-center p-2 bg-slate-800/30 rounded-lg">
            <Lock className="h-3 w-3 text-amber-400 mx-auto mb-1" />
            <div className="text-xs text-slate-300">Blockchain</div>
          </div>
        </div>

        {/* Government Notice */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center space-x-1 px-3 py-1.5 bg-slate-800/30 rounded-lg border border-slate-700">
            <Shield className="h-3 w-3 text-blue-400" />
            <span className="text-xs text-slate-400">Official Government Platform</span>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-slate-500 mt-6">
          © 2024 Smart Land Registry Cameroon • Ministry of Lands & Survey
        </p>
      </div>
    </div>
  );
};

export default LoginPage;