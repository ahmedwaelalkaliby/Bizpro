import { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";

const MobileMenu = lazy(() => import("./MobileMenu"));

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/" },
    { name: "Services", href: "/" },
    { name: "Reviews", href: "/" },
    { name: "Support", href: "/" },
  ];

  return (
    <nav className="w-full">
      <div className="container absolute top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white shadow-md mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="text-2xl font-bold tracking-tight text-secondary">
            B
          </span>
          <span className="text-2xl font-bold tracking-tight text-primary">
            izpro
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`text-[15px] font-medium transition-colors duration-200 ${
                  activeLink === link.name
                    ? "text-secondary"
                    : "text-gray-500 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-[15px] font-semibold text-primary opacity-70 hover:opacity-100 transition-opacity">
            Sign In
          </button>
          <button className="bg-primary text-white px-6 py-3 rounded-md text-[15px] font-semibold hover:bg-opacity-90 transition-all shadow-lg">
            Free Trial
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <Suspense fallback={null}>
          <MobileMenu
            navLinks={navLinks}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        </Suspense>
      )}
    </nav>
  );
}
