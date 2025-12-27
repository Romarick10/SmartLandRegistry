import { Shield, Lock, Globe, FileCheck, Zap, Users, Map, CheckCircle, BarChart3, Cloud, Smartphone, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">

      {/* Hero Section with Clear Problem Statement */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
              <Map className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Transforming Land Management in Cameroon</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ending Land Disputes with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Blockchain & GIS Technology
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
              A revolutionary digital platform that brings transparency, security, and efficiency 
              to land ownership records in Cameroon. Say goodbye to paper-based systems and 
              fraudulent land claims forever.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition transform hover:scale-105 shadow-lg shadow-blue-500/50">
                Register Your Land
              </button>
              <button className="bg-slate-800/50 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold text-lg transition border border-slate-700">
                Watch Demo Video
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { label: "Land Disputes", value: "70%", description: "Reduction target" },
              { label: "Processing Time", value: "90%", description: "Faster registration" },
              { label: "Accuracy", value: "99.9%", description: "Record precision" },
              { label: "Access", value: "24/7", description: "System availability" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700">
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-blue-300 font-semibold">{stat.label}</div>
                <div className="text-xs text-slate-400 mt-1">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem & Solution Section */}
      <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <Target className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">The Problem We Solve</h3>
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Traditional Land Systems Are
                <span className="text-red-400"> Broken</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Manual paper-based records prone to loss and damage",
                  "Lengthy registration processes (months or years)",
                  "High incidence of fraudulent land claims",
                  "Poor coordination between land agencies",
                  "Limited access for rural communities",
                  "Costly legal battles over ownership"
                ].map((problem, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-red-400"></div>
                    </div>
                    <span className="text-slate-300">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Our Digital Solution</h3>
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Modern Technology for
                <span className="text-green-400"> Secure Ownership</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Blockchain-secured immutable land records",
                  "GIS mapping for precise boundary definition",
                  "Real-time ownership verification",
                  "Mobile access for remote communities",
                  "Automated fraud detection algorithms",
                  "Transparent transaction history"
                ].map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-slate-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Enhanced */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Core Technology Features</h2>
            <p className="text-slate-400 text-lg">Powered by cutting-edge innovations for land management</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Blockchain Security",
                description: "Immutable ledger technology prevents tampering with land records",
                color: "text-purple-400",
                bg: "bg-purple-500/10"
              },
              {
                icon: Map,
                title: "GIS Mapping",
                description: "Precise digital mapping with satellite imagery and GPS coordinates",
                color: "text-emerald-400",
                bg: "bg-emerald-500/10"
              },
              {
                icon: FileCheck,
                title: "Instant Verification",
                description: "Verify land ownership and history in seconds instead of weeks",
                color: "text-blue-400",
                bg: "bg-blue-500/10"
              },
              {
                icon: Smartphone,
                title: "Mobile First",
                description: "Access all features via mobile app, works offline in rural areas",
                color: "text-cyan-400",
                bg: "bg-cyan-500/10"
              },
              {
                icon: BarChart3,
                title: "Smart Analytics",
                description: "AI-powered fraud detection and land valuation insights",
                color: "text-amber-400",
                bg: "bg-amber-500/10"
              },
              {
                icon: Cloud,
                title: "Cloud Platform",
                description: "Secure cloud storage with automatic backups and disaster recovery",
                color: "text-sky-400",
                bg: "bg-sky-500/10"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition group hover:transform hover:-translate-y-1">
                <div className={`inline-flex p-3 rounded-lg ${feature.bg} mb-4 group-hover:scale-110 transition`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple 4-Step Process</h2>
            <p className="text-slate-400 text-lg">From registration to verified ownership in days, not months</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Land Survey",
                description: "Certified surveyor maps your property using GPS and GIS technology",
                icon: Map
              },
              {
                step: "02",
                title: "Document Upload",
                description: "Upload ownership documents via web or mobile app for verification",
                icon: FileCheck
              },
              {
                step: "03",
                title: "Blockchain Registration",
                description: "Your land record is encrypted and stored on the immutable blockchain",
                icon: Lock
              },
              {
                step: "04",
                title: "Receive Digital Title",
                description: "Get your secure digital land title certificate with QR code verification",
                icon: Shield
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center h-full">
                  <div className="text-5xl font-bold text-blue-500/30 mb-4">{step.step}</div>
                  <div className="inline-flex p-3 bg-blue-500/20 rounded-full mb-4">
                    <step.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-500/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 bg-green-500/20 rounded-full mb-6">
                <Users className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">For Land Owners</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Peace of mind with secure records</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Easy property transfers</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Protection against fraud</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-4 bg-blue-500/20 rounded-full mb-6">
                <Globe className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">For Government</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-400" />
                  <span>Reduced land disputes</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-400" />
                  <span>Efficient tax collection</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-400" />
                  <span>Transparent governance</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-4 bg-amber-500/20 rounded-full mb-6">
                <Zap className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">For Economy</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-amber-400" />
                  <span>Increased investment security</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-amber-400" />
                  <span>Reduced legal costs</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-amber-400" />
                  <span>Improved credit access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 shadow-2xl shadow-blue-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="relative">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Secure Your Land?</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Join the digital revolution in land management. Register your property today 
                and protect your most valuable asset with blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold text-lg transition transform hover:scale-105">
                  Register Your Property
                </button>
                <button className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-3 rounded-lg font-semibold text-lg transition">
                  Contact Our Team
                </button>
              </div>
              <p className="text-blue-200/70 text-sm mt-6">
                Supported by the Ministry of Lands & Survey • ISO 27001 Certified
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}