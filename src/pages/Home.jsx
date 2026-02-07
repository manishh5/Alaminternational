import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import ServiceCard from "@/components/home/ServiceCard";
import HeroSection from "@/components/home/HeroSection";
import Footer from "@/components/home/Footer";

const services = [
  {
    id: 1,
    title: "ABI Tax Consultant Services",
    description: "Comprehensive tax and accounting solutions for individuals and businesses.",
    icon: "calculator",
    color: "from-emerald-500 to-teal-600",
    subItems: [
      "GST Registration & Filing Return",
      "Income Tax Filing Return (ITR)",
      "Accounting"
    ]
  },
  {
    id: 2,
    title: "ABI Network Solution Services",
    description: "Digital solutions including accounting software, social media management, and more.",
    icon: "server",
    color: "from-blue-500 to-indigo-600",
    subItems: [
      "ABI (ERP) Accounting (Web & Apps)",
      "Social Media Promotion (Facebook, Instagram & YouTube etc.)",
      "Other Services"
    ]
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <HeroSection />

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold tracking-widest uppercase mb-6 shadow-lg"
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
            What We{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Explore our comprehensive suite of professional services designed to help your business thrive
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link key={service.id} to={createPageUrl(service.id === 1 ? 'TaxServices' : 'NetworkServices')}>
              <ServiceCard service={service} index={index} />
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
            {[
              { value: "2+", label: "Service Divisions" },
              { value: "100+", label: "Happy Clients" },
              { value: "500+", label: "Projects Completed" },
              { value: "5+", label: "Years Experience" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-blue-200/80 tracking-wide font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}