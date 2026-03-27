import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I place an order?',
      answer:
        'Ordering is easy! Simply fill out the contact form below with details about what you\'d like, your event date, and any specific customization requests. You can also message us directly through Instagram. We\'ll get back to you within 24 hours to discuss your order and confirm details.',
    },
    {
      question: 'What treats do you offer?',
      answer:
        'We specialize in cake pops, chocolate covered Oreos, chocolate covered pretzels, rice krispie treats, and cake pop cones. All of our treats can be fully customized with your choice of colors, themes, and decorations to match any occasion.',
    },
    {
      question: 'Do you take custom orders?',
      answer:
        'Absolutely! Custom orders are our specialty. We love bringing your vision to life. Whether you have a specific theme, color scheme, or design in mind, we\'ll work with you to create treats that are perfect for your event. Just let us know what you\'re envisioning and we\'ll make it happen.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We proudly serve all of Monmouth County, New Jersey and surrounding areas. If you\'re not sure if we can deliver to your location, just ask! We\'re happy to work with you to arrange pickup or delivery options.',
    },
    {
      question: 'How far in advance should I order?',
      answer:
        'We recommend placing orders at least 1-2 weeks in advance, especially for larger orders or during busy seasons like holidays. However, we understand that sometimes you need treats on shorter notice. Reach out and we\'ll do our best to accommodate your timeline.',
    },
    {
      question: 'Do you do party and event treats?',
      answer:
        'Yes! We specialize in party and event treats. Whether you\'re planning a birthday party, baby shower, wedding, corporate event, or any celebration, we can create beautiful custom treats that will impress your guests. We can accommodate orders of all sizes.',
    },
    {
      question: 'Can I customize the flavors?',
      answer:
        'Yes! We offer a variety of cake flavors for our cake pops and cake pop cones. For our chocolate covered treats, you can choose from milk, dark, or white chocolate. Let us know your preferences when you order and we\'ll customize everything to your taste.',
    },
    {
      question: 'How should I store the treats?',
      answer:
        'All of our treats are best enjoyed fresh but can be stored at room temperature for 3-4 days in an airtight container. For longer storage, they can be refrigerated for up to a week. Just let them come to room temperature before serving for the best taste and texture.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Frequently Asked <span className="text-rose-400">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about ordering from Baked By Lei
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-rose-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-4">
            Still have questions? We'd love to hear from you!
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="text-rose-400 hover:text-rose-500 font-semibold text-lg underline"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
