import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-light text-white mb-6 tracking-wider">LATIILE</h3>
            <p className="text-sm leading-relaxed mb-6">
              Transforming Nigerian spaces with contemporary design that honors our rich cultural heritage and modern sophistication.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-700 flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-700 flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-700 flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-700 flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-6 tracking-wider">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm hover:text-emerald-700 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm hover:text-emerald-700 transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm hover:text-emerald-700 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-emerald-700 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-emerald-700 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-6 tracking-wider">SERVICES</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:text-emerald-700 transition-colors">
                  Residential Design
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-emerald-700 transition-colors">
                  Commercial Spaces
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-emerald-700 transition-colors">
                  Hospitality Design
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-emerald-700 transition-colors">
                  Consultation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-emerald-700 transition-colors">
                  Project Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium mb-6 tracking-wider">CONTACT US</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-emerald-700" />
                <span className="text-sm">
                  Plot 123, Admiralty Way<br />
                  Lekki Phase 1, Lagos, Nigeria
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="flex-shrink-0 text-emerald-700" />
                <span className="text-sm">+234 (0) 803 456 7890</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="flex-shrink-0 text-emerald-700" />
                <span className="text-sm">hello@latiile.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Latiile Interior Design. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm hover:text-emerald-700 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-emerald-700 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
