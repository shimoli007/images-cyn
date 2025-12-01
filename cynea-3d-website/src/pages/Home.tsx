import HeroSection from '@/components/sections/HeroSection';
import InfrastructureSection from '@/components/sections/InfrastructureSection';
import WhyDifferentSection from '@/components/sections/WhyDifferentSection';
import TrustedBySection from '@/components/sections/TrustedBySection';
import PathForwardSection from '@/components/sections/PathForwardSection';
import CTASection from '@/components/sections/CTASection';

const Home = () => {
  return (
    <>
      {/* Hero Section with 3D Globe */}
      <HeroSection />

      {/* Complete Infrastructure Stack */}
      <InfrastructureSection />

      {/* Why Cynea AI is Different */}
      <WhyDifferentSection />

      {/* Trusted by Leaders */}
      <TrustedBySection />

      {/* Choose Your Path Forward */}
      <PathForwardSection />

      {/* Call to Action */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Join the SMEs, governments, and enterprises already building the future of borderless trade with Cynea AI."
        primaryCTA={{ text: 'Schedule a Demo', href: '/contact' }}
        secondaryCTA={{ text: 'Explore Resources', href: '/resources' }}
      />
    </>
  );
};

export default Home;
