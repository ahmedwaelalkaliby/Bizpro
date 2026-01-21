import { Link } from "react-router-dom";

interface MobileMenuProps {
  navLinks: { name: string; href: string }[];
  activeLink: string;
  setActiveLink: (name: string) => void;
}

export default function MobileMenu({
  navLinks,
  activeLink,
  setActiveLink,
}: MobileMenuProps) {
  return (
    <div className="md:hidden bg-white shadow-sm">
      <ul className="flex flex-col gap-4 px-6 py-4">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.href}
              onClick={() => setActiveLink(link.name)}  
              className={`block text-[15px] font-medium transition-colors duration-200 ${
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

      <div className="px-6 pb-6 flex flex-col gap-3">
        <button className="text-[15px] font-semibold text-primary opacity-70 hover:opacity-100 transition-opacity">
          Sign In
        </button>
        <button className="bg-primary text-white px-6 py-3 rounded-md text-[15px] font-semibold hover:bg-opacity-90 transition-all shadow-lg">
          Free Trial
        </button>
      </div>
    </div>
  );
}
