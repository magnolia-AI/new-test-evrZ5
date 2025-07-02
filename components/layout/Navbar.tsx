"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-70 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#hero" className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors duration-300">
          Magnolia
        </Link>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-purple-400 transition-colors duration-300 text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-80 py-4">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-purple-400 transition-colors duration-300 text-lg font-medium py-2"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

