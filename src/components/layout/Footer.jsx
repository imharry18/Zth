"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Send, MapPin, Mail, Phone } from "lucide-react";

// Custom X (Twitter) Logo
const XLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.162 2h-4.06l-5.47 7.32L7 2H1.838l7.784 10.95L2 22h4.081l5.653-7.482L17.433 22H22l-7.78-10.8L22.162 2Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 font-sans" id="contact">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-12">
        
        {/* Top Section: Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Mission (Spans 2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Zth Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-2xl tracking-tight text-gray-900">
                ZTH
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              We build the intelligent engine for your fundraising journey. 
              Transforming complex metrics into investor-ready narratives.
            </p>
            
            {/* Social Row */}
            <div className="flex gap-4 pt-2">
              <a 
                href="https://x.com/Zthsass" 
                target="_blank" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <XLogo className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/zth2/" 
                target="_blank" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-[#0077b5] hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#smart-engine" className="hover:text-primary transition-colors">Smart Engine Deck</Link></li>
              <li><Link href="#features" className="hover:text-primary transition-colors">Investor Flow</Link></li>
              <li><span className="inline-flex items-center gap-2 text-primary bg-primary/5 px-2 py-0.5 rounded text-xs font-medium">Coming Soon</span> Zth Connect</li>
            </ul>
          </div>

          {/* Column 3: Company & HQ */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#founders" className="hover:text-primary transition-colors">Founders Corner</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li className="pt-2">
                <a 
                  href="https://g.co/kgs/A1SD8fW" 
                  target="_blank"
                  className="group flex items-start gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 text-gray-400 group-hover:text-primary" />
                  <span>
                    Headquarters<br/>
                    <span className="text-xs text-gray-400 group-hover:text-primary/70">View on Map ↗</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a href="mailto:admin@zth.co.in" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" /> admin@zth.co.in
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1" />
                  <div className="space-y-1">
                    <a href="https://wa.me/917219422299" className="block hover:text-primary transition-colors">+91 721 942 2299</a>
                    <a href="https://wa.me/919356617639" className="block hover:text-primary transition-colors">+91 93566 17639</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter (Visual Only) */}
          <div className="lg:col-span-1">
             <h4 className="font-semibold text-gray-900 mb-6">Stay Updated</h4>
             <p className="text-xs text-gray-500 mb-4">Get the latest fundraising insights.</p>
             <div className="relative">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
               />
               <button className="absolute right-2 top-2 p-1 text-primary hover:bg-primary/10 rounded-md transition-colors">
                 <Send className="w-4 h-4" />
               </button>
             </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400">
            © 2025 Zth. All rights reserved.
          </p>
          
          <div className="flex items-center gap-8 text-sm font-medium text-gray-500">
             <a href="/Zth Privacy Policy.pdf" target="_blank" className="hover:text-primary transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>

          <p className="text-sm text-gray-400 flex items-center gap-1.5">
            Designed with <span className="text-red-500 animate-pulse">♥</span> for founders
          </p>
        </div>
      </div>
    </footer>
  );
}