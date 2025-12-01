import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const differentiators = [
  {
    title: 'Government-Anchored Trust',
    description:
      'Partnerships with Kenya School of Government and Zambian National Government validate our approach and ensure compliance.',
  },
  {
    title: 'UK-Emerging Markets Expertise',
    description:
      'Deep understanding of cross-border trade challenges and regulatory requirements between emerging markets and developed economies, with UK-anchored operations.',
  },
  {
    title: 'Full-Stack Integration',
    description:
      'Unlike point solutions, we integrate training, operations, compliance, and finance into one seamless ecosystem.',
  },
  {
    title: 'Ethical AI & Compliance First',
    description:
      'Built-in EUDR, CBAM, and ESG compliance tools ensure your business meets international standards from day one.',
  },
];

const WhyDifferentSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              Why Cynea AI is Different
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're the only platform converging AI, blockchain, and stablecoin infrastructure
              specifically designed for emerging market SMEs—backed by government
              partnerships and proven commercial traction.
            </p>

            {/* Differentiators List */}
            <div className="space-y-6">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Blockchain Visual */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-purple to-navy rounded-3xl opacity-90" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  {/* Blockchain Icon */}
                  <motion.div
                    animate={{
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="w-32 h-32 mx-auto mb-6 relative"
                  >
                    {/* Cube faces */}
                    <div className="absolute inset-0 border-4 border-gold/50 rounded-2xl transform rotate-12" />
                    <div className="absolute inset-2 border-4 border-purple-light/50 rounded-xl transform -rotate-6" />
                    <div className="absolute inset-4 bg-gradient-to-br from-gold to-purple rounded-lg flex items-center justify-center">
                      <span className="text-4xl font-bold">B</span>
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-2">BLOCKCHAIN</h3>
                  <p className="text-white/80 text-sm max-w-xs mx-auto">
                    Transparent, immutable records for compliance and trust
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple/20 rounded-full blur-xl" />
            </div>

            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 left-4 right-4 bg-white rounded-xl shadow-xl p-4"
            >
              <p className="text-sm text-gray-500 mb-1">Average time savings:</p>
              <p className="text-navy font-bold">
                15-20 hours per week per team member on repetitive tasks
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
