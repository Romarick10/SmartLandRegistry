'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Shield, 
  Search, 
  FileText, 
  MapPin, 
  Users, 
  RefreshCw, 
  User,
  Menu,
  X,
  ChevronDown,
  Globe,
  Lock,
  BarChart3,
  Home,
  Landmark,
  Briefcase,
  Settings,
  LogOut,
  Bell,
  HelpCircle
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Main Navigation Categories - Optimized for desktop
  const navItems = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: BarChart3,
      color: 'text-emerald-400',
      mobileOnly: false
    },
    {
      title: 'Land',
      href: '#',
      icon: MapPin,
      color: 'text-purple-400',
      mobileOnly: false,
      dropdown: [
        { title: 'Search Land', href: '/land/search', icon: Search },
        { title: 'Register', href: '/land/register', icon: FileText },
        { title: 'My Properties', href: '/land/my-properties', icon: Landmark },
        { title: 'GIS Map', href: '/land/map', icon: Globe }
      ]
    },
    {
      title: 'Documents',
      href: '/documents',
      icon: FileText,
      color: 'text-amber-400',
      mobileOnly: false
    },
    {
      title: 'Transactions',
      href: '/transactions',
      icon: RefreshCw,
      color: 'text-cyan-400',
      mobileOnly: false
    },
    {
      title: 'Dispute',
      href: '/dispute',
      icon: Users,
      color: 'text-red-400',
      mobileOnly: true
    },
    {
      title: 'Audit',
      href: '/audit',
      icon: Lock,
      color: 'text-green-400',
      mobileOnly: true
    }
  ];

  // User Menu Items
  const userMenu = [
    { title: 'My Profile', href: '/profile', icon: User },
    { title: 'My Properties', href: '/my-properties', icon: Landmark },
    { title: 'My Documents', href: '/my-documents', icon: FileText },
    { title: 'Settings', href: '/settings', icon: Settings },
    { title: 'Help', href: '/help', icon: HelpCircle },
    { title: 'Logout', href: '/logout', icon: LogOut, color: 'text-red-400' }
  ];

  const isLoggedIn = false; // Change based on auth state

  return (
    <>
      <nav className="fixed w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo - Optimized size */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="relative">
                  <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-blue-400 group-hover:scale-110 transition-transform" />
                  <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="hidden sm:block">
                  <span className="text-base font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap">
                    Smart Land Registry
                  </span>
                  <div className="text-[9px] text-slate-500 -mt-0.5 tracking-tight leading-tight">
                    Ministry of Lands & Survey
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Optimized spacing */}
            <div className="hidden lg:flex items-center space-x-1 ml-2">
              {navItems.filter(item => !item.mobileOnly).map((item, index) => (
                <div key={index} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                        className="flex items-center space-x-1.5 px-3 py-2 text-xs sm:text-sm text-slate-300 hover:text-white transition rounded-lg hover:bg-slate-800/50 min-w-[80px] sm:min-w-[100px]"
                      >
                        <item.icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${item.color}`} />
                        <span className="font-medium">{item.title}</span>
                        <ChevronDown className={`h-3 w-3 transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {activeDropdown === item.title && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-slate-800/95 backdrop-blur-xl border border-slate-700 rounded-xl shadow-2xl shadow-black/30 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                          {item.dropdown.map((dropdownItem, idx) => (
                            <Link
                              key={idx}
                              href={dropdownItem.href}
                              className="flex items-center space-x-3 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 transition group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.icon && <dropdownItem.icon className="h-3.5 w-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />}
                              <span className="text-xs sm:text-sm">{dropdownItem.title}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-1.5 px-3 py-2 text-xs sm:text-sm text-slate-300 hover:text-white transition rounded-lg hover:bg-slate-800/50 min-w-[80px] sm:min-w-[100px] group"
                    >
                      <item.icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${item.color} group-hover:scale-110 transition-transform`} />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* User Actions - Right Side */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Search Button */}
              <button className="hidden sm:flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition">
                <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>

              {/* Notifications */}
              {isLoggedIn && (
                <button className="hidden sm:flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition relative">
                  <Bell className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span className="absolute -top-1 -right-1 h-1.5 w-1.5 sm:h-2 sm:w-2 bg-red-500 rounded-full"></span>
                </button>
              )}

              {/* Auth Buttons / User Menu */}
              {isLoggedIn ? (
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center space-x-1.5 sm:space-x-2 px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-slate-300 hover:text-white transition rounded-lg hover:bg-slate-800/50 border border-slate-700"
                  >
                    <User className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Account</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 top-full mt-1 w-48 bg-slate-800/95 backdrop-blur-xl border border-slate-700 rounded-xl shadow-2xl shadow-black/30 py-2 z-50">
                      <div className="px-3 py-2 border-b border-slate-700">
                        <div className="text-sm font-medium text-white">John Doe</div>
                        <div className="text-xs text-slate-400">john@example.com</div>
                      </div>
                      {userMenu.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className={`flex items-center space-x-3 px-3 py-2 text-xs sm:text-sm ${item.color || 'text-slate-300'} hover:text-white hover:bg-slate-700/50 transition`}
                          onClick={() => setUserMenuOpen(false)}
                        >
                          {item.icon && <item.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <Link
                    href="/login"
                    className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition border border-slate-700 whitespace-nowrap"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg transition shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 whitespace-nowrap"
                  >
                    Register
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-1.5 sm:p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-slate-700 shadow-2xl z-40 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-3 sm:px-4 py-4">
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Search parcels, documents..."
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    onClick={() => setIsMenuOpen(false)}
                  />
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="mb-6">
                <div className="text-xs text-slate-500 uppercase tracking-wider px-2 mb-2">
                  Navigation
                </div>
                <div className="space-y-1">
                  {navItems.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {item.dropdown ? (
                        <>
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                            className="flex items-center justify-between w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition"
                          >
                            <div className="flex items-center space-x-3">
                              <item.icon className={`h-4 w-4 ${item.color}`} />
                              <div className="text-left">
                                <div className="font-medium">{item.title}</div>
                              </div>
                            </div>
                            <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {activeDropdown === item.title && (
                            <div className="ml-10 mt-1 space-y-1">
                              {item.dropdown.map((dropdownItem, idx) => (
                                <Link
                                  key={idx}
                                  href={dropdownItem.href}
                                  className="flex items-center space-x-3 px-3 sm:px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800/30 rounded-lg transition"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {dropdownItem.icon && <dropdownItem.icon className="h-3.5 w-3.5" />}
                                  <span>{dropdownItem.title}</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <item.icon className={`h-4 w-4 ${item.color}`} />
                          <div className="text-left">
                            <div className="font-medium">{item.title}</div>
                          </div>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile User Menu */}
              <div className="pt-4 border-t border-slate-800">
                {isLoggedIn ? (
                  <div className="space-y-1">
                    {userMenu.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className={`flex items-center space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 text-sm ${item.color || 'text-slate-300'} hover:text-white hover:bg-slate-800/50 rounded-lg transition`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.icon && <item.icon className="h-4 w-4" />}
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/login"
                      className="text-center px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition border border-slate-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="text-center px-3 sm:px-4 py-2.5 sm:py-3 text-sm bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg transition shadow-lg shadow-blue-500/30"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Footer */}
              <div className="pt-6 border-t border-slate-800 mt-4">
                <div className="text-xs text-slate-500 text-center">
                  <div>© 2024 Smart Land Registry Cameroon</div>
                  <div className="mt-1 text-[10px]">Ministry of Lands & Survey</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar - Optimized height */}
      <div className="h-14 sm:h-16"></div>
    </>
  );
};

export default Navbar;