"use client";

import { useState } from "react";

export function useNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
}

