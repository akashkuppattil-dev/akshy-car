import { motion } from 'framer-motion';
import { Cloud, Droplet, Layers, RotateCw, Shield, CheckCircle } from 'lucide-react';

export function WhyAutoVibe() {
  const items = [
    {
      id: 'process',
      title: 'Studio-Grade SOPs',
      used: 'Rigorous 21-step detailing SOP from decontamination to final multi-point inspection.',
      why: 'Ensures surgical precision and absolute consistency across every vehicle we restore.',
      icon: CheckCircle
    },
    {
      id: 'microfiber',
      title: 'Microfiber Wash System',
      used: 'Safe hand-washing and surface wiping without scratching paint.',
      why: 'Prevents swirl marks and preserves the vehicle’s original paint finish.',
      icon: Layers
    },
    {
      id: 'ph',
      title: 'Advanced Surface Chemistry',
      used: 'Exclusive use of pH-neutral, nanoparticle-safe surfactants for all cleaning stages.',
      why: 'Prevents chemical etching and ensures zero degradation of paint surface integrity.',
      icon: Droplet
    },
    {
      id: 'polisher',
      title: 'Dual-Action Polishing Tools',
      used: 'Paint correction, light scratch removal, and gloss enhancement.',
      why: 'Provides controlled correction without overheating or paint damage.',
      icon: RotateCw
    },
    {
      id: 'steam',
      title: 'Interior Steam Cleaning',
      used: 'Deep cleaning of seats, mats, dashboards, and interior surfaces.',
      why: 'Eliminates stains, bacteria, and odors while maintaining cabin hygiene.',
      icon: Cloud
    },
    {
      id: 'coating',
      title: 'Protective Coatings & Sealants',
      used: 'Application of ceramic, graphene, polymer coatings, and sealants.',
      why: 'Adds long-term protection against UV rays, water spots, and environmental damage.',
      icon: Shield
    }
  ]

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10 mb-16">
        {/* Header - Now Stacked on Top */}
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-none"
          >
            WHY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold to-white/60">
              AUTO VIBE
            </span>
          </motion.h2>
          <p className="text-gray-400 text-lg font-medium leading-relaxed border-l-4 border-brand-gold pl-8 pb-2">
            Professional detailing built on precision, premium products, and proven techniques.
            Engineering showroom-grade finishes through advanced surface chemistry.
          </p>
        </div>
      </div>

      {/* Static Grid of 3D Flip Cards (Scrollable on Mobile) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-12 gap-6 -mx-6 px-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0 md:mx-0 md:px-0 scrollbar-hide">
          {items.map((it) => {
            const Icon = it.icon
            return (
              <motion.div
                key={it.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group [perspective:1000px] h-[340px] min-w-[85vw] sm:min-w-[350px] md:min-w-0 snap-center"
              >
                <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-[2.5rem] p-8 md:p-10 [backface-visibility:hidden] flex flex-col items-start justify-center overflow-hidden group-hover:border-brand-gold/50 transition-all">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-[40px] rounded-full" />
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 border border-brand-gold/20 shadow-inner group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-brand-gold" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight group-hover:text-brand-gold transition-colors">
                      {it.title}
                    </h3>
                    <div className="mt-6 text-[10px] text-brand-gold font-black uppercase tracking-[0.4em] flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-brand-gold/30" />
                      FLIP TO EXPLORE
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 h-full w-full rounded-[2.5rem] bg-zinc-900 p-8 md:p-10 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center border border-brand-gold/50 shadow-2xl">
                    <div className="space-y-6">
                      <div>
                        <div className="text-[10px] font-black text-brand-gold uppercase tracking-widest mb-2 border-b border-brand-gold/20 pb-1 w-fit">The Process</div>
                        <div className="text-sm text-gray-300 leading-relaxed font-semibold italic">{it.used}</div>
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-brand-red uppercase tracking-widest mb-2 border-b border-brand-red/20 pb-1 w-fit">The Guarantee</div>
                        <div className="text-sm text-gray-400 leading-relaxed font-medium">{it.why}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20 relative z-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.scrollTo({ top: document.getElementById('contact')?.offsetTop, behavior: 'smooth' })}
          className="px-12 py-5 bg-brand-gold text-black font-black rounded-2xl uppercase tracking-widest text-xs shadow-2xl shadow-brand-gold/20"
        >
          Experience Excellence
        </motion.button>
      </div>
    </section>
  )
}
