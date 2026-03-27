import { Instagram, Heart } from 'lucide-react';

export default function Footer() {
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
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-rose-400">Baked By Lei</h3>
            <p className="text-gray-400 leading-relaxed">
              Custom treats for every occasion. Handcrafted with love in Monmouth
              County, NJ.
            </p>
            <a
              href="https://instagram.com/bakedbylei"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors"
            >
              <Instagram size={20} />
              <span className="font-medium">@bakedbylei</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('custom-orders')}
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  Custom Orders
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">More</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="text-lg font-bold mb-4">Ready to Order?</h4>
            <p className="text-gray-400 mb-4">
              Let's create something delicious for your next celebration.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-rose-400 text-white px-6 py-3 rounded-full hover:bg-rose-500 transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Baked By Lei. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart size={16} className="text-rose-400 fill-current" />{' '}
            in Monmouth County, NJ
          </p>
        </div>
      </div>
    </footer>
  );
}
