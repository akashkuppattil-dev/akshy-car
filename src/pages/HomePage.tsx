import { motion } from 'framer-motion';
import { Award, Shield, Star, Users } from 'lucide-react';
import { Card } from '../components/Card';
import { CountUp } from '../components/CountUp';
import { HeroSection } from '../components/HeroSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { Section } from '../components/Section';
import { ServicesSection } from '../components/ServicesSection';
import { HowItWorks } from '../components/HowItWorks';
import { WhyAutoVibe } from '../components/WhyAutoVibe';
import { FAQSection } from '../components/FAQSection';

export function HomePage() {
  const stats = [
    { icon: Users, value: 1000, suffix: '+', label: 'Happy Customers', image: '/shake hand.jpg' },
    { icon: Award, value: 4.9, decimals: 1, label: 'Google Rating', image: '/rating.jpg' },
    { icon: Shield, value: 4, suffix: '+', label: 'Years Experience', image: '/experience.jpg' },
    { icon: Star, value: 100, suffix: '%', label: 'Satisfaction', image: '/satisfaction2.jpg' }
  ];

  return (
    <div className="relative bg-black min-h-screen">
      {/* Background is now solid black to focus on section content and Hero video */}
      <div className="fixed inset-0 z-0 bg-black" />

      {/* Content with higher z-index */}
      <div className="relative z-10">
        <HeroSection />

        {/* Services Section */}
        <div className="relative">
          <ServicesSection />
        </div>

        {/* Stats Section (Our Impact) */}
        <Section background="gradient" spacing="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter"
            >
              PROVEN <span className="text-brand-gold">PERFECTION</span>
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg font-medium">
              Trusted by 1,000+ automotive enthusiasts in Kozhikode.
              We don't just clean vehicles; we engineer showroom-grade finishes through advanced surface chemistry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card variant="elevated" className="group text-center h-full relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                      <img
                        src={stat.image}
                        alt={stat.label}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    </div>

                    <div className="flex flex-col items-center justify-center h-full relative z-10 p-6">
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center border border-brand-gold/20 mb-6 transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(360deg)]">
                          <Icon className="w-8 h-8 text-brand-gold" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">
                        <CountUp
                          to={stat.value}
                          suffix={stat.suffix}
                          decimals={stat.decimals}
                          duration={2.5}
                        />
                      </div>
                      <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Section>

        {/* How It Works (Car Animation) */}
        <HowItWorks />

        {/* Why Choose Us Section */}
        <WhyAutoVibe />

        {/* Reviews Section */}
        <div className="bg-black/20 py-12">
          <ReviewsSection />
        </div>

        {/* FAQ Section */}
        <FAQSection />

        {/* Visual Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent w-full" />
      </div >
    </div >
  );
}
