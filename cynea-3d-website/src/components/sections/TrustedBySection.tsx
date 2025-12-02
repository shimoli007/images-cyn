import { motion } from 'framer-motion';

const partners = [
  {
    name: 'Kenya School of Government',
    type: 'Government Partner',
  },
  {
    name: 'Zambian Government',
    type: 'Government Partner',
  },
  {
    name: 'UK-based SMEs',
    type: 'Enterprise Clients',
  },
];

const TrustedBySection = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-8">
            Trusted by governments and enterprises
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-lg font-medium text-slate-700">{partner.name}</p>
                <p className="text-sm text-slate-500">{partner.type}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
