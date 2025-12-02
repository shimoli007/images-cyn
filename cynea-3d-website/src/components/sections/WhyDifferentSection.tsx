import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const differentiators = [
  'Government-backed: Partners with Kenya School of Government and Zambian Government',
  'Full-stack: Training, automation, compliance, and finance in one platform',
  'Emerging markets focus: Built for African and developing market contexts',
  'Compliance-ready: EUDR, CBAM, and ESG reporting built-in',
];

const WhyDifferentSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">
              Built for emerging markets, backed by governments
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We're not a generic SaaS tool. Cynea is purpose-built infrastructure
              for businesses in Africa and emerging markets, validated by government
              partnerships and real commercial traction.
            </p>

            <ul className="space-y-4">
              {differentiators.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-slate-600">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <p className="text-4xl font-semibold text-slate-900 mb-2">4</p>
              <p className="text-sm text-slate-600">Countries served</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <p className="text-4xl font-semibold text-slate-900 mb-2">100+</p>
              <p className="text-sm text-slate-600">SMEs supported</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <p className="text-4xl font-semibold text-slate-900 mb-2">2</p>
              <p className="text-sm text-slate-600">Government partners</p>
            </div>
            <div className="p-8 rounded-2xl bg-violet-50 border border-violet-200">
              <p className="text-4xl font-semibold text-violet-700 mb-2">15-20h</p>
              <p className="text-sm text-slate-600">Saved per week</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
