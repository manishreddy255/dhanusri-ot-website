import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Parent of 6-year-old with ASD',
    location: 'Hyderabad, India',
    text: "After just 3 months of sensory integration therapy with Dhanusri, my son's self-regulation improved dramatically. He can now sit through a full meal without meltdowns. Her home programme guidance was a game-changer for our family.",
    rating: 5,
    condition: 'Autism Spectrum Disorder',
  },
  {
    name: 'Mother of 4-year-old with Developmental Delay',
    location: 'Bangalore, India (Online)',
    text: "We were skeptical about online therapy, but Dhanusri's video assessments were incredibly thorough. She designed a visual schedule that helped our daughter become independent in dressing and brushing teeth within weeks.",
    rating: 5,
    condition: 'Global Developmental Delay',
  },
  {
    name: 'Paediatric Neurologist',
    location: 'Hyderabad, India',
    text: "I have referred multiple patients to Dhanusri for sensory processing concerns and ADL training. Her reports are detailed, her goals are measurable, and families consistently report positive outcomes. A true professional.",
    rating: 5,
    condition: 'Professional Referral',
  },
  {
    name: 'Parent of 8-year-old with ADHD',
    location: 'Chennai, India (Online)',
    text: "The IEP Dhanusri developed for our son was accepted by his school immediately. Her handwriting intervention using Handwriting Without Tears transformed his school performance. Teachers noticed the difference within a month.",
    rating: 5,
    condition: 'ADHD & Fine Motor Delays',
  },
  {
    name: 'Parent of 3-year-old with Cerebral Palsy',
    location: 'Pune, India (Online)',
    text: "Dhanusri's early intervention programme gave us hope when we needed it most. Her NDT techniques and caregiver coaching empowered us to support our daughter's development every day. She truly cares about every child.",
    rating: 5,
    condition: 'Cerebral Palsy',
  },
  {
    name: 'Special Educator',
    location: 'Hyderabad, India',
    text: "Collaborating with Dhanusri on multidisciplinary cases has been excellent. Her sensory profiles and goal-attainment scaling reports are comprehensive. She bridges the gap between therapy and classroom beautifully.",
    rating: 5,
    condition: 'Professional Collaboration',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-teal-50/30">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            What Families & Professionals <span className="gradient-text">Say</span>
          </h2>
          <p className="text-gray-600">
            Real outcomes from children, parents, and medical professionals who have experienced 
            the difference evidence-based paediatric occupational therapy can make.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-teal-100 hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 text-teal-100" size={32} />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{testimonial.location}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium">
                  {testimonial.condition}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
