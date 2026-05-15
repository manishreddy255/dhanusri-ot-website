import { ClipboardList, Video, FileText, Repeat, TrendingUp, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Book a Consultation',
    description: 'Fill out the contact form with your child\'s details and concerns. I will review your request and respond within 24 hours to schedule your session at a convenient time.',
    duration: '5 minutes',
  },
  {
    icon: Video,
    step: '02',
    title: 'Initial Assessment',
    description: 'We meet via secure video call for a comprehensive 60-90 minute evaluation. I observe your child, conduct standardised screenings, discuss your concerns, and understand your family goals.',
    duration: '60-90 minutes',
  },
  {
    icon: FileText,
    step: '03',
    title: 'Personalised Therapy Plan',
    description: 'Within 48 hours, you receive a detailed report with assessment findings, SMART goals, and a customised intervention plan tailored to your child\'s unique developmental needs.',
    duration: '48 hours',
  },
  {
    icon: Repeat,
    step: '04',
    title: 'Regular Therapy Sessions',
    description: 'Engaging weekly or bi-weekly video sessions where I guide you and your child through evidence-based interventions. Sessions include sensory activities, motor skill training, and behavioural strategies.',
    duration: '45-60 minutes',
  },
  {
    icon: TrendingUp,
    step: '05',
    title: 'Progress Monitoring',
    description: 'Every 4-6 weeks, we review progress using goal-attainment scaling and standardised measures. The therapy plan is adjusted based on your child\'s evolving strengths and challenges.',
    duration: 'Ongoing',
  },
  {
    icon: HeartHandshake,
    step: '06',
    title: 'Empowered Independence',
    description: 'The ultimate goal: your child gains functional independence in daily activities, improved self-regulation, and enhanced participation at home, school, and in the community.',
    duration: 'Lifelong impact',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 text-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-300 font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Your Child&apos;s Journey to <span className="text-teal-300">Progress</span>
          </h2>
          <p className="text-teal-100/80">
            A structured, evidence-based approach from first contact to meaningful outcomes. 
            Every step is designed to support your family and empower your child.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {steps.map((item) => (
            <div
              key={item.step}
              className="reveal relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 lg:p-8 hover:bg-white/15 transition-all group"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center text-teal-900 font-bold text-sm shadow-lg">
                {item.step}
              </div>

              <div className="w-14 h-14 bg-teal-400/20 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <item.icon className="text-teal-300" size={28} />
              </div>

              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-teal-100/80 text-sm leading-relaxed mb-4">{item.description}</p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-400/20 rounded-full text-xs font-medium text-teal-200">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                {item.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
