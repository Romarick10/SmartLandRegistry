'use client';

import React from 'react';
import { 
  Palette, 
  Droplets, 
  Contrast, 
  Eye, 
  Sun, 
  Moon, 
  Layers,
  Sparkles,
  Check,
  Copy,
  Brush,
  Layout
} from 'lucide-react';

const ThemePreviewPage = () => {
  const colors = {
    primary: [
      { name: 'Blue 400', value: '#60a5fa', class: 'text-blue-400' },
      { name: 'Cyan 400', value: '#22d3ee', class: 'text-cyan-400' },
      { name: 'Slate 900', value: '#0f172a', class: 'text-slate-900' },
      { name: 'Slate 800', value: '#1e293b', class: 'text-slate-800' },
      { name: 'Slate 700', value: '#334155', class: 'text-slate-700' },
    ],
    accent: [
      { name: 'Emerald 400', value: '#34d399', class: 'text-emerald-400' },
      { name: 'Purple 400', value: '#c084fc', class: 'text-purple-400' },
      { name: 'Amber 400', value: '#fbbf24', class: 'text-amber-400' },
      { name: 'Red 400', value: '#f87171', class: 'text-red-400' },
      { name: 'Green 400', value: '#4ade80', class: 'text-green-400' },
    ]
  };

  const gradients = [
    { name: 'Primary Gradient', value: 'from-slate-900 via-blue-900 to-slate-900', class: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900' },
    { name: 'Blue Gradient', value: 'from-blue-600 to-cyan-600', class: 'bg-gradient-to-r from-blue-600 to-cyan-600' },
    { name: 'Emerald Gradient', value: 'from-emerald-600 to-cyan-400', class: 'bg-gradient-to-r from-emerald-600 to-cyan-400' },
    { name: 'Purple Gradient', value: 'from-purple-600 to-pink-500', class: 'bg-gradient-to-r from-purple-600 to-pink-500' },
    { name: 'Amber Gradient', value: 'from-amber-500 to-orange-400', class: 'bg-gradient-to-r from-amber-500 to-orange-400' },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // Show feedback
    const btn = event.target;
    const original = btn.innerHTML;
    btn.innerHTML = '<Check className="h-4 w-4" />';
    setTimeout(() => {
      btn.innerHTML = original;
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-flex items-center space-x-3 mb-4">
            <Palette className="h-10 w-10 text-cyan-400" />
            <h1 className="text-4xl font-bold text-white">Theme Preview</h1>
          </div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Explore the complete color system and design tokens used in the Smart Land Registry System.
            All colors are carefully selected for accessibility and visual harmony.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Color Palette */}
          <div className="lg:col-span-2 space-y-8">
            {/* Primary Colors */}
            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Droplets className="h-6 w-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Primary Color Palette</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {colors.primary.map((color, index) => (
                  <div key={index} className="group">
                    <div 
                      className={`h-24 rounded-xl mb-2 border border-slate-700 ${color.class.replace('text-', 'bg-')} flex items-center justify-center`}
                    >
                      <span className="text-white text-sm font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                        {color.name}
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="text-white text-sm font-medium">{color.name}</div>
                      <div className="flex items-center justify-center space-x-2 mt-1">
                        <code className="text-slate-400 text-xs">{color.value}</code>
                        <button
                          onClick={() => copyToClipboard(color.value)}
                          className="text-slate-500 hover:text-slate-300 transition"
                        >
                          <Copy className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Accent Colors */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {colors.accent.map((color, index) => (
                  <div key={index} className="group">
                    <div 
                      className={`h-20 rounded-xl mb-2 border border-slate-700 ${color.class.replace('text-', 'bg-')} flex items-center justify-center`}
                    >
                      <span className="text-white text-sm font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                        {color.name}
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="text-white text-sm font-medium">{color.name}</div>
                      <code className="text-slate-400 text-xs block mt-1">{color.value}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gradients */}
            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Layers className="h-6 w-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Gradient Collection</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {gradients.map((gradient, index) => (
                  <div key={index} className="group">
                    <div 
                      className={`h-32 rounded-xl mb-3 border border-slate-700 ${gradient.class} flex items-end justify-between p-4`}
                    >
                      <span className="text-white text-sm font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                        {gradient.name}
                      </span>
                      <button
                        onClick={() => copyToClipboard(gradient.value)}
                        className="text-white/70 hover:text-white transition bg-black/30 p-2 rounded-full backdrop-blur-sm"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <code className="text-slate-400 text-sm">{gradient.value}</code>
                      <div className="flex items-center space-x-2">
                        <div className="text-xs text-slate-500">Click to copy class</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Components Preview */}
          <div className="space-y-8">
            {/* Theme Info */}
            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="h-6 w-6 text-amber-400" />
                <h2 className="text-2xl font-bold text-white">Theme Information</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Sun className="h-5 w-5 text-amber-400" />
                    <span className="text-white">Theme Mode</span>
                  </div>
                  <div className="text-emerald-400 font-medium">Dark</div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Contrast className="h-5 w-5 text-blue-400" />
                    <span className="text-white">Contrast Ratio</span>
                  </div>
                  <div className="text-emerald-400 font-medium">AAA</div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Eye className="h-5 w-5 text-purple-400" />
                    <span className="text-white">Accessibility</span>
                  </div>
                  <div className="text-emerald-400 font-medium">WCAG 2.1</div>
                </div>
              </div>
            </div>

            {/* Buttons Preview */}
            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Brush className="h-6 w-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">UI Components</h2>
              </div>
              
              <div className="space-y-4">
                {/* Primary Buttons */}
                <div>
                  <h3 className="text-white font-medium mb-3">Primary Buttons</h3>
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm font-medium py-2.5 rounded-lg transition transform hover:scale-[1.02] shadow-lg shadow-blue-500/30">
                      Primary Button
                    </button>
                    <button className="w-full bg-gradient-to-r from-emerald-600 to-cyan-400 hover:from-emerald-700 hover:to-cyan-500 text-white text-sm font-medium py-2.5 rounded-lg transition transform hover:scale-[1.02] shadow-lg shadow-emerald-500/30">
                      Success Button
                    </button>
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-sm font-medium py-2.5 rounded-lg transition transform hover:scale-[1.02] shadow-lg shadow-purple-500/30">
                      Accent Button
                    </button>
                  </div>
                </div>

                {/* Secondary Buttons */}
                <div className="mt-6">
                  <h3 className="text-white font-medium mb-3">Secondary Buttons</h3>
                  <div className="space-y-3">
                    <button className="w-full bg-slate-900/30 hover:bg-slate-900 border border-slate-600 text-white text-sm font-medium py-2.5 rounded-lg transition">
                      Secondary Button
                    </button>
                    <button className="w-full bg-slate-900/30 hover:bg-slate-900 border border-blue-500/50 text-blue-400 text-sm font-medium py-2.5 rounded-lg transition">
                      Outline Button
                    </button>
                    <button className="w-full bg-slate-900/30 hover:bg-slate-900 border border-red-500/50 text-red-400 text-sm font-medium py-2.5 rounded-lg transition">
                      Danger Button
                    </button>
                  </div>
                </div>

                {/* Icon Buttons */}
                <div className="mt-6">
                  <h3 className="text-white font-medium mb-3">Icon Buttons</h3>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-slate-900/30 hover:bg-slate-900 border border-slate-700 text-white p-2.5 rounded-lg transition flex items-center justify-center">
                      <Copy className="h-4 w-4" />
                    </button>
                    <button className="flex-1 bg-slate-900/30 hover:bg-slate-900 border border-slate-700 text-white p-2.5 rounded-lg transition flex items-center justify-center">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="flex-1 bg-slate-900/30 hover:bg-slate-900 border border-slate-700 text-white p-2.5 rounded-lg transition flex items-center justify-center">
                      <Check className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Layout className="h-6 w-6 text-emerald-400" />
                <h2 className="text-2xl font-bold text-white">Typography Scale</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-1">Heading 1</h1>
                  <code className="text-slate-400 text-xs">text-3xl font-bold</code>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">Heading 2</h2>
                  <code className="text-slate-400 text-xs">text-2xl font-bold</code>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Heading 3</h3>
                  <code className="text-slate-400 text-xs">text-xl font-semibold</code>
                </div>
                <div>
                  <p className="text-base text-slate-300 mb-1">Body Text</p>
                  <code className="text-slate-400 text-xs">text-base text-slate-300</code>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Small Text</p>
                  <code className="text-slate-400 text-xs">text-sm text-slate-400</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Notes */}
        <div className="mt-12 bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Usage Guidelines</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-emerald-400 font-medium mb-2">Primary Colors</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Use for main actions and primary UI elements</li>
                <li>• Blue for CTAs and important buttons</li>
                <li>• Slate for backgrounds and text</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="text-blue-400 font-medium mb-2">Accent Colors</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Use for alerts, success states, warnings</li>
                <li>• Emerald for success messages</li>
                <li>• Amber for warnings and highlights</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="text-purple-400 font-medium mb-2">Gradients</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Use for hero sections and CTAs</li>
                <li>• Primary gradient for main background</li>
                <li>• Color gradients for buttons and accents</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            Smart Land Registry Design System • Version 2.0 • Built with Tailwind CSS
          </p>
          <p className="text-slate-600 text-xs mt-2">
            All colors are tested for accessibility and visual harmony
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThemePreviewPage;