import HeroSection from '@/components/sections/HeroSection';
import InfrastructureSection from '@/components/sections/InfrastructureSection';
import WhyDifferentSection from '@/components/sections/WhyDifferentSection';
import TrustedBySection from '@/components/sections/TrustedBySection';
import PathForwardSection from '@/components/sections/PathForwardSection';
import CTASection from '@/components/sections/CTASection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <InfrastructureSection />
      <WhyDifferentSection />
      <PathForwardSection />
      <CTASection
        title="Ready to get started?"
        description="Join SMEs and governments already transforming with Cynea AI."
        primaryCTA={{ text: 'Get Started', href: '/contact' }}
        secondaryCTA={{ text: 'Learn More', href: '/about' }}
        variant="light"
      />
    </>
  );
};

export default Home;
