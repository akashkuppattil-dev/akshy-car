import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Phone, Navigation, Clock } from 'lucide-react';

export function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 808 9314 740',
      subContent: 'Primary Support',
      href: 'tel:+918089314740'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+91 808 9314 740',
      subContent: 'Fastest Response',
      href: 'https://wa.me/918089314740'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@autovibe.com',
      subContent: 'General Inquiries',
      href: 'mailto:info@autovibe.com'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative py-16 overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(229,25,18,0.05),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[10px] font-black uppercase tracking-[0.3em] mb-8"
          >
            Connect With Us
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="font-black text-white mb-8 uppercase tracking-tighter leading-none"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            LET'S START THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold to-white/60">
              RESTORATION
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto font-medium"
          >
            Ready to give your vehicle the care it deserves? Reach out to us for premium detailing services in Narikkuni.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, idx) => (
            <motion.a
              key={info.title}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group block p-10 rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 hover:border-brand-gold transition-all duration-500 text-center"
            >
              <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-gold/10 transition-colors border border-zinc-700 group-hover:border-brand-gold/30">
                <info.icon className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-gray-500 font-black uppercase tracking-widest text-[10px] mb-2">{info.title}</h3>
              <div className="text-xl font-black text-white mb-2 group-hover:text-brand-gold transition-colors">{info.content}</div>
              <div className="text-sm text-gray-400 font-medium">{info.subContent}</div>
            </motion.a>
          ))}
        </div>

        {/* Location & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full space-y-8"
          >
            <div className="flex-grow p-12 rounded-[3.5rem] bg-zinc-950 border border-zinc-900">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] font-black uppercase tracking-widest mb-10">
                <Navigation className="w-3 h-3" /> Visit Our Studio
              </div>

              <h2 className="text-4xl font-black text-white mb-10 uppercase tracking-tighter leading-tight">
                Auto Vibe <br />
                <span className="text-gray-500">Narikkuni Detailing</span>
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center flex-shrink-0 border border-zinc-800">
                    <MapPin className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-white font-black uppercase tracking-widest text-xs mb-2">Address</div>
                    <div className="text-gray-400 font-medium leading-relaxed">
                      Poonoor – Narikkuni Road<br />
                      Narikkuni, Kozhikode, Kerala 673585
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center flex-shrink-0 border border-zinc-800">
                    <Clock className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-white font-black uppercase tracking-widest text-xs mb-2">Working Hours</div>
                    <div className="text-gray-400 font-medium space-y-1">
                      <div className="flex justify-between w-64">
                        <span>Monday – Saturday</span>
                        <span className="text-white">9:00 AM – 6:00 PM</span>
                      </div>
                      <div className="flex justify-between w-64">
                        <span>Sunday</span>
                        <span className="text-white">9:00 AM – 12:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <a href="https://maps.app.goo.gl/iCPXI5hLHqzYEoXKV" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 px-10 py-5 bg-brand-red text-white font-black rounded-2xl hover:scale-105 transition-transform uppercase tracking-widest text-xs shadow-xl shadow-brand-red/20">
                  Get Driving Directions
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3.5rem] overflow-hidden border border-zinc-900 shadow-2xl min-h-[500px]"
          >
            <iframe
              title="Auto Vibe location"
              src="https://www.google.com/maps?q=Narikkuni%20Kozhikode&output=embed"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}