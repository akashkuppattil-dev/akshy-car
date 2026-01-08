import { MessageCircle, X, ChevronRight, Sparkles, Shield, Wrench, Hammer, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const SERVICES = [
    { id: 'coating', name: 'Ceramic Coating', icon: Shield, color: 'text-brand-gold', message: "I'm interested in Ceramic Coating options for my vehicle." },
    { id: 'detailing', name: 'Full Detailing', icon: Sparkles, color: 'text-brand-red', message: "I'd like to book a Full Detailing session." },
    { id: 'restoration', name: 'Restoration & Polish', icon: Hammer, color: 'text-blue-400', message: "I need headlight or glass restoration services." },
    { id: 'protection', name: 'Protection Treatments', icon: Shield, color: 'text-green-400', message: "Tell me more about your Protection Treatments." },
    { id: 'mechanical', name: 'Mechanical & Bike', icon: Wrench, color: 'text-orange-400', message: "I have a mechanical inquiry or need Bike Detailing." },
];

export function FloatingWhatsApp() {
    const [isOpen, setIsOpen] = useState(false);
    const [showGreeting, setShowGreeting] = useState(false);
    const phoneNumber = '918089314740';

    // Auto-show greeting bubble after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowGreeting(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const handleServiceSelect = (serviceMessage: string) => {
        const message = encodeURIComponent(`Hi Auto Vibe, ${serviceMessage}`);
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        setIsOpen(false);
        setShowGreeting(false);
    };

    const handleOpen = () => {
        setIsOpen(true);
        setShowGreeting(false);
    };

    return (
        <>
            {/* Backdrop for mobile to close when clicking outside */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[9980] md:hidden backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div className="fixed right-4 bottom-4 z-[9990] flex flex-col items-end gap-3 pointer-events-none">
                <div className="pointer-events-auto flex flex-col items-end">
                    <AnimatePresence>
                        {/* Auto Greeting Bubble */}
                        {showGreeting && !isOpen && (
                            <motion.div
                                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="mb-4 mr-2 bg-zinc-900 text-white p-4 rounded-2xl rounded-tr-sm shadow-xl max-w-[250px] relative border border-zinc-700"
                            >
                                <button
                                    onClick={(e) => { e.stopPropagation(); setShowGreeting(false); }}
                                    className="absolute -top-2 -left-2 bg-zinc-800 rounded-full p-1 hover:bg-zinc-700 transition-colors border border-zinc-700"
                                >
                                    <X className="w-3 h-3 text-gray-400" />
                                </button>
                                <p className="text-sm font-medium leading-relaxed">
                                    👋 Hi there! looking for <span className="font-bold text-brand-red">Premium Auto Care?</span> Chat with us now!
                                </p>
                            </motion.div>
                        )}

                        {/* Main Chat Window */}
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                                className="w-[calc(100vw-32px)] sm:w-80 md:w-96 bg-zinc-900 border border-zinc-800 rounded-[2rem] shadow-2xl overflow-hidden mb-2 pointer-events-auto"
                            >
                                {/* Header */}
                                <div className="bg-gradient-to-r from-green-600 to-green-700 p-5 text-white flex items-center justify-between shadow-lg relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png')] opacity-10" />
                                    <div className="flex items-center gap-3 relative z-10">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30 backdrop-blur-sm">
                                            <MessageCircle className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg leading-tight">Auto Vibe Support</h3>
                                            <div className="flex items-center gap-1.5 opacity-90">
                                                <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                                                <span className="text-xs font-medium">Online now</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="relative z-10 p-2 hover:bg-white/10 rounded-full transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Chat Content */}
                                <div className="bg-[#0b141a] bg-opacity-95 p-5 max-h-[60vh] overflow-y-auto custom-scrollbar relative">
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 bg-[url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png')] opacity-[0.05] pointer-events-none" />

                                    <div className="relative z-10 space-y-4">
                                        {/* Bot Message */}
                                        <div className="flex gap-2">
                                            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                                                <Shield className="w-4 h-4 text-white" />
                                            </div>
                                            <div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-none text-sm text-gray-200 shadow-sm border border-zinc-700/50 max-w-[85%]">
                                                <p>Hello! Welcome to <span className="text-brand-gold font-bold">Auto Vibe</span>.</p>
                                                <p className="mt-1">How can we assist you with your vehicle today? Please select a topic below:</p>
                                            </div>
                                        </div>

                                        {/* Options Grid */}
                                        <div className="grid gap-2 pl-10">
                                            {SERVICES.map((service) => (
                                                <button
                                                    key={service.id}
                                                    onClick={() => handleServiceSelect(service.message)}
                                                    className="group flex items-center gap-3 p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-brand-gold/50 transition-all text-left w-full relative overflow-hidden"
                                                >
                                                    <div className={`w-8 h-8 rounded-lg bg-zinc-900/80 flex items-center justify-center ${service.color} shadow-inner`}>
                                                        <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{service.name}</span>
                                                    <ChevronRight className="w-4 h-4 text-zinc-500 ml-auto group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
                                                </button>
                                            ))}

                                            <button
                                                onClick={() => handleServiceSelect("I have a general inquiry.")}
                                                className="mt-2 flex items-center justify-center gap-2 p-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm transition-all shadow-lg hover:shadow-green-900/20"
                                            >
                                                <MessageCircle className="w-4 h-4" />
                                                Start Custom Chat
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Input Mockup */}
                                <div className="bg-zinc-900 p-3 border-t border-zinc-800 flex items-center gap-2">
                                    <div className="flex-1 bg-zinc-800 h-9 rounded-full px-4 flex items-center text-zinc-500 text-sm cursor-not-allowed">
                                        Type a message...
                                    </div>
                                    <div className="w-9 h-9 rounded-full bg-green-600/50 flex items-center justify-center text-zinc-400">
                                        <Send className="w-4 h-4 ml-0.5" />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Main Toggle Button */}
                    <motion.button
                        onClick={isOpen ? () => setIsOpen(false) : handleOpen}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`pointer-events-auto rounded-full flex items-center justify-center shadow-2xl transition-all relative ${isOpen
                            ? 'w-12 h-12 bg-zinc-800 text-white hover:bg-zinc-700'
                            : 'w-14 h-14 bg-[#25D366] text-white hover:bg-[#128C7E]'
                            }`}
                        aria-label={isOpen ? "Close Chat" : "Open WhatsApp Chat"}
                    >
                        {isOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <MessageCircle className="w-7 h-7" />
                        )}

                        {!isOpen && (
                            <>
                                <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-[3px] border-black animate-pulse" />
                                <div className="absolute inset-0 rounded-full bg-green-400/30 blur-xl -z-10 animate-pulse" />
                            </>
                        )}
                    </motion.button>
                </div>
            </div>
        </>
    );
}
