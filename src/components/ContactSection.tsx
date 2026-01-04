import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
export function ContactSection() {
  return <section className="py-16 bg-blue-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>

        <div className="space-y-4">
          <a href="tel:8089314740" className="block w-full bg-white p-6 rounded-xl shadow-sm border border-blue-100 hover:border-brand-blue hover:shadow-md transition-all group">
            <div className="flex items-center justify-center">
              <div className="bg-blue-100 p-3 rounded-full group-hover:bg-brand-blue transition-colors">
                <Phone className="w-6 h-6 text-brand-blue group-hover:text-white" />
              </div>
              <div className="ml-4 text-left">
                <p className="text-sm text-gray-500">Call Us Now</p>
                <p className="text-xl font-bold text-gray-900">808 9314 740</p>
              </div>
            </div>
          </a>

          <a href="tel:9074997502" className="block w-full bg-white p-6 rounded-xl shadow-sm border border-blue-100 hover:border-brand-blue hover:shadow-md transition-all group">
            <div className="flex items-center justify-center">
              <div className="bg-blue-100 p-3 rounded-full group-hover:bg-brand-blue transition-colors">
                <Phone className="w-6 h-6 text-brand-blue group-hover:text-white" />
              </div>
              <div className="ml-4 text-left">
                <p className="text-sm text-gray-500">Alternative Number</p>
                <p className="text-xl font-bold text-gray-900">907 4997 502</p>
              </div>
            </div>
          </a>

          <a href="https://wa.me/919074997502" target="_blank" rel="noopener noreferrer" className="block w-full bg-green-50 p-6 rounded-xl shadow-sm border border-green-100 hover:border-green-500 hover:shadow-md transition-all group">
            <div className="flex items-center justify-center">
              <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-600 transition-colors">
                <MessageCircle className="w-6 h-6 text-green-600 group-hover:text-white" />
              </div>
              <div className="ml-4 text-left">
                <p className="text-sm text-green-700">Chat on WhatsApp</p>
                <p className="text-xl font-bold text-green-900">Message Us</p>
              </div>
            </div>
          </a>

          <a href="https://maps.app.goo.gl/iCPXI5hLHqzYEoXKV" target="_blank" rel="noopener noreferrer" className="block w-full bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all group">
            <div className="flex items-center justify-center">
              <div className="bg-gray-100 p-3 rounded-full group-hover:bg-gray-600 transition-colors">
                <MapPin className="w-6 h-6 text-gray-600 group-hover:text-white" />
              </div>
              <div className="ml-4 text-left">
                <p className="text-sm text-gray-500">Visit Studio</p>
                <p className="text-xl font-bold text-gray-900">
                  Get Directions
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>;
}