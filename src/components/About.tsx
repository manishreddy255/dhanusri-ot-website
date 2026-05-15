import { Award, Heart, Users, BookOpen } from 'lucide-react';

const features = [
  { icon: Heart, title: 'Family-Centred Care', description: 'Every intervention is designed with the family in mind, ensuring sustainable progress at home.' },
  { icon: Award, title: 'Evidence-Based Practice', description: 'Using proven assessment tools and therapeutic approaches backed by research.' },
  { icon: Users, title: 'Multidisciplinary Collaboration', description: 'Working alongside speech therapists, physiotherapists, and psychologists for holistic care.' },
  { icon: BookOpen, title: 'Continuous Learning', description: 'Staying updated with the latest advancements in paediatric occupational therapy.' },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-teal-50/50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">About Me</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Dedicated to Helping Children{' '}
              <span className="gradient-text">Thrive</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I am <strong>Sarikonda Dhanusri</strong>, a Paediatric Occupational Therapist with over 4 years of clinical 
                experience specialising in paediatric rehabilitation, developmental disabilities, and 
                child-adolescent mental health.
              </p>
              <p>
                My practice focuses on delivering evidence-based, family-centred interventions for children 
                with Autism Spectrum Disorder (ASD), sensory processing disorders, cerebral palsy, and 
                developmental delays. I have helped over 200 children improve their functional independence, 
                fine motor skills, and sensory regulation.
              </p>
              <p>
                Based in Hyderabad, India, I offer comprehensive online assessments and video 
                consultations, making quality paediatric occupational therapy accessible to families 
                regardless of location.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Sensory Integration', 'ASD', 'Cerebral Palsy', 'ADHD', 'Developmental Delays', 'Early Intervention'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-white border border-teal-200 text-teal-700 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-teal-100 hover:border-teal-200">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="text-teal-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
