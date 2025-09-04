import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/s82studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com/company/s82studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Studio Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">S82 Studio</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Creating exceptional architectural experiences that blend innovation with timeless design principles.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 S82 Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}