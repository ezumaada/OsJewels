import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const MiniNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    
    { name: "Designers", path: "/designers" },
    { name: "Watches", path: "/watches" },
    { name: "Rings", path: "/rings" },
    { name: "Earrings", path: "/earrings" },
    { name: "Necklaces", path: "/necklaces" },
    { name: "Bracelets", path: "/bracelets" },
    { name: "Diamonds", path: "/diamonds" }
  ];

  return (
    <nav className="bg-white text-black border-b border-gray-200 shadow-sm">
      {/* Mobile Menu Button */}
      <div className="md:hidden px-4 py-3 flex justify-end">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`
          ${isMenuOpen ? "flex" : "hidden"}
          md:flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-center
          md:space-x-8
          md:space-y-0
          space-y-2
          py-4
          px-4
          transition-all
          duration-300
          ease-in-out
        `}
      >
        {navItems.map((item) => (
          <li key={item.name} className="font-bold text-2xl text-center">
            <a
              href={item.path}
              className="
                block
                py-2
                px-4
                md:px-2
                transition-all
                duration-300
                ease-in-out
                hover:scale-110
                hover:font-bold
                hover:text-slate-600
                hover:shadow-lg
                rounded
                hover:bg-gray-50
                md:hover:bg-transparent
              "
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MiniNavigation;