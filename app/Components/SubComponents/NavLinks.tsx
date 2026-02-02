"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

interface NavLinksProps {
  isAboutUsPage?: boolean;
}

export default function NavLinks({ isAboutUsPage = false }: NavLinksProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScrollToSection = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Check if we're on the home page
    if (pathname === "/") {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Navigate to home page with hash, then scroll after navigation
      router.push(`/#${sectionId}`);
      // Wait for navigation and then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className={`hidden md:flex gap-8 text-sm font-medium ${isAboutUsPage ? "text-white" : ""}`}>
      <Link href="/" onClick={handleHomeClick} className={isAboutUsPage ? "hover:text-gray-200 transition-colors  " : ""}>Home</Link>  
      <a href="#core-services" onClick={handleScrollToSection("core-services")} className={`cursor-pointer ${isAboutUsPage ? "hover:text-gray-200 transition-colors" : ""}`}>Services</a>  
      <a href="#case-studies" onClick={handleScrollToSection("case-studies")} className={`cursor-pointer ${isAboutUsPage ? "hover:text-gray-200 transition-colors" : ""}`}>Case Studies</a>
      
      {/* Solutions Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
          className={`flex items-center gap-1 transition-colors ${isAboutUsPage ? "hover:text-gray-200" : "hover:text-[#4B0082]"}`}
        >
          Solutions <span className={`transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`}>▾</span>
        </button>
        
        <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 overflow-hidden transition-all duration-300 ease-in-out ${
          isSolutionsOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
        }`}>
          <Link
            href="/Solutions/zohoautomation"
            onClick={() => setIsSolutionsOpen(false)}
            className="block px-4 py-2 hover:bg-[#4B0082] hover:text-white transition-colors duration-200"
          >
            Zoho Automation
          </Link>
          <Link
            href="/Solutions/systemintegrationai"
            onClick={() => setIsSolutionsOpen(false)}
            className="block px-4 py-2 hover:bg-[#4B0082] hover:text-white transition-colors duration-200"
          >
            Full Stack Automation
          </Link>
          <Link
            href="/Solutions/flutter"
            onClick={() => setIsSolutionsOpen(false)}
            className="block px-4 py-2 hover:bg-[#4B0082] hover:text-white transition-colors duration-200"
          >
            Flutter App Development
          </Link>
        </div>
      </div>
      
      <Link href="/AboutUs" className={isAboutUsPage ? "hover:text-gray-200 transition-colors" : ""}>About Us</Link>
    </nav>
  );
}

