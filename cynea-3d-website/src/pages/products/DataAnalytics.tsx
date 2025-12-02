import { motion } from 'framer-motion';
import {
  Database,
  BarChart3,
  Lock,
  Coins,
  TrendingUp,
  Eye,
  Shield,
  Zap,
  ArrowRight,
  Check,
  Building,
  Users,
  Globe,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';

const analyticsFeatures = [
  {
    icon: Database,
    title: 'Verified Data Collection',
    description:
      'Automatically collect and verify business data from your operations, creating a trusted data asset you can monetize.',
    features: ['Blockchain verification', 'Tamper-proof records', 'Automatic collection', 'Data integrity'],
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description:
      'Transform raw operational data into actionable insights with AI-powered analytics dashboards.',
    features: ['AI-powered insights', 'Custom dashboards', 'Trend analysis', 'Predictive analytics'],
  },
  {
    icon: Lock,
    title: 'Privacy-Preserving Sharing',
    description:
      'Share data insights with buyers, investors, or partners while maintaining full control over sensitive information.',
    features: ['Selective sharing', 'Consent management', 'Audit trails', 'GDPR compliant'],
  },
  {
    icon: Coins,
    title: 'Data Monetization',
    description:
      'Earn revenue by contributing anonymized, verified data to aggregated market insights for researchers and buyers.',
    features: ['Revenue sharing', 'Anonymous aggregation', 'Market pricing', 'Passive income'],
  },
];

const dataTypes = [
  {
    icon: TrendingUp,
    title: 'Sales & Revenue Data',
    description: 'Verified transaction records that prove business performance to investors and lenders.',
    value: 'Attract funding',
  },
  {
    icon: Globe,
    title: 'Supply Chain Data',
    description: 'Origin, quality, and logistics data that buyers pay premium prices to access.',
    value: 'Command premiums',
  },
  {
    icon: Eye,
    title: 'Market Intelligence',
    description: 'Pricing trends, demand patterns, and competitive insights from your operational data.',
    value: 'Strategic advantage',
  },
  {
    icon: Shield,
    title: 'Compliance Data',
    description: 'Audit-ready records that satisfy regulatory requirements and due diligence.',
    value: 'Risk reduction',
  },
];

const monetizationTiers = [
  {
    tier: 'Basic',
    price: 'Free',
    description: 'Essential analytics for your business',
    features: [
      'Data collection & storage',
      'Basic analytics dashboard',
      'Monthly reports',
      'Data export',
    ],
  },
  {
    tier: 'Pro',
    price: '$49/mo',
    description: 'Advanced insights and sharing',
    features: [
      'Everything in Basic',
      'AI-powered analytics',
      'Custom dashboards',
      'Investor data rooms',
      'API access',
    ],
    highlighted: true,
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    description: 'Full monetization platform',
    features: [
      'Everything in Pro',
      'Data marketplace listing',
      'Revenue sharing',
      'White-label reports',
      'Priority support',
    ],
  },
];

const DataAnalytics = () => {
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
                <Database className="w-4 h-4" />
                Data Analytics
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Your Data Is Your Most Valuable Asset
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Turn operational data into verified business intelligence.
                Prove performance, attract investment, and monetize insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Start Collecting
                </Button>
                <Button href="/use-cases" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple">
                  See Data in Action
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              {/* Analytics Visual */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center justify-between mb-6">
                    <p className="font-semibold">Business Intelligence</p>
                    <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1 rounded-full">Live</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-xs opacity-70">Monthly Revenue</p>
                      <p className="text-2xl font-bold">$127K</p>
                      <p className="text-xs text-green-300">+12% vs last month</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-xs opacity-70">Data Points</p>
                      <p className="text-2xl font-bold">45.2K</p>
                      <p className="text-xs text-green-300">Verified on-chain</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Sales Data</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="w-4/5 h-full bg-gold rounded-full" />
                        </div>
                        <span>80%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Supply Chain</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="w-3/5 h-full bg-teal rounded-full" />
                        </div>
                        <span>60%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Market Intel</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="w-11/12 h-full bg-green-400 rounded-full" />
                        </div>
                        <span>95%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Stats */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, stat: '10x', label: 'Faster Insights', desc: 'Than manual reporting' },
              { icon: Shield, stat: '100%', label: 'Data Ownership', desc: 'You control your data' },
              { icon: Coins, stat: '$15K+', label: 'Average Revenue', desc: 'From data monetization' },
              { icon: Users, stat: '50+', label: 'Data Buyers', desc: 'In our marketplace' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-purple/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-purple" />
                </div>
                <p className="text-3xl font-bold text-gold mb-1">{item.stat}</p>
                <p className="font-semibold mb-1">{item.label}</p>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Features */}
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
              Complete Data Infrastructure
            </h2>
            <p className="text-lg text-gray-600">
              From collection to monetization, everything you need to turn your business data into a valuable asset.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {analyticsFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-slate-50 to-purple/5 rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-14 h-14 bg-purple/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-purple" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {feature.features.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-purple" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Types */}
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
              What Data Can You Monetize?
            </h2>
            <p className="text-lg text-gray-600">
              Every piece of operational data has value—to your business, to investors, and to the market.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-purple rounded-xl flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-sm font-semibold rounded-full">
                  {type.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
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
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600">
              Start free, scale as your data value grows.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {monetizationTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`rounded-2xl p-8 ${
                  tier.highlighted
                    ? 'bg-purple text-white shadow-2xl scale-105'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <h3 className={`text-xl font-bold mb-2 ${tier.highlighted ? '' : 'text-navy'}`}>
                  {tier.tier}
                </h3>
                <p className={`text-3xl font-bold mb-2 ${tier.highlighted ? 'text-gold' : 'text-purple'}`}>
                  {tier.price}
                </p>
                <p className={`text-sm mb-6 ${tier.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className={`w-4 h-4 ${tier.highlighted ? 'text-gold' : 'text-purple'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={tier.highlighted ? 'primary' : 'outline'}
                  className={`w-full ${tier.highlighted ? '' : 'border-purple text-purple hover:bg-purple hover:text-white'}`}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Example */}
      <section className="py-20 bg-gradient-to-br from-purple/5 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-navy mb-6">
                Case Study: Food Startup Raises $250K
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <span className="font-semibold text-navy">Challenge:</span> A healthy snacks startup
                  needed to prove business traction to investors but lacked reliable financial data.
                </p>
                <p>
                  <span className="font-semibold text-navy">Solution:</span> Implemented Cynea's data
                  analytics platform to automatically collect and verify sales data from POS systems
                  and e-commerce platforms.
                </p>
                <p>
                  <span className="font-semibold text-navy">Result:</span> Generated blockchain-verified
                  financials that investors trusted. Raised $250K seed round and earned $15K from
                  contributing anonymized data to market research.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-2xl font-bold text-purple">$250K</p>
                  <p className="text-sm text-gray-600">Funding raised</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-2xl font-bold text-purple">$15K</p>
                  <p className="text-sm text-gray-600">Data monetization</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-navy rounded-2xl p-8 text-white"
            >
              <div className="flex items-center gap-2 mb-6">
                <Building className="w-6 h-6 text-gold" />
                <h3 className="text-xl font-bold">Investor Data Room</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span>Verified Revenue (12mo)</span>
                  <span className="font-bold text-gold">$847,000</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span>Monthly Growth Rate</span>
                  <span className="font-bold text-gold">8.5%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span>Customer Count</span>
                  <span className="font-bold text-gold">1,247</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span>Data Verification</span>
                  <span className="font-bold text-green-400">Blockchain Verified</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                All data points verified on-chain and auditable by investors
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Turn Your Data Into Revenue"
        description="Start collecting verified business data today. Free to begin, valuable to scale."
        primaryCTA={{ text: 'Start Free', href: '/contact' }}
        secondaryCTA={{ text: 'See Demo', href: '/contact' }}
        variant="dark"
      />
    </>
  );
};

export default DataAnalytics;
