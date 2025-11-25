'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Target, TrendingUp, Heart } from 'lucide-react';
import { useRef } from 'react';
import { useTranslation } from '../../contexts/LanguageContext';

const About = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in every project.',
    },
    {
      icon: Target,
      title: 'Focus',
      description: 'Laser-focused on achieving your business objectives.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Dedicated to driving sustainable business growth.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Passionate about technology and innovation.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <motion.div
            style={{ y: yLeft }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-100 mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Building Digital Solutions{' '}
                <span className="text-purple-600">Since 2010</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We're a team of passionate developers, designers, and strategists dedicated to helping businesses thrive in the digital age.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over a decade of experience, we've helped hundreds of companies transform their ideas into successful digital products. Our approach combines technical expertise with creative thinking to deliver solutions that not only work flawlessly but also drive real business results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image Grid */}
          <motion.div
            style={{ y: yRight }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Replace these with actual images */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl aspect-square"></div>
                <div className="bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl aspect-[4/3]"></div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl aspect-[4/3]"></div>
                <div className="bg-gradient-to-br from-green-400 to-teal-400 rounded-2xl aspect-square"></div>
              </div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-purple-100 rounded-2xl opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
