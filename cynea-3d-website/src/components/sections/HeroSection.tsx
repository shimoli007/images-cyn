import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Suspense } from 'react';
import Button from '@/components/ui/Button';
import Globe from '@/components/3d/Globe';

const HeroSection = () => {
  const floatingTags = [
    { text: 'Train', color: 'bg-purple', delay: 0 },
    { text: 'Digitize', color: 'bg-navy', delay: 0.1 },
    { text: 'Automate', color: 'bg-navy', delay: 0.2 },
    { text: 'Trace', color: 'bg-gold', delay: 0.3 },
    { text: 'Finance', color: 'bg-navy', delay: 0.4 },
    { text: 'Monetize', color: 'bg-purple', delay: 0.5 },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(7, 32, 72, 0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white text-sm font-medium rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              AI + Blockchain Infrastructure for Emerging Markets
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6"
            >
              Empowering SMEs with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-gold">
                AI & Blockchain
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 mb-8 max-w-xl"
            >
              Complete infrastructure stack for emerging market SMEs to compete
              globally. Train your team, digitize operations, automate workflows, trace
              products, and access digital finance.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started
              </Button>
              <Button href="/use-cases" variant="outline" size="lg">
                View Use Cases
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <span className="font-semibold text-navy">Trusted by</span>
                <span>Government Partners</span>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <div className="flex items-center gap-2">
                <span className="font-semibold text-navy">Supporting</span>
                <span>30+ SMEs</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            {/* Floating Tags */}
            <div className="absolute inset-0 pointer-events-none z-10">
              {floatingTags.map((tag, index) => (
                <motion.div
                  key={tag.text}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + tag.delay, type: 'spring' }}
                  className={`absolute ${tag.color} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}
                  style={{
                    top: `${15 + (index % 3) * 30}%`,
                    right: index < 3 ? `${5 + index * 10}%` : 'auto',
                    left: index >= 3 ? `${5 + (index - 3) * 10}%` : 'auto',
                  }}
                >
                  {tag.text}
                </motion.div>
              ))}
            </div>

            {/* Globe Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full max-w-[500px] max-h-[500px]">
                <Suspense
                  fallback={
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-64 h-64 rounded-full bg-navy/10 animate-pulse" />
                    </div>
                  }
                >
                  <Globe />
                </Suspense>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-dashed border-purple/20 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-navy/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-navy/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
