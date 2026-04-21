"use client";

import { useState } from "react";
import Link from "next/link";

const menuItems = [
  // {label: "home", href: "/"},
  {label: "about", href: "/about"},
  {label: "projects", href: "/projects"},
  {label: "thoughts.log", href: "/thoughts"},
  {label: "connect", href: "/connect"},
];

export default function Navbar() {
  const [activeMenuItem, setActiveItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    setActiveItem(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--color-black)] transition-all duration-500">  {/* The color of the navbar is black */}

      <div className="flex justify-between items-center px-[8%] lg:px-[12%] py-4">

        <div className="flex flex-col leading-tight">
          <Link href="/" onClick={() => setActiveItem(null)}>
            <span className="text-[var(--color-green)] text-xl">Simi</span>{" "}
            <span className="text-[var(--color-pink)] text-xl">.dev</span>
          </Link>

        </div>

        <ul className="hidden lg:flex text-lg items-center gap-5 cursor-pointer text-[var(--color-green)] font-medium">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={`navbar relative transition-all duration-300 cursor-pointer ${
                    activeMenuItem === item.label
                      ? "text-[var(--color-pink)]" //selected item is pink [TODO: make it bigger if selected]
                      : "text-[var(--color-green)]" //others are green
                  }`}
                >
                  {item.label}
              </Link>
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


      {menuOpen && (
        <div className="lg:hidden px-[8%] pb-4">
          <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_25px_rgba(246,193,204,0.2)] overflow-hidden">
            <ul className="flex flex-col">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.label);
                      setMenuOpen(false);
                    }}
                    className="block px-6 py-4 text-[var(--color-green)] hover:text-[var(--color-pink)] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

    </nav>
  );
}