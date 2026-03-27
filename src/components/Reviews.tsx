import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: 'Sarah M.',
      location: 'Red Bank, NJ',
      text: 'The cake pops Lei made for my daughter\'s birthday were absolutely stunning! They tasted even better than they looked, and that\'s saying something because the presentation was gorgeous. Everyone at the party was asking where I got them.',
      rating: 5,
    },
    {
      name: 'Jennifer L.',
      location: 'Colts Neck, NJ',
      text: 'I ordered custom chocolate covered Oreos for my baby shower and they were the hit of the party! Lei was so easy to work with, and the colors matched my theme perfectly. They were fresh, delicious, and beautifully packaged.',
      rating: 5,
    },
    {
      name: 'Michelle T.',
      location: 'Marlboro, NJ',
      text: 'Lei is amazing! I\'ve ordered from her multiple times for different occasions and she never disappoints. The quality and attention to detail is unmatched. Her treats are always fresh and she\'s so reliable. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Amanda K.',
      location: 'Holmdel, NJ',
      text: 'The rice krispie treats were a huge hit at my son\'s birthday party! Lei created the most adorable superhero themed treats that were almost too cute to eat. Almost! They were delicious and the kids loved them.',
      rating: 5,
    },
    {
      name: 'Lisa R.',
      location: 'Rumson, NJ',
      text: 'I can\'t say enough good things about Baked By Lei! The pretzels I ordered for our holiday party were beautifully decorated and tasted incredible. Lei went above and beyond to make sure everything was perfect.',
      rating: 5,
    },
    {
      name: 'Katie B.',
      location: 'Tinton Falls, NJ',
      text: 'The cake pop cones were such a fun and unique addition to our party! Lei was professional, responsive, and created exactly what I envisioned. I\'ll definitely be ordering again for future events.',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            What Our Customers <span className="text-rose-400">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have
            to say about their experience with Baked By Lei.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-rose-400 fill-current"
                    size={20}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-rose-400 mb-2">100+</div>
            <p className="text-gray-600 font-medium">Happy Customers</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-rose-400 mb-2">500+</div>
            <p className="text-gray-600 font-medium">Custom Treats Made</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-rose-400 mb-2">5★</div>
            <p className="text-gray-600 font-medium">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
