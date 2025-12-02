import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const capabilities = [
  {
    title: 'AI Training',
    description: 'Upskill your team with practical AI skills. From government ministries to enterprise teams.',
    link: '/training/career-growth',
  },
  {
    title: 'Workflow Automation',
    description: 'AI agents that handle repetitive tasks—customer service, data entry, inventory management.',
    link: '/products/ai-automation',
  },
  {
    title: 'Blockchain Traceability',
    description: 'Supply chain transparency for EUDR and CBAM compliance. Verifiable from source to shelf.',
    link: '/products/blockchain-compliance',
  },
  {
    title: 'Digital Finance',
    description: 'Stablecoin payments and cross-border settlements. Avoid currency volatility and high fees.',
    link: '/products/digital-finance',
  },
];

const InfrastructureSection = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            Everything you need to compete globally
          </h2>
          <p className="text-lg text-slate-600">
            A complete infrastructure stack designed specifically for emerging market businesses.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={capability.link}
                className="block group p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-violet-600 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {capability.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 group-hover:text-violet-600 group-hover:gap-3 transition-all">
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

export default InfrastructureSection;
