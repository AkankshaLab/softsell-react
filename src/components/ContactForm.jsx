import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    licenseType: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = {
      name: false,
      email: false,
      licenseType: false
    };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = true;
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = true;
      isValid = false;
    }

    // Validate license type
    if (!formData.licenseType) {
      newErrors.licenseType = true;
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      alert('Thank you for your submission! We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
      });
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">Ready to Sell Your Licenses?</h2>
            <p className="text-lg text-gray-600 mb-6">Get a free, no-obligation quote for your unused software licenses today.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-primary bg-opacity-10 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-check text-primary text-sm"></i>
                </div>
                <p className="text-gray-700">No upfront fees or hidden charges</p>
              </div>
              <div className="flex items-center">
                <div className="bg-primary bg-opacity-10 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-check text-primary text-sm"></i>
                </div>
                <p className="text-gray-700">Confidential and secure process</p>
              </div>
              <div className="flex items-center">
                <div className="bg-primary bg-opacity-10 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-check text-primary text-sm"></i>
                </div>
                <p className="text-gray-700">Response within 24 hours</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                  required
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">Please enter your name</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company (Optional)</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="license-type" className="block text-gray-700 font-medium mb-2">License Type</label>
                <select 
                  id="license-type" 
                  name="licenseType" 
                  value={formData.licenseType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                  required
                >
                  <option value="" disabled>Select license type</option>
                  <option value="adobe">Adobe Creative Cloud</option>
                  <option value="microsoft">Microsoft Office/Windows</option>
                  <option value="autodesk">Autodesk</option>
                  <option value="vmware">VMware</option>
                  <option value="other">Other</option>
                </select>
                {errors.licenseType && <p className="text-red-500 text-sm mt-1">Please select a license type</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message (Optional)</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="3" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                Get My Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;