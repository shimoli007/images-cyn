import { motion } from 'framer-motion';
import {
  Wallet,
  ArrowLeftRight,
  Shield,
  Globe,
  TrendingUp,
  DollarSign,
  Clock,
  Percent,
  ArrowRight,
  Check,
  Building,
  Users,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';

const financeFeatures = [
  {
    icon: Wallet,
    title: 'Stablecoin Payments',
    description:
      'Receive payments in USDC/USDT to protect against local currency devaluation. Hold value in dollars without needing a foreign bank account.',
    features: ['USDC/USDT support', 'No forex fees', 'Instant settlement', 'Global acceptance'],
  },
  {
    icon: ArrowLeftRight,
    title: 'Cross-Border Transfers',
    description:
      'Send and receive international payments in minutes instead of days. No correspondent banking delays or hidden fees.',
    features: ['24/7 availability', 'Minutes not days', 'Transparent fees', 'Multi-currency'],
  },
  {
    icon: Shield,
    title: 'Treasury Management',
    description:
      'Protect your business treasury from currency volatility with automated hedging strategies and multi-currency wallets.',
    features: ['Automated hedging', 'Multi-wallet system', 'Risk analytics', 'Compliance ready'],
  },
  {
    icon: Globe,
    title: 'Trade Finance Integration',
    description:
      'Connect your stablecoin payments to letters of credit, trade insurance, and supply chain financing.',
    features: ['LC integration', 'Invoice financing', 'Trade insurance', 'Working capital'],
  },
];

const benefits = [
  {
    icon: TrendingUp,
    stat: '15%',
    label: 'Average Savings',
    description: 'On cross-border transaction costs',
  },
  {
    icon: Clock,
    stat: '10 min',
    label: 'Settlement Time',
    description: 'Vs 3-5 days traditional banking',
  },
  {
    icon: DollarSign,
    stat: '100%',
    label: 'Currency Protection',
    description: 'Dollar-pegged value stability',
  },
  {
    icon: Percent,
    stat: '0.5%',
    label: 'Transaction Fee',
    description: 'Vs 3-7% traditional forex',
  },
];

const useCases = [
  {
    icon: Building,
    title: 'Exporters',
    description: 'Receive payment for goods in stablecoins, convert to local currency only when rates are favorable.',
    example: 'Coffee exporter saves $45K annually on a $300K contract by avoiding forex spread.',
  },
  {
    icon: Users,
    title: 'Importers',
    description: 'Pay international suppliers instantly without letters of credit delays or bank fees.',
    example: 'Manufacturer reduces supplier payment time from 5 days to 10 minutes.',
  },
  {
    icon: Globe,
    title: 'Service Providers',
    description: 'Invoice international clients in USD, receive stable value regardless of local currency moves.',
    example: 'Tech consultancy protects revenue from 20% annual currency devaluation.',
  },
];

const DigitalFinance = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gold to-gold/80 text-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy/20 text-navy text-sm font-medium rounded-full mb-4">
                <Wallet className="w-4 h-4" />
                Digital Finance
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Stable Payments for Unstable Markets
              </h1>
              <p className="text-xl text-navy/80 mb-8">
                Stablecoin payment infrastructure that protects your revenue from currency volatility.
                Fast, cheap, and compliant cross-border transactions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Get Started
                </Button>
                <Button href="/use-cases" variant="outline" size="lg" className="border-navy text-navy hover:bg-navy hover:text-gold">
                  View Success Stories
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              {/* Finance Visual */}
              <div className="relative">
                <div className="bg-navy/10 backdrop-blur-sm rounded-2xl p-8 border border-navy/20">
                  <div className="text-center mb-6">
                    <p className="text-sm opacity-80">Payment Protected</p>
                    <p className="text-3xl font-bold">$50,000 USDC</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <p className="font-medium">Invoice Paid</p>
                          <p className="text-xs opacity-70">From: EU Buyer</p>
                        </div>
                      </div>
                      <p className="font-bold text-green-600">+$50,000</p>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal rounded-full flex items-center justify-center">
                          <Shield className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">Currency Protected</p>
                          <p className="text-xs opacity-70">Local currency fell 5%</p>
                        </div>
                      </div>
                      <p className="font-bold text-green-600">Saved $2,500</p>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple rounded-full flex items-center justify-center">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">Settlement Time</p>
                          <p className="text-xs opacity-70">Traditional: 3-5 days</p>
                        </div>
                      </div>
                      <p className="font-bold">8 minutes</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-gold" />
                </div>
                <p className="text-3xl font-bold text-gold mb-1">{benefit.stat}</p>
                <p className="font-semibold mb-1">{benefit.label}</p>
                <p className="text-sm text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Finance Features */}
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
              Complete Digital Finance Stack
            </h2>
            <p className="text-lg text-gray-600">
              From receiving international payments to managing treasury, we provide the infrastructure
              for modern cross-border commerce.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {financeFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-slate-50 to-gold/5 rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {feature.features.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-gold" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
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
              Who Benefits Most
            </h2>
            <p className="text-lg text-gray-600">
              Any business dealing with international payments in volatile currency environments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="p-4 bg-gold/10 rounded-xl">
                  <p className="text-sm text-navy font-medium">
                    <span className="text-gold">Example: </span>
                    {useCase.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple integration with your existing business operations.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Create Your Wallet',
                  description: 'Set up your business wallet with KYB verification. Receive your unique payment address.',
                },
                {
                  step: '02',
                  title: 'Share Payment Details',
                  description: 'Send your stablecoin payment details to international buyers or clients.',
                },
                {
                  step: '03',
                  title: 'Receive Payments',
                  description: 'Get paid in USDC/USDT instantly. Funds arrive in minutes, not days.',
                },
                {
                  step: '04',
                  title: 'Convert When Ready',
                  description: 'Hold in stablecoins or convert to local currency when rates are favorable.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-navy">{item.step}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Stabilize Your Payments?"
        description="Join businesses already saving thousands on cross-border transactions with stablecoin infrastructure."
        primaryCTA={{ text: 'Start Today', href: '/contact' }}
        secondaryCTA={{ text: 'Calculate Savings', href: '/contact' }}
        variant="gold"
      />
    </>
  );
};

export default DigitalFinance;
