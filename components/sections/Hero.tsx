'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../../contexts/LanguageContext';
import ProgramingLanguages from '../ui/ProgramingLanguages';

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Parallax transforms for different elements
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // Simple CountUp animation
  const CountUp = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!mounted) return;
      
      const duration = 1500;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [end, mounted]);

    return <>{mounted ? count : end}{suffix}</>;
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-white pt-32 lg:pt-24 overflow-hidden" 
      ref={containerRef}
    >
      {/* Subtle accent elements with parallax */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
        className="absolute top-40 right-20 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 250]) }}
        className="absolute bottom-40 left-20 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl pointer-events-none -z-10" 
      />
      
      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-4 lg:px-8 relative z-10 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Side - Text Content with parallax */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            style={{ y: yText }}
            className="space-y-8 order-2 lg:order-1"
          >
            <motion.div variants={fadeIn}>
              <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-100">
                {t('hero.welcome')}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1]"
            >
              {t('hero.title')}{' '}
              <span className="text-blue-600">
                {t('hero.subtitle')}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors group"
              >
                <span>{t('hero.cta')}</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center justify-center border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg font-medium transition-colors group"
              >
                <Play className="w-5 h-5 mr-2" />
                <span>{t('hero.demo')}</span>
              </button>
            </motion.div>

            {/* Stats - Simple and clean */}
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200"
            >
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  {mounted ? <CountUp end={500} suffix="+" /> : '500+'}
                </div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  {mounted ? <CountUp end={100} suffix="+" /> : '100+'}
                </div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  {mounted ? <CountUp end={50} suffix="+" /> : '50+'}
                </div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - ProgramingLanguages Component */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ y: yImage, scale }}
            className="relative order-1 lg:order-2 z-20 h-[450px] flex items-center justify-center"
          >
            <ProgramingLanguages />
          </motion.div>
        </div>
      </motion.div>

      {/* Video Modal - Simplified */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 rounded-full p-2 transition-colors shadow-lg"
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <div className="text-white text-center">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg mb-2">Demo Video</p>
                <p className="text-sm text-gray-400">Insert your video embed code here</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Scroll Indicator - Subtle with parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ 
          y: useTransform(scrollYProgress, [0, 0.3], [0, 50]),
          opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0])
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
