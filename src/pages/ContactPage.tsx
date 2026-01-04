import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { LocationSection } from '../components/LocationSection';
export function ContactPage() {
  return <div className="pt-8 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Ready to transform your vehicle? Call us or visit our studio in
          Narikkuni.
        </p>
      </div>
      <ContactSection />
      <LocationSection />
    </div>;
}