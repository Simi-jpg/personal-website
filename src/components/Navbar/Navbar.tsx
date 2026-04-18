"use client";

import { useState } from "react";

const menuItems = [
  "home",
  "about",
  "projects/",
  "thoughts.log",
  "connect",
];

export default function Navbar() {
  const [activeMenuItem, setActiveItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    setActiveItem(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--color-black)] transition-all duration-500">  {/* The color of the navbar is cream */}
      <div className="flex justify-between items-center px-[8%] lg:px-[12%] py-4">
        <div className="flex flex-col leading-tight">
          <button onClick={handleLogoClick}>
            <span className="text-[var(--color-green)] text-xl">Simi</span>{" "}
            <span className="text-[var(--color-pink)] text-xl">.dev</span>
          </button>
        </div>

        <ul className="hidden lg:flex text-lg items-center gap-5 cursor-pointer text-[var(--color-green)] font-medium">
          {menuItems.map((item, i) => (
            <li key={i}>
              <button
                onClick={() => setActiveItem(item)}
                className={`navbar relative transition-all duration-300 cursor-pointer ${
                  activeMenuItem === item
                    ? "text-[var(--color-pink)]" //selected item is pink [TODO: make it bigger if selected]
                    : "text-[var(--color-green)]" //others are green
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[var(--color-green)] text-3xl lg:hidden focus:outline-none transition-transform duration-300 hover:scale-110"
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>
    </nav>
  );
}