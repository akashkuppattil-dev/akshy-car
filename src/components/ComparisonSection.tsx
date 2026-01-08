import { motion } from 'framer-motion';

const comparisons = [
    {
        title: 'Paint Correction',
        before: '/detailing.jpg',
        after: '/coating.jpg',
        label: 'Removed 95% of swirl marks & light scratches'
    },
    {
        title: 'Interior Deep Clean',
        before: '/experience.jpg',
        after: '/restoration.jpg',
        label: 'Full stain removal and fabric rejuvenation'
    }
];

export function ComparisonSection() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-black text-white mb-4 uppercase tracking-tight"
                        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
                    >
                        The <span className="text-brand-red">Auto Vibe</span> Difference
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Real results from our studio. We don't just clean, we restore.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {comparisons.map((c, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, scale: 0.95, y: 20 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: { duration: 0.6 }
                                }
                            }}
                            className="group"
                        >
                            <div className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-800">
                                <div className="grid grid-cols-2 h-full">
                                    <div className="relative">
                                        <img
                                            src={c.before}
                                            alt="Before"
                                            className="w-full h-full object-cover optimize-gpu"
                                            loading="lazy"
                                            decoding="async"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-white uppercase rounded">Before</div>
                                    </div>
                                    <div className="relative">
                                        <img
                                            src={c.after}
                                            alt="After"
                                            className="w-full h-full object-cover border-l-2 border-brand-gold optimize-gpu"
                                            loading="lazy"
                                            decoding="async"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute top-4 right-4 bg-brand-gold px-3 py-1 text-[10px] font-bold text-black uppercase rounded">After</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <h3 className="font-bold text-white uppercase tracking-wide"
                                    style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
                                >{c.title}</h3>
                                <span className="text-xs text-gray-500 italic">{c.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
