import { Palette, Heart, Sparkles } from 'lucide-react';

export default function CustomOrders() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="custom-orders"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1721936/pexels-photo-1721936.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Custom decorated desserts for special occasions"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Need Something <span className="text-rose-400">Custom?</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Baked By Lei, we specialize in creating unique, custom treats
                that bring your vision to life. Whether it's a themed birthday
                party, a baby shower, holiday celebration, or any special
                occasion, we'll work with you to design treats that perfectly
                match your event.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From color schemes to custom designs, every detail is tailored to
                make your celebration unforgettable. Let's create something
                beautiful together.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-400 rounded-full flex items-center justify-center">
                  <Palette className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Custom Colors & Themes
                  </h3>
                  <p className="text-gray-600">
                    Match any color palette or party theme perfectly
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-400 rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Made with Love
                  </h3>
                  <p className="text-gray-600">
                    Every treat is handcrafted with care and attention to detail
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-400 rounded-full flex items-center justify-center">
                  <Sparkles className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Special Occasions
                  </h3>
                  <p className="text-gray-600">
                    Perfect for birthdays, baby showers, holidays, and parties
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={scrollToContact}
              className="bg-rose-400 text-white px-8 py-4 rounded-full hover:bg-rose-500 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Request a Custom Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
