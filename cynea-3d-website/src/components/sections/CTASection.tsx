import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import Button from '@/components/ui/Button';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: 'navy' | 'purple' | 'gradient' | 'gold' | 'teal';
}

const CTASection = ({
  title = 'Ready to Transform Your Business?',
  description = 'Join the SMEs, governments, and enterprises already building the future of borderless trade with Cynea AI.',
  primaryCTA = {
    text: 'Schedule a Demo',
    href: '/contact',
  },
  secondaryCTA = {
    text: 'Explore Resources',
    href: '/resources',
  },
  variant = 'gradient',
}: CTASectionProps) => {
  const bgClasses = {
    navy: 'bg-navy',
    purple: 'bg-purple',
    gradient: 'bg-gradient-to-r from-navy via-navy-light to-purple',
    gold: 'bg-gradient-to-r from-gold to-gold/80',
    teal: 'bg-gradient-to-r from-teal to-teal-dark',
  };

  return (
    <section className={`py-20 ${bgClasses[variant]} text-white relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple/20 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            href={primaryCTA.href}
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            {primaryCTA.text}
          </Button>
          <Button
            href={secondaryCTA.href}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-navy"
            icon={<FileText className="w-5 h-5" />}
          >
            {secondaryCTA.text}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
