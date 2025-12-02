import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Fish,
  Factory,
  Megaphone,
  ArrowRight,
  Users,
  Globe,
  Clock,
  ThumbsUp,
} from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

const caseStudies = [
  {
    badge: 'Coffee Export',
    badgeColor: 'bg-teal',
    title: 'Premium Coffee Exporter Achieves EUDR Compliance',
    challenge:
      'A Kenyan specialty coffee exporter faced losing access to EU markets due to new EUDR requirements demanding proof of deforestation-free sourcing. Manual documentation across 200+ smallholder farmers was impossible.',
    solution:
      "Implemented Cynea's blockchain traceability platform with QR codes at each farm, tracking beans from harvest through processing and export. Automated EUDR compliance documentation.",
    impact:
      'Generated complete compliance dossiers in 3 weeks instead of 6 months, secured $1.2M EU contract, and now uses premium "full traceability" positioning to command 15% price premium.',
    metrics: [
      { label: 'Time to compliance', value: '3 weeks' },
      { label: 'New contract value', value: '$1.2M' },
      { label: 'Farmers onboarded', value: '200+' },
      { label: 'Price premium', value: '15%' },
    ],
    link: '/products/blockchain-compliance',
    linkText: 'Learn about Blockchain Solutions',
  },
  {
    badge: 'EdTech',
    badgeColor: 'bg-purple',
    title: 'EdTech Company Streamlines Operations with AI',
    challenge:
      'An emerging market edtech company struggled with manual student enrollment, grading, and communication across 500+ students and 20 instructors.',
    solution:
      "Implemented Cynea's AI automation tools for student onboarding, automated grading, personalized learning recommendations, and AI teaching assistants.",
    impact:
      'Reduced administrative time by 25 hours/week, improved student satisfaction by 40%, scaled to serve 1,200 students with the same team, and enhanced learning outcomes through personalized AI assistance.',
    metrics: [
      { label: '25 hrs/week', value: 'Time saved' },
      { label: '40%', value: 'Satisfaction increase' },
      { label: '2.4x', value: 'Student growth' },
      { label: '0', value: 'New admin hires' },
    ],
    link: '/products/ai-automation',
    linkText: 'Explore AI Automation Tools',
  },
  {
    badge: 'Food Innovation',
    badgeColor: 'bg-navy',
    title: 'Packaged Foods Startup Secures Funding with Data',
    challenge:
      'A healthy snacks startup needed to demonstrate business viability to investors but lacked the data and financial infrastructure to prove traction.',
    solution:
      "Used Cynea's data analytics platform to track and monetize verified sales data, plus stablecoin payments to show stable revenue despite currency volatility.",
    impact:
      'Presented investors with blockchain-verified financials and solid market insights for additional $15K revenue. Secured $250K seed round citing data infrastructure as key differentiator.',
    metrics: [
      { label: '$250K', value: 'Seed funding raised' },
      { label: '$15K', value: 'Data monetization' },
      { label: '100%', value: 'Currency protection' },
      { label: '3 months', value: 'To investment' },
    ],
    link: '/products/data-analytics',
    linkText: 'Discover Data Solutions',
  },
];

const moreStories = [
  {
    icon: Fish,
    title: 'Fish Export to EU',
    description:
      'Fish exporter used stablecoin payments to protect against currency devaluation, saving $45K in 6 months on a £300K contract.',
    result: '15% cost savings',
  },
  {
    icon: Factory,
    title: 'Manufacturing Supply Chain',
    description:
      'A manufacturer implemented blockchain traceability for raw materials, enabling ISO certification and winning 3 new corporate contracts.',
    result: '3 new B2B clients',
  },
  {
    icon: Megaphone,
    title: 'Marketing Agency',
    description:
      'Marketing agency completed AI training academy, now offers AI-powered services at 2x previous rates with 50% faster delivery.',
    result: '100% revenue growth',
  },
];

const impactStats = [
  { icon: Users, value: '100+', label: 'SMEs Supported', description: 'Across 8 countries' },
  { icon: Globe, value: '$5M+', label: 'Trade Value Enabled', description: 'Cross-border transactions' },
  { icon: Clock, value: '15-20 hrs', label: 'Weekly Time Saved', description: 'Per business on average' },
  { icon: ThumbsUp, value: '95%', label: 'Client Satisfaction', description: 'Would recommend' },
];

const UseCases = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple to-purple-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Real Businesses, Real Results</h1>
            <p className="text-xl text-purple-100">
              See how businesses across emerging markets are using Cynea AI to transform their operations,
              meet compliance requirements, and scale internationally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <span
                  className={`inline-block px-3 py-1 ${study.badgeColor} text-white text-sm font-medium rounded-full mb-4`}
                >
                  {study.badge}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6">{study.title}</h2>

                <div className="space-y-4 text-gray-600">
                  <div>
                    <p className="font-semibold text-navy mb-1">Challenge:</p>
                    <p>{study.challenge}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-navy mb-1">Solution:</p>
                    <p>{study.solution}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-navy mb-1">Impact:</p>
                    <p>{study.impact}</p>
                  </div>
                </div>

                <Link
                  to={study.link}
                  className="inline-flex items-center gap-2 mt-6 text-purple font-semibold hover:gap-3 transition-all"
                >
                  {study.linkText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Metrics Card */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8">
                  <h3 className="font-semibold text-navy mb-6">Key Metrics</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="text-center p-4 bg-white rounded-xl shadow-sm">
                        <p className="text-2xl font-bold text-navy">{metric.value}</p>
                        <p className="text-sm text-gray-600">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* More Success Stories */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy mb-4">More Success Stories</h2>
            <p className="text-gray-600">Cynea AI is transforming businesses across multiple sectors</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {moreStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-14 h-14 bg-purple/10 rounded-xl flex items-center justify-center mb-6">
                  <story.icon className="w-7 h-7 text-purple" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <p className="text-gold font-semibold">{story.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aggregate Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy mb-4">
              Aggregate Impact Across All Use Cases
            </h2>
            <p className="text-gray-600">Measurable outcomes from SMEs using Cynea's platform</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-navy/10 to-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-purple" />
                </div>
                <p className="text-3xl font-bold text-navy mb-1">{stat.value}</p>
                <p className="font-semibold text-gray-700">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Write Your Success Story?"
        description="Join the SMEs already transforming their businesses with Cynea AI's full-stack infrastructure."
        primaryCTA={{ text: 'Get Started Today', href: '/contact' }}
        secondaryCTA={{ text: 'Explore Solutions', href: '/products/ai-automation' }}
        variant="dark"
      />
    </>
  );
};

export default UseCases;
