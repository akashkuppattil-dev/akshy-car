import React from 'react';
import { Phone, MapPin, Instagram, ExternalLink } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-white pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Address */}
          <div>
            <div className="mb-6">
              <img src="/ChatGPT_Image_Jan_4,_2026,_10_21_11_AM.png" alt="Auto Vibe Logo" className="h-24 w-auto object-contain" />
            </div>
            <div className="flex items-start text-gray-300 mb-2">
              <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-600" />
              <span className="text-sm leading-relaxed">
                Poonoor Road, Narikkuni,
                <br />
                Calicut, Kerala 673585
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a href="tel:8089314740" className="flex items-center text-gray-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-red-600 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 808 9314 740</span>
              </a>
              <a href="tel:9074997502" className="flex items-center text-gray-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-red-600 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 907 4997 502</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Find Us Online
            </h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/autovibeofficial" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-pink-600 transition-all hover:scale-110" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://maps.app.goo.gl/iCPXI5hLHqzYEoXKV" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-green-600 transition-all hover:scale-110" aria-label="Google Maps">
                <MapPin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Auto Vibe Car Detailing Studio. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}