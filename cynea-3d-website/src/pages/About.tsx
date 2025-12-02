import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

const values = [
  {
    title: 'Trust & Transparency',
    description: 'Verifiable systems with blockchain and open reporting.',
  },
  {
    title: 'Empowerment',
    description: 'Building capability, not dependency.',
  },
  {
    title: 'Impact First',
    description: 'Measuring success by businesses transformed.',
  },
  {
    title: 'Emerging Markets Focus',
    description: 'Designed for African and developing market contexts.',
  },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 leading-tight mb-6">
              Building infrastructure for global SME success
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Cynea AI provides the full-stack infrastructure that emerging market
              SMEs need to compete globally—powered by AI, blockchain, and digital finance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium text-violet-600 uppercase tracking-wide mb-3">Vision</p>
              <p className="text-2xl text-slate-900 leading-relaxed">
                A world where emerging market SMEs have the same digital infrastructure
                advantages as developed market enterprises.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <p className="text-sm font-medium text-violet-600 uppercase tracking-wide mb-3">Mission</p>
              <p className="text-2xl text-slate-900 leading-relaxed">
                Power emerging market exporters with AI training, automation tools,
                blockchain traceability, and digital finance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-4">
                Founder & CEO
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 mb-2">Irene Obiero</h2>
              <p className="text-violet-600 mb-6">Analytical Chemist → AI Entrepreneur</p>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Irene's journey from analytical chemistry to AI entrepreneurship brings
                  a unique perspective to solving complex technological challenges for
                  SMEs in emerging markets.
                </p>
                <p>
                  Her background in HPLC, NMR, and spectroscopy instilled a commitment
                  to accuracy and reliability that defines Cynea AI's approach.
                </p>
                <p>
                  Operating at the intersection of emerging market SME realities and
                  UK digital trust ecosystems, Irene bridges cutting-edge technology
                  with practical business needs.
                </p>
              </div>

              <blockquote className="mt-8 pl-5 border-l-2 border-slate-300 italic text-slate-700">
                "Technology should not be the privilege of the few. I built Cynea
                to empower the many."
              </blockquote>

              <a
                href="#"
                className="inline-flex items-center gap-2 mt-6 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="p-6 rounded-xl bg-white border border-slate-200">
                <p className="text-sm font-medium text-slate-500 mb-2">Cross-border perspective</p>
                <p className="text-slate-700">Building FROM emerging markets FOR global scale</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-slate-200">
                <p className="text-sm font-medium text-slate-500 mb-2">Technical depth</p>
                <p className="text-slate-700">Chemistry background brings precision to AI solutions</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-slate-200">
                <p className="text-sm font-medium text-slate-500 mb-2">Government trust</p>
                <p className="text-slate-700">Established relationships across UK, Kenya, Uganda, Zambia</p>
              </div>
              <div className="p-6 rounded-xl bg-violet-50 border border-violet-200">
                <p className="text-sm font-medium text-violet-600 mb-2">Recognition</p>
                <p className="text-slate-700">Estonia Digital Society, Latitude59, Women in AI UK</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-16"
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Our values</h2>
            <p className="text-lg text-slate-600">
              The principles that guide every decision we make.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-16"
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Where we operate</h2>
            <p className="text-lg text-slate-600">
              UK-registered with operations across emerging markets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-white border border-slate-200"
            >
              <p className="text-lg font-semibold text-slate-900 mb-2">United Kingdom</p>
              <p className="text-sm text-slate-600 mb-4">
                HQ providing strategic partnerships and market access for emerging market exporters.
              </p>
              <p className="text-xs text-slate-500">Compliance • Buyer relationships • Fintech</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-white border border-slate-200"
            >
              <p className="text-lg font-semibold text-slate-900 mb-2">Nairobi</p>
              <p className="text-sm text-slate-600 mb-4">
                Talent Hub serving as innovation center and primary operational base in East Africa.
              </p>
              <p className="text-xs text-slate-500">Product dev • Talent • Government partnerships</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-8 rounded-2xl bg-white border border-slate-200"
            >
              <p className="text-lg font-semibold text-slate-900 mb-2">Emerging Markets</p>
              <p className="text-sm text-slate-600 mb-4">
                Building next-gen business leaders through hands-on training and partnerships.
              </p>
              <p className="text-xs text-slate-500">AI training • Automation • Traceability</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join us in building the future"
        description="Whether you're an SME, government, or innovator—we'd love to work with you."
        primaryCTA={{ text: 'Get in Touch', href: '/contact' }}
        secondaryCTA={{ text: 'Join Our Team', href: '/impact/talent-hub' }}
        variant="dark"
      />
    </>
  );
};

export default About;
