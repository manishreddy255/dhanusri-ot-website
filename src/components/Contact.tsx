import { useState, useRef } from 'react';
import { Send, Mail, MapPin, Clock, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_g607u4q';
const EMAILJS_TEMPLATE_ID = 'template_tmvqlrm';
const EMAILJS_PUBLIC_KEY = 'HqhHp3dZjRH5WZzDm';

const WHATSAPP_NUMBER = '919876543210'; // ← Replace with Dhanusri's WhatsApp number
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hi, I found your website and would like to book a consultation for my child. Please let me know your availability.'
);

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current!, EMAILJS_PUBLIC_KEY);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', message: '' });
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Book a <span className="gradient-text">Consultation</span>
          </h2>
          <p className="text-gray-600">
            Reach out via WhatsApp for fastest response, or send a message below. 
            I typically reply within a few hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Quick Contact Options */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Quick Contact</h3>
              
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-teal-800 px-6 py-4 rounded-xl font-semibold mb-5 hover:bg-green-50 transition-colors"
              >
                <MessageCircle size={22} className="text-green-600" />
                Chat on WhatsApp
                <span className="ml-auto text-xs font-normal text-gray-500">Fastest response</span>
              </a>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-teal-100">Email</p>
                    <a href="mailto:sarikondadhanusri58678@gmail.com" className="font-medium hover:text-teal-200">
                      sarikondadhanusri58678@gmail.com
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
                    <p className="text-sm text-teal-200/70">Online sessions worldwide</p>
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
          </div>

          {/* Simple Form */}
          <div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                    placeholder="+91 ..."
                  />
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
                    placeholder="Tell me about your child and concerns..."
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
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-xl">
                    <CheckCircle size={20} />
                    <span>Message sent! I will get back to you within a few hours.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl">
                    <AlertCircle size={20} />
                    <span>Something went wrong. Please try WhatsApp instead.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
