'use client';

import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Shield, 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Download,
  FileText,
  Award,
  Lock,
  CheckCircle,
  Users,
  Building,
  Send,
  ChevronUp
} from 'lucide-react';

const Footer = () => {
  const pathname = usePathname();

  if (pathname.startsWith('/admin') || pathname.startsWith('/dashboard')) {
    return null;
  }

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed with:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { title: 'Land Search', href: '/search' },
    { title: 'Property Registration', href: '/register' },
    { title: 'Document Verification', href: '/verify' },
    { title: 'Dispute Resolution', href: '/dispute' },
    { title: 'GIS Maps', href: '/maps' },
    { title: 'Fee Calculator', href: '/fees' },
  ];

  const resources = [
    { title: 'User Guide', href: '/guide', icon: FileText },
    { title: 'API Documentation', href: '/api-docs', icon: Download },
    { title: 'Whitepaper', href: '/whitepaper', icon: FileText },
    { title: 'Research Papers', href: '/research', icon: Award },
  ];

  const legal = [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'Data Protection', href: '/data-protection' },
    { title: 'Cookie Policy', href: '/cookies' },
  ];

  const partners = [
    { name: 'Ministry of Lands & Survey', logo: '🏛️' },
    { name: 'UN-Habitat', logo: '🌍' },
    { name: 'World Bank', logo: '🏦' },
    { name: 'African Development Bank', logo: '🤝' },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Ministry of Lands & Survey, Yaoundé, Cameroon' },
    { icon: Phone, text: '+237 233 401 100' },
    { icon: Mail, text: 'info@smartlandregistry.cm' },
    { icon: Globe, text: 'www.smartlandregistry.cm' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <>
      {/* Main Footer */}
      <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-slate-800">
            
            {/* Brand & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Smart Land Registry
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Revolutionizing land administration in Cameroon through blockchain technology 
                and GIS mapping for secure, transparent property management.
              </p>
              
              {/* Security Badges */}
              <div className="flex flex-wrap gap-2 pt-4">
                <div className="flex items-center space-x-1 px-2 py-1 bg-green-500/10 rounded text-xs text-green-400">
                  <Lock className="h-3 w-3" />
                  <span>AES-256</span>
                </div>
                <div className="flex items-center space-x-1 px-2 py-1 bg-blue-500/10 rounded text-xs text-blue-400">
                  <CheckCircle className="h-3 w-3" />
                  <span>ISO 27001</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Quick Links</span>
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-blue-400 transition flex items-center space-x-2 group"
                    >
                      <div className="h-1 w-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span>{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <FileText className="h-5 w-5 text-emerald-400" />
                <span>Resources</span>
              </h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <Link 
                      href={resource.href}
                      className="text-sm text-slate-400 hover:text-emerald-400 transition flex items-center space-x-2 group"
                    >
                      <resource.icon className="h-4 w-4" />
                      <span>{resource.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Mail className="h-5 w-5 text-amber-400" />
                <span>Stay Updated</span>
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Subscribe to get updates on new features and announcements.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-4 pr-12 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md transition"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
                {subscribed && (
                  <div className="text-xs text-green-400 animate-in slide-in-from-top">
                    ✓ Successfully subscribed!
                  </div>
                )}
                <p className="text-xs text-slate-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>

              {/* Social Links */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-slate-300 mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-9 h-9 flex items-center justify-center bg-slate-800 hover:bg-blue-500/20 text-slate-400 hover:text-white rounded-lg transition border border-slate-700 hover:border-blue-500/30"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section - Partners & Contact */}
          <div className="py-8 border-b border-slate-800">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Partners */}
              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Trusted Partners</h3>
                <div className="flex flex-wrap gap-4">
                  {partners.map((partner, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-2 px-3 py-2 bg-slate-800/30 rounded-lg border border-slate-700"
                    >
                      <span className="text-lg">{partner.logo}</span>
                      <span className="text-sm text-slate-300">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Contact Information</h3>
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <info.icon className="h-4 w-4 text-blue-400 flex-shrink-0" />
                      <span className="text-sm text-slate-400">{info.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4">
              {legal.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-xs text-slate-500 hover:text-slate-300 transition"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-slate-500">
                © {new Date().getFullYear()} Smart Land Registry Cameroon
              </p>
              <p className="text-xs text-slate-600 mt-1">
                A Government Digital Initiative • Version 2.1.0
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm text-slate-500 hover:text-blue-400 transition group"
            >
              <span>Back to Top</span>
              <div className="w-8 h-8 flex items-center justify-center bg-slate-800 hover:bg-blue-500/20 rounded-lg transition border border-slate-700 group-hover:border-blue-500/30">
                <ChevronUp className="h-4 w-4" />
              </div>
            </button>
          </div>

          {/* Government Disclaimer */}
          <div className="pt-6 border-t border-slate-800 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Building className="h-4 w-4 text-slate-500" />
              <span className="text-xs text-slate-500">
                Official Government Platform • Ministry of Lands & Survey
              </span>
            </div>
            <p className="text-xs text-slate-600">
              This platform is secured with blockchain technology. All transactions are recorded on an immutable ledger.
            </p>
          </div>
        </div>
      </footer>

      {/* Live Status Bar */}
      <div className="bg-slate-950 border-t border-slate-800 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 text-xs">
            <div className="flex items-center space-x-1 text-green-400">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></div>
              <span>System Status: Operational</span>
            </div>
            <span className="text-slate-600">•</span>
            <span className="text-slate-500">Last Updated: {new Date().toLocaleDateString()}</span>
            <span className="text-slate-600">•</span>
            <div className="flex items-center space-x-1 text-blue-400">
              <Users className="h-3 w-3" />
              <span>Active Users: 15,432</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;