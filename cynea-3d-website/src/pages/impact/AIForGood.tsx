import { motion } from 'framer-motion';
import {
  Heart,
  Users,
  Lightbulb,
  Leaf,
  GraduationCap,
  Building,
  ArrowRight,
  Sparkles,
  Shield,
  TrendingUp,
  HandHeart,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';

const impactAreas = [
  {
    icon: GraduationCap,
    title: 'AI Education Access',
    description:
      'Providing free and subsidized AI training to underserved communities, enabling economic mobility through digital skills.',
    stats: '500+ scholarships awarded',
    color: 'bg-purple',
  },
  {
    icon: Leaf,
    title: 'Sustainable Agriculture',
    description:
      'Using AI to help smallholder farmers optimize yields, reduce waste, and adapt to climate change impacts.',
    stats: '1,000+ farmers supported',
    color: 'bg-teal',
  },
  {
    icon: Shield,
    title: 'Financial Inclusion',
    description:
      'Enabling SMEs in underbanked regions to access global markets through blockchain-verified credentials and stablecoin payments.',
    stats: '$2M+ trade enabled',
    color: 'bg-gold',
  },
  {
    icon: Building,
    title: 'Public Sector Capacity',
    description:
      'Building AI capacity in government institutions to improve public service delivery and policy making.',
    stats: '15 countries engaged',
    color: 'bg-navy',
  },
];

const initiatives = [
  {
    title: 'AI Scholars Program',
    description:
      'Full scholarships for talented individuals from disadvantaged backgrounds to complete AI certification programs.',
    beneficiaries: 'Youth, women, and marginalized groups',
    impact: '85% employment rate post-completion',
    status: 'Active',
  },
  {
    title: 'AgriAI Initiative',
    description:
      'Free AI-powered tools and training for smallholder farmers to optimize crop management and market access.',
    beneficiaries: 'Smallholder farmers in East Africa',
    impact: '30% average yield improvement',
    status: 'Active',
  },
  {
    title: 'Women in AI Africa',
    description:
      'Dedicated program to increase female participation in AI training and careers across the continent.',
    beneficiaries: 'Women professionals and students',
    impact: '40% female enrollment target',
    status: 'Active',
  },
  {
    title: 'AI for Climate Action',
    description:
      'Research and tools using AI to track, predict, and mitigate climate impacts on emerging market communities.',
    beneficiaries: 'Climate-vulnerable communities',
    impact: 'Early warning systems deployed',
    status: 'Pilot',
  },
];

const sdgAlignment = [
  { number: 4, title: 'Quality Education', contribution: 'AI training and digital skills' },
  { number: 8, title: 'Decent Work', contribution: 'Job creation and economic empowerment' },
  { number: 9, title: 'Innovation', contribution: 'Technology infrastructure for emerging markets' },
  { number: 10, title: 'Reduced Inequalities', contribution: 'Inclusive access to AI opportunities' },
  { number: 13, title: 'Climate Action', contribution: 'AI tools for sustainability' },
  { number: 17, title: 'Partnerships', contribution: 'Cross-sector collaboration' },
];

const impactStats = [
  { value: '10,000+', label: 'Lives Impacted' },
  { value: '8', label: 'Countries Reached' },
  { value: '$500K+', label: 'Social Investment' },
  { value: '50+', label: 'NGO Partners' },
];

const partners = [
  'UN Development Programme',
  'World Bank Group',
  'African Development Bank',
  'Mastercard Foundation',
  'USAID',
  'UK Foreign Office',
];

const AIForGood = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal to-teal-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
                <Heart className="w-4 h-4" />
                Social Impact
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                AI for Good: Technology That Empowers
              </h1>
              <p className="text-xl text-teal-100 mb-8">
                We believe AI should benefit everyone. Our social impact initiatives ensure emerging
                market communities aren't left behind in the AI revolution.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Partner With Us
                </Button>
                <Button href="#initiatives" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal">
                  View Initiatives
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              {/* Impact Visual */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <p className="font-bold">Impact Dashboard</p>
                      <p className="text-sm opacity-80">2024 Progress</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-gold">10K+</p>
                      <p className="text-xs opacity-80">Lives Impacted</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-gold">85%</p>
                      <p className="text-xs opacity-80">Employment Rate</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Education Access</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="w-4/5 h-full bg-gold rounded-full" />
                        </div>
                        <span>80%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Agriculture Support</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="w-3/5 h-full bg-purple rounded-full" />
                        </div>
                        <span>60%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Financial Inclusion</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="w-[70%] h-full bg-green-400 rounded-full" />
                        </div>
                        <span>70%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-gold">{stat.value}</p>
                <p className="text-sm opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
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
              Our Impact Areas
            </h2>
            <p className="text-lg text-gray-600">
              Four key areas where we're using AI to create positive social change.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-slate-50 to-teal/5 rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 ${area.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <area.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy">{area.title}</h3>
                    <p className="text-sm text-teal font-medium">{area.stats}</p>
                  </div>
                </div>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section id="initiatives" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Active Initiatives
            </h2>
            <p className="text-lg text-gray-600">
              Programs making a tangible difference in communities across emerging markets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-navy">{initiative.title}</h3>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    initiative.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gold/20 text-gold-dark'
                  }`}>
                    {initiative.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{initiative.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-teal mt-0.5" />
                    <span className="text-gray-600"><strong>Beneficiaries:</strong> {initiative.beneficiaries}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-teal mt-0.5" />
                    <span className="text-gray-600"><strong>Impact:</strong> {initiative.impact}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              UN Sustainable Development Goals
            </h2>
            <p className="text-lg text-gray-300">
              Our work contributes to multiple SDGs, creating interconnected positive impact.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgAlignment.map((sdg, index) => (
              <motion.div
                key={sdg.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 p-4 bg-white/10 rounded-xl"
              >
                <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-navy">{sdg.number}</span>
                </div>
                <div>
                  <p className="font-semibold">{sdg.title}</p>
                  <p className="text-sm text-gray-300">{sdg.contribution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
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
              Get Involved
            </h2>
            <p className="text-lg text-gray-600">
              There are many ways to support our mission of inclusive AI development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: HandHeart,
                title: 'Donate',
                description: 'Support scholarships and free training programs for underserved communities.',
                cta: 'Make a Donation',
              },
              {
                icon: Users,
                title: 'Partner',
                description: 'Collaborate with us on impact initiatives through CSR or development programs.',
                cta: 'Become a Partner',
              },
              {
                icon: Lightbulb,
                title: 'Volunteer',
                description: 'Share your expertise as a mentor, trainer, or advisor to our beneficiaries.',
                cta: 'Volunteer Now',
              },
            ].map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-teal/5 to-slate-50 rounded-2xl p-8 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <Button href="/contact" variant="outline" className="border-teal text-teal hover:bg-teal hover:text-white">
                  {option.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-gray-500 font-medium">Supported by leading development organizations</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-lg font-bold text-gray-300"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join the Movement for Inclusive AI"
        description="Help us ensure the AI revolution benefits everyone, not just the privileged few."
        primaryCTA={{ text: 'Partner With Us', href: '/contact' }}
        secondaryCTA={{ text: 'Learn More', href: '/about' }}
        variant="teal"
      />
    </>
  );
};

export default AIForGood;
