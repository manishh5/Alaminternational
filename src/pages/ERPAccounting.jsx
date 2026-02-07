import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { 
  ArrowLeft, 
  Home, 
  CreditCard, 
  Shield, 
  MapPin, 
  Phone, 
  Mail,
  Clock,
  Users,
  Database,
  BarChart3,
  FileText,
  Smartphone,
  LogIn
} from "lucide-react";

export default function ERPAccounting() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
          <Link 
            to={createPageUrl('NetworkServices')}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                Indane LPG
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                M/S Sarvat Indane Sewa - Complete Enterprise Management Solution
              </p>
            </div>
            
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap">
                <a
                href="https://sarvat-indane-sewa.base44.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
                >
                <LogIn className="w-5 h-5" />
                    Login
                </a>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 py-4 overflow-x-auto">
            <a href="#home" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap">
              Home
            </a>
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap">
              Features
            </a>
            {/* <a href="https://sarvat-indane-sewa.base44.app" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap">
              New User
            </a> */}
            <a href="https://alambrothersinternational.com/login?from_url=https%3A%2F%2Falambrothersinternational.com%2FAdminDashboard" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap">
              Manager Login
            </a>
            <a href="#safety" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap">
              Safety
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap">
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Welcome Section */}
      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Welcome to Indane LPG
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: Home,
              title: "Home Delivery",
              subtitle: "(For Users)",
              color: "from-red-500 to-rose-600",
              link: "https://sarvat-indane-sewa.base44.app"
            },
            {
              icon: CreditCard,
              title: "Quick Booking",
              subtitle: "(For non-users)",
              color: "from-orange-500 to-amber-600",
              link: "https://sarvat-indane-sewa.base44.app/EasyBooking"
            },
            {
              icon: Shield,
              title: "Vendor Login",
              subtitle: "",
              color: "from-blue-500 to-cyan-600",
              link: "https://sarvat-indane-sewa.base44.app/VendorLogin"
            }
          ].map((feature, index) => (
            <a
            href={feature.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            >
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-orange-200 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                {feature.subtitle && (
                  <p className="text-sm text-gray-600 font-medium">
                    {feature.subtitle}
                  </p>
                )}
              </div>
              
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </motion.div></a>
          ))}
        </div>
      </section>
                {/* Contact Section */}
                <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                  >
                    <div className="flex items-center justify-center gap-2 mb-6">
                      <MapPin className="w-6 h-6 text-pink-600" />
                      <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                        Our Address
                      </h2>
                    </div>
                  </motion.div>
          
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      {
                        title: "Office Address",
                        address: "H No 212, Jaswantpuri,",
                        city: "Village Sarvat, UP – 251001",
                        phone: "+91 98765 43210",
                        email: "office@abiinternational.com"
                      },
                      {
                        title: "Godown Address",
                        address: "H No 5000, Jaswantpuri,",
                        city: "Village Sarvat, UP – 251001",
                        phone: "+91 98765 43211",
                        email: "godown@abiinternational.com"
                      }
                    ].map((location, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500"
                      >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-200">
                          {location.title}
                        </h3>
                        
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-gray-800 font-medium">{location.address}</p>
                              <p className="text-gray-600">{location.city}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
                            <a href={`tel:${location.phone}`} className="text-gray-800 hover:text-orange-600 transition-colors">
                              {location.phone}
                            </a>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
                            <a href={`mailto:${location.email}`} className="text-gray-800 hover:text-orange-600 transition-colors">
                              {location.email}
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>

      {/* Key Features Section */}
      <section id="features" className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-wider uppercase mb-4">
              Core Features
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Comprehensive Business Management
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Database,
                title: "Multi-Platform Access",
                description: "Access your ERP system from web browsers and mobile apps, anytime, anywhere",
                color: "from-blue-500 to-indigo-600"
              },
              {
                icon: BarChart3,
                title: "Real-Time Dashboard",
                description: "Monitor your business metrics and KPIs with live data visualization",
                color: "from-purple-500 to-pink-600"
              },
              {
                icon: FileText,
                title: "Automated Invoicing",
                description: "Generate and send professional invoices automatically with payment tracking",
                color: "from-emerald-500 to-teal-600"
              },
              {
                icon: Users,
                title: "User Management",
                description: "Role-based access control for your team members with detailed permissions",
                color: "from-orange-500 to-red-600"
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock technical support and system maintenance",
                color: "from-cyan-500 to-blue-600"
              },
              {
                icon: Smartphone,
                title: "Mobile Ready",
                description: "Native apps for iOS and Android with full functionality on the go",
                color: "from-rose-500 to-pink-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section id="booking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Book a demo today and see how our ERP system can streamline your operations
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Request Demo
              </a>
              <Link
                to={createPageUrl('NetworkServices')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-700 text-white font-bold rounded-full hover:bg-orange-800 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}