"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const roles = ["Full-Stack Developer", "Web Designer", "UI/UX Enthusiast", "Problem Solver"];

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = currentRoleIndex % roles.length;
      const fullText = roles[i];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(75);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => prev + 1);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background pattern"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cfd2feae?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Professional Photo"
            width={160}
            height={160}
            className="rounded-full mx-auto border-4 border-purple-500 shadow-lg"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-2xl">
          Hi, I'm <span className="text-purple-400">Magnolia</span>
        </h1>
        <p className="text-2xl md:text-4xl font-semibold mb-8 h-10">
          A <span className="text-purple-300">{currentText}</span><span className="animate-pulse">|</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Contact Me
          </Button>
          <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-900 hover:text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            View Work
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-10 h-10 text-purple-400" />
      </div>
    </section>
  );
}

