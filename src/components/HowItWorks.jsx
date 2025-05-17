const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How SoftSell Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Selling your unused software licenses has never been easier with our simple 3-step process</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="step-card bg-white p-8 rounded-xl shadow-md transition duration-300">
            <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-cloud-upload-alt text-primary text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">1. Upload Your License</h3>
            <p className="text-gray-600">Simply provide details about your software license through our secure portal. We support all major software vendors.</p>
          </div>
          
          {/* Step 2 */}
          <div className="step-card bg-white p-8 rounded-xl shadow-md transition duration-300">
            <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-search-dollar text-primary text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">2. Get Instant Valuation</h3>
            <p className="text-gray-600">Our algorithm analyzes market demand and provides a fair market valuation within minutes.</p>
          </div>
          
          {/* Step 3 */}
          <div className="step-card bg-white p-8 rounded-xl shadow-md transition duration-300">
            <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-wallet text-primary text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">3. Get Paid Fast</h3>
            <p className="text-gray-600">Once approved, receive payment via your preferred method. Most sellers receive funds within 3 business days.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;