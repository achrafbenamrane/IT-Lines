'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Users, TrendingUp } from 'lucide-react';
import { useTranslation } from '../../contexts/LanguageContext';



  const features = [
    {
      icon: Zap,
      titleKey: 'whyUs.quickResponse',
      descKey: 'whyUs.quickResponseDesc',
      stat: '< 2hrs',
      statKey: 'whyUs.responseTime',
    },
    {
      icon: Users,
      titleKey: 'whyUs.experiencedTeam',
      descKey: 'whyUs.experiencedTeamDesc',
      stat: '15+',
      statKey: 'whyUs.yearsExp',
    },
    {
      icon: TrendingUp,
      titleKey: 'whyUs.provenResults',
      descKey: 'whyUs.provenResultsDesc',
      stat: '98%',
      statKey: 'whyUs.successRate',
    },
  ];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-neutral-50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
            {t('whyUs.title')}
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-blue-600 mt-4 mb-6">
            {t('whyUs.subtitle')}
          </h2>
          <p className="text-lg text-neutral-900/70">
            {t('whyUs.description')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Card */}
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 border-transparent hover:border-secondary/20">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-heading font-bold text-blue-600 mb-4">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-neutral-900/70 leading-relaxed mb-6">
                    {t(feature.descKey)}
                  </p>

                  {/* Stat */}
                  <div className="pt-6 border-t border-neutral-100">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-4xl font-heading font-bold text-purple-600">
                          {feature.stat}
                        </div>
                        <div className="text-sm text-neutral-900/60 mt-1">
                          {t(feature.statKey)}
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center"
                      >
                        <svg
                          className="w-6 h-6 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Section - Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
        >
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-blue-600 text-center mb-12">
            {t('whyUs.processTitle')}
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', titleKey: 'whyUs.consultation', descKey: 'whyUs.consultationDesc', icon: '💬' },
              { step: '02', titleKey: 'whyUs.strategy', descKey: 'whyUs.strategyDesc', icon: '📋' },
              { step: '03', titleKey: 'whyUs.development', descKey: 'whyUs.developmentDesc', icon: '⚙️' },
              { step: '04', titleKey: 'whyUs.support', descKey: 'whyUs.supportDesc', icon: '🛠️' },
            ].map((item, idx) => (
              <div key={idx} className="text-center relative">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-6xl font-heading font-bold text-purple-600/20 mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-heading font-bold text-blue-600 mb-2">
                  {t(item.titleKey)}
                </h4>
                <p className="text-sm text-neutral-900/60">{t(item.descKey)}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-full w-8 h-0.5 bg-purple-600/20">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.6, delay: 1.2 + idx * 0.3 }}
                      className="h-full bg-purple-600 origin-left"
                    ></motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
