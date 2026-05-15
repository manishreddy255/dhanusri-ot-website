import { motion } from 'framer-motion';
import { ArrowDown, Video, Calendar, Stethoscope } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto section-padding py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-100 text-sm font-medium">Accepting New Clients</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Expert Paediatric{' '}
              <span className="text-teal-300">Occupational Therapy</span>{' '}
              for Your Child
            </h1>

            <p className="text-lg text-teal-100/80 mb-8 max-w-xl leading-relaxed">
              Specialised online assessments and video consultations for children with ASD, 
              sensory processing disorders, cerebral palsy, and developmental delays. 
              Evidence-based, family-centred care from an experienced OT.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-teal-800 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition-colors shadow-lg"
              >
                <Calendar size={20} />
                Book a Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-teal-700/50 backdrop-blur-sm border border-teal-500/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700/70 transition-colors"
              >
                <Stethoscope size={20} />
                Explore Services
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { number: '4+', label: 'Years Experience' },
                { number: '200+', label: 'Children Helped' },
                { number: '100%', label: 'Online Available' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-teal-200/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-teal-600/20 rounded-full animate-float" />
              
              {/* Avatar placeholder */}
              <div className="absolute inset-8 bg-gradient-to-br from-teal-100 to-white rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">SD</span>
                  </div>
                  <p className="text-teal-800 font-semibold text-lg">Sarikonda Dhanusri</p>
                  <p className="text-teal-600 text-sm">BOT, Paediatric OT</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 right-0 bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Video className="text-teal-600" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Video Consult</p>
                  <p className="text-xs text-gray-500">Available Now</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-16 left-0 bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Stethoscope className="text-teal-600" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Online Assessment</p>
                  <p className="text-xs text-gray-500">Book Today</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
}
