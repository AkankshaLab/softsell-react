const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Trusted by businesses of all sizes to maximize their software investments</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                <span className="text-primary font-bold">JD</span>
              </div>
              <div>
                <h4 className="font-bold">John Dawson</h4>
                <p className="text-gray-600 text-sm">CTO, TechForward Inc.</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"SoftSell helped us recover over $75,000 in unused Adobe and Microsoft licenses. Their platform was incredibly easy to use, and we received payment faster than expected. Highly recommended for any business looking to optimize their software spend."</p>
            <div className="mt-4 text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                <span className="text-primary font-bold">SM</span>
              </div>
              <div>
                <h4 className="font-bold">Sarah Mitchell</h4>
                <p className="text-gray-600 text-sm">IT Director, GreenLeaf Solutions</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"After a company downsizing, we had dozens of unused Autodesk licenses. SoftSell's valuation was fair and their team handled all the paperwork. We'll definitely use them again for future license management needs."</p>
            <div className="mt-4 text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;