import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { footerLinks, contactInfo } from '@/data/navigation';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/images/cynea-logo.png"
                alt="Cynea AI"
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl">Cynea AI</span>
            </Link>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-gold transition-colors">
                  {contactInfo.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-4 h-4 text-gold">P</span>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-gold transition-colors">
                  {contactInfo.phone}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </p>
            </div>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Training Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">AI Training</h3>
            <ul className="space-y-3">
              {footerLinks.training.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Cynea AI. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>5 Merchant Square, London</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
