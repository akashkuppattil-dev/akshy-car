import { motion } from 'framer-motion';
import { Award, Clock, MapPin, MessageCircle, Shield, Sparkles, Users, History, Target, Heart } from 'lucide-react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { CountUp } from '../components/CountUp';
import { WhyAutoVibe } from '../components/WhyAutoVibe';

export function AboutPage() {
  const stats = [
    { icon: Users, value: 1000, suffix: '+', label: 'Happy Customers', image: '/shake hand.jpg' },
    { icon: Award, value: 4.9, decimals: 1, label: 'Google Rating', image: '/rating.jpg' },
    { icon: Shield, value: 4, suffix: '+', label: 'Years Experience', image: '/experience.jpg' },
    { icon: Sparkles, value: 100, suffix: '%', label: 'Satisfaction', image: '/satisfaction2.jpg' }
  ];

  const values = [
    {
      icon: History,
      title: "Our Heritage",
      text: "Founded in 2022 in Narikkuni, Auto Vibe started as a passion project for premium car care. We have quickly grown into Kozhikode's preferred studio for elite detailing."
    },
    {
      icon: Target,
      title: "Our Mission",
      text: "To preserve and enhance the value of every vehicle that enters our studio through professional-grade processes, premium products, and uncompromising attention to detail."
    },
    {
      icon: Heart,
      title: "Our Promise",
      text: "We treat every car like our own. Whether it's a basic wash or a full graphene restoration, our commitment to excellence remains the same."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative py-16 overflow-hidden border-b border-zinc-900 shadow-2xl shadow-brand-red/5">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 via-transparent to-brand-gold/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="px-5 py-2 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-red text-xs font-black uppercase tracking-[0.3em]">
              The Auto Vibe Story
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="font-black text-white mb-8 uppercase tracking-tighter leading-none"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            PRECISION <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold to-white/60">
              MEETS PASSION
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed italic"
          >
            "Redefining automotive care in Narikkuni, Kozhikode. Where high-tech chemistry meets traditional craftsmanship."
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <div className="relative mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group min-w-[280px] h-64 md:h-80"
                >
                  <Card variant="elevated" className="group text-center h-full relative overflow-hidden !rounded-[2.5rem]">
                    <div className="absolute inset-0 z-0">
                      <img
                        src={stat.image}
                        alt={stat.label}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-zinc-950 border border-zinc-900 group"
            >
              <v.icon className="w-12 h-12 text-brand-red mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">{v.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                {v.text}
              </p>
            </motion.div>
          ))}
        </div>

        <WhyAutoVibe />

        {/* Business Info Section */}
        <Section spacing="lg" className="pt-24 border-t border-zinc-900">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-tight">The Studio</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                      <MapPin className="w-6 h-6 text-brand-red" />
                    </div>
                    <div>
                      <div className="font-black text-white uppercase tracking-widest text-sm mb-2">Location</div>
                      <div className="text-gray-400 font-medium">
                        Poonoor – Narikkuni Road<br />
                        Narikkuni, Kozhikode, Kerala 673585
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                      <Clock className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <div className="font-black text-white uppercase tracking-widest text-sm mb-2">Hours</div>
                      <div className="text-gray-400 font-medium space-y-1">
                        <div className="flex justify-between w-64 gap-8">
                          <span>Sun:</span>
                          <span className="text-white">9:00 AM – 12:00 PM</span>
                        </div>
                        <div className="flex justify-between w-64 gap-8">
                          <span>Mon – Sat:</span>
                          <span className="text-white">9:00 AM – 6:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="https://wa.me/918089314740" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-10 py-5 bg-brand-gold text-black font-black rounded-2xl hover:scale-105 transition-transform uppercase tracking-widest text-xs">
                  <MessageCircle className="w-5 h-5" />
                  Instant WhatsApp Booking
                </a>
                <a href="https://maps.app.goo.gl/iCPXI5hLHqzYEoXKV" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-10 py-5 border border-zinc-800 text-white font-black rounded-2xl hover:bg-zinc-900 transition-colors uppercase tracking-widest text-xs">
                  Open Directions
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden border border-zinc-800 shadow-2xl h-[500px]"
            >
              <iframe
                title="Auto Vibe location"
                src="https://www.google.com/maps?q=Narikkuni%20Kozhikode&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none border-[20px] border-black/5" />
            </motion.div>
          </div>
        </Section>
      </div>
    </div>
  );
}
