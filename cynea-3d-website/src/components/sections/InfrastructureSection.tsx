import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  FileDigit,
  Bot,
  Link as LinkIcon,
  DollarSign,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'Train',
    description:
      'AI readiness programs for teams, from government ministries to corporate enterprises and marketing professionals.',
    link: '/training/career-growth',
    linkText: 'Explore Training',
    color: 'bg-purple/10',
    iconColor: 'text-purple',
    borderColor: 'border-purple/20',
  },
  {
    icon: FileDigit,
    title: 'Digitize',
    description:
      'Transform paper-based operations into structured digital data ready for AI automation and analysis.',
    link: '/products/ai-automation',
    linkText: 'Learn More',
    color: 'bg-navy/10',
    iconColor: 'text-navy',
    borderColor: 'border-navy/20',
  },
  {
    icon: Bot,
    title: 'Automate',
    description:
      'AI agents and smart workflows that handle repetitive tasks, from customer service to inventory management.',
    link: '/products/ai-automation',
    linkText: 'View Solutions',
    color: 'bg-gold/10',
    iconColor: 'text-gold-dark',
    borderColor: 'border-gold/20',
  },
  {
    icon: LinkIcon,
    title: 'Trace',
    description:
      'Blockchain-powered supply chain traceability for EUDR, CBAM compliance, and ESG reporting.',
    link: '/products/blockchain-compliance',
    linkText: 'Explore Compliance',
    color: 'bg-teal/10',
    iconColor: 'text-teal',
    borderColor: 'border-teal/20',
  },
  {
    icon: DollarSign,
    title: 'Finance',
    description:
      'Stablecoin payments and cross-border settlements that bypass currency volatility and high fees.',
    link: '/products/digital-finance',
    linkText: 'Access Finance',
    color: 'bg-teal/10',
    iconColor: 'text-teal',
    borderColor: 'border-teal/20',
  },
  {
    icon: BarChart3,
    title: 'Monetize',
    description:
      'Turn your verified business data into insights that banks, corporates, and donors will pay for.',
    link: '/products/data-analytics',
    linkText: 'Discover Analytics',
    color: 'bg-purple/10',
    iconColor: 'text-purple',
    borderColor: 'border-purple/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const InfrastructureSection = () => {
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
            Complete Infrastructure Stack
          </h2>
          <p className="text-lg text-gray-600">
            We provide the full infrastructure that emerging market businesses need to compete in the global economy.
            From AI training to digital finance, we've got you covered.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`group relative p-6 rounded-2xl border ${service.borderColor} ${service.color} transition-all duration-300 hover:shadow-xl`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${service.color} ${service.iconColor} flex items-center justify-center mb-4`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-navy mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

              {/* Link */}
              <Link
                to={service.link}
                className={`inline-flex items-center gap-2 ${service.iconColor} font-semibold hover:gap-3 transition-all duration-300`}
              >
                {service.linkText}
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
