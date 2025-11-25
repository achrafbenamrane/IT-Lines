'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from '../../contexts/LanguageContext';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Cloud Computing in 2024',
    excerpt: 'Explore the latest trends and innovations shaping cloud technology and how businesses can leverage them for growth.',
    author: 'John Smith',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Cloud Technology',
    image: '/blog/cloud-computing.jpg',
    slug: 'future-cloud-computing-2024'
  },
  {
    id: 2,
    title: 'Cybersecurity Best Practices for Small Businesses',
    excerpt: 'Essential security measures every small business should implement to protect against cyber threats.',
    author: 'Sarah Johnson',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Cybersecurity',
    image: '/blog/cybersecurity.jpg',
    slug: 'cybersecurity-best-practices'
  },
  {
    id: 3,
    title: 'Digital Transformation: A Complete Guide',
    excerpt: 'Step-by-step approach to successfully implementing digital transformation in your organization.',
    author: 'Mike Chen',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Digital Strategy',
    image: '/blog/digital-transformation.jpg',
    slug: 'digital-transformation-guide'
  }
];

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useTranslation();

  return (
    <section id="blog" className="py-20 lg:py-32 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg inline-block">
            {t('blog.title')}
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mt-6 mb-6">
            {t('blog.subtitle')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('blog.description')}
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-2">📝</div>
                    <p className="text-sm opacity-80">Featured Article</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <motion.a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-purple-600 font-medium transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <span>{t('blog.readMore')}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/blog"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>{t('blog.viewAll')}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;