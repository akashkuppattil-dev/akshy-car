import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const whatsApp = 'https://wa.me/918089314740';
    const phone = 'tel:+918089314740';

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-4 left-4 right-4 z-[9980] md:hidden max-w-sm mx-auto"
                    style={{ paddingBottom: 'env(safe-area-inset-bottom, 20px)' }}
                >
                    <div className="flex gap-3 bg-zinc-950/90 backdrop-blur-md p-2 rounded-3xl border border-zinc-800 shadow-2xl">
                        <a
                            href={phone}
                            className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 text-white font-black py-3 rounded-2xl active:scale-95 transition-transform"
                        >
                            <Phone className="w-5 h-5 text-brand-red" />
                            CALL
                        </a>
                        <a
                            href={whatsApp}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-brand-gold text-black font-black py-3 rounded-2xl active:scale-95 transition-transform"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WHATSAPP
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
