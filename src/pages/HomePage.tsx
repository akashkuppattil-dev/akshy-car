import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyAutoVibe } from '../components/WhyAutoVibe';
import { InstagramGallery } from '../components/InstagramGallery';
import { LocationSection } from '../components/LocationSection';
import { ContactSection } from '../components/ContactSection';
import { ReviewsSection } from '../components/ReviewsSection';
export function HomePage() {
  return <div className="bg-black min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyAutoVibe />
      <ReviewsSection />

      {/* Visual Divider */}
      <div className="h-px bg-zinc-900 w-full" />

      <InstagramGallery />
      <LocationSection />
      <ContactSection />
    </div>;
}