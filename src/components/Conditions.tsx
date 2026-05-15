import { motion } from 'framer-motion';
import { Brain, Baby, Hand, Ear, Eye, Activity, UserRound, Lightbulb } from 'lucide-react';

const conditions = [
  {
    icon: Brain,
    title: 'Autism Spectrum Disorder (ASD)',
    description: 'Comprehensive sensory integration, social skills development, visual scheduling, and behavioural strategies to improve communication, self-regulation, and daily functioning in children with ASD.',
    approaches: ['Sensory Integration', 'DIR Floortime', 'Visual Scheduling', 'Social Stories'],
  },
  {
    icon: Ear,
    title: 'Sensory Processing Disorder (SPD)',
    description: 'Targeted sensory diets and environmental modifications to help children process sensory input effectively. Addresses sensory seeking, avoiding, and discrimination challenges across all environments.',
    approaches: ['Sensory Profile Assessment', 'Sensory Diets', 'Environmental Adaptations', 'Wilbarger Protocol'],
  },
  {
    icon: Activity,
    title: 'Attention Deficit Hyperactivity Disorder (ADHD)',
    description: 'Evidence-based interventions focusing on attention building, impulse control, organisational skills, and self-regulation strategies tailored for home and classroom success.',
    approaches: ['Behavioural Strategies', 'Executive Function Training', 'Movement Breaks', 'Visual Organisers'],
  },
  {
    icon: Baby,
    title: 'Cerebral Palsy (CP)',
    description: 'Specialised positioning, NDT techniques, adaptive equipment recommendations, and functional training to maximise independence in mobility, self-care, and play for children with cerebral palsy.',
    approaches: ['NDT/Bobath', 'Positioning', 'Adaptive Techniques', 'Splinting Advice'],
  },
  {
    icon: UserRound,
    title: 'Down Syndrome & Genetic Conditions',
    description: 'Developmental programmes focusing on fine motor skills, sensory exploration, communication support, and school readiness for children with chromosomal and genetic differences.',
    approaches: ['Early Intervention', 'Motor Skill Development', 'Sensory Exploration', 'School Readiness'],
  },
  {
    icon: Lightbulb,
    title: 'Global Developmental Delay (GDD)',
    description: 'Holistic early intervention programmes addressing multiple developmental domains. Play-based therapeutic activities designed to accelerate developmental milestones in motor, cognitive, and social areas.',
    approaches: ['Developmental Assessment', 'Play-Based Therapy', 'Parent Coaching', 'Milestone Tracking'],
  },
  {
    icon: Hand,
    title: 'Fine Motor & Handwriting Difficulties',
    description: 'Specialised interventions using Handwriting Without Tears and motor learning principles to improve pencil grip, letter formation, cutting skills, and hand dexterity for school-aged children.',
    approaches: ['Handwriting Without Tears', 'Fine Motor Strengthening', 'Bilateral Coordination', 'Tool Use Training'],
  },
  {
    icon: Eye,
    title: 'Visual-Motor Integration (VMI) Issues',
    description: 'Targeted activities to improve the coordination between visual perception and motor output. Supports children struggling with copying, tracing, puzzles, and sports participation.',
    approaches: ['VMI Assessment', 'Visual Perception Training', 'Eye-Hand Coordination', 'Spatial Awareness'],
  },
];

export default function Conditions() {
  return (
    <section id="conditions" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Specialisations</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Conditions <span className="gradient-text">I Treat</span>
          </h2>
          <p className="text-gray-600">
            Evidence-based occupational therapy interventions for a wide range of paediatric 
            neurodevelopmental and sensory conditions. Online assessments and therapy available worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {conditions.map((condition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group card-hover bg-gradient-to-br from-teal-50/50 to-white rounded-2xl p-6 lg:p-8 border border-teal-100 hover:border-teal-300 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <condition.icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{condition.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{condition.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {condition.approaches.map((approach) => (
                      <span
                        key={approach}
                        className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium"
                      >
                        {approach}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">
            Don&apos;t see your child&apos;s condition listed? I also treat hypotonia, dyspraxia, 
            feeding difficulties, and other developmental concerns.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all"
          >
            Discuss Your Concerns
          </a>
        </motion.div>
      </div>
    </section>
  );
}
