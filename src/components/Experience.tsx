import { Briefcase, GraduationCap, Award, MapPin } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Paediatric Occupational Therapist',
    organisation: 'Good Start Child Development Centre',
    location: 'Hyderabad, India',
    period: 'Dec 2023 – Oct 2025',
    highlights: [
      'Provided individual and group OT sessions for 40+ children with ASD, ADHD, Down syndrome, cerebral palsy, and global developmental delay',
      'Conducted comprehensive paediatric assessments and developed targeted intervention plans',
      'Implemented sensory integration therapy and play-based interventions',
      'Delivered parent training programmes on home-based sensory diets and behavioural strategies',
    ],
  },
  {
    type: 'work',
    title: 'Paediatric Occupational Therapist',
    organisation: 'Orcas Child Development Centre',
    location: 'Hyderabad, India',
    period: 'Dec 2023 – Oct 2025',
    highlights: [
      'Delivered specialised OT services to children aged 2-14 years with neurodevelopmental conditions',
      'Performed standardised assessments including sensory profiles and motor skill evaluations',
      'Applied NDT techniques and visual scheduling strategies',
      'Developed Individualised Education Programmes (IEPs) with SMART goals',
    ],
  },
  {
    type: 'work',
    title: 'Occupational Therapist',
    organisation: 'Fortune Hearing Speech and OT Clinic',
    location: 'Hyderabad, India',
    period: '2021 – 2023',
    highlights: [
      'Assessed and treated paediatric and adult clients across neurological, orthopaedic, and developmental caseloads',
      'Delivered early intervention services for children with developmental delays',
      'Provided hand therapy and splinting services for post-surgical and traumatic injury cases',
      'Collaborated with audiologists and speech-language pathologists',
    ],
  },
  {
    type: 'education',
    title: 'Bachelor of Occupational Therapy (BOT)',
    organisation: 'Saveetha College of Occupational Therapy, Saveetha University',
    location: 'Chennai, India',
    period: '2017 – 2022',
    highlights: [
      '4 years academic study plus 6 months compulsory rotating internship',
      'Clinical placements in Psychiatry, Plastic Surgery (Hand Unit), Neuro Rehabilitation, and Community-Based Rehabilitation',
      'Research project: "The Effect of Visual Scheduling to Improve Self Care Skills in Children with Moderate Autism"',
    ],
  },
];

const certifications = [
  'National Conference on Autism — Evidence-Based Practice in Autism (2018)',
  'CME on Cognitive Behaviour Therapy (2018)',
  'OTICON 2021 — Annual National Conference, AIOTA',
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-teal-50/30">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Background</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Experience & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="text-gray-600">
            A strong foundation in occupational therapy with extensive clinical experience across 
            multiple prestigious child development centres in India.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8 ">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.organisation}-${index}`}
                className="card-hover bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-teal-100 hover:border-teal-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    exp.type === 'work' ? 'bg-teal-100' : 'bg-amber-100'
                  }`}>
                    {exp.type === 'work' ? (
                      <Briefcase className="text-teal-600" size={24} />
                    ) : (
                      <GraduationCap className="text-amber-600" size={24} />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-teal-600 font-medium">{exp.organisation}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className=" card-hover bg-white rounded-2xl p-6 shadow-sm border border-teal-100 hover:border-teal-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Award className="text-teal-600" size={20} />
                </div>
                <h3 className="font-bold text-gray-900">Certifications & Conferences</h3>
              </div>
              <ul className="space-y-4">
                {certifications.map((cert, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-3">
                    <span className="w-6 h-6 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div className=" bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">Clinical Specialisations</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Paediatric OT',
                  'Sensory Integration',
                  'Early Intervention',
                  'NDT',
                  'DIR Floortime',
                  'Hand Therapy',
                  'ADL Training',
                  'Visual Scheduling',
                  'Play-Based Therapy',
                  'Caregiver Coaching',
                ].map((spec) => (
                  <span
                    key={spec}
                    className="px-3 py-1.5 bg-white/20 rounded-full text-sm font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className=" card-hover bg-white rounded-2xl p-6 shadow-sm border border-teal-100 hover:border-teal-200">
              <h3 className="font-bold text-gray-900 mb-4">Assessment Tools</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Sensory Profile', 'PDMS-2', 'BOT-2', 'VMI', 'COPM', 'Goal-Attainment Scaling'].map((tool) => (
                  <div key={tool} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-teal-400 rounded-full" />
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
