import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Stethoscope } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/fertilite', label: 'Fertilité' },
    { path: '/booster-spermatozoides', label: 'Booster Spermatozoïdes' },
    { path: '/examen-glaire', label: 'Examen Glaire' },
    { path: '/bilan-grossesse', label: 'Bilan Grossesse' },
    { path: '/promotions', label: 'Promotions' },
    { path: '/bilan-prenatal', label: 'Bilan Prénatal' },
    { path: '/examens', label: 'Examens' },
  ];

  return (
    <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-white dark:bg-gray-900 shadow-lg'
      : 'bg-white dark:bg-gray-900' // ici aussi pour que le header soit opaque au départ
  }`}
>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
              <Stethoscope className="w-7 h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Le Diagnostic
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Centre de Diagnostic Médical
              </p>
            </div>
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-xl font-medium text-sm transition-all duration-300
                  ${
                    location.pathname === link.path
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-800 dark:text-gray-200 hover:text-pink-500'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* BOUTON RDV */}
          <a
            href="https://wa.me/237698032281"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-4 py-2 bg-gradient-to-r from-blue-600 to-pink-500 text-white text-sm rounded-xl font-semibold hover:scale-105 transition-all duration-300"
          >
            Prendre RDV
          </a>

          {/* BOUTON MOBILE MENU */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900 dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 animate-fadeIn">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300
                  ${
                    location.pathname === link.path
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-800 dark:text-gray-200 hover:text-pink-500'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}

            {/* BOUTON RDV MOBILE */}
            <a
              href="https://wa.me/237692574823"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-xl font-semibold text-center"
            >
              Prendre RDV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
