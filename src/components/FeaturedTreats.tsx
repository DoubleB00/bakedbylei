export default function FeaturedTreats() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const treats = [
    {
      name: 'Cake Pops',
      description:
        'Perfectly round, beautifully decorated cake pops that are as delicious as they are adorable. Choose your flavors and colors to match any theme.',
      image:
        'https://images.pexels.com/photos/1120019/pexels-photo-1120019.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Chocolate Covered Oreos',
      description:
        'Classic Oreos dipped in premium chocolate and decorated with sprinkles, drizzles, and designs. A crowd-pleasing treat for any celebration.',
      image:
        'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Pretzels',
      description:
        'Crispy pretzels covered in smooth chocolate and beautifully decorated. The perfect sweet and salty combination for your special event.',
      image:
        'https://images.pexels.com/photos/3776942/pexels-photo-3776942.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Rice Krispies',
      description:
        'Handcrafted rice krispie treats dipped in chocolate and customized with your choice of colors and decorations. Light, crispy, and irresistible.',
      image:
        'https://images.pexels.com/photos/1030943/pexels-photo-1030943.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Cake Pop Cones',
      description:
        'Mini ice cream cone look-alikes filled with delicious cake pops. A unique and playful twist that guests of all ages will love.',
      image:
        'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Our Featured <span className="text-rose-400">Treats</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handcrafted with love and attention to detail. Every treat is made
            fresh to order and customized just for you.
          </p>
        </div>

        {/* Treats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treats.map((treat, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={treat.image}
                  alt={treat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-rose-400 transition-colors">
                  {treat.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {treat.description}
                </p>
                <button
                  onClick={scrollToContact}
                  className="w-full bg-rose-400 text-white py-3 rounded-full hover:bg-rose-500 transition-colors font-semibold shadow-sm hover:shadow-md"
                >
                  Order This
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
