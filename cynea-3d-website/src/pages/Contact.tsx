import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { interestOptions, contactInfo } from '@/data/navigation';
import Button from '@/components/ui/Button';

const quickLinks = [
  {
    title: 'Product Demo',
    description: 'Schedule a personalized demo of our platform',
    href: '/products/ai-automation',
  },
  {
    title: 'Training Programs',
    description: 'Explore our corporate and government training',
    href: '/training/corporate',
  },
  {
    title: 'Talent Hub',
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

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

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
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 leading-tight mb-6">
              Get in touch
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Whether you're an SME, government institution, or innovator—we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="text-lg font-semibold text-slate-900 mb-6">Contact details</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-slate-900 hover:text-violet-600 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Phone</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-slate-900 hover:text-violet-600 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Location</p>
                    <p className="text-slate-900">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200">
                <p className="text-sm text-slate-500 mb-4">Office hours</p>
                <div className="space-y-1 text-sm text-slate-700">
                  <p>{contactInfo.officeHours.weekday}</p>
                  <p>{contactInfo.officeHours.saturday}</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Message sent</h3>
                    <p className="text-slate-600">We'll get back to you within 24-48 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-slate-900"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        Company (optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-slate-900"
                      />
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-2">
                        I'm interested in
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-slate-900"
                      >
                        <option value="">Select an option</option>
                        {interestOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none text-slate-900"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consentData"
                          checked={formData.consentData}
                          onChange={handleInputChange}
                          required
                          className="mt-1 w-4 h-4 text-violet-600 border-slate-300 rounded focus:ring-violet-500"
                        />
                        <span className="text-sm text-slate-600">
                          I consent to Cynea AI processing my data according to the{' '}
                          <Link to="/privacy" className="text-violet-600 hover:underline">
                            Privacy Policy
                          </Link>
                          .
                        </span>
                      </label>

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consentMarketing"
                          checked={formData.consentMarketing}
                          onChange={handleInputChange}
                          className="mt-1 w-4 h-4 text-violet-600 border-slate-300 rounded focus:ring-violet-500"
                        />
                        <span className="text-sm text-slate-600">
                          I'd like to receive product updates and newsletters.
                        </span>
                      </label>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      icon={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Sending...' : 'Send message'}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-12"
          >
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Looking for something specific?</h2>
            <p className="text-slate-600">Quick links to help you find what you need.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={link.href}
                  className="block h-full p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all group"
                >
                  <h3 className="font-medium text-slate-900 mb-2 group-hover:text-violet-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">{link.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm text-slate-500 group-hover:text-violet-600 group-hover:gap-3 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
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
