import { motion } from 'framer-motion';
import {
  Users,
  Briefcase,
  GraduationCap,
  Target,
  Star,
  Globe,
  TrendingUp,
  ArrowRight,
  Search,
  UserCheck,
  Zap,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';

const forTalent = [
  {
    icon: GraduationCap,
    title: 'Get AI-Certified',
    description: 'Complete our training programs to earn industry-recognized AI certifications that employers trust.',
  },
  {
    icon: Target,
    title: 'Build Your Profile',
    description: 'Showcase your AI skills, projects, and verified credentials to stand out to employers.',
  },
  {
    icon: Briefcase,
    title: 'Access Opportunities',
    description: 'Get matched with employers specifically looking for AI-skilled talent from emerging markets.',
  },
  {
    icon: TrendingUp,
    title: 'Grow Your Career',
    description: 'Access ongoing learning resources, mentorship, and career development support.',
  },
];

const forEmployers = [
  {
    icon: Search,
    title: 'Find Verified Talent',
    description: 'Access a pool of candidates with verified AI skills and training credentials.',
  },
  {
    icon: UserCheck,
    title: 'Pre-Screened Candidates',
    description: 'All candidates have completed practical projects demonstrating real AI competency.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connect with AI-skilled professionals across emerging markets in Africa and beyond.',
  },
  {
    icon: Zap,
    title: 'Fast Hiring',
    description: 'Streamlined process to quickly match, interview, and hire qualified candidates.',
  },
];

const successStories = [
  {
    name: 'Michael A.',
    role: 'AI Implementation Specialist',
    company: 'FinTech Startup',
    story: 'Completed AI training, got certified, and landed a role at a growing fintech in 6 weeks.',
    salary: '+65% salary increase',
    location: 'Kenya',
  },
  {
    name: 'Fatima N.',
    role: 'Data Analyst',
    company: 'Consulting Firm',
    story: 'Transitioned from traditional analytics to AI-powered insights after training.',
    salary: 'Remote role at EU firm',
    location: 'Nigeria',
  },
  {
    name: 'David M.',
    role: 'AI Product Manager',
    company: 'Tech Company',
    story: 'Used AI strategy certification to pivot into product management for AI products.',
    salary: 'Promoted within 3 months',
    location: 'Uganda',
  },
];

const stats = [
  { value: '1,200+', label: 'Certified Professionals' },
  { value: '85%', label: 'Placement Rate' },
  { value: '45%', label: 'Avg. Salary Increase' },
  { value: '150+', label: 'Hiring Partners' },
];

const featuredRoles = [
  { title: 'AI Implementation Specialist', company: 'FinTech Startup', location: 'Nairobi / Remote', type: 'Full-time' },
  { title: 'Data Analyst with AI Skills', company: 'FMCG Company', location: 'Lagos', type: 'Full-time' },
  { title: 'AI-Powered Marketing Manager', company: 'Digital Agency', location: 'Remote', type: 'Contract' },
  { title: 'Process Automation Engineer', company: 'Manufacturing Co.', location: 'Johannesburg', type: 'Full-time' },
];

const TalentHub = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple to-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
                <Users className="w-4 h-4" />
                Talent Hub
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Where AI Talent Meets Opportunity
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Connecting AI-certified professionals with employers seeking emerging market talent.
                Build skills, get certified, get hired.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Join as Talent
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple">
                  Hire Talent
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              {/* Talent Visual */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center justify-between mb-6">
                    <p className="font-semibold">Featured Candidates</p>
                    <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">AI Certified</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { initials: 'MA', name: 'Michael A.', skill: 'AI Implementation', rating: 4.9 },
                      { initials: 'FN', name: 'Fatima N.', skill: 'Data Analytics', rating: 4.8 },
                      { initials: 'DM', name: 'David M.', skill: 'AI Strategy', rating: 4.9 },
                    ].map((candidate) => (
                      <div key={candidate.name} className="flex items-center gap-4 p-3 bg-white/10 rounded-xl">
                        <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-navy font-bold">
                          {candidate.initials}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{candidate.name}</p>
                          <p className="text-xs opacity-80">{candidate.skill}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-gold fill-gold" />
                          <span className="text-sm">{candidate.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gold text-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="font-medium opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Talent */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              For Talent
            </h2>
            <p className="text-lg text-gray-600">
              Your pathway from AI training to career transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {forTalent.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-purple" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/training/career-growth" variant="primary">
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              For Employers
            </h2>
            <p className="text-lg text-gray-600">
              Access verified AI talent ready to drive your digital transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {forEmployers.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary">
              Post a Position
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Roles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Featured Opportunities
            </h2>
            <p className="text-lg text-gray-600">
              Current openings from our hiring partners seeking AI talent.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {featuredRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-purple/5 transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 bg-purple/10 rounded-xl flex items-center justify-center group-hover:bg-purple group-hover:text-white transition-colors">
                  <Briefcase className="w-6 h-6 text-purple group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-navy group-hover:text-purple transition-colors">{role.title}</h3>
                  <p className="text-sm text-gray-600">{role.company}</p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                    <span>{role.location}</span>
                    <span className="px-2 py-0.5 bg-gray-200 rounded-full">{role.type}</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple transition-colors" />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button href="/contact" variant="outline">
              View All Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-navy to-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-200">
              Real people who've transformed their careers through Cynea AI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-lg">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold">{story.name}</p>
                    <p className="text-sm text-gray-300">{story.role}</p>
                    <p className="text-xs text-gold">{story.company}</p>
                  </div>
                </div>
                <p className="text-gray-200 text-sm mb-4">{story.story}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-gold font-semibold text-sm">{story.salary}</span>
                  <span className="text-xs text-gray-400">{story.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Your journey from learning to earning.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Train', desc: 'Complete AI training program' },
                { step: '02', title: 'Certify', desc: 'Earn verified credentials' },
                { step: '03', title: 'Profile', desc: 'Build your talent profile' },
                { step: '04', title: 'Connect', desc: 'Get matched with employers' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center relative"
                >
                  <div className="w-14 h-14 bg-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-7 left-full w-full h-0.5 bg-gray-200" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Join the AI Talent Revolution?"
        description="Whether you're looking to build AI skills or hire AI-certified talent, we've got you covered."
        primaryCTA={{ text: 'Join as Talent', href: '/contact' }}
        secondaryCTA={{ text: 'Hire Talent', href: '/contact' }}
        variant="purple"
      />
    </>
  );
};

export default TalentHub;
