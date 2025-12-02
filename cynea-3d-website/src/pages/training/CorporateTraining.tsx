import { motion } from 'framer-motion';
import {
  Building2,
  Target,
  Clock,
  ArrowRight,
  Check,
  Layers,
  Zap,
  Settings,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';

const trainingModules = [
  {
    icon: Layers,
    title: 'AI Foundations for Teams',
    description:
      'Build a common language and understanding of AI across your organization.',
    duration: '1 day',
    format: 'Workshop',
    outcomes: ['Shared AI vocabulary', 'Use case identification', 'Risk awareness', 'Tool selection'],
  },
  {
    icon: Zap,
    title: 'Productivity with AI Tools',
    description:
      'Hands-on training on AI tools relevant to your industry and workflows.',
    duration: '2 days',
    format: 'Bootcamp',
    outcomes: ['ChatGPT/Claude mastery', 'Workflow automation', 'Content generation', 'Data analysis'],
  },
  {
    icon: Settings,
    title: 'AI Implementation',
    description:
      'Guide your team through implementing AI solutions in real projects.',
    duration: '4 weeks',
    format: 'Program',
    outcomes: ['Pilot project delivery', 'Change management', 'ROI measurement', 'Scale planning'],
  },
  {
    icon: Target,
    title: 'AI Leadership',
    description:
      'Executive training on AI strategy, governance, and organizational transformation.',
    duration: '2 days',
    format: 'Executive',
    outcomes: ['Strategy development', 'Governance framework', 'Investment planning', 'Culture shift'],
  },
];

const industries = [
  { name: 'Financial Services', focus: 'Risk analysis, compliance automation, customer service' },
  { name: 'Healthcare', focus: 'Clinical decision support, admin efficiency, patient engagement' },
  { name: 'Manufacturing', focus: 'Quality control, supply chain, predictive maintenance' },
  { name: 'Professional Services', focus: 'Document analysis, research, client deliverables' },
  { name: 'Retail', focus: 'Inventory management, personalization, customer support' },
  { name: 'Agriculture', focus: 'Yield prediction, resource optimization, compliance' },
];

const deliveryOptions = [
  {
    title: 'On-Site Training',
    description: 'Our instructors come to your location for immersive, distraction-free learning.',
    features: ['Customized content', 'Team building', 'Hands-on workshops', 'Executive sessions'],
  },
  {
    title: 'Virtual Live',
    description: 'Interactive online sessions for distributed teams across multiple locations.',
    features: ['Flexible scheduling', 'Breakout rooms', 'Recording access', 'Global reach'],
  },
  {
    title: 'Hybrid Programs',
    description: 'Combine in-person workshops with ongoing virtual support and coaching.',
    features: ['Best of both', 'Extended learning', 'Continuous support', 'Implementation help'],
  },
];

const results = [
  { metric: '35%', label: 'Average productivity increase', desc: 'Within 3 months' },
  { metric: '20hrs', label: 'Weekly time saved per employee', desc: 'On routine tasks' },
  { metric: '4.9/5', label: 'Training satisfaction score', desc: 'From 500+ teams' },
  { metric: '92%', label: 'Teams continue using AI', desc: '6 months post-training' },
];

const clients = [
  'Kenya Commercial Bank',
  'Safaricom',
  'East African Breweries',
  'Kenya Airways',
  'Equity Bank',
  'Nation Media Group',
];

const CorporateTraining = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
                <Building2 className="w-4 h-4" />
                B2B Training Programs
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Build an AI-Ready Workforce
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Custom AI training programs for organizations. Upskill your entire team,
                from front-line staff to C-suite executives.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Request Proposal
                </Button>
                <Button href="#modules" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
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
              {/* Corporate Visual */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center justify-between mb-6">
                    <p className="font-semibold">Team AI Readiness</p>
                    <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1 rounded-full">Live Dashboard</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-gold">87%</p>
                      <p className="text-xs opacity-80">Completion Rate</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-gold">156</p>
                      <p className="text-xs opacity-80">Employees Trained</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Executive Team</span>
                      <span className="text-green-400">100% Complete</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Management</span>
                      <span className="text-green-400">92% Complete</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Operations</span>
                      <span className="text-gold">78% In Progress</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Support Staff</span>
                      <span className="opacity-70">Starting Next Week</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Stats */}
      <section className="py-12 bg-gold text-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-4xl font-bold">{result.metric}</p>
                <p className="font-semibold">{result.label}</p>
                <p className="text-sm opacity-70">{result.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <section id="modules" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Training Modules
            </h2>
            <p className="text-lg text-gray-600">
              Modular programs that can be customized and combined based on your organization's needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainingModules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
                    <module.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy">{module.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {module.duration}
                      </span>
                      <span className="px-2 py-0.5 bg-navy/10 text-navy rounded-full text-xs font-medium">
                        {module.format}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{module.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {module.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-navy" />
                      {outcome}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
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
              Industry-Specific Training
            </h2>
            <p className="text-lg text-gray-600">
              We customize content for your industry with relevant use cases and examples.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <h3 className="font-bold text-navy mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-600">{industry.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Options */}
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
              Flexible Delivery
            </h2>
            <p className="text-lg text-gray-600">
              Choose the format that works best for your team and location.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {deliveryOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-navy text-white rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                <p className="text-gray-300 mb-6">{option.description}</p>
                <div className="space-y-2">
                  {option.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-gold" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-navy to-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-200">
              A structured approach to ensure maximum impact for your organization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand your goals, challenges, and team composition' },
              { step: '02', title: 'Design', desc: 'Create customized curriculum and materials' },
              { step: '03', title: 'Deliver', desc: 'Expert-led training with hands-on exercises' },
              { step: '04', title: 'Support', desc: 'Post-training coaching and implementation help' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-navy">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-gray-500 font-medium">Trusted by leading organizations</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-xl font-bold text-gray-300"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Upskill Your Team?"
        description="Get a custom proposal tailored to your organization's needs and goals."
        primaryCTA={{ text: 'Request Proposal', href: '/contact' }}
        secondaryCTA={{ text: 'Download Brochure', href: '/contact' }}
        variant="dark"
      />
    </>
  );
};

export default CorporateTraining;
