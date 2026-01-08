import { motion } from 'framer-motion';
import { Award, Clock, Droplets, Shield, Sparkles, Wind, CheckCircle2 } from 'lucide-react';
import { ServicesSection } from '../components/ServicesSection';

export function ServicesPage() {
  const features = [
    {
      icon: Shield,
      title: 'Premium Protection',
      description: 'Long-lasting ceramic and graphene coatings that protect against UV, rain, and environmental damage.'
    },
    {
      icon: Sparkles,
      title: 'Expert Craftsmanship',
      description: 'Trained technicians using professional-grade equipment and eco-friendly products.'
    },
    {
      icon: Droplets,
      title: 'Eco-Friendly Solutions',
      description: 'Sustainable, pH-balanced cleaning products safe for your vehicle and the environment.'
    },
    {
      icon: Wind,
      title: 'Quick Service',
      description: 'Efficient processes that deliver professional results without compromising quality.'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Convenient appointment times to fit your busy lifestyle.'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'Satisfaction guaranteed with our comprehensive service warranty.'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-16 overflow-hidden bg-black">
        {/* Background Visuals */}
        <div className="absolute inset-0">
          <img
            src="/coating.jpg"
            alt="Services Background"
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 via-transparent to-brand-gold/5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-black uppercase tracking-[0.2em] mb-8"
          >
            Elite Service Catalog
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9]"
          >
            PREMIUM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold to-white/60">
              DETAILING
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
          >
            Transform your vehicle with our comprehensive detailing services tailored for the Kerala climate.
            State-of-the-art protection for those who demand perfection.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <a
              href="https://wa.me/918089314740"
              target="_blank"
              rel="noreferrer"
              className="px-10 py-5 bg-brand-red hover:bg-brand-red-dark text-white font-black rounded-2xl transition-all shadow-xl shadow-brand-red/20 uppercase tracking-widest text-sm"
            >
              Book Your Session
            </a>
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
              className="px-10 py-5 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl transition-all backdrop-blur-sm uppercase tracking-widest text-sm"
            >
              Explore Solutions
            </button>
          </motion.div>
        </div>
      </div>

      {/* Services Main Listing */}
      <div className="relative z-10 bg-black">
        <ServicesSection detailed />
      </div>

      {/* Features Grid */}
      <section className="py-16 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              Why <span className="text-brand-red">Auto Vibe?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Experience the difference with our professional-grade processes and premium care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900/30 backdrop-blur-md border border-zinc-800 p-8 rounded-3xl hover:border-brand-gold/50 transition-all group"
                >
                  <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-brand-gold/20">
                    <Icon className="w-7 h-7 text-brand-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Protection Section with Visual */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[10px] font-black uppercase tracking-[0.2em] mb-6">Climate Guard</div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-tight">
                Built for the <br />
                <span className="text-brand-gold">Kerala Climate</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
                <p>
                  Kerala's tropical climate presents unique challenges. Intense UV exposure, heavy monsoon cycles, and high humidity can quickly oxidize your vehicle's paint and damage interior surfaces.
                </p>
                <p>
                  Our advanced Graphene and Ceramic coatings create a hard, hydrophobic shield that resists chemical etching, water spotting, and fading.
                </p>
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'UV & Heat Resistance',
                    'Hydrophobic Water Beading',
                    'Chemical Resistance',
                    'High Gloss Retention'
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                      <span className="text-white text-sm font-bold uppercase tracking-wider">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-2xl">
                <img src="/protection.jpg" alt="Protection Close-up" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                  <div className="flex items-center gap-4">
                    <Shield className="w-10 h-10 text-brand-gold" />
                    <div>
                      <div className="text-white font-black text-lg uppercase tracking-tight">Active Shield</div>
                      <div className="text-gray-400 text-xs">9H Hardness Protection Layer</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-[80px]" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-red/10 rounded-full blur-[80px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Your Car Deserves The Best</h2>
          <p className="text-gray-400 mb-10 text-lg">Contact our experts today for a free visual assessment and custom quote.</p>
          <a href="https://wa.me/918089314740" className="inline-flex items-center gap-4 px-12 py-5 bg-brand-gold text-black font-black rounded-2xl hover:scale-105 transition-transform uppercase tracking-widest text-sm shadow-2xl shadow-brand-gold/20">
            Consult with a Specialist
          </a>
        </div>
      </section>
    </div>
  );
}