// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import NexzoButton from "./SubComponents/NexzoButton";
import NavLinks from "./SubComponents/NavLinks";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1040);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        const target = event.target as HTMLElement;
        if (!target.closest('button') || !target.closest('[data-hamburger]')) {
          // Don't close if clicking hamburger button
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScrollToSection = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
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
    setIsMobileMenuOpen(false);
  };

  const isAboutUsPage = pathname === "/AboutUs";

  return (
    <nav className="w-[85vw] mx-auto fixed top-4 left-0 right-0 z-50 rounded-2xl">
      <header className="relative z-20 flex items-center justify-between px-10 py-4
                         bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl">
        {/* Logo */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2 font-semibold">
          <Image src="/images/Purple.png" alt="Nexzo Logo" width={35} height={35} />
          <div className="flex flex-col">
            <span className={`-mb-2 tracking-[1.5px] text-lg ${isAboutUsPage ? "text-white" : "text-[#4B0082]"}`}>NEXZO</span>
            <span className={`text-sm font-thin tracking-[1px] ${isAboutUsPage ? "text-white" : ""}`}>Solutions</span>
          </div>
        </Link>

        {/* Desktop Navigation - Hidden below 1040px */}
        <div className="hidden min-[1041px]:flex items-center gap-8" >
          <NavLinks isAboutUsPage={isAboutUsPage} />
          </div>
          <div className="hidden min-[1041px]:flex items-center gap-8" >
            
                <NexzoButton />
        </div>

        {/* Hamburger Menu Button - Visible below 1040px */}
        {isMobile && (
          <button
            data-hamburger
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="flex flex-col gap-1.5 p-2 focus:outline-none z-30 relative cursor-pointer"
            aria-label="Toggle menu"
          >
          <span
            className={`block w-6 h-0.5 ${isAboutUsPage ? "bg-white" : "bg-[#4B0082]"} transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 ${isAboutUsPage ? "bg-white" : "bg-[#4B0082]"} transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 ${isAboutUsPage ? "bg-white" : "bg-[#4B0082]"} transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
        )}
      </header>

      {/* Mobile Menu - Visible below 1040px */}
      {isMobile && (
        <div
          ref={mobileMenuRef}
          className={`absolute top-full left-0 right-0 mt-2 ${isAboutUsPage ? "bg-[#3a0361]/95" : "bg-white/95"} backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[600px] opacity-100 visible" : "max-h-0 opacity-0 invisible"
          }`}
        >
        <div className="px-6 py-6 space-y-4">
          {/* Home Link */}
          <Link
            href="/"
            onClick={handleHomeClick}
            className={`block text-sm font-medium ${isAboutUsPage ? "text-white hover:text-gray-200" : "text-gray-900 hover:text-[#4B0082]"} transition-colors`}
          >
            Home
          </Link>

          {/* Services Link */}
          <a
            href="#core-services"
            onClick={handleScrollToSection("core-services")}
            className={`block text-sm font-medium ${isAboutUsPage ? "text-white hover:text-gray-200" : "text-gray-900 hover:text-[#4B0082]"} transition-colors cursor-pointer`}
          >
            Services
          </a>

          {/* Case Studies Link */}
          <a
            href="#case-studies"
            onClick={handleScrollToSection("case-studies")}
            className={`block text-sm font-medium ${isAboutUsPage ? "text-white hover:text-gray-200" : "text-gray-900 hover:text-[#4B0082]"} transition-colors cursor-pointer`}
          >
            Case Studies
          </a>

          {/* Solutions Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className={`flex items-center justify-between w-full text-sm font-medium ${isAboutUsPage ? "text-white hover:text-gray-200" : "text-gray-900 hover:text-[#4B0082]"} transition-colors`}
            >
              <span>Solutions</span>
              <span className={`transition-transform ${isSolutionsOpen ? "rotate-180" : ""}`}>▾</span>
            </button>

            {isSolutionsOpen && (
              <div className={`mt-2 space-y-2 pl-4 border-l-2 ${isAboutUsPage ? "border-white/30" : "border-gray-200"}`}>
                <Link
                  href="/Solutions/zohoautomation"
                  onClick={() => {
                    setIsSolutionsOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block text-sm ${isAboutUsPage ? "text-white/90 hover:text-white" : "text-gray-700 hover:text-[#4B0082]"} transition-colors`}
                >
                  Zoho Automation
                </Link>
                <Link
                  href="/Solutions/systemintegrationai"
                  onClick={() => {
                    setIsSolutionsOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block text-sm ${isAboutUsPage ? "text-white/90 hover:text-white" : "text-gray-700 hover:text-[#4B0082]"} transition-colors`}
                >
                  Full Stack Automation
                </Link>
               
              </div>
            )}
          </div>

          {/* About Us Link */}
          <Link
            href="/AboutUs"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block text-sm font-medium ${isAboutUsPage ? "text-white hover:text-gray-200" : "text-gray-900 hover:text-[#4B0082]"} transition-colors`}
          >
            About Us
          </Link>

          {/* Button */}
          <div className={`pt-4 border-t ${isAboutUsPage ? "border-white/30" : "border-gray-200"}`}>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full rounded-xl bg-[#3b155f] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(59,21,95,0.35)] hover:shadow-[0_15px_40px_rgba(59,21,95,0.45)] hover:bg-[#4a1a6f] transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Audit
            </button>
          </div>
        </div>
        </div>
      )}
    </nav>
  );
}
