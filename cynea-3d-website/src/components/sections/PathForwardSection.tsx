import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const audiences = [
  {
    title: 'For SMEs',
    description: 'Complete infrastructure to digitize, automate, and scale your business.',
    link: '/products/ai-automation',
  },
  {
    title: 'For Governments',
    description: 'National AI workforce development and capacity building programs.',
    link: '/training/government',
  },
  {
    title: 'For Enterprises',
    description: 'Corporate AI training and upskilling for your teams.',
    link: '/training/corporate',
  },
  {
    title: 'For Individuals',
    description: 'Personal AI skills development and career growth.',
    link: '/training/career-growth',
  },
];

const PathForwardSection = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-semibold text-white mb-4">
            Solutions for every stakeholder
          </h2>
          <p className="text-lg text-slate-400">
            Whether you're building a business, developing a workforce, or growing your career.
          </p>
        </motion.div>

        {/* Audience Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={audience.link}
                className="block h-full p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 transition-all duration-200 group"
              >
                <h3 className="text-lg font-medium text-white mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {audience.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-slate-400 group-hover:text-white group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathForwardSection;
