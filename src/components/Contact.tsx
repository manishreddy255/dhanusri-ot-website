import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS credentials
// Get your Template ID and Public Key from https://dashboard.emailjs.com
const EMAILJS_SERVICE_ID = 'service_g607u4q';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // <-- Replace after creating template
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';    // <-- Replace from Account > General

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: '',
    serviceType: '',
    childAge: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Check if placeholders are still set
      if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
        // Simulate success for demo if not configured
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          userType: '',
          serviceType: '',
          childAge: '',
          message: '',
        });
      } else {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current!,
          EMAILJS_PUBLIC_KEY
        );
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          userType: '',
          serviceType: '',
          childAge: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Book a <span className="gradient-text">Consultation</span>
          </h2>
          <p className="text-gray-600">
            Reach out for online assessments, video consultations, or professional referrals. 
            I typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-teal-100">Email</p>
                    <a href="mailto:sarikondadhanusri58678@gmail.com" className="font-medium hover:text-teal-200 transition-colors">
                      sarikondadhanusri58678@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-teal-100">Phone</p>
                    <a href="tel:+916301185981" className="font-medium hover:text-teal-200 transition-colors">
                      +91 63011 85981
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-teal-100">Location</p>
                    <p className="font-medium">Hyderabad, India</p>
                    <p className="text-sm text-teal-200/70">Serving clients worldwide via video</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-teal-100">Availability</p>
                    <p className="font-medium">Monday – Saturday</p>
                    <p className="text-sm text-teal-200/70">9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
              <h4 className="font-semibold text-gray-900 mb-2">For Medical Professionals</h4>
              <p className="text-sm text-gray-600">
                Looking to refer a patient? Use the contact form and select &quot;Medical Professional&quot; 
                as your user type. I accept referrals from paediatricians, neurologists, psychologists, 
                and allied health professionals.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                      placeholder="+91 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">I am a... *</label>
                    <select
                      name="userType"
                      required
                      value={formData.userType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-white"
                    >
                      <option value="">Select one</option>
                      <option value="parent">Parent / Caregiver</option>
                      <option value="professional">Medical Professional</option>
                      <option value="school">School / Institution</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed *</label>
                    <select
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-white"
                    >
                      <option value="">Select one</option>
                      <option value="assessment">Online Assessment</option>
                      <option value="consultation">Video Consultation</option>
                      <option value="sensory">Sensory Integration Therapy</option>
                      <option value="fine_motor">Fine Motor / ADL Training</option>
                      <option value="early">Early Intervention</option>
                      <option value="iep">IEP/IFSP Development</option>
                      <option value="referral">Professional Referral</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Child&apos;s Age (if applicable)</label>
                    <input
                      type="text"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                      placeholder="e.g., 5 years"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none"
                    placeholder="Please describe your concerns or requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white px-8 py-4 rounded-xl font-semibold transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-xl"
                  >
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I will get back to you within 24 hours.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl"
                  >
                    <AlertCircle size={20} />
                    <span>Something went wrong. Please try again or contact me directly via phone/email.</span>
                  </motion.div>
                )}

                {EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' && (
                  <div className="text-sm text-amber-600 bg-amber-50 p-4 rounded-xl">
                    <strong>Note:</strong> EmailJS is not configured yet. The form will simulate sending. 
                    Please see the SETUP.md file for instructions on configuring EmailJS.
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
