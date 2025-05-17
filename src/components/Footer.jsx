const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <i className="fas fa-cubes text-primary text-2xl mr-2"></i>
              <span className="text-xl font-bold">SoftSell</span>
            </div>
            <p className="text-gray-400">Helping businesses maximize their software investments since 2020.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition duration-300">How It Works</a></li>
              <li><a href="#why-choose-us" className="text-gray-400 hover:text-white transition duration-300">Why Choose Us</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-facebook"></i></a>
            </div>
            <p className="text-gray-400">support@softsell.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2023 SoftSell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;