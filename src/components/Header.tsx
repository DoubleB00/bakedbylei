import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold text-rose-400 hover:text-rose-500 transition-colors"
          >
            Baked By Lei
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-700 hover:text-rose-400 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-rose-400 transition-colors font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('custom-orders')}
              className="text-gray-700 hover:text-rose-400 transition-colors font-medium"
            >
              Custom Orders
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-gray-700 hover:text-rose-400 transition-colors font-medium"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-rose-400 transition-colors font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-rose-400 transition-colors font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-rose-400 text-white px-6 py-2.5 rounded-full hover:bg-rose-500 transition-colors font-medium shadow-sm hover:shadow-md"
            >
              Order Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-rose-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-700 hover:text-rose-400 transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-gray-700 hover:text-rose-400 transition-colors font-medium text-left"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('custom-orders')}
                className="text-gray-700 hover:text-rose-400 transition-colors font-medium text-left"
              >
                Custom Orders
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-gray-700 hover:text-rose-400 transition-colors font-medium text-left"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-rose-400 transition-colors font-medium text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-rose-400 transition-colors font-medium text-left"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-rose-400 text-white px-6 py-2.5 rounded-full hover:bg-rose-500 transition-colors font-medium shadow-sm text-center"
              >
                Order Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
