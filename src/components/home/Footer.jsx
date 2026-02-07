import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-900 to-indigo-900 flex items-center justify-center">
              <span className="text-amber-400 font-bold text-xs">AB</span>
            </div>
            <span className="text-sm font-semibold text-gray-800 tracking-wide">
              Alam Brothers International Pvt. Ltd.
            </span>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Alam Brothers International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}