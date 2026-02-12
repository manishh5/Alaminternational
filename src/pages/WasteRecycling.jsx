import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { ArrowLeft, CheckCircle2, Recycle, Package, Shirt, Wrench, Factory } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Plastic Recycling",
    icon: Package,
    description: "Advanced plastic waste processing and recycling solutions",
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: 2,
    title: "Poly Bag Recycling",
    icon: Package,
    description: "Specialized recycling services for polythene bags and materials",
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 3,
    title: "Textile Recycling",
    icon: Shirt,
    description: "Sustainable textile waste management and repurposing",
    color: "from-purple-500 to-violet-600"
  },
  {
    id: 4,
    title: "Iron Recycling",
    icon: Wrench,
    description: "Metal scrap collection and iron recycling services",
    color: "from-gray-500 to-slate-600"
  },
  {
    id: 5,
    title: "Semi-Finished Industrial Materials",
    icon: Factory,
    description: "Conversion of waste into semi-finished industrial materials",
    color: "from-orange-500 to-red-600"
  }
];

export default function WasteRecycling() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      <div className="bg-gradient-to-br from-gray-900 via-green-900 to-emerald-950 relative overflow-hidden">
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
            <div className="inline-block px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
              <span className="text-green-300 text-xs font-bold tracking-wider uppercase">Sustainability</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Waste Recycling
              <span className="block mt-2 bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Sustainable waste management solutions for a cleaner and greener future
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
                className="group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-green-200 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}