import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { ArrowLeft, CheckCircle2, Bitcoin, TrendingUp, Repeat, Globe } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Digital Currency Trading",
    icon: Bitcoin,
    description: "Secure and efficient digital currency trading platform",
    features: ["24/7 Trading", "Real-time Rates", "Instant Transactions"],
    color: "from-amber-500 to-orange-600"
  },
  {
    id: 2,
    title: "Virtual Asset Exchange",
    icon: TrendingUp,
    description: "Trade virtual assets with competitive rates",
    features: ["Multiple Assets", "Low Fees", "Secure Platform"],
    color: "from-yellow-500 to-amber-600"
  },
  {
    id: 3,
    title: "Cryptocurrency Trading",
    icon: Repeat,
    description: "Advanced cryptocurrency trading services",
    features: ["Major Cryptocurrencies", "Portfolio Management", "Market Analysis"],
    color: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    title: "International Currency Exchange",
    icon: Globe,
    description: "Global currency exchange services",
    features: ["Multiple Currencies", "Best Exchange Rates", "Fast Processing"],
    color: "from-blue-500 to-indigo-600"
  }
];

export default function CryptoExchange() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50">
      <div className="bg-gradient-to-br from-gray-900 via-amber-900 to-orange-950 relative overflow-hidden">
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
            <div className="inline-block px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
              <span className="text-amber-300 text-xs font-bold tracking-wider uppercase">Financial Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Crypto & Currency
              <span className="block mt-2 bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Exchange
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Your trusted platform for cryptocurrency and international currency exchange
            </p>
          </motion.div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-amber-200 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}