import { Video, ClipboardCheck, Brain, Hand, Baby, FileText } from 'lucide-react';

const services = [
  {
    icon: ClipboardCheck,
    title: 'Online Paediatric Assessment',
    description: 'Comprehensive developmental assessments including sensory profiles, motor skill evaluations (PDMS-2, BOT-2, VMI), and functional independence measures (COPM) conducted via secure video platform.',
    forAudience: 'Parents & Professionals',
    duration: '60-90 minutes',
  },
  {
    icon: Video,
    title: 'Video Consultation',
    description: 'One-on-one video consultations to discuss concerns, review assessment results, and develop personalised intervention strategies for your child. Accessible from anywhere in the world.',
    forAudience: 'Parents & Caregivers',
    duration: '45-60 minutes',
  },
  {
    icon: Brain,
    title: 'Sensory Integration Therapy',
    description: 'Specialised sensory integration therapy sessions designed to help children process sensory information more effectively, improving self-regulation, attention, and social participation.',
    forAudience: 'Children with SPD, ASD, ADHD',
    duration: 'Customised plan',
  },
  {
    icon: Hand,
    title: 'Fine Motor & ADL Training',
    description: 'Targeted interventions to improve fine motor skills, handwriting, self-care abilities, and activities of daily living (ADLs) using proven approaches like Handwriting Without Tears.',
    forAudience: 'Children with developmental delays',
    duration: 'Customised plan',
  },
  {
    icon: Baby,
    title: 'Early Intervention Programmes',
    description: 'Evidence-based early intervention for children aged 0-5 years with developmental delays or at-risk profiles. Focus on maximising developmental outcomes during critical windows.',
    forAudience: 'Infants & Toddlers',
    duration: 'Ongoing programme',
  },
  {
    icon: FileText,
    title: 'IEP/IFSP Development & Review',
    description: 'Development of Individualised Education Programmes (IEPs) and Individualised Family Service Plans (IFSPs) with SMART goals aligned to each child\'s developmental trajectory.',
    forAudience: 'Schools & Parents',
    duration: '90 minutes',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            How I Can <span className="gradient-text">Help</span>
          </h2>
          <p className="text-gray-600">
            Whether you are a parent seeking support for your child or a medical professional looking 
            to refer a patient, I offer comprehensive online services tailored to each child&apos;s unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service) => (
            <div
              key={service.title}
              className="group card-hover bg-gradient-to-br from-teal-50/50 to-white rounded-2xl p-8 border border-teal-100 hover:border-teal-300 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="text-white" size={28} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>

              <div className="space-y-2 pt-4 border-t border-teal-100">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-teal-600 font-medium">For:</span>
                  <span className="text-gray-600">{service.forAudience}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-teal-600 font-medium">Duration:</span>
                  <span className="text-gray-600">{service.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
