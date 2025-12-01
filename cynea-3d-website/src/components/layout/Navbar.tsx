import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigationItems } from '@/data/navigation';
import Button from '@/components/ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/cynea-logo.png"
              alt="Cynea AI"
              className="h-10 w-auto"
            />
            <span className={`font-bold text-xl ${isScrolled ? 'text-navy' : 'text-navy'}`}>
              Cynea AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                      isScrolled
                        ? 'text-gray-700 hover:text-navy hover:bg-gray-100'
                        : 'text-gray-700 hover:text-navy hover:bg-white/50'
                    }`}
                    onClick={() => handleDropdownToggle(item.label)}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-navy bg-gold/20'
                        : isScrolled
                        ? 'text-gray-700 hover:text-navy hover:bg-gray-100'
                        : 'text-gray-700 hover:text-navy hover:bg-white/50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors ${
                              location.pathname === child.href
                                ? 'bg-gold/10 text-navy font-medium'
                                : ''
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button href="/contact" variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="py-4">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium"
                          onClick={() => handleDropdownToggle(item.label)}
                          aria-expanded={activeDropdown === item.label}
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              activeDropdown === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="bg-gray-50"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  to={child.href}
                                  className="block px-8 py-2 text-gray-600 hover:text-navy"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block px-4 py-3 font-medium ${
                          location.pathname === item.href
                            ? 'text-navy bg-gold/10'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4 border-t border-gray-100 mt-2">
                  <Button href="/contact" variant="primary" fullWidth>
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
