import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Phone } from 'lucide-react';
export function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-black text-gray-200 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red/10 via-transparent to-brand-gold/10" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-bold text-white mb-8" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>Get In Touch</h2>

        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.a
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { type: "spring", stiffness: 100 }
              }
            }}
            href="tel:8089314740" className="block w-full bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-800 hover:border-brand-red/30 hover:shadow-md transition-all group">
            <div className="flex items-center justify-center">
              <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-brand-red transition-colors border border-zinc-700/50">
                <Phone className="w-6 h-6 text-gray-200 group-hover:text-white" />
              </div>
              <div className="ml-4 text-left">
                <p className="text-sm text-gray-400">Call Us Now</p>
                <p className="text-xl font-bold text-white">808 9314 740</p>
              </div>
            </div>
          </motion.a>

          <motion.a
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { type: "spring", stiffness: 100 }
              }
            }}
            href="tel:9074997502" className="block w-full bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-800 hover:border-brand-red/30 hover:shadow-md transition-all group">
            <div className="flex items-center justify-center">
              <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-brand-red transition-colors border border-zinc-700/50">
                <Phone className="w-6 h-6 text-gray-200 group-hover:text-white" />
              </div>
              <div className="ml-4 text-left">
                <p className="text-sm text-gray-400">Alternative Number</p>
                <p className="text-xl font-bold text-white">907 4997 502</p>
              </div>
            </div>
          </motion.a>

          <motion.a
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { type: "spring", stiffness: 100 }
              }
            }}
            href="https://wa.me/919074997502" target="_blank" rel="noopener noreferrer" className="block w-full bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-800 hover:border-green-600 hover:shadow-md transition-all group">
            <div className="flex items-center justify-center">
              <div className="bg-green-600 p-3 rounded-full group-hover:bg-green-700 transition-colors">
                <MessageCircle className="w-6 h-6 text-white group-hover:text-white" />
              </div>
              <div className="ml-4 text-left">
                <p className="text-sm text-green-300">Chat on WhatsApp</p>
                <p className="text-xl font-bold text-white">Message Us</p>
              </div>
            </div>
          </motion.a>

          <motion.a
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { type: "spring", stiffness: 100 }
              }
            }}
            href="https://maps.app.goo.gl/iCPXI5hLHqzYEoXKV" target="_blank" rel="noopener noreferrer" className="block w-full bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-800 hover:border-zinc-700 hover:shadow-md transition-all group">
            <div className="flex items-center justify-center">
              <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-brand-gold transition-colors">
                <MapPin className="w-6 h-6 text-gray-200 group-hover:text-black" />
              </div>
              <div className="ml-4 text-left">
                <p className="text-sm text-gray-400">Visit Studio</p>
                <p className="text-xl font-bold text-white">
                  Get Directions
                </p>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}