import React from 'react';
import { ServicesSection } from '../components/ServicesSection';
import { ContactSection } from '../components/ContactSection';
export function ServicesPage() {
  return <div className="pt-8 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Detailed Services
        </h1>
        <p className="text-lg text-gray-600">
          We offer a comprehensive range of detailing services tailored for the
          Kerala climate. Our team uses premium products to ensure long-lasting
          protection.
        </p>
      </div>
      <ServicesSection />
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Protection Matters
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Kerala's weather can be harsh on your vehicle. The combination of
              intense sun, heavy monsoon rains, and coastal humidity accelerates
              paint degradation and rust.
            </p>
            <p>
              Our ceramic and graphene coatings provide a sacrificial layer that
              protects your original paint from UV rays, acid rain, and road
              grime, keeping your car looking new for years while making it
              easier to clean.
            </p>
          </div>
        </div>
      </div>
      <ContactSection />
    </div>;
}