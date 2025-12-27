import { Shield, Lock, Globe, FileCheck, Zap, Users, Database, Cpu, Layers, GitBranch, Server, Map, Key, Cloud, ShieldCheck } from 'lucide-react';

export default function Design() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-sm">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Smart Land Registry</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-slate-300 hover:text-white transition">Home</a>
              <a href="#architecture" className="text-slate-300 hover:text-white transition">Architecture</a>
              <a href="#components" className="text-slate-300 hover:text-white transition">Components</a>
              <a href="#security" className="text-slate-300 hover:text-white transition">Security</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <Cpu className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">System Architecture & Design</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Technical
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Architecture
            </span>
          </h1>
          
          <p className="text-lg text-slate-300 mb-12 max-w-4xl mx-auto">
            A comprehensive overview of the Smart Land Registry System's architecture, 
            built on microservices, blockchain, and GIS technologies for maximum security, 
            scalability, and transparency.
          </p>
        </div>
      </section>

      {/* Architecture Overview */}
      <section id="architecture" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">System Architecture</h2>
            <p className="text-slate-400">Modern microservices-based architecture for scalability and reliability</p>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur border border-slate-700 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Layers className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">High-Level Architecture</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Presentation Layer */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Globe className="h-5 w-5 text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-white">Presentation Layer</h4>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    <span>React Web Application</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    <span>Flutter Mobile App</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    <span>Offline-First Design</span>
                  </li>
                </ul>
              </div>

              {/* Application Layer */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-cyan-500/20 rounded-lg">
                    <GitBranch className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h4 className="font-semibold text-white">Application Layer</h4>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                    <span>Microservices Architecture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                    <span>API Gateway (Kong)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                    <span>Docker Containers</span>
                  </li>
                </ul>
              </div>

              {/* Data Layer */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <Database className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h4 className="font-semibold text-white">Data Layer</h4>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                    <span>PostgreSQL + PostGIS</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                    <span>Blockchain (Ethereum/Polygon)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                    <span>Redis Cache</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Architecture Diagram Placeholder */}
          <div className="relative bg-slate-900/50 border border-slate-700 rounded-2xl p-8 mb-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>
            <div className="relative">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Server className="h-6 w-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">System Flow Diagram</h3>
              </div>
              
              {/* Simplified Architecture Visualization */}
              <div className="flex flex-col items-center space-y-8">
                {/* Row 1: Clients */}
                <div className="flex items-center space-x-6">
                  <div className="bg-slate-800 border border-blue-500/30 rounded-lg p-4 text-center">
                    <Globe className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-slate-300">Web Client</p>
                  </div>
                  <div className="bg-slate-800 border border-blue-500/30 rounded-lg p-4 text-center">
                    <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-slate-300">Mobile App</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center">
                  <div className="h-0.5 w-24 bg-blue-500/30"></div>
                  <div className="mx-4 text-blue-400">↓</div>
                  <div className="h-0.5 w-24 bg-blue-500/30"></div>
                </div>

                {/* Row 2: API Gateway */}
                <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">API Gateway</h4>
                  <p className="text-sm text-slate-300">Request routing & security</p>
                </div>

                {/* Arrow */}
                <div className="flex items-center">
                  <div className="h-0.5 w-24 bg-blue-500/30"></div>
                  <div className="mx-4 text-blue-400">↓</div>
                  <div className="h-0.5 w-24 bg-blue-500/30"></div>
                </div>

                {/* Row 3: Microservices */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Auth Service', 'Land Service', 'GIS Service', 'Dispute Service', 'Document Service', 'Audit Service'].map((service, idx) => (
                    <div key={idx} className="bg-slate-800/80 border border-slate-700 rounded-lg p-3 text-center hover:border-blue-500/50 transition">
                      <div className="text-xs text-blue-400 font-medium">{service}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section id="components" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Technical Components</h2>
            <p className="text-slate-400">Core technologies powering the Smart Land Registry</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Database,
                title: "PostgreSQL + PostGIS",
                description: "Spatial database for storing land geometries with advanced GIS capabilities",
                color: "text-emerald-400",
                bg: "bg-emerald-500/10"
              },
              {
                icon: Shield,
                title: "Blockchain Integration",
                description: "Ethereum/Polygon for immutable ownership records and transaction history",
                color: "text-purple-400",
                bg: "bg-purple-500/10"
              },
              {
                icon: Map,
                title: "GIS Engine",
                description: "Real-time boundary validation, overlap detection, and spatial analytics",
                color: "text-blue-400",
                bg: "bg-blue-500/10"
              },
              {
                icon: Key,
                title: "JWT Authentication",
                description: "Secure user authentication with role-based access control (RBAC)",
                color: "text-amber-400",
                bg: "bg-amber-500/10"
              },
              {
                icon: Cloud,
                title: "Cloud Infrastructure",
                description: "AWS/DigitalOcean deployment with Docker and Kubernetes orchestration",
                color: "text-cyan-400",
                bg: "bg-cyan-500/10"
              },
              {
                icon: ShieldCheck,
                title: "Security Suite",
                description: "AES-256 encryption, HTTPS, audit logs, and fraud detection algorithms",
                color: "text-red-400",
                bg: "bg-red-500/10"
              }
            ].map((component, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition group">
                <div className={`inline-flex p-3 rounded-lg ${component.bg} mb-4 group-hover:scale-110 transition`}>
                  <component.icon className={`h-6 w-6 ${component.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{component.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section id="security" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Security & Compliance</h2>
            <p className="text-slate-400">Enterprise-grade security measures protecting every transaction</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Lock className="h-5 w-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Data Protection</h3>
                </div>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start space-x-2">
                    <FileCheck className="h-4 w-4 text-green-400 mt-0.5" />
                    <span>AES-256 encryption for all stored documents</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FileCheck className="h-4 w-4 text-green-400 mt-0.5" />
                    <span>End-to-end HTTPS/TLS encryption</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FileCheck className="h-4 w-4 text-green-400 mt-0.5" />
                    <span>Immutable blockchain audit trails</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="h-5 w-5 text-amber-400" />
                  <h3 className="text-lg font-semibold text-white">Fraud Prevention</h3>
                </div>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start space-x-2">
                    <FileCheck className="h-4 w-4 text-green-400 mt-0.5" />
                    <span>Real-time geometry overlap detection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FileCheck className="h-4 w-4 text-green-400 mt-0.5" />
                    <span>Anomaly detection in transfer patterns</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FileCheck className="h-4 w-4 text-green-400 mt-0.5" />
                    <span>Multi-signature verification for critical actions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-5 w-5 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">Access Control</h3>
                </div>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start space-x-2">
                    <FileCheck className="h-4 w-4 text-green-400 mt-0.5" />
                    <span>Role-Based Access Control (RBAC)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FileCheck className="h-4 w-4 text-green-400 mt-0.5" />
                    <span>JWT-based session management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FileCheck className="h-4 w-4 text-green-400 mt-0.5" />
                    <span>Fine-grained permissions per service</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Database className="h-5 w-5 text-emerald-400" />
                  <h3 className="text-lg font-semibold text-white">Audit & Compliance</h3>
                </div>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start space-x-2">
                    <FileCheck className="h-4 w-4 text-green-400 mt-0.5" />
                    <span>Immutable transaction logs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FileCheck className="h-4 w-4 text-green-400 mt-0.5" />
                    <span>GDPR-compliant data handling</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FileCheck className="h-4 w-4 text-green-400 mt-0.5" />
                    <span>Automated compliance reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Database Schema Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Database Schema</h2>
            <p className="text-slate-400">Optimized relational design with spatial extensions</p>
          </div>
          
          <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-6 overflow-x-auto">
            <div className="text-sm font-mono">
              <div className="text-blue-400 mb-4">/* Core Tables Structure */</div>
              
              <div className="mb-6">
                <div className="text-cyan-400">CREATE TABLE</div>
                <div className="text-emerald-400 ml-4">land_parcels</div>
                <div className="text-slate-300 ml-8">id SERIAL PRIMARY KEY,</div>
                <div className="text-slate-300 ml-8">parcel_number VARCHAR(50) UNIQUE,</div>
                <div className="text-slate-300 ml-8">geometry GEOMETRY(POLYGON, 4326),</div>
                <div className="text-slate-300 ml-8">area_sqm DECIMAL,</div>
                <div className="text-slate-300 ml-8">status VARCHAR(20),</div>
                <div className="text-slate-300 ml-8">created_at TIMESTAMPTZ DEFAULT NOW()</div>
                <div className="text-cyan-400">);</div>
              </div>
              
              <div className="mb-6">
                <div className="text-cyan-400">CREATE TABLE</div>
                <div className="text-emerald-400 ml-4">ownership_records</div>
                <div className="text-slate-300 ml-8">id SERIAL PRIMARY KEY,</div>
                <div className="text-slate-300 ml-8">parcel_id INTEGER REFERENCES land_parcels(id),</div>
                <div className="text-slate-300 ml-8">owner_id INTEGER REFERENCES users(id),</div>
                <div className="text-slate-300 ml-8">transaction_hash CHAR(66),</div>
                <div className="text-slate-300 ml-8">start_date DATE,</div>
                <div className="text-slate-300 ml-8">end_date DATE</div>
                <div className="text-cyan-400">);</div>
              </div>
              
              <div className="mb-6">
                <div className="text-cyan-400">CREATE TABLE</div>
                <div className="text-emerald-400 ml-4">audit_logs</div>
                <div className="text-slate-300 ml-8">id SERIAL PRIMARY KEY,</div>
                <div className="text-slate-300 ml-8">user_id INTEGER,</div>
                <div className="text-slate-300 ml-8">action VARCHAR(100),</div>
                <div className="text-slate-300 ml-8">entity_type VARCHAR(50),</div>
                <div className="text-slate-300 ml-8">entity_id INTEGER,</div>
                <div className="text-slate-300 ml-8">timestamp TIMESTAMPTZ DEFAULT NOW(),</div>
                <div className="text-slate-300 ml-8">ip_address INET</div>
                <div className="text-cyan-400">);</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Deployment Strategy</h2>
              <p className="text-slate-300">Cloud-native deployment with Kubernetes orchestration</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex p-3 bg-blue-500/20 rounded-lg mb-4">
                  <Cloud className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Cloud Infrastructure</h3>
                <p className="text-slate-400 text-sm">AWS/DigitalOcean with auto-scaling groups</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-3 bg-cyan-500/20 rounded-lg mb-4">
                  <GitBranch className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Containerization</h3>
                <p className="text-slate-400 text-sm">Docker containers managed by Kubernetes</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-3 bg-emerald-500/20 rounded-lg mb-4">
                  <Zap className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">CI/CD Pipeline</h3>
                <p className="text-slate-400 text-sm">Automated testing and deployment workflows</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-bold text-white">Smart Land Registry</span>
          </div>
          <p className="text-slate-400 mb-2">© 2024 Smart Land Registry. All rights reserved.</p>
          <p className="text-slate-500 text-xs">Technical Architecture Document v2.1</p>
        </div>
      </footer>
    </div>
  );
}