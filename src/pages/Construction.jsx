import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { ArrowLeft, CheckCircle2, Building2, Home, Hammer, Building, Key, MapPin, FileText } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Plot Buying & Selling",
    icon: MapPin,
    color: "from-slate-600 to-gray-700"
  },
  {
    id: 2,
    title: "Land Development & Subdivision",
    icon: Building2,
    color: "from-blue-600 to-indigo-700"
  },
  {
    id: 3,
    title: "Residential Construction",
    icon: Home,
    color: "from-green-600 to-emerald-700"
  },
  {
    id: 4,
    title: "Property Sales",
    icon: Key,
    color: "from-purple-600 to-violet-700"
  },
  {
    id: 5,
    title: "Rental Property Management",
    icon: Building,
    color: "from-orange-600 to-red-700"
  },
  {
    id: 6,
    title: "Road Construction",
    icon: Hammer,
    color: "from-amber-600 to-yellow-700"
  },
  {
    id: 7,
    title: "Government Contracting",
    icon: FileText,
    color: "from-teal-600 to-cyan-700"
  }
];

export default function Construction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <Link 
            to={createPageUrl('Home')}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-slate-500/20 border border-slate-500/30 mb-6">
              <span className="text-slate-300 text-xs font-bold tracking-wider uppercase">Infrastructure</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Construction &
              <span className="block mt-2 bg-gradient-to-r from-slate-300 via-gray-300 to-blue-300 bg-clip-text text-transparent">
                Development
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Building the future with quality construction and comprehensive property solutions
            </p>
          </motion.div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-700 transition-colors">
                  {service.title}
                </h3>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}