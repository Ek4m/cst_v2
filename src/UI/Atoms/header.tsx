"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";

import React, { useState } from "react";

export const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
              <span style={{ color: "#ffc82d" }}>CST</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/solutions"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/partners"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Partners
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Link
              href="/customer-idea-form"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
            >
              <button
                className="px-6 py-2 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ backgroundColor: "#566cb3" }}
              >
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#home"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Solutions
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              About
            </Link>
            <Link
              href="/partners"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Partners
            </Link>
            <Link href="/customer-idea-form">
              <button
                className="w-full mt-4 px-6 py-2 text-white font-medium rounded-lg"
                style={{ backgroundColor: "#566cb3" }}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
