import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Suspense } from 'react';
import Button from '@/components/ui/Button';
import Globe from '@/components/3d/Globe';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-white to-white" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-violet-100/40 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="z-10">
            {/* Announcement */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-600 text-sm rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              Now serving SMEs across 4 countries
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-slate-900 leading-[1.1] tracking-tight mb-6"
            >
              Infrastructure for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-500">
                emerging market
              </span>{' '}
              businesses
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed"
            >
              AI training, blockchain traceability, and digital finance tools
              that help SMEs in Africa and emerging markets compete globally.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get Started
              </Button>
              <Button href="/about" variant="outline" size="lg">
                Learn More
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 text-sm text-slate-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-slate-600">KE</span>
                </div>
                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center -ml-2">
                  <span className="text-xs font-medium text-slate-600">UG</span>
                </div>
                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center -ml-2">
                  <span className="text-xs font-medium text-slate-600">ZM</span>
                </div>
                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center -ml-2">
                  <span className="text-xs font-medium text-slate-600">UK</span>
                </div>
              </div>
              <span className="text-slate-400">|</span>
              <span>Trusted by government partners</span>
            </motion.div>
          </div>

          {/* Right Content - Globe */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[450px] lg:h-[550px] hidden lg:block"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full max-w-[480px] max-h-[480px]">
                <Suspense
                  fallback={
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full bg-slate-100 animate-pulse" />
                    </div>
                  }
                >
                  <Globe />
                </Suspense>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
