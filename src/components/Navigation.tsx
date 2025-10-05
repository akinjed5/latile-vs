import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div>
            <Link to="/" className="text-2xl font-light tracking-wider text-gray-900 inline-flex items-center gap-2">
              <img
                src="/icons/logo.svg"
                alt="Latiile Interior Design"
                className="h-8 w-auto"
                loading="lazy"
              />
              LATIILE
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm tracking-wide transition-colors ${isActive('/') ? 'text-emerald-700' : 'text-gray-700 hover:text-emerald-700'
                }`}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className={`text-sm tracking-wide transition-colors ${isActive('/about') ? 'text-emerald-700' : 'text-gray-700 hover:text-emerald-700'
                }`}
            >
              ABOUT
            </Link>
            <Link
              to="/projects"
              className={`text-sm tracking-wide transition-colors ${isActive('/projects') ? 'text-emerald-700' : 'text-gray-700 hover:text-emerald-700'
                }`}
            >
              PROJECTS
            </Link>
            <Link
              to="/services"
              className={`text-sm tracking-wide transition-colors ${isActive('/services') ? 'text-emerald-700' : 'text-gray-700 hover:text-emerald-700'
                }`}
            >
              SERVICES
            </Link>
            <Link
              to="/contact"
              className={`text-sm tracking-wide transition-colors ${isActive('/contact') ? 'text-emerald-700' : 'text-gray-700 hover:text-emerald-700'
                }`}
            >
              CONTACT
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-emerald-700 text-white text-sm tracking-wide hover:bg-emerald-800 transition-colors"
            >
              GET IN TOUCH
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link to="/" className="block py-2 text-sm tracking-wide text-gray-900" onClick={() => setIsMenuOpen(false)}>
              HOME
            </Link>
            <Link to="/about" className="block py-2 text-sm tracking-wide text-gray-700" onClick={() => setIsMenuOpen(false)}>
              ABOUT
            </Link>
            <Link to="/projects" className="block py-2 text-sm tracking-wide text-gray-700" onClick={() => setIsMenuOpen(false)}>
              PROJECTS
            </Link>
            <Link to="/services" className="block py-2 text-sm tracking-wide text-gray-700" onClick={() => setIsMenuOpen(false)}>
              SERVICES
            </Link>
            <Link to="/contact" className="block py-2 text-sm tracking-wide text-gray-700" onClick={() => setIsMenuOpen(false)}>
              CONTACT
            </Link>
            <Link
              to="/contact"
              className="block w-full mt-2 px-6 py-2.5 bg-emerald-700 text-white text-sm tracking-wide text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
