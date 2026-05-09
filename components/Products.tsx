'use client';

export default function Products() {
  const products = [
    {
      title: 'Enterprise Solutions',
      category: 'Business Software',
      description: 'Comprehensive enterprise resource planning systems',
    },
    {
      title: 'Mobile Applications',
      category: 'App Development',
      description: 'Native and cross-platform mobile app development',
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web Solutions',
      description: 'Full-featured online store management systems',
    },
  ];

  return (
    <section id="products" className="py-20 md:py-28 bg-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">OUR PRODUCTS</p>
          <h2 className="section-title">
            Explore Our <span className="text-gradient">Products</span>
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Product Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-primary to-secondary rounded-lg mb-6 flex items-center justify-center group-hover:shadow-lg transition-all">
                <div className="text-white text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-2 opacity-80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                  <p className="text-sm font-semibold">Product Image</p>
                </div>
              </div>

              {/* Category Tag */}
              <div className="inline-block mb-4 px-3 py-1 bg-primary bg-opacity-10 rounded-full">
                <span className="text-primary text-xs font-semibold uppercase">
                  {product.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>

              <button className="text-primary font-semibold hover:gap-3 transition-all inline-flex items-center">
                Learn More <span className="ml-2">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
