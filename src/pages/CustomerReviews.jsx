import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { ArrowLeft, Star, Quote, ThumbsUp, Users, TrendingUp } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    business: "Kumar Gas Agency",
    rating: 5,
    review: "ABI ERP system has completely transformed our business operations. The real-time inventory tracking and automated billing have saved us countless hours.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh"
  },
  {
    id: 2,
    name: "Priya Sharma",
    business: "Sharma LPG Distributors",
    rating: 5,
    review: "Outstanding customer support and easy-to-use interface. Our team adapted to the system within days. Highly recommended for gas distribution businesses.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
  },
  {
    id: 3,
    name: "Amit Patel",
    business: "Patel Gas Services",
    rating: 5,
    review: "The mobile app is fantastic! I can manage everything on the go. Payment tracking and customer management features are top-notch.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit"
  },
  {
    id: 4,
    name: "Sunita Verma",
    business: "Verma Indane Center",
    rating: 5,
    review: "Best investment for our business! The reporting features give us clear insights into our operations. Customer satisfaction has improved significantly.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sunita"
  },
  {
    id: 5,
    name: "Vikram Singh",
    business: "Singh Gas Distribution",
    rating: 5,
    review: "Exceptional ERP solution! The automated cylinder tracking and delivery management have streamlined our entire workflow.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram"
  },
  {
    id: 6,
    name: "Meena Gupta",
    business: "Gupta Gas Agency",
    rating: 5,
    review: "User-friendly and powerful. The customer database management and SMS notifications have enhanced our service quality tremendously.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meena"
  }
];

const stats = [
  { value: "500+", label: "Happy Customers", icon: Users },
  { value: "98%", label: "Satisfaction Rate", icon: ThumbsUp },
  { value: "4.9/5", label: "Average Rating", icon: Star },
  { value: "40%", label: "Growth Rate", icon: TrendingUp }
];

export default function CustomerReviews() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <Link 
            to={createPageUrl('NetworkServices')}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Network Services</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
              <span className="text-amber-300 text-xs font-bold tracking-wider uppercase">Customer Testimonials</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              What Our Clients Say
              <span className="block mt-2 bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent">
                About ABI ERP
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Real feedback from businesses using our ERP accounting system to transform their operations
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl border-2 border-blue-100 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Trusted by Leading Gas Distributors
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join hundreds of satisfied businesses across India who have chosen ABI ERP for their operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative border-2 border-gray-100 hover:border-blue-200"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{review.review}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-950 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Join Our Satisfied Clients
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Experience the difference with ABI ERP - Schedule a free demo today
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={createPageUrl('ERPAccounting')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Learn More About ABI ERP
              </Link>
              <Link
                to={createPageUrl('NetworkServices')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
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