import { motion } from 'framer-motion';
import {
  FileText,
  BookOpen,
  BarChart3,
  Download,
  Clock,
  ArrowRight,
  Video,
} from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

const featuredResources = [
  {
    type: 'Whitepaper',
    icon: FileText,
    iconBg: 'bg-navy',
    title: 'Complete Guide to EUDR Compliance for Emerging Market Exporters',
    description:
      'Everything you need to know about the EU Deforestation Regulation, what it means for your business, and how to achieve compliance.',
    downloadUrl: '#',
  },
  {
    type: 'Guide',
    icon: BookOpen,
    iconBg: 'bg-teal',
    title: "SME's Handbook to AI Automation",
    description:
      'Practical guide for small businesses looking to implement AI tools without technical expertise or large budgets.',
    downloadUrl: '#',
  },
  {
    type: 'Research Report',
    icon: BarChart3,
    iconBg: 'bg-purple',
    title: 'State of Digital Trade in Africa 2025',
    description:
      "Annual report on trends, challenges, and opportunities in Africa's digital trade ecosystem.",
    downloadUrl: '#',
  },
];

const latestInsights = [
  {
    type: 'Blog Post',
    readTime: '5 min read',
    title: 'Why Stablecoins Are Essential for Emerging Market Exporters',
    description:
      'How currency volatility erodes profit margins and why stablecoin infrastructure offers a better solution than traditional forex hedging.',
    link: '#',
  },
  {
    type: 'Blog Post',
    readTime: '7 min read',
    title: 'Building AI-Ready Teams: Lessons from 250+ Government Officials',
    description:
      'Key insights from our partnership with Kenya School of Government on what it takes to prepare organizations for AI adoption.',
    link: '#',
  },
  {
    type: 'Blog Post',
    readTime: '6 min read',
    title: 'Blockchain Traceability: Beyond the Hype',
    description:
      'Real-world implementation lessons from helping coffee and cocoa exporters achieve EUDR compliance with blockchain.',
    link: '#',
  },
  {
    type: 'Blog Post',
    readTime: '4 min read',
    title: 'The Hidden Value in Your Business Data',
    description:
      'How SMEs are monetizing verified operational data while maintaining privacy and control.',
    link: '#',
  },
];

const whitepapers = [
  {
    title: 'AI + Blockchain Convergence for Emerging Markets',
    description: 'Technical whitepaper on infrastructure design for low-connectivity environments',
    downloadUrl: '#',
  },
  {
    title: 'Carbon Border Adjustment Mechanism (CBAM) Implementation Guide',
    description: 'Step-by-step guide for emerging market manufacturers exporting to EU',
    downloadUrl: '#',
  },
  {
    title: 'The SME Data Economy: Monetizing Verified Business Insights',
    description: 'Research on emerging data marketplaces and privacy-preserving monetization',
    downloadUrl: '#',
  },
];

const videos = [
  {
    type: 'Webinar Recording',
    duration: '45 min',
    title: 'Getting Started with AI Automation for SMEs',
    description: 'Live demo and Q&A on implementing your first AI agents.',
    watchUrl: '#',
    thumbnail: 'bg-navy',
  },
  {
    type: 'Tutorial',
    duration: '20 min',
    title: 'Setting Up Blockchain Traceability',
    description: 'Step-by-step walkthrough for supply chain tracking.',
    watchUrl: '#',
    thumbnail: 'bg-teal',
  },
  {
    type: 'Webinar Recording',
    duration: '60 min',
    title: 'National AI Strategy Development',
    description: 'Insights from our government partnerships in Kenya and Zambia.',
    watchUrl: '#',
    thumbnail: 'bg-purple',
  },
];

const mediaFeatures = [
  {
    outlet: 'TechCrunch Africa',
    quote: '"AI infrastructure for emerging markets"',
  },
  {
    outlet: 'Financial Times',
    quote: '"Blockchain traceability for compliance"',
  },
  {
    outlet: 'The Africa Report',
    quote: '"Government AI partnerships"',
  },
  {
    outlet: 'Bloomberg',
    quote: '"Stablecoins for emerging market trade"',
  },
];

const Resources = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Resources & Insights</h1>
            <p className="text-xl text-gray-200">
              Explore our library of guides, research, and industry insights on AI, blockchain, and digital trade
              for emerging markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy mb-4">Featured Resources</h2>
            <p className="text-gray-600">Start with our most popular guides and reports</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 ${resource.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <resource.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-sm text-gray-500 font-medium">{resource.type}</span>
                <h3 className="text-xl font-bold text-navy mt-2 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <a
                  href={resource.downloadUrl}
                  className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy mb-4">Latest Insights</h2>
            <p className="text-gray-600">Fresh perspectives on AI, blockchain, and emerging market innovation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {latestInsights.map((insight, index) => (
              <motion.a
                key={insight.title}
                href={insight.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="block bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-gold/30 transition-all group"
              >
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    {insight.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {insight.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-purple transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{insight.description}</p>
                <span className="inline-flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers & Research */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy mb-4">Whitepapers & Research</h2>
            <p className="text-gray-600">In-depth analysis and thought leadership</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {whitepapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center justify-between gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">{paper.title}</h3>
                    <p className="text-sm text-gray-600">{paper.description}</p>
                  </div>
                </div>
                <a
                  href={paper.downloadUrl}
                  className="flex-shrink-0 text-gold font-semibold text-sm hover:text-gold-dark transition-colors flex items-center gap-1"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos & Webinars */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy mb-4">Videos & Webinars</h2>
            <p className="text-gray-600">Watch and learn from our expert sessions</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.a
                key={video.title}
                href={video.watchUrl}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="block group"
              >
                {/* Thumbnail */}
                <div className={`${video.thumbnail} rounded-xl aspect-video flex items-center justify-center mb-4 relative overflow-hidden`}>
                  <Video className="w-12 h-12 text-white/80 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>

                <div className="flex items-center gap-4 mb-2 text-sm text-gray-500">
                  <span>{video.type}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {video.duration}
                  </span>
                </div>
                <h3 className="font-bold text-navy mb-1 group-hover:text-purple transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{video.description}</p>
                <span className="text-gold font-semibold text-sm">Watch Now</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy mb-4">Media Coverage</h2>
            <p className="text-gray-600">Cynea AI in the news</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaFeatures.map((media, index) => (
              <motion.div
                key={media.outlet}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <p className="font-bold text-navy mb-2">{media.outlet}</p>
                <p className="text-sm text-gray-600 italic">{media.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Want to Contribute to Our Blog?"
        description="We're always looking for guest contributors with expertise in AI, blockchain, and emerging market innovation."
        primaryCTA={{ text: 'Get in Touch', href: '/contact' }}
        secondaryCTA={{ text: 'View Guidelines', href: '#' }}
        variant="dark"
      />
    </>
  );
};

export default Resources;
