import { MessageCircle, X, ChevronRight, Sparkles, Shield, Car, Droplets } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const SERVICES = [
    { id: 'coating', name: 'Ceramic Coating', icon: Shield, color: 'text-brand-gold' },
    { id: 'detailing', name: 'Full Detailing', icon: Sparkles, color: 'text-brand-red' },
    { id: 'interior', name: 'Interior Deep Clean', icon: Droplets, color: 'text-blue-400' },
    { id: 'bike', name: 'Bike Detailing', icon: Car, color: 'text-orange-400' },
];

export function FloatingWhatsApp() {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = '918089314740';

    const handleServiceSelect = (serviceName: string) => {
        const message = encodeURIComponent(`Hi Auto Vibe, I'm interested in ${serviceName} service for my vehicle. Could you provide more details and pricing?`);
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        setIsOpen(false);
    };

    return (
        <div className="fixed right-4 bottom-4 z-[100] flex flex-col items-end gap-3">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.85, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.85 }}
                        className="w-60 md:w-64 bg-zinc-900 border border-zinc-800 rounded-[1.5rem] shadow-2xl overflow-hidden mb-1"
                    >
                        {/* Header */}
                        <div className="bg-brand-red p-4 text-white relative">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-3 right-3 p-1 hover:bg-black/10 rounded-full transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                            <h3 className="text-base font-black uppercase tracking-tight mb-0.5">Auto Vibe Bot</h3>
                            <p className="text-white/80 text-[10px] font-medium uppercase tracking-widest">How can we help?</p>
                        </div>

                        {/* Content */}
                        <div className="p-3 space-y-2">
                            <p className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em] px-1 mb-1">Select a Service</p>
                            <div className="grid grid-cols-1 gap-2">
                                {SERVICES.map((service) => (
                                    <button
                                        key={service.id}
                                        onClick={() => handleServiceSelect(service.name)}
                                        className="w-full flex items-center gap-3 p-3 rounded-xl bg-zinc-800/50 hover:bg-brand-gold/10 border border-zinc-800 hover:border-brand-gold/30 transition-all group text-left"
                                    >
                                        <div className={`w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center ${service.color} group-hover:scale-110 transition-transform shadow-inner`}>
                                            <service.icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-[12px] font-black text-white uppercase tracking-tight group-hover:text-brand-gold transition-colors">{service.name}</div>
                                            <div className="text-[8px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">Professional Grade</div>
                                        </div>
                                        <div className="w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-all">
                                            <ChevronRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-black transition-colors" />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-2.5 bg-black/40 border-t border-white/5">
                            <button
                                onClick={() => handleServiceSelect('General Consultation')}
                                className="w-full py-2 rounded-lg bg-zinc-800 text-white text-[9px] font-black uppercase tracking-widest border border-white/5 hover:border-brand-gold/30 transition-all"
                            >
                                General Inquiry
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all relative ${isOpen ? 'bg-zinc-800 text-white' : 'bg-green-600 text-white'
                    }`}
                aria-label="Toggle Support Chat"
            >
                {isOpen ? (
                    <X className="w-5 h-5" />
                ) : (
                    <MessageCircle className="w-6 h-6" />
                )}

                {!isOpen && (
                    <>
                        {/* Notification Dot */}
                        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-brand-red rounded-full border-[3px] border-black animate-pulse" />
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl -z-10 animate-pulse" />
                    </>
                )}
            </motion.button>
        </div>
    );
}
