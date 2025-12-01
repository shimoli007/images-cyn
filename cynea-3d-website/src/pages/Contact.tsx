import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { interestOptions, contactInfo } from '@/data/navigation';
import Button from '@/components/ui/Button';
import FloatingParticles from '@/components/effects/FloatingParticles';
import GlowingCard from '@/components/effects/GlowingCard';

const quickLinks = [
  {
    title: 'Product Demo',
    description: 'Schedule a personalized demo of our platform',
    href: '/contact',
  },
  {
    title: 'Training Programs',
    description: 'Explore our corporate and government training',
    href: '/training/corporate',
  },
  {
    title: 'Join Talent Hub',
    description: 'Apply to our Nairobi talent development program',
    href: '/impact/talent-hub',
  },
  {
    title: 'Resources',
    description: 'Access guides, whitepapers, and research',
    href: '/resources',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    interest: '',
    message: '',
    consentData: false,
    consentMarketing: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        company: '',
        interest: '',
        message: '',
        consentData: false,
        consentMarketing: false,
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy-light text-white relative overflow-hidden">
        {/* Floating Particles Background */}
        <FloatingParticles className="opacity-40" particleCount={80} color="#eca52e" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Whether you're an SME looking to transform your business, a government institution building
              AI capacity, or a talented innovator seeking opportunities—we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold text-navy mb-6">Contact Information</h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-600 hover:text-purple transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Phone</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-gray-600 hover:text-purple transition-colors"
                    >
                      {contactInfo.phone} (UK)
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Locations</p>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-navy" />
                  <h3 className="font-semibold text-navy">Office Hours</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{contactInfo.officeHours.weekday}</p>
                  <p>{contactInfo.officeHours.saturday}</p>
                  <p>{contactInfo.officeHours.sunday}</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>

                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you within 24-48 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company Name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Interest Dropdown */}
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                        I'm interested in: *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select an option...</option>
                        {interestOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Tell us about your needs or questions..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    {/* Data Protection & Consent */}
                    <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                      <h4 className="font-semibold text-navy">Data Protection & Consent</h4>

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consentData"
                          checked={formData.consentData}
                          onChange={handleInputChange}
                          required
                          className="mt-1 w-4 h-4 text-gold border-gray-300 rounded focus:ring-gold"
                        />
                        <span className="text-sm text-gray-600">
                          <strong>I consent to data processing *</strong>
                          <br />
                          I agree to Cynea AI processing my personal data according to the Privacy Policy.
                          My data will be used solely to respond to this inquiry and will be stored securely.
                        </span>
                      </label>

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consentMarketing"
                          checked={formData.consentMarketing}
                          onChange={handleInputChange}
                          className="mt-1 w-4 h-4 text-gold border-gray-300 rounded focus:ring-gold"
                        />
                        <span className="text-sm text-gray-600">
                          <strong>I'd like to receive updates (Optional)</strong>
                          <br />
                          I consent to receiving marketing communications, newsletters, and product updates
                          from Cynea AI. You can unsubscribe at any time.
                        </span>
                      </label>

                      <p className="text-xs text-gray-500">
                        By submitting this form, you acknowledge that your information will be processed
                        in accordance with UK GDPR regulations. See our{' '}
                        <Link to="/privacy" className="text-purple hover:underline">
                          Privacy Policy
                        </Link>{' '}
                        and{' '}
                        <Link to="/terms" className="text-purple hover:underline">
                          Terms of Service
                        </Link>{' '}
                        for more information.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      icon={<Send className="w-5 h-5" />}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    <p className="text-xs text-gray-500">* Required fields</p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy mb-4">Looking for Something Specific?</h2>
            <p className="text-gray-600">Quick links to help you find what you need</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link to={link.href} className="block h-full">
                  <GlowingCard
                    className="h-full p-6 bg-white rounded-xl border border-gray-100"
                    glowColor="rgba(236, 165, 46, 0.4)"
                  >
                    <h3 className="font-bold text-navy mb-2 group-hover:text-purple transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{link.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm text-navy font-medium hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </GlowingCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
