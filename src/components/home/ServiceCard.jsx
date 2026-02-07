import React from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Building2,
  Recycle,
  Landmark,
  Bitcoin,
  Truck,
  Server,
  ClipboardList,
  Briefcase,
  Layers,
} from "lucide-react";

const iconMap = {
  calculator: Calculator,
  building: Building2,
  recycle: Recycle,
  landmark: Landmark,
  bitcoin: Bitcoin,
  truck: Truck,
  server: Server,
  clipboard: ClipboardList,
  briefcase: Briefcase,
  layers: Layers,
};

export default function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || Layers;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-white rounded-3xl p-8 md:p-10 border-2 border-gray-100 hover:border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
    >
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Number */}
      <div className="absolute top-6 right-8 text-[80px] font-black text-gray-50 leading-none select-none group-hover:text-blue-50 transition-colors">
        {String(service.id).padStart(2, "0")}
      </div>

      {/* Icon */}
      <div
        className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 leading-tight pr-12 group-hover:text-blue-700 transition-colors">
        {service.title}
      </h3>
      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Sub Items */}
      {service.subItems && service.subItems.length > 0 && (
        <ul className="space-y-3 mt-6">
          {service.subItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 group/item">
              <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color} flex-shrink-0 group-hover:scale-150 transition-transform`} />
              <span className="leading-relaxed group-hover/item:text-gray-900 transition-colors">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA Arrow */}
      <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-gray-100 group-hover:bg-blue-600 flex items-center justify-center transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
        <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Bottom accent line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
      />
    </motion.div>
  );
}