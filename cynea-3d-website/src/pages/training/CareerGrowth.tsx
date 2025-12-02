import { motion } from 'framer-motion';
import {
  GraduationCap,
  Target,
  Award,
  Briefcase,
  Clock,
  Users,
  Star,
  ArrowRight,
  Check,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Play,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';

const programs = [
  {
    level: 'Foundation',
    duration: '4 weeks',
    title: 'AI Literacy for Professionals',
    description:
      'Understand AI fundamentals, learn to use AI tools effectively, and identify AI opportunities in your role.',
    outcomes: [
      'Use ChatGPT, Claude, and Copilot effectively',
      'Understand AI capabilities and limitations',
      'Identify automation opportunities',
      'Write effective prompts',
    ],
    price: '$299',
    badge: 'Most Popular',
  },
  {
    level: 'Intermediate',
    duration: '8 weeks',
    title: 'AI Implementation Specialist',
    description:
      'Learn to implement AI solutions in business contexts. Perfect for managers and team leads.',
    outcomes: [
      'Design AI-powered workflows',
      'Select appropriate AI tools',
      'Manage AI projects',
      'Measure AI ROI',
    ],
    price: '$599',
  },
  {
    level: 'Advanced',
    duration: '12 weeks',
    title: 'AI Strategy & Leadership',
    description:
      'Lead AI transformation initiatives. For senior professionals and executives.',
    outcomes: [
      'Develop AI strategy',
      'Build AI-ready teams',
      'Navigate AI ethics',
      'Drive organizational change',
    ],
    price: '$999',
    badge: 'Executive',
  },
];

const features = [
  {
    icon: Play,
    title: 'Self-Paced Learning',
    description: 'Learn on your schedule with on-demand video lessons and interactive exercises.',
  },
  {
    icon: Users,
    title: 'Live Sessions',
    description: 'Weekly live sessions with instructors for Q&A and hands-on practice.',
  },
  {
    icon: Briefcase,
    title: 'Real Projects',
    description: 'Apply skills to real-world projects relevant to your industry.',
  },
  {
    icon: Award,
    title: 'Certification',
    description: 'Earn industry-recognized certification upon completion.',
  },
];

const successStories = [
  {
    name: 'Sarah M.',
    role: 'Marketing Manager',
    before: 'Spent 15 hours/week on reports',
    after: 'Now 3 hours with AI automation',
    impact: '80% time saved',
    image: 'SM',
  },
  {
    name: 'James K.',
    role: 'Financial Analyst',
    before: 'Manual data processing',
    after: 'AI-powered analytics',
    impact: '3x faster insights',
    image: 'JK',
  },
  {
    name: 'Grace O.',
    role: 'HR Director',
    before: 'Traditional recruitment',
    after: 'AI-assisted screening',
    impact: '50% faster hiring',
    image: 'GO',
  },
];

const stats = [
  { icon: Users, value: '2,500+', label: 'Graduates' },
  { icon: Star, value: '4.8/5', label: 'Rating' },
  { icon: TrendingUp, value: '45%', label: 'Avg. Salary Increase' },
  { icon: Clock, value: '20hrs', label: 'Avg. Weekly Time Saved' },
];

const CareerGrowth = () => {
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
                <GraduationCap className="w-4 h-4" />
                Individual Training
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Future-Proof Your Career with AI Skills
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Learn to leverage AI in your profession. From prompting to strategy,
                gain the skills employers demand in the AI age.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Enroll Now
                </Button>
                <Button href="#programs" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple">
                  View Programs
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/20">
                <div className="flex -space-x-3">
                  {['SM', 'JK', 'GO', 'AW'].map((initials, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-sm border-2 border-white"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-purple-100">
                  Join <span className="font-bold text-white">2,500+</span> professionals
                  who've upgraded their careers
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              {/* Career Growth Visual */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <p className="font-bold">Your AI Journey</p>
                      <p className="text-sm opacity-80">Track your progress</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { stage: 'AI Fundamentals', progress: 100, status: 'Completed' },
                      { stage: 'Prompt Engineering', progress: 100, status: 'Completed' },
                      { stage: 'AI Tools Mastery', progress: 65, status: 'In Progress' },
                      { stage: 'AI Strategy', progress: 0, status: 'Upcoming' },
                    ].map((item) => (
                      <div key={item.stage}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{item.stage}</span>
                          <span className={item.progress === 100 ? 'text-green-400' : 'opacity-70'}>
                            {item.status}
                          </span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              item.progress === 100 ? 'bg-green-400' : 'bg-gold'
                            }`}
                            style={{ width: `${item.progress}%` }}
                          />
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
      <section className="py-12 bg-navy text-white">
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
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>
                <p className="text-3xl font-bold text-gold">{stat.value}</p>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-lg text-gray-600">
              Structured programs designed for different experience levels and career goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`rounded-2xl p-8 border-2 ${
                  program.badge === 'Most Popular'
                    ? 'border-purple bg-purple/5 shadow-xl'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {program.badge && (
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 ${
                    program.badge === 'Most Popular'
                      ? 'bg-purple text-white'
                      : 'bg-gold text-navy'
                  }`}>
                    {program.badge}
                  </span>
                )}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span className="font-semibold text-purple">{program.level}</span>
                  <span>•</span>
                  <span>{program.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="space-y-2 mb-6">
                  {program.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-purple mt-0.5" />
                      {outcome}
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-navy">{program.price}</span>
                    <span className="text-sm text-gray-500">one-time</span>
                  </div>
                  <Button href="/contact" variant={program.badge === 'Most Popular' ? 'primary' : 'outline'} className="w-full">
                    Enroll Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              How You'll Learn
            </h2>
            <p className="text-lg text-gray-600">
              Flexible, practical learning designed for working professionals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className="w-14 h-14 bg-purple/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-purple" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Career Transformations
            </h2>
            <p className="text-lg text-gray-600">
              Real professionals who've upgraded their careers with AI skills.
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
                className="bg-gradient-to-br from-purple/5 to-slate-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-purple rounded-full flex items-center justify-center text-white font-bold">
                    {story.image}
                  </div>
                  <div>
                    <p className="font-bold text-navy">{story.name}</p>
                    <p className="text-sm text-gray-500">{story.role}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 text-sm font-medium">Before:</span>
                    <span className="text-gray-600 text-sm">{story.before}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 text-sm font-medium">After:</span>
                    <span className="text-gray-600 text-sm">{story.after}</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-center">
                    <span className="text-2xl font-bold text-purple">{story.impact}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Preview */}
      <section className="py-20 bg-gradient-to-br from-navy to-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">What You'll Master</h2>
              <div className="space-y-4">
                {[
                  { icon: Lightbulb, title: 'AI Fundamentals', desc: 'How AI works and what it can do for you' },
                  { icon: BookOpen, title: 'Prompt Engineering', desc: 'Get better outputs from any AI tool' },
                  { icon: Briefcase, title: 'AI in Your Industry', desc: 'Specific applications for your field' },
                  { icon: TrendingUp, title: 'Career Positioning', desc: 'Stand out in the AI-augmented job market' },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 p-4 bg-white/10 rounded-xl"
                  >
                    <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-300">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 text-navy"
            >
              <h3 className="text-xl font-bold mb-4">Start Learning Today</h3>
              <p className="text-gray-600 mb-6">
                Get instant access to our AI Fundamentals module free.
                No credit card required.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple" />
                  <span className="text-gray-700">5 video lessons</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple" />
                  <span className="text-gray-700">Interactive exercises</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple" />
                  <span className="text-gray-700">Completion certificate</span>
                </div>
              </div>
              <Button href="/contact" variant="primary" size="lg" className="w-full mt-6">
                Get Free Access
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Career?"
        description="Join thousands of professionals who've already upgraded their skills. Start your AI journey today."
        primaryCTA={{ text: 'Enroll Now', href: '/contact' }}
        secondaryCTA={{ text: 'Download Curriculum', href: '/contact' }}
        variant="dark"
      />
    </>
  );
};

export default CareerGrowth;
