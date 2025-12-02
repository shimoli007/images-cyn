import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Bot,
  MessageSquare,
  FileSpreadsheet,
  BarChart3,
  Users,
  Zap,
  Clock,
  Shield,
  ArrowRight,
  Check,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';

const aiAgents = [
  {
    icon: MessageSquare,
    title: 'Customer Service AI',
    description:
      'Automated customer support that handles inquiries 24/7 in multiple languages, escalating complex issues to human agents.',
    features: ['WhatsApp/SMS integration', 'Multi-language support', 'Smart escalation', 'FAQ automation'],
  },
  {
    icon: FileSpreadsheet,
    title: 'Document Processing',
    description:
      'Extract data from invoices, receipts, and contracts automatically. Convert paper-based operations to structured digital data.',
    features: ['Invoice extraction', 'Contract analysis', 'Receipt digitization', 'Data validation'],
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description:
      'AI-powered analytics that turn your operational data into actionable insights and automated reports.',
    features: ['Automated reporting', 'Trend analysis', 'Predictive insights', 'Custom dashboards'],
  },
  {
    icon: Users,
    title: 'HR & Operations',
    description:
      'Streamline hiring, onboarding, scheduling, and internal communications with intelligent automation.',
    features: ['Candidate screening', 'Onboarding workflows', 'Schedule optimization', 'Team coordination'],
  },
];

const benefits = [
  {
    icon: Clock,
    title: 'Save 15-20 Hours Weekly',
    description: 'Automate repetitive tasks and free your team to focus on high-value work.',
  },
  {
    icon: Zap,
    title: 'No Technical Expertise Required',
    description: 'Our agents are pre-configured for SME workflows. Just plug in and start.',
  },
  {
    icon: Shield,
    title: 'Data Stays Yours',
    description: 'Privacy-first design. Your data is processed securely and never shared.',
  },
];

const useCases = [
  'Customer support automation for e-commerce',
  'Invoice processing for accounting firms',
  'Lead qualification for sales teams',
  'Inventory alerts for retail businesses',
  'Appointment scheduling for service providers',
  'Employee onboarding for growing companies',
];

const AIAutomation = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple to-purple-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
                <Bot className="w-4 h-4" />
                AI & Automation
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                AI Agents That Work While You Sleep
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Pre-built AI automation tools designed specifically for emerging market SMEs.
                No coding required. Start automating in days, not months.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Get Started
                </Button>
                <Button href="/use-cases" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple">
                  See Use Cases
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-navy" />
                      </div>
                      <div className="bg-white/20 rounded-xl p-3 text-sm">
                        Processing 47 invoices... Done! Extracted $125,430 in receivables.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-navy" />
                      </div>
                      <div className="bg-white/20 rounded-xl p-3 text-sm">
                        12 customer inquiries handled overnight. 3 escalated for human review.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-navy" />
                      </div>
                      <div className="bg-white/20 rounded-xl p-3 text-sm">
                        Weekly report generated. Revenue up 12% vs last week.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
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
              AI Agents for Every Business Function
            </h2>
            <p className="text-lg text-gray-600">
              Our pre-built AI agents handle the tasks that drain your time, so you can focus on growing your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiAgents.map((agent, index) => (
              <motion.div
                key={agent.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-slate-50 to-purple/5 rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-14 h-14 bg-purple/10 rounded-xl flex items-center justify-center mb-6">
                  <agent.icon className="w-7 h-7 text-purple" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{agent.title}</h3>
                <p className="text-gray-600 mb-6">{agent.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {agent.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-purple" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why SMEs Choose Cynea AI
            </h2>
            <p className="text-lg text-gray-600">
              Built for businesses without dedicated IT teams or enterprise budgets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-purple" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-navy mb-6">
                Common Use Cases
              </h2>
              <p className="text-gray-600 mb-8">
                Our AI agents are already helping businesses across sectors automate their most time-consuming tasks.
              </p>
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-gold-dark" />
                    </div>
                    <span className="text-gray-700">{useCase}</span>
                  </motion.div>
                ))}
              </div>
              <Link
                to="/use-cases"
                className="inline-flex items-center gap-2 mt-8 text-purple font-semibold hover:gap-3 transition-all"
              >
                See detailed case studies
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-navy rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-bold text-gold">15-20</p>
                  <p className="text-gray-300">Hours saved per week</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-gold">24/7</p>
                  <p className="text-gray-300">Automated operations</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-gold">85%</p>
                  <p className="text-gray-300">Query resolution rate</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-gold">3 days</p>
                  <p className="text-gray-300">Average setup time</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Automate Your Business?"
        description="Schedule a free consultation to see how AI agents can transform your operations."
        primaryCTA={{ text: 'Schedule Demo', href: '/contact' }}
        secondaryCTA={{ text: 'View Pricing', href: '/contact' }}
        variant="dark"
      />
    </>
  );
};

export default AIAutomation;
