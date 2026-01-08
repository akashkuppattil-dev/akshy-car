import { motion } from 'framer-motion';
import { ExternalLink, Quote, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Mohammed Ramees',
    rating: 5,
    text: 'Ceramic coating was done perfectly. The gloss and finish are outstanding. Very professional team and clean work.'
  },
  {
    id: 2,
    name: 'Arun Kumar',
    rating: 5,
    text: 'Interior cleaning and exterior polishing were done with great care. My car looks fresh and well maintained.'
  },
  {
    id: 3,
    name: 'Fasil K',
    rating: 5,
    text: 'Opted for Graphene coating and the result is excellent. They explained everything clearly before starting.'
  },
  {
    id: 4,
    name: 'Rahul P',
    rating: 5,
    text: 'Headlight restoration and detailing work came out very neat. The difference was clearly visible.'
  },
  {
    id: 5,
    name: 'Jaseem VK',
    rating: 5,
    text: 'Anti-rust treatment and underbody wash were done professionally. Good attention to detail.'
  },
  {
    id: 6,
    name: 'Sajid Ali',
    rating: 5,
    text: 'Quality service with reasonable pricing. Friendly staff and timely delivery. Highly recommended.'
  }
];

export function ReviewsSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10 mb-16">
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-none"
          >
            CUSTOMER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-red to-white/60">
              REVIEWS
            </span>
          </motion.h2>
          <p className="text-gray-400 text-lg font-medium leading-relaxed border-l-4 border-brand-red pl-8 italic">
            "Don't just take our word for it. Hear from the automotive enthusiasts who trust Auto Vibe with their most prized possessions."
          </p>
        </div>
      </div>

      {/* Reviews Display: Horizontal Scroll (Mobile) / Grid (Desktop) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-12 gap-6 -mx-6 px-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0 md:mx-0 md:px-0 scrollbar-hide">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-8 md:p-10 rounded-[2.5rem] hover:border-brand-gold hover:shadow-2xl hover:shadow-brand-gold/10 transition-all duration-500 group relative min-w-[85vw] sm:min-w-[350px] md:min-w-0 snap-center"
            >
              <div className="absolute top-8 right-8">
                <Quote className="w-10 h-10 md:w-12 md:h-12 text-zinc-800 group-hover:text-brand-gold/20 transition-all" />
              </div>

              <div className="flex items-center gap-5 mb-8">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-white font-black text-xl md:text-2xl shadow-xl group-hover:scale-110 transition-transform">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white font-black text-base md:text-lg uppercase tracking-tight group-hover:text-brand-gold transition-colors">
                    {review.name}
                  </h3>
                  <div className="flex text-brand-gold mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 md:w-3.5 h-3 md:h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium italic relative z-10">
                "{review.text}"
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-20 pb-12">
        <motion.a
          href="https://www.google.com/search?q=Auto+Vibe"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-12 py-5 bg-zinc-900 border border-zinc-800 text-white font-black rounded-2xl hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs"
        >
          View More on Google
          <ExternalLink className="w-4 h-4 ml-3" />
        </motion.a>
      </div>
    </section>
  );
}
