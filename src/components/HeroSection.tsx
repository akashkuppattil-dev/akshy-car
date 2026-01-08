import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-[100dvh] flex items-center overflow-hidden bg-black optimize-gpu">
      {/* Mobile: Static Hero Image */}
      {/* Mobile: Static Hero Image */}
      <div className="absolute inset-0 z-0 md:hidden">
        <img
          src="/hero-image.jpg"
          alt="Premium Detailing"
          className="w-full h-full object-cover object-center optimize-gpu"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          sizes="100vw"
        />
      </div>

      {/* Desktop: Background Video */}
      <div className="absolute inset-0 z-0 hidden md:block overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.12] optimize-gpu"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Lighter overlays for better visibility */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-red/5 pointer-events-none" />

      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl text-left">
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}>
            <motion.h1 variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }} className="font-black text-white tracking-tighter leading-[0.9] mb-8"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 6rem)' }}
            >
              PREMIUM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold to-white/60">
                AUTO CARE
              </span>
            </motion.h1>

            <motion.p variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }} className="text-gray-300 max-w-xl leading-relaxed mb-10 font-medium border-l-4 pl-8 border-brand-gold"
              style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)' }}
            >
              Kozhikode's destination for elite car restoration. Specializing in high-gloss Ceramic & Graphene coatings, deep interior rejuvenation, and professional paint protection.
            </motion.p>

            <motion.div variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }} className="flex flex-col sm:flex-row items-center gap-5">
              <motion.a whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(252, 218, 6, 0.3)' }} whileTap={{ scale: 0.98 }} href="https://wa.me/918089314740" target="_blank" className="group w-full sm:w-auto flex items-center justify-center px-10 py-5 font-black text-black bg-brand-gold transition-all rounded-2xl uppercase tracking-widest text-sm sm:text-base cursor-pointer select-none">
                <Phone className="w-4 h-4 mr-3 group-hover:rotate-12 transition-transform" />
                Book via WhatsApp
              </motion.a>

              <motion.a whileHover={{ scale: 1.05, x: 5 }} whileTap={{ scale: 0.98 }} href="#services" className="group w-full sm:w-auto flex items-center justify-center px-10 py-5 font-black text-white border border-white/20 hover:bg-white/10 transition-all rounded-2xl uppercase tracking-widest text-sm sm:text-base cursor-pointer select-none">
                View Services
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-bold">
          Scroll to explore
        </span>
        <div className="w-[1.5px] h-12 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
}
