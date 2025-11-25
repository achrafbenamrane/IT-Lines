'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTranslation } from '../../contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CEO, TechCorp',
    image: '/testimonials/person1.jpg',
    quote: 'Nexus Solutions transformed our digital infrastructure completely. Their team\'s expertise and dedication to our success has been phenomenal.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    title: 'Founder, StartupHub',
    image: '/testimonials/person2.jpg',
    quote: 'Working with Nexus was a game-changer for our business. They delivered beyond expectations and continue to provide excellent support.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    title: 'CTO, InnovateLabs',
    image: '/testimonials/person3.jpg',
    quote: 'The most professional and skilled IT consultancy we\'ve ever worked with. Their solutions are innovative and perfectly tailored to our needs.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    title: 'Director, GlobalTrade Inc',
    image: '/testimonials/person4.jpg',
    quote: 'Exceptional service from start to finish. The team at Nexus Solutions truly understands what modern businesses need to succeed.',
    rating: 5,
  },
  {
    name: 'Lisa Martinez',
    title: 'VP of Operations, RetailPro',
    image: '/testimonials/person5.jpg',
    quote: 'Our e-commerce platform has never been better. Nexus Solutions delivered a robust, scalable solution that exceeded all our expectations.',
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">
            {t('testimonials.title')}
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">
            {t('testimonials.subtitle')}
          </h2>
          <p className="text-lg text-white/80">
            {t('testimonials.description')}
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
          >
            {/* Quote Icon */}
            <div className="mb-6">
              <Quote className="w-12 h-12 text-purple-600/30" />
            </div>

            {/* Testimonial Content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-purple-600 text-purple-600" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-neutral-900 font-medium leading-relaxed mb-8">
                &quot;{testimonials[currentIndex].quote}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white font-heading font-bold text-xl">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-bold text-blue-600 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-neutral-900/60 text-sm">
                    {testimonials[currentIndex].title}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-neutral-100">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-neutral-50 hover:bg-purple-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === currentIndex
                        ? 'w-8 h-2 bg-purple-600'
                        : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-neutral-50 hover:bg-purple-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 top-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <p className="text-center text-white/60 text-sm mb-8">{t('testimonials.trustedBy')}</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <span className="text-white/40 font-heading font-bold text-lg">LOGO {i + 1}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
