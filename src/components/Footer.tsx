import { Heart, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP_NUMBER = '919876543210'; // ← Replace with Dhanusri's WhatsApp number
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hi, I found your website and would like to book a consultation for my child.'
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto section-padding py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">SD</span>
              </div>
              <span className="text-white font-semibold text-lg">Dhanusri OT</span>
            </div>
            <p className="text-sm leading-relaxed">
              Professional paediatric occupational therapy services providing online assessments 
              and video consultations for children with developmental needs. Evidence-based, 
              family-centred care from Hyderabad, India.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><a href="/#about" className="hover:text-teal-400 transition-colors">About</a></li>
              <li><a href="/#services" className="hover:text-teal-400 transition-colors">Services</a></li>
              <li><Link to="/blog" className="hover:text-teal-400 transition-colors">Blog</Link></li>
              <li><a href="/#contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-green-400 transition-colors"
                >
                  <MessageCircle size={16} className="text-green-400" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-teal-400" />
                <a href="mailto:sarikondadhanusri58678@gmail.com" className="hover:text-teal-400 transition-colors">
                  sarikondadhanusri58678@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-teal-400 mt-0.5" />
                <span>Hyderabad, India<br /><span className="text-gray-500">Online sessions worldwide</span></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {currentYear} Sarikonda Dhanusri. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-teal-400 fill-teal-400" /> for better child health
          </p>
        </div>
      </div>
    </footer>
  );
}
