import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About us' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <img
              src="/images/cerag-logo.png"
              alt="CERAG Dental Clinic & Oral Cares"
              className="h-14 w-auto rounded-lg"
            />
            <p className="text-sm leading-relaxed text-slate-300">
              Professional dental care products designed by dentists for your daily oral health routine.
            </p>
            <WhatsAppButton className="w-full sm:w-auto" />
          </div>

          <div>
            <span className="text-sm font-semibold text-white uppercase tracking-wide">
              Quick links
            </span>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-sm font-semibold text-white uppercase tracking-wide">
              Contact info
            </span>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+919629044797"
                  className="text-sm text-slate-300 hover:text-primary transition-colors duration-200"
                >
                  +91 96290 44797
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.instagram.com/cerag.dental/"
                  className="text-sm text-slate-300 hover:text-primary transition-colors duration-200"
                >
                  cerag.dental
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Facebook className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.facebook.com/CERAGsivanagarajan18/"
                  className="text-sm text-slate-300 hover:text-primary transition-colors duration-200"
                >
                  CERAG
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:support@ceragcare.com"
                  className="text-sm text-slate-300 hover:text-primary transition-colors duration-200"
                >
                  support@ceragcare.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300 leading-relaxed">
                  #3.490B, Akkamapettai
                  Sankari, Salem – 637301
                  Tamil Nadu, India
                </span>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-sm font-semibold text-white uppercase tracking-wide">
              Business hours
            </span>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>Monday - Saturday: 9:00 AM - 8:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {currentYear} CERAG Oral Cares. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-slate-400 hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-slate-400 hover:text-primary transition-colors duration-200"
              >
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