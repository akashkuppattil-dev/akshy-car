import React from 'react';
import { Clock, MapPin, Award, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';
const stats = [{
  label: 'Experience',
  value: '4+ Years',
  icon: Clock
}, {
  label: 'Location',
  value: 'Narikkuni',
  icon: MapPin
}, {
  label: 'Quality',
  value: 'Premium',
  icon: Award
}, {
  label: 'Pricing',
  value: 'Fair',
  icon: Wallet
}];
export function WhyAutoVibe() {
  return <section className="py-24 bg-black text-white border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
              Why Choose <br />
              <span className="text-red-600">Auto Vibe?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-md">
              We don't just wash cars; we rejuvenate them. Passion for
              perfection and attention to detail sets us apart.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {['Certified Pros', 'Eco-Friendly', 'Guaranteed', 'Modern Tech'].map(item => <div key={item} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                  <span className="text-sm font-bold tracking-wide text-gray-300 uppercase">
                    {item}
                  </span>
                </div>)}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => <motion.div key={stat.label} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="p-8 bg-zinc-900 border border-zinc-800 text-center hover:bg-zinc-800 transition-colors group">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-gray-500 group-hover:text-red-500 transition-colors" />
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}