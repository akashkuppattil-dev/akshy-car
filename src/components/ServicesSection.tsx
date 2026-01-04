import React from 'react';
import { Shield, Sparkles, Droplets, Sun, Wind, CloudRain, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
const services = [{
  name: 'Ceramic Coating',
  description: 'Ultimate gloss & protection.',
  icon: Shield,
  color: 'text-blue-400'
}, {
  name: 'Graphene Coating',
  description: 'Next-gen durability.',
  icon: Sparkles,
  color: 'text-purple-400'
}, {
  name: 'Polymer Coating',
  description: 'Essential paint protection.',
  icon: Droplets,
  color: 'text-cyan-400'
}, {
  name: 'Interior Spa',
  description: 'Deep clean & restoration.',
  icon: Wind,
  color: 'text-orange-400'
}, {
  name: 'Headlight Restore',
  description: 'Crystal clear visibility.',
  icon: Sun,
  color: 'text-yellow-400'
}, {
  name: 'Glass Treatment',
  description: 'Rain repellent finish.',
  icon: CloudRain,
  color: 'text-sky-400'
}];
export function ServicesSection() {
  return <section id="services" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-red-500 font-bold tracking-widest uppercase text-sm">
              Our Expertise
            </span>
            <h2 className="mt-2 text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              Premium Services
            </h2>
          </div>
          <p className="text-gray-400 max-w-xs text-sm leading-relaxed pb-2">
            World-class detailing solutions tailored to protect and enhance your
            vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => <motion.div key={service.name} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} whileHover={{
          y: -5
        }} className="group relative p-8 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon className="w-24 h-24 text-white" />
              </div>

              <div className={`mb-6 ${service.color}`}>
                <service.icon className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                {service.name}
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                {service.description}
              </p>

              <div className="flex items-center text-xs font-bold text-white uppercase tracking-wider group-hover:text-red-500 transition-colors">
                Details <ArrowRight className="ml-2 w-3 h-3" />
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-300" />
            </motion.div>)}
        </div>
      </div>
    </section>;
}