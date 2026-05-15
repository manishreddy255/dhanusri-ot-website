import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    question: 'How does online paediatric occupational therapy work?',
    answer: 'Online therapy is conducted via secure video consultation. I observe your child through the camera, guide you through structured activities using everyday household items, and provide real-time feedback. Parents act as my "hands" while I direct the session. This model has proven highly effective for assessments, sensory integration activities, fine motor training, and caregiver coaching.',
  },
  {
    question: 'What age groups do you work with?',
    answer: 'I specialise in children from birth to 14 years old. My expertise covers early intervention (0-3 years), preschool-aged children (3-5 years), and school-aged children (6-14 years). Each age group receives developmentally appropriate interventions tailored to their specific needs and goals.',
  },
  {
    question: 'What conditions do you assess and treat?',
    answer: 'I work with children diagnosed with Autism Spectrum Disorder (ASD), ADHD, Sensory Processing Disorder (SPD), Cerebral Palsy, Down Syndrome, Global Developmental Delay, Learning Disabilities, Handwriting Difficulties, and general developmental concerns. I also support children without formal diagnoses who struggle with self-regulation, attention, or daily living skills.',
  },
  {
    question: 'What should I prepare for the first online assessment?',
    answer: 'Please ensure a quiet, well-lit room with enough space for your child to move. Have some basic items ready: a ball, blocks, crayons, paper, scissors, and any toys your child enjoys. Ensure a stable internet connection and test your camera and microphone beforehand. I will send a detailed preparation guide once your appointment is confirmed.',
  },
  {
    question: 'How long does an online assessment take?',
    answer: 'Initial comprehensive assessments typically take 60-90 minutes. This includes parent interview, structured observation of your child, standardised screening tools, and preliminary feedback. Follow-up consultations are usually 45-60 minutes. Session duration may vary based on your child\'s engagement and needs.',
  },
  {
    question: 'Do you accept referrals from doctors and schools?',
    answer: 'Absolutely. I welcome referrals from paediatricians, neurologists, psychologists, developmental paediatricians, speech therapists, physiotherapists, special educators, and schools. I provide detailed assessment reports and collaborate with your child\'s existing care team to ensure coordinated, holistic intervention.',
  },
  {
    question: 'How soon can I expect to see results?',
    answer: 'Every child progresses at their own pace. Typically, families notice small improvements in engagement and regulation within 2-4 weeks of consistent therapy. Measurable functional gains—such as improved handwriting, independent dressing, or better sensory tolerance—usually become evident within 8-12 weeks. Consistency and caregiver involvement are key accelerators.',
  },
  {
    question: 'What assessment tools do you use?',
    answer: 'I use evidence-based standardised tools including the Sensory Profile, PDMS-2 (Peabody Developmental Motor Scales), BOT-2 (Bruininks-Oseretsky Test of Motor Proficiency), VMI (Beery-Buktenica Developmental Test of Visual-Motor Integration), COPM (Canadian Occupational Performance Measure), and Goal-Attainment Scaling. The specific tools depend on your child\'s age and presenting concerns.',
  },
  {
    question: 'Is online therapy as effective as in-person therapy?',
    answer: 'Research supports the effectiveness of telehealth for paediatric occupational therapy, particularly for assessments, caregiver coaching, sensory strategies, and fine motor guidance. While some hands-on techniques are better suited to in-person delivery, the majority of interventions—including sensory diets, visual scheduling, behaviour strategies, and ADL training—translate very well to video sessions. The key is active parent participation.',
  },
  {
    question: 'What are your fees and payment options?',
    answer: 'Please use the contact form to inquire about current consultation fees, as they vary based on service type and session duration. I offer flexible packages for ongoing therapy programmes. Payment can be made via bank transfer or UPI. A detailed fee structure will be shared once we discuss your child\'s specific needs.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-600">
            Everything you need to know about online paediatric occupational therapy, 
            assessments, and the consultation process.
          </p>
        </div>

        <div className="space-y-4 stagger-children">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="reveal border border-gray-200 rounded-xl overflow-hidden hover:border-teal-200 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-teal-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <div>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-50 rounded-full px-6 py-3 text-teal-700">
            <MessageCircleQuestion size={18} />
            <span className="text-sm font-medium">Still have questions? <a href="#contact" className="underline hover:text-teal-900">Send a message</a></span>
          </div>
        </div>
      </div>
    </section>
  );
}
