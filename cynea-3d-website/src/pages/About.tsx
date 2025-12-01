import { motion } from 'framer-motion';
import {
  Eye,
  Target,
  Shield,
  Heart,
  TrendingUp,
  Award,
  Users,
  Globe,
  Building2,
  MapPin,
  Linkedin,
  ExternalLink,
} from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

const coreValues = [
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description:
      'We build systems that create verifiable trust through blockchain and open reporting—no hidden processes or black boxes.',
  },
  {
    icon: Heart,
    title: 'Empowerment',
    description:
      "We don't just provide tools—we train people to use them, building long-term capability rather than dependency.",
  },
  {
    icon: TrendingUp,
    title: 'Impact Over Scale',
    description:
      'We measure success by the businesses we transform, not just the revenue we generate.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      "We hold ourselves to the highest technical and ethical standards—our clients' success depends on it.",
  },
  {
    icon: Globe,
    title: 'Emerging Markets First',
    description:
      'We design for emerging market contexts and constraints, then export these solutions globally.',
  },
  {
    icon: Users,
    title: 'Collaborative Growth',
    description:
      'We succeed when our clients, partners, and talent community succeed—growth is collective.',
  },
];

const marketsFocus = [
  {
    icon: Building2,
    title: 'United Kingdom',
    description:
      'UK-registered company providing strategic partnerships and market access for emerging market exporters.',
    focus: 'Compliance, buyer relationships, fintech infrastructure',
  },
  {
    icon: MapPin,
    title: 'Nairobi Hub',
    description:
      'Talent Hub serving as our innovation center and primary operational base in East Africa.',
    focus: 'Product development, talent development, government partnerships',
  },
  {
    icon: Globe,
    title: 'Emerging Markets',
    description:
      'Building the next generation of business leaders in through hands-on training and partnerships.',
    focus: 'AI training, Workflow automation tools, Blockchain traceability',
  },
];

