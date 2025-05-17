const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose SoftSell</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">We're revolutionizing the way companies monetize unused software assets</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <div className="bg-secondary bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-shield-alt text-secondary"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure Transactions</h3>
            <p className="text-gray-600 text-sm">Bank-level encryption and secure escrow services protect all transactions.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <div className="bg-secondary bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-percentage text-secondary"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Competitive Rates</h3>
            <p className="text-gray-600 text-sm">We offer the highest payouts in the industry with transparent pricing.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <div className="bg-secondary bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-globe text-secondary"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Global Marketplace</h3>
            <p className="text-gray-600 text-sm">Access to buyers worldwide increases your chances of quick sales.</p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <div className="bg-secondary bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-headset text-secondary"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Dedicated Support</h3>
            <p className="text-gray-600 text-sm">Our expert team is available 24/7 to assist with any questions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;