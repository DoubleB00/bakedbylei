import { Cake, Baby, Sparkles, PartyPopper, Gift } from 'lucide-react';

export default function Occasions() {
  const occasions = [
    {
      icon: Cake,
      title: 'Birthdays',
      description: 'Make their special day even sweeter with custom treats',
    },
    {
      icon: Baby,
      title: 'Baby Showers',
      description: 'Celebrate new beginnings with adorable themed desserts',
    },
    {
      icon: Sparkles,
      title: 'Holidays',
      description: 'Festive treats for every holiday celebration',
    },
    {
      icon: PartyPopper,
      title: 'Parties',
      description: 'The perfect sweet addition to any party or gathering',
    },
    {
      icon: Gift,
      title: 'Special Events',
      description: 'Weddings, graduations, anniversaries, and more',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Perfect for Every <span className="text-rose-400">Occasion</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, our custom treats add
            that special touch to your most memorable moments.
          </p>
        </div>

        {/* Occasions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {occasions.map((occasion, index) => {
            const IconComponent = occasion.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-rose-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-400 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {occasion.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {occasion.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Whatever the occasion, we'll create treats that make it unforgettable
          </p>
        </div>
      </div>
    </section>
  );
}
