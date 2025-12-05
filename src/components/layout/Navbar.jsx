"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Consultancy", href: "#consultancy" },
  { name: "Investor Mockroom", href: "#investor-mockroom" },
  { name: "Founders Corner", href: "#founders-corner" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed z-50 left-0 right-0 flex justify-center"
        initial={{ y: -100, top: 0 }}
        animate={{
          y: 0,
          top: scrolled ? 20 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          layout
          className={`relative flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "bg-white/40 backdrop-blur-md shadow-lg border border-white/50 py-3 px-8 rounded-full w-[95%] max-w-[1400px]" // Wider on scroll, stronger blur
              : "bg-transparent py-6 px-6 md:px-12 w-full max-w-[1600px] border-b border-transparent" // Wider initial state
          }`}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="relative w-9 h-9 overflow-hidden">
              <Image
                src="/logo.png"
                alt="Zth Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">
              ZTH
            </span>
          </Link>

          {/* Center Links - Absolute Center */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <button className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-gray-100/50">
              Log in
            </button>
            <button className="bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </motion.div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[90px] z-40 mx-4 bg-white/90 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-2xl md:hidden overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-800 py-3 px-4 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-gray-200/50 my-2"></div>
              <div className="flex flex-col gap-3 mt-2">
                <button className="w-full py-3 text-gray-700 font-semibold hover:bg-gray-50 rounded-xl">
                  Log in
                </button>
                <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold shadow-lg shadow-primary/20">
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}