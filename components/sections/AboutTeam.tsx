'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from '../../contexts/LanguageContext';
import Team from '../3d/Team';

const AboutTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useTranslation();

  return (
    <section id="about" className="min-h-screen pt-24 pb-12 bg-gray-50 flex items-center" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Team Component */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[600px]"
          >
            <Team />
          </motion.div>

          {/* Right Side - About Description Only */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
                {t('about.title')}
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mt-4 mb-6">
                {t('about.subtitle')}
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.description1')}
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.description2')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
