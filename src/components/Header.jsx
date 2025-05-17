import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <i className="fas fa-cubes text-primary text-2xl mr-2"></i>
              <span className="text-xl font-bold text-primary">SoftSell</span>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <a href="#how-it-works" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium">How It Works</a>
            <a href="#why-choose-us" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium">Why Choose Us</a>
            <a href="#testimonials" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium">Testimonials</a>
            <a href="#contact" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium">Contact</a>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">How It Works</a>
          <a href="#why-choose-us" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Why Choose Us</a>
          <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Testimonials</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;