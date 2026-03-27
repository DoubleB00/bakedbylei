export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-cream-50">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Custom Treats for{' '}
                <span className="text-rose-400">Every Occasion</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
                Cake pops, chocolate covered Oreos, pretzels, rice krispies, and
                sweet treats made to order in Monmouth County, NJ.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-rose-400 text-white px-8 py-4 rounded-full hover:bg-rose-500 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Order Now
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="bg-white text-rose-400 px-8 py-4 rounded-full hover:bg-rose-50 transition-all font-semibold text-lg shadow-md border-2 border-rose-200"
              >
                View Menu
              </button>
            </div>

            {/* Support Text */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                <span>Custom treats</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                <span>Monmouth County, NJ</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                <span>Message to order</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1120019/pexels-photo-1120019.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beautiful assortment of colorful cake pops"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 hidden sm:block">
              <div className="text-center">
                <div className="text-4xl font-bold text-rose-400">100+</div>
                <div className="text-sm text-gray-600 font-medium mt-1">
                  Happy Customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
