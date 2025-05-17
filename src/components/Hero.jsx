const Hero = () => {
  return (
    <section className="gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Turn Unused Software Into Cash</h1>
            <p className="text-xl mb-8 opacity-90">SoftSell makes it easy to sell your unused software licenses securely and get paid quickly. No hassle, no risk.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-6 rounded-lg text-center transition duration-300">Get a Free Quote</a>
              <a href="#how-it-works" className="border-2 border-white hover:bg-white hover:bg-opacity-10 font-bold py-3 px-6 rounded-lg text-center transition duration-300">Learn More</a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="https://illustrations.popsy.co/amber/digital-nomad.svg" alt="Software license illustration" className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;