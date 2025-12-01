import { motion } from 'framer-motion';
import {
  Landmark,
  Users,
  Shield,
  Globe,
  Award,
  BookOpen,
  Target,
  ArrowRight,
  Check,
  Building2,
  Scale,
  FileText,
  Lightbulb,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';

const programs = [
  {
    icon: BookOpen,
    title: 'AI Literacy for Civil Servants',
    description:
      'Foundation program building AI awareness and practical skills across government departments.',
    audience: 'All levels',
    duration: '3 days',
    outcomes: ['AI fundamentals', 'Tool proficiency', 'Use case identification', 'Ethical considerations'],
  },
  {
    icon: Target,
    title: 'AI Policy & Governance',
    description:
      'Training for policy makers on AI regulation, governance frameworks, and strategic planning.',
    audience: 'Senior officials',
    duration: '5 days',
    outcomes: ['Policy frameworks', 'Risk assessment', 'Regulatory approaches', 'International standards'],
  },
  {
    icon: Shield,
    title: 'AI in Public Service Delivery',
    description:
      'Practical training on implementing AI to improve citizen services and operational efficiency.',
    audience: 'Department heads',
    duration: '2 weeks',
    outcomes: ['Service automation', 'Citizen experience', 'Process optimization', 'Change management'],
  },
  {
    icon: Scale,
    title: 'Responsible AI Implementation',
    description:
      'Deep dive into ethical AI deployment, bias prevention, and transparency requirements.',
    audience: 'Technical teams',
    duration: '1 week',
    outcomes: ['Bias detection', 'Fairness metrics', 'Transparency tools', 'Audit frameworks'],
  },
];

const partnershipHighlights = [
  {
    partner: 'Kenya School of Government',
    description: 'Training 250+ senior government officials on AI strategy and implementation',
    impact: '12 ministries trained',
    logo: 'KSG',
  },
  {
    partner: 'Zambia Institute of Diplomacy',
    description: 'AI policy capacity building for diplomatic corps',
    impact: '150 diplomats trained',
    logo: 'ZID',
  },
  {
    partner: 'African Union',
    description: 'Supporting continental AI strategy development',
    impact: '15 countries engaged',
    logo: 'AU',
  },
];

const nationalAIModules = [
  {
    title: 'AI Readiness Assessment',
    description: 'Evaluate your nation\'s AI capabilities, infrastructure, and readiness',
  },
  {
    title: 'National AI Strategy Development',
    description: 'Framework for creating comprehensive national AI policies',
  },
  {
    title: 'AI Talent Pipeline',
    description: 'Programs to build domestic AI expertise and retain talent',
  },
  {
    title: 'AI Ethics Framework',
    description: 'Guidelines for responsible AI deployment in public sector',
  },
  {
    title: 'AI Procurement Guidelines',
    description: 'Standards for evaluating and acquiring AI solutions',
  },
  {
    title: 'AI Monitoring & Evaluation',
    description: 'Metrics and processes for measuring AI initiative success',
  },
];

const stats = [
  { value: '500+', label: 'Government Officials Trained' },
  { value: '15', label: 'Countries Served' },
  { value: '25+', label: 'Ministries Engaged' },
  { value: '3', label: 'National Strategies Supported' },
];

const GovernmentTraining = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-teal-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
                <Landmark className="w-4 h-4" />
                Public Sector Training
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Building AI Capacity for Government
              </h1>
              <p className="text-xl text-teal-100 mb-8">
                Comprehensive AI training programs for government officials, policy makers,
                and public sector institutions. From awareness to strategy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Partner With Us
                </Button>
                <Button href="#programs" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                  View Programs
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              {/* Government Visual */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <p className="font-bold">National AI Readiness</p>
                      <p className="text-sm opacity-80">Assessment Dashboard</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { area: 'Policy Framework', score: 75, status: 'Good' },
                      { area: 'Technical Infrastructure', score: 60, status: 'Developing' },
                      { area: 'Talent Availability', score: 45, status: 'Needs Work' },
                      { area: 'Data Governance', score: 70, status: 'Good' },
                      { area: 'Ethics Guidelines', score: 55, status: 'Developing' },
                    ].map((item) => (
                      <div key={item.area}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{item.area}</span>
                          <span className={
                            item.score >= 70 ? 'text-green-400' :
                            item.score >= 50 ? 'text-gold' :
                            'text-orange-400'
                          }>
                            {item.status}
                          </span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              item.score >= 70 ? 'bg-green-400' :
                              item.score >= 50 ? 'bg-gold' :
                              'bg-orange-400'
                            }`}
                            style={{ width: `${item.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-gold">{stat.value}</p>
                <p className="text-sm opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Training Programs
            </h2>
            <p className="text-lg text-gray-600">
              Structured programs designed for different roles and levels within government.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-slate-50 to-teal/5 rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-teal rounded-xl flex items-center justify-center flex-shrink-0">
                    <program.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy">{program.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                      <span>{program.audience}</span>
                      <span>•</span>
                      <span>{program.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {program.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-teal" />
                      {outcome}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Highlights */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Government Partnerships
            </h2>
            <p className="text-lg text-gray-600">
              Working with leading institutions across Africa to build AI capacity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnershipHighlights.map((partnership, index) => (
              <motion.div
                key={partnership.partner}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-gold">{partnership.logo}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{partnership.partner}</h3>
                <p className="text-gray-600 mb-4">{partnership.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-teal font-semibold">{partnership.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* National AI Strategy */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">National AI Strategy Support</h2>
              <p className="text-gray-300 mb-8">
                Beyond training, we help governments develop comprehensive national AI strategies
                that position their countries for success in the AI era.
              </p>
              <div className="space-y-4">
                {nationalAIModules.slice(0, 3).map((module, index) => (
                  <motion.div
                    key={module.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 p-4 bg-white/10 rounded-xl"
                  >
                    <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <p className="font-semibold">{module.title}</p>
                      <p className="text-sm text-gray-300">{module.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                {nationalAIModules.slice(3).map((module, index) => (
                  <motion.div
                    key={module.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 p-4 bg-white/10 rounded-xl"
                  >
                    <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{module.title}</p>
                      <p className="text-sm text-gray-300">{module.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Button href="/contact" variant="primary" size="lg" className="mt-8">
                Discuss National Strategy
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Cynea */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Why Partner with Cynea AI
            </h2>
            <p className="text-lg text-gray-600">
              Unique advantages for government and public sector organizations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: 'Emerging Market Focus',
                desc: 'Deep understanding of African government contexts and challenges',
              },
              {
                icon: Users,
                title: 'Proven Track Record',
                desc: '500+ officials trained across 15 countries',
              },
              {
                icon: Building2,
                title: 'Institution Partnerships',
                desc: 'Collaborations with leading government training institutions',
              },
              {
                icon: Award,
                title: 'Certified Programs',
                desc: 'Recognized certifications for professional development',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-teal" />
                </div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Options */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Engagement Options
            </h2>
            <p className="text-lg text-gray-600">
              Flexible partnership models to suit your institution's needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'One-Time Workshop',
                desc: 'Focused training session on specific topics',
                features: ['1-5 day duration', 'Up to 50 participants', 'Custom content', 'Certificate included'],
                cta: 'Request Quote',
              },
              {
                title: 'Annual Partnership',
                desc: 'Ongoing training and capacity building',
                features: ['Multiple cohorts', 'Curriculum development', 'Train-the-trainer', 'Progress tracking'],
                cta: 'Discuss Partnership',
                highlighted: true,
              },
              {
                title: 'Strategy Consulting',
                desc: 'National AI strategy development support',
                features: ['Readiness assessment', 'Strategy framework', 'Implementation roadmap', 'Ongoing advisory'],
                cta: 'Learn More',
              },
            ].map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`rounded-2xl p-8 ${
                  option.highlighted
                    ? 'bg-teal text-white shadow-xl'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3 className={`text-xl font-bold mb-2 ${option.highlighted ? '' : 'text-navy'}`}>
                  {option.title}
                </h3>
                <p className={`mb-6 ${option.highlighted ? 'text-teal-100' : 'text-gray-600'}`}>
                  {option.desc}
                </p>
                <ul className="space-y-2 mb-8">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className={`w-4 h-4 ${option.highlighted ? 'text-gold' : 'text-teal'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={option.highlighted ? 'primary' : 'outline'}
                  className={`w-full ${option.highlighted ? '' : 'border-teal text-teal hover:bg-teal hover:text-white'}`}
                >
                  {option.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build AI Capacity?"
        description="Partner with us to prepare your government workforce for the AI-powered future."
        primaryCTA={{ text: 'Start Discussion', href: '/contact' }}
        secondaryCTA={{ text: 'Download Overview', href: '/contact' }}
        variant="teal"
      />
    </>
  );
};

export default GovernmentTraining;
