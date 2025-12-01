import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Landmark, Briefcase, User } from 'lucide-react';

const paths = [
  {
    icon: Building,
    title: 'For SMEs',
    description:
      'Get the full infrastructure to compete globally.',
    link: '/products/ai-automation',
    linkText: 'Explore Products',
    color: 'border-navy hover:bg-navy/5',
  },
  {
    icon: Landmark,
    title: 'For Government',
    description:
      'National AI workforce development programs.',
    link: '/training/government',
    linkText: 'View Programs',
    color: 'border-purple hover:bg-purple/5',
  },
  {
    icon: Briefcase,
    title: 'For Enterprises',
    description:
      'Corporate AI readiness and upskilling.',
    link: '/training/corporate',
    linkText: 'Learn More',
    color: 'border-teal hover:bg-teal/5',
  },
  {
    icon: User,
    title: 'For Individuals',
    description:
      'AI Upskilling for professionals.',
    link: '/training/career-growth',
    linkText: 'Join Academy',
    color: 'border-gold hover:bg-gold/5',
  },
];

const PathForwardSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Choose Your Path Forward
          </h2>
          <p className="text-lg text-gray-600">
            Whether you're an SME, government institution, enterprise, or a professional,
            we have solutions tailored for you.
          </p>
        </motion.div>

        {/* Path Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={path.link}
                className={`block h-full p-6 rounded-2xl border-2 ${path.color} transition-all duration-300 group`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <path.icon className="w-6 h-6 text-navy" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-navy mb-2">{path.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{path.description}</p>

                {/* Link */}
                <span className="inline-flex items-center gap-2 text-navy font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  {path.linkText}
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
