import React, { useEffect, useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface HeaderProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}
export function Header({
  setCurrentPage,
  currentPage
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    value: 'home'
  }, {
    name: 'Services',
    value: 'services'
  }, {
    name: 'Contact',
    value: 'contact'
  }];
  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer group" onClick={() => handleNavClick('home')}>
            <motion.img src="/ChatGPT_Image_Jan_4,_2026,_10_21_11_AM.png" alt="Auto Vibe Logo" className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }} />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <button key={link.name} onClick={() => handleNavClick(link.value)} className={`text-sm font-medium transition-all duration-200 tracking-wide ${currentPage === link.value ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                {link.name}
                {currentPage === link.value && <motion.div layoutId="underline" className="h-0.5 w-full bg-red-600 mt-1" />}
              </button>)}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://wa.me/919074997502" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 text-sm font-bold text-white bg-green-600 hover:bg-green-700 rounded-full transition-all transform hover:scale-105">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
            <a href="tel:8089314740" className="flex items-center px-4 py-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-full transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-white hover:text-red-500 transition-colors" aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-black/95 border-t border-white/10 backdrop-blur-xl overflow-hidden">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map(link => <button key={link.name} onClick={() => handleNavClick(link.value)} className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${currentPage === link.value ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
                  {link.name}
                </button>)}
              <div className="pt-4 grid grid-cols-2 gap-3">
                <a href="tel:8089314740" className="flex items-center justify-center px-4 py-3 text-sm font-bold text-white bg-red-600 rounded-lg active:bg-red-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </a>
                <a href="https://wa.me/919074997502" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-4 py-3 text-sm font-bold text-white bg-green-600 rounded-lg active:bg-green-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </header>;
}