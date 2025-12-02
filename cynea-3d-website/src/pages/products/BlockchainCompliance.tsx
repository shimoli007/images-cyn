import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Link as LinkIcon,
  QrCode,
  FileCheck,
  Globe,
  Shield,
  Leaf,
  Factory,
  Coffee,
  ArrowRight,
  Check,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';

const complianceFeatures = [
  {
    icon: QrCode,
    title: 'Farm-to-Export QR Tracking',
    description:
      'Every product gets a unique QR code that tracks its journey from farm to export, creating an immutable chain of custody.',
    features: ['GPS-stamped checkpoints', 'Photo documentation', 'Timestamp verification', 'Chain of custody'],
  },
  {
    icon: FileCheck,
    title: 'Automated Compliance Reports',
    description:
      'Generate EUDR and CBAM compliance documentation automatically from your traceability data.',
    features: ['EUDR due diligence', 'CBAM emissions data', 'ESG reporting', 'Audit trails'],
  },
  {
    icon: Globe,
    title: 'Buyer Verification Portal',
    description:
      'Give EU buyers instant access to verify product origins and compliance status through a branded portal.',
    features: ['Real-time verification', 'Branded experience', 'Mobile-friendly', 'Multi-language'],
  },
  {
    icon: Shield,
    title: 'Smart Contract Automation',
    description:
      'Automate payments and documentation release when compliance milestones are verified on-chain.',
    features: ['Milestone payments', 'Document escrow', 'Dispute resolution', 'Automated triggers'],
  },
];

const regulations = [
  {
    icon: Leaf,
    title: 'EUDR Compliance',
    subtitle: 'EU Deforestation Regulation',
    description:
      'Prove your products are deforestation-free with geolocation tracking and supplier due diligence documentation.',
    deadline: 'December 2025',
  },
  {
    icon: Factory,
    title: 'CBAM Ready',
    subtitle: 'Carbon Border Adjustment Mechanism',
    description:
      'Track and report embedded carbon emissions across your supply chain to meet EU import requirements.',
    deadline: 'January 2026',
  },
];

const industries = [
  { icon: Coffee, name: 'Coffee & Cocoa', description: 'Bean-to-cup traceability' },
  { icon: Leaf, name: 'Agriculture', description: 'Farm-to-table tracking' },
  { icon: Factory, name: 'Manufacturing', description: 'Raw material sourcing' },
  { icon: Globe, name: 'General Export', description: 'Any product to EU' },
];

const BlockchainCompliance = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-dark to-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
                <LinkIcon className="w-4 h-4" />
                Blockchain Traceability
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Supply Chain Transparency That Opens Markets
              </h1>
              <p className="text-xl text-teal-100 mb-8">
                Blockchain-powered traceability for EUDR, CBAM, and ESG compliance.
                Prove your products are ethical, sustainable, and audit-ready.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Start Compliance
                </Button>
                <Button href="/use-cases" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal">
                  View Case Studies
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              {/* Blockchain Visual */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <p className="text-sm opacity-80">Supply Chain Verified</p>
                    <p className="text-2xl font-bold">Coffee Lot #2024-KE-0847</p>
                  </div>
                  <div className="space-y-4">
                    {['Farm Harvest', 'Processing', 'Quality Check', 'Export'].map((step, i) => (
                      <div key={step} className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                          <Check className="w-5 h-5 text-navy" />
                        </div>
                        <div className="flex-1 bg-white/20 rounded-lg p-3">
                          <p className="font-medium">{step}</p>
                          <p className="text-xs opacity-80">Verified • Block #{12450 + i}</p>
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

      {/* Compliance Features */}
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
              Complete Traceability Infrastructure
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to prove product origins, meet compliance requirements, and build buyer trust.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-slate-50 to-teal/5 rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {feature.features.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-teal" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulations Section */}
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
              Stay Ahead of EU Regulations
            </h2>
            <p className="text-lg text-gray-600">
              New EU import requirements are creating compliance deadlines for emerging market exporters.
              We help you get ready before the deadline.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {regulations.map((reg, index) => (
              <motion.div
                key={reg.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-teal rounded-xl flex items-center justify-center flex-shrink-0">
                    <reg.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy">{reg.title}</h3>
                    <p className="text-sm text-gray-500">{reg.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{reg.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Compliance Deadline</span>
                  <span className="font-bold text-navy">{reg.deadline}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
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
                Built for Emerging Market Exporters
              </h2>
              <p className="text-gray-600 mb-8">
                Our blockchain traceability platform is designed for the specific challenges of
                emerging market supply chains—low connectivity, smallholder farmers, and complex
                multi-tier sourcing.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
                  >
                    <industry.icon className="w-6 h-6 text-teal" />
                    <div>
                      <p className="font-semibold text-navy text-sm">{industry.name}</p>
                      <p className="text-xs text-gray-500">{industry.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Link
                to="/use-cases"
                className="inline-flex items-center gap-2 mt-8 text-teal font-semibold hover:gap-3 transition-all"
              >
                See how coffee exporters achieved compliance
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-teal rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Compliance Results</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <span>Average time to compliance</span>
                  <span className="text-2xl font-bold text-gold">3 weeks</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <span>Farmers successfully onboarded</span>
                  <span className="text-2xl font-bold text-gold">500+</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <span>EU contracts secured</span>
                  <span className="text-2xl font-bold text-gold">$2.5M+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Price premium achieved</span>
                  <span className="text-2xl font-bold text-gold">15%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Don't Miss the Compliance Deadline"
        description="Start your EUDR and CBAM compliance journey today. Our team will help you implement traceability in weeks, not months."
        primaryCTA={{ text: 'Get Compliance Assessment', href: '/contact' }}
        secondaryCTA={{ text: 'Download EUDR Guide', href: '/resources' }}
        variant="dark"
      />
    </>
  );
};

export default BlockchainCompliance;
