import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users } from 'lucide-react';
import AnimatedCounter from '@/components/effects/AnimatedCounter';

const stats = [
  { value: 100, suffix: '+', label: 'SMEs Supported' },
  { value: 4, suffix: '', label: 'Countries' },
  { value: 15, suffix: '-20hrs', label: 'Time Saved Weekly' },
  { value: 5, suffix: '%', prefix: 'Top ', label: 'Global Talent' },
];

const partners = [
  {
    icon: Building2,
    title: 'Government Partnerships',
    description:
      'Official training partner of Kenya School of Government and Zambian National Government for AI workforce development.',
    color: 'bg-navy',
  },
  {
    icon: TrendingUp,
    title: 'Commercial Traction',
    description:
      'Supporting SMEs across agriculture, coffee exports, food innovation, and multiple other verticals with proven results.',
    color: 'bg-purple',
  },
  {
    icon: Users,
    title: 'Top Talent Network',
    description:
      'Cynea Talent Hub nurtures the top 5% of emerging market tech talent to power innovation globally.',
    color: 'bg-gold',
  },
];

const TrustedBySection = () => {
  return (
    <section className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by Leaders Across Sectors
          </h2>
          <p className="text-lg text-gray-300">
            From government institutions to innovative businesses, Cynea AI is powering digital
            transformation across UK-Emerging Markets corridors.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                {stat.prefix && <span>{stat.prefix}</span>}
                <AnimatedCounter end={stat.value} duration={2 + index * 0.3} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Partner Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold/30 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 ${partner.color} rounded-xl flex items-center justify-center mb-6`}
              >
                <partner.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{partner.title}</h3>
              <p className="text-gray-300 leading-relaxed">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
