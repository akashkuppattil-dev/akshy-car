import { motion } from 'framer-motion';
import { CheckCircle2, ClipboardCheck, Sparkles, Truck, UserCheck } from 'lucide-react';

const steps = [
    {
        icon: UserCheck,
        title: 'Vehicle Inspection',
        desc: 'Thorough assessment of your vehicle\'s current condition.',
        color: 'text-blue-500'
    },
    {
        icon: ClipboardCheck,
        title: 'Service Recommendation',
        desc: 'Expert advice on the best package for your car\'s needs.',
        color: 'text-purple-500'
    },
    {
        icon: Sparkles,
        title: 'Professional Detailing',
        desc: 'Deep cleaning and protection using high-end tools.',
        color: 'text-brand-gold'
    },
    {
        icon: CheckCircle2,
        title: 'Quality Check',
        desc: 'Final inspection to ensure 100% satisfaction.',
        color: 'text-green-500'
    },
    {
        icon: Truck,
        title: 'Safe Delivery',
        desc: 'Handling your vehicle with the utmost care until it\'s back with you.',
        color: 'text-brand-red'
    }
];

export function ProcessSection() {
    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight"
                    >
                        How We <span className="text-brand-gold">Work</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Our systematic approach ensures your vehicle receives the highest standard of care at Every Stage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Connector Line (Desktop) */}
                                {idx < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-[2px] bg-zinc-800 to-transparent z-0" />
                                )}

                                <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 relative z-10 group-hover:border-brand-gold/50 transition-colors">
                                    <Icon className={`w-10 h-10 ${step.color}`} />
                                </div>

                                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-brand-gold transition-colors">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed px-2">{step.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