const founderBadges = [
  { label: 'Estonia Digital Society', color: 'bg-purple' },
  { label: 'R Latitude59', color: 'bg-navy' },
  { label: '⌐◨-◨ APAC', color: 'bg-gold' },
  { label: 'X Women in AI UK', color: 'bg-teal' },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
              Building Infrastructure for Global SME Success
            </h1>
            <p className="text-xl text-gray-600">
              Cynea AI is more than a platform—we're the full-stack infrastructure that emerging market
              SMEs need to compete globally, powered by AI, blockchain, and digital finance technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-8 text-white"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-200 leading-relaxed">
                A world where emerging market SMEs have the same digital infrastructure advantages as developed market enterprises—enabling
                trusted, data-driven, borderless trade that lifts entire economies.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gold to-gold-light rounded-2xl p-8"
            >
              <div className="w-14 h-14 bg-white/30 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-navy" />
              </div>
              <h2 className="text-2xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-navy/80 leading-relaxed">
                To power the next generation of emerging market exporters with AI training, productivity tools, blockchain traceability, and digital finance—
                delivering measurable business outcomes while building local tech capacity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Founder Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple text-white text-sm font-medium rounded-full mb-4">
                Founder & CEO
              </div>
              <h2 className="text-3xl font-bold text-navy mb-2">Irene Obiero (UK)</h2>
              <p className="text-purple font-medium mb-6">Analytical Chemist turned AI Entrepreneur</p>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Irene's journey from analytical chemistry to AI entrepreneurship brings a unique
                  perspective to solving complex technological challenges for SMEs in emerging
                  markets. Her background in HPLC, NMR, spectroscopy, and data precision
                  instilled a commitment to accuracy and reliability that defines Cynea AI's
                  approach.
                </p>
                <p>
                  Transitioning from the laboratory to the world of AI, data intelligence, and
                  automation, Irene founded Cynea AI with a clear mission: turn complex digital
                  and technological challenges into accessible and cost-effective solutions for
                  SMEs in emerging markets.
                </p>
                <p>
                  Operating at the intersection of emerging market SME realities and UK digital
                  trust ecosystems, Irene has built a company that bridges the gap between
                  cutting-edge technology and practical business needs.
                </p>
              </div>

              <blockquote className="mt-8 pl-4 border-l-4 border-gold italic text-gray-700">
                "Technology should not be the privilege of the few. I built Cynea to
                empower the many."
                <footer className="mt-2 text-sm text-gray-500 not-italic">
                  — Irene Obiero, Founder & CEO
                </footer>
              </blockquote>

              {/* Recognition Badges */}
              <div className="mt-8">
                <p className="text-sm font-semibold text-navy mb-3">Global Recognition & Speaking Engagements</p>
                <div className="flex flex-wrap gap-2">
                  {founderBadges.map((badge) => (
                    <span
                      key={badge.label}
                      className={`px-3 py-1 ${badge.color} text-white text-xs font-medium rounded-full`}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Advocacy */}
              <div className="mt-6">
                <p className="text-sm font-semibold text-navy mb-2">Advocacy</p>
                <p className="text-gray-600 text-sm">
                  Women in STEM champion and digital inclusion advocate, working to ensure
                  technology empowers rather than excludes.
                </p>
              </div>
            </motion.div>

            {/* Strategic Advantages */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-xl font-bold text-navy mb-6">Strategic Advantages</h3>
              <div className="space-y-4">
                <div className="p-4 bg-purple/5 rounded-xl border-l-4 border-purple">
                  <h4 className="font-semibold text-navy mb-1">Unique cross-border perspective</h4>
                  <p className="text-sm text-gray-600">Building FROM emerging markets FOR global scale</p>
                </div>
                <div className="p-4 bg-navy/5 rounded-xl border-l-4 border-navy">
                  <h4 className="font-semibold text-navy mb-1">Technical depth</h4>
                  <p className="text-sm text-gray-600">Chemistry background brings precision to AI/data solutions</p>
                </div>
                <div className="p-4 bg-gold/10 rounded-xl border-l-4 border-gold">
                  <h4 className="font-semibold text-navy mb-1">Government trust</h4>
                  <p className="text-sm text-gray-600">Established relationships across UK, Kenya, Uganda, Zambia</p>
                </div>
                <div className="p-4 bg-teal/5 rounded-xl border-l-4 border-teal">
                  <h4 className="font-semibold text-navy mb-1">Investor-Ready</h4>
                  <p className="text-sm text-gray-600">Proven ability to articulate complex tech to diverse stakeholders</p>
                </div>
              </div>

              {/* Connect */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-navy font-medium hover:text-purple transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide every decision we make</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-navy/10 to-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-purple" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UK-Emerging Markets Focus */}
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
              UK-Emerging Markets Focus
            </h2>
            <p className="text-lg text-gray-600">
              Strategically positioned to serve the growing trade and technology exchange between the UK
              and emerging markets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {marketsFocus.map((market, index) => (
              <motion.div
                key={market.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-14 h-14 bg-purple/10 rounded-xl flex items-center justify-center mb-6">
                  <market.icon className="w-7 h-7 text-purple" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{market.title}</h3>
                <p className="text-gray-600 mb-4">{market.description}</p>
                <p className="text-sm text-purple font-medium">
                  Focus: {market.focus}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Partnerships */}
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
              Recognition & Partnerships
            </h2>
            <p className="text-lg text-gray-600">Trusted by governments, validated by results</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Government Partners */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-8 text-white"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">Government Partners</h3>
              <p className="text-gray-200 mb-4">
                Recognized AI training solutions for AI workforce development and national strategy.
              </p>
              <p className="text-gold font-medium">2024-Present</p>
            </motion.div>

            {/* SME Impact Leader */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-gold to-gold-light rounded-2xl p-8"
            >
              <div className="w-14 h-14 bg-white/30 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">SME Impact Leader</h3>
              <p className="text-navy/80 mb-4">
                Supporting 100+ SMEs across agriculture, coffee exports, and food innovation with
                measurable business outcomes.
              </p>
              <p className="text-navy font-medium">Ongoing</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join Us in Building the Future of Global Trade"
        description="Whether you're an SME looking to grow, a government building capacity, or a talented innovator seeking opportunity—we'd love to work with you."
        primaryCTA={{ text: 'Get in Touch', href: '/contact' }}
        secondaryCTA={{ text: 'Join Our Team', href: '/impact/talent-hub' }}
        variant="navy"
      />
    </>
  );
};

export default About;
