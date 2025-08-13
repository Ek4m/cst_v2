"use client";
import Link from "next/link";
import React from "react";

export const MainFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span style={{ color: "#ffc82d" }}>Caspian Soft</span>{" "}
              Technologies
            </div>
            <p className="text-gray-400 mb-4">
              Building market-ready businesses through innovative digital
              solutions since 2015.
            </p>
            <div className="text-sm text-gray-500">
              © 2024 Caspian Soft Technologies. All rights reserved.
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Product Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Strategy & Validation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Growth Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Team Partnership
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>hello@caspiansoft.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Innovation St.</li>
              <li>Tech City, TC 12345</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
