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
            className="font-black text-white mb-8 uppercase tracking-tighter leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
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
        <motion.div
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto snap-x snap-mandatory pb-12 gap-5 -mx-6 px-6 md:gap-8 md:pb-0 md:mx-0 md:px-0 scrollbar-hide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: "spring", damping: 25, stiffness: 100 }
                }
              }}
              className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 p-8 rounded-[2rem] hover:border-brand-gold hover:shadow-2xl hover:shadow-brand-gold/10 transition-all duration-500 group relative w-full min-w-[85vw] md:min-w-0 snap-center optimize-gpu flex flex-col h-[300px] shrink-0"
            >
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-zinc-800 group-hover:text-brand-gold/20 transition-all" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-white font-black text-xl shadow-inner border border-zinc-700/50">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg uppercase tracking-tight group-hover:text-brand-gold transition-colors">
                    {review.name}
                  </h3>
                  <div className="flex text-brand-gold gap-0.5 mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grow">
                <p className="text-gray-400 text-base leading-relaxed font-medium italic relative z-10 line-clamp-4">
                  "{review.text}"
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
            </motion.div>
          ))}
        </motion.div>
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
