import {
  Instagram,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  ChevronRight,
  ShieldCheck
} from "lucide-react"

export function Footer() {
  const navigateTo = (page: string) => {
    window.dispatchEvent(new CustomEvent('navigate-to', { detail: page }));
    window.scrollTo(0, 0);
  };

  const services = [
    'Ceramic Coating',
    'Graphene Coating',
    'Interior Detailing',
    'Exterior Detailing',
    'Paint Correction',
    'Bike Buffing'
  ];

  const quickLinks = [
    { name: 'Home', value: 'home' },
    { name: 'Our Story', value: 'about' },
    { name: 'Services', value: 'services' },
    { name: 'Contact', value: 'contact' }
  ];

  return (
    <footer className="bg-black text-gray-400 pt-24 pb-12 border-t border-zinc-900 relative overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-16 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-4 -ml-4">
              <img src="/Car Logo Only.svg" alt="Auto Vibe" className="h-16 w-auto" loading="lazy" />
              <img src="/logo text.svg" alt="Auto Vibe" className="h-20 w-auto brightness-200" loading="lazy" />
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Kozhikode's destination for elite automotive restoration.
              We blend advanced chemical protection with artistic precision
              to make your vehicle better than new.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-brand-red hover:border-brand-red hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8">Quick Navigation</h3>
              <ul className="space-y-4">
                {quickLinks.map(link => (
                  <li key={link.value}>
                    <button
                      onClick={() => navigateTo(link.value)}
                      className="group flex items-center gap-2 text-sm hover:text-white transition-colors"
                    >
                      <ChevronRight className="w-3 h-3 text-brand-gold transition-transform group-hover:translate-x-1" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8">Our Specialties</h3>
              <ul className="space-y-4">
                {services.map(service => (
                  <li key={service}>
                    <button
                      onClick={() => navigateTo('services')}
                      className="group flex items-center gap-2 text-sm hover:text-white transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8">Visit The Studio</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0" />
                <p className="text-sm">Poonoor – Narikkuni Road, Narikkuni, Kozhikode, Kerala 673585</p>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <p className="text-sm">+91 808 9314 740</p>
              </div>
              <div className="pt-4 flex items-center gap-2 text-brand-gold">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Authorized Detailer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
            © {new Date().getFullYear()} Auto Vibe Detailing Studio. Narikkuni, Kozhikode.
          </p>
          <div className="flex gap-8">
            <button onClick={() => navigateTo('home')} className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-white transition-colors">Terms</button>
            <button onClick={() => navigateTo('home')} className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-white transition-colors">Privacy</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
