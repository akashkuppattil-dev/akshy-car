import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageSquare } from 'lucide-react';

const faqs = [
    {
        question: "How long does ceramic or graphene coating last?",
        answer: "Ceramic coating typically lasts 2–3 years, while graphene coating offers enhanced durability and heat resistance, lasting up to 3–5 years with proper maintenance."
    },
    {
        question: "Is paint correction included before coating?",
        answer: "Yes. Every coating service includes paint decontamination and correction to ensure the surface is clean, smooth, and ready for proper bonding."
    },
    {
        question: "How much time does a full detailing service take?",
        answer: "Depending on the service, detailing can take anywhere from a few hours to a full day. Coating services may require additional curing time."
    },
    {
        question: "Will interior detailing remove odors and bacteria?",
        answer: "Yes. Our interior detailing includes deep vacuuming, steam cleaning, and anti-bacterial treatments to eliminate odors, germs, and allergens."
    },
    {
        question: "Is engine buffing safe for Royal Enfield / Bullet bikes?",
        answer: "Absolutely. We use controlled polishing techniques and bike-safe compounds specifically designed for Bullet engines, ensuring shine without damage."
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-12 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-white mb-3 uppercase tracking-tight"
                    >
                        Frequently Asked <span className="text-brand-gold">Questions</span>
                    </motion.h2>
                    <p className="text-gray-400 text-base">
                        Everything you need to know about our premium detailing services.
                    </p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-zinc-800 rounded-2xl bg-zinc-900/30 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left group transition-colors hover:bg-zinc-800/50"
                            >
                                <span className="text-white font-bold text-base md:text-lg pr-8 group-hover:text-brand-gold transition-colors">
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 w-7 h-7 rounded-full border border-zinc-700 flex items-center justify-center transition-all ${openIndex === index ? 'bg-brand-gold border-brand-gold' : 'group-hover:border-brand-gold'}`}>
                                    {openIndex === index ? (
                                        <Minus className="w-3 h-3 text-black" />
                                    ) : (
                                        <Plus className="w-3 h-3 text-gray-400 group-hover:text-brand-gold" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-5 text-gray-400 leading-relaxed text-sm md:text-base border-t border-zinc-800/50 pt-3">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 text-center relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl group-hover:bg-brand-gold/10 transition-all" />
                    <MessageSquare className="w-10 h-10 text-brand-gold mx-auto mb-4" />
                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">Still have questions?</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-6 text-sm">
                        Get in touch with Auto Vibe Detailing Studio for expert guidance and personalized service recommendations.
                    </p>
                    <a
                        href="https://wa.me/918089314740"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center px-8 py-3.5 bg-brand-gold text-black font-black rounded-xl hover:scale-105 transition-transform uppercase tracking-widest text-xs"
                    >
                        Ask Us on WhatsApp
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
