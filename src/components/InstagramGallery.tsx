import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
// Using placeholder images that look like car detailing
const images = ['https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1552930294-6b595f4c2974?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=600&auto=format&fit=crop'];
export function InstagramGallery() {
  return <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Dark theme for gallery to make photos pop */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Follow Our Work
            </h2>
            <p className="text-gray-400">
              See the latest transformations on Instagram @autovibe
            </p>
          </motion.div>

          <motion.a initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all">
            <Instagram className="w-5 h-5 mr-2" />
            Follow Us
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} whileHover={{
          y: -10,
          zIndex: 10
        }} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
              <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ExternalLink className="text-white w-8 h-8" />
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}