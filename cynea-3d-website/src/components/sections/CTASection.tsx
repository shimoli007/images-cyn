import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
  variant?: 'light' | 'dark' | 'gradient';
}

const CTASection = ({
  title = 'Ready to get started?',
  description = 'Join the businesses already transforming with Cynea AI.',
  primaryCTA = {
    text: 'Get Started',
    href: '/contact',
  },
  secondaryCTA = {
    text: 'Learn More',
    href: '/resources',
  },
  variant = 'light',
}: CTASectionProps) => {
  const variants = {
    light: {
      bg: 'bg-slate-50',
      title: 'text-slate-900',
      desc: 'text-slate-600',
      border: 'border-t border-slate-200',
    },
    dark: {
      bg: 'bg-slate-900',
      title: 'text-white',
      desc: 'text-slate-400',
      border: '',
    },
    gradient: {
      bg: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
      title: 'text-white',
      desc: 'text-slate-400',
      border: '',
    },
  };

  const style = variants[variant];

  return (
    <section className={`py-24 ${style.bg} ${style.border}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl sm:text-4xl font-semibold mb-4 ${style.title}`}
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className={`text-lg mb-10 max-w-2xl mx-auto ${style.desc}`}
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            href={primaryCTA.href}
            variant={variant === 'light' ? 'primary' : 'secondary'}
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            {primaryCTA.text}
          </Button>
          <Button
            href={secondaryCTA.href}
            variant={variant === 'light' ? 'outline' : 'ghost'}
            size="lg"
            className={variant !== 'light' ? 'text-slate-300 hover:text-white hover:bg-slate-800' : ''}
          >
            {secondaryCTA.text}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
