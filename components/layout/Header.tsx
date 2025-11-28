"use client";

import Link from "next/link";
import { navigationLinks } from "@/data/navData";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo (Placeholder) */}
        <Link href="/" className="text-2xl font-bold text-green-700">
          Taram Nusuk
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-green-700 transition duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bouton d'Action */}
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-150">
          Devis Gratuit
        </button>
      </div>
    </header>
  );
};

export default Header;
