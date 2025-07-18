import React, { useState, useEffect } from 'react';
import { 
  FaWhatsapp, 
  FaBars, 
  FaTimes, 
  FaArrowRight, 
  FaUsers, 
  FaChartLine, 
  FaShieldAlt, 
  FaStar, 
  FaCheckCircle, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaLaptop,
  FaMobile,
  FaShoppingCart,
  FaBox,
  FaIndustry,
  FaCog,
  FaLeaf,
  FaCar,
  FaHeart,
  FaThumbsUp,
  FaAward,
  FaGlobe,
  FaRocket,
  FaHandshake
} from 'react-icons/fa';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showWhatsAppText, setShowWhatsAppText] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setShowWhatsAppText(scrollPosition < 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+911234567890';
    const message = 'Hello! I would like to know more about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">Shudh</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Products</a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Services</a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors font-medium">About</a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Contact</a>
          </nav>

          {/* Login Button */}
          <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Login
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Products</a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Services</a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors font-medium">About</a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                  Pure. Fresh.{' '}
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Shudh.
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  India's premier B2B marketplace for pure and authentic products. 
                  Connect with verified suppliers and grow your business with quality assurance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <FaArrowRight size={20} />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-green-600 hover:text-green-600 transition-all duration-300">
                  Learn More
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" size={16} />
                  <span>Verified Suppliers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" size={16} />
                  <span>Quality Assured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" size={16} />
                  <span>Fast Delivery</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/placeholder.svg" 
                  alt="B2B Business" 
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">2M+ Active Businesses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2M+', label: 'Active Buyers', icon: FaUsers },
              { number: '800K+', label: 'Suppliers', icon: FaChartLine },
              { number: '15M+', label: 'Products', icon: FaShieldAlt },
              { number: '4.9', label: 'Rating', icon: FaStar }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-3 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <stat.icon className="mx-auto text-green-600" size={32} />
                <div className="text-3xl font-bold text-gray-800">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Shudh?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide everything you need to grow your business with pure and authentic products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Assured',
                description: 'All our products go through rigorous quality checks to ensure purity and authenticity',
                icon: FaShieldAlt,
                color: 'green'
              },
              {
                title: 'Competitive Pricing',
                description: 'Get the best prices with our transparent pricing system and bulk discounts',
                icon: FaChartLine,
                color: 'blue'
              },
              {
                title: 'Secure Transactions',
                description: 'Your payments are protected with our secure payment gateway and escrow service',
                icon: FaCheckCircle,
                color: 'purple'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon className={`text-${feature.color}-600`} size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Categories</h2>
            <p className="text-xl text-gray-600">Explore thousands of pure products across various industries</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Electronics', icon: FaLaptop },
              { name: 'Textiles', icon: FaHeart },
              { name: 'Agriculture', icon: FaLeaf },
              { name: 'Machinery', icon: FaCog },
              { name: 'Automotive', icon: FaCar },
              { name: 'Healthcare', icon: FaShieldAlt },
              { name: 'Food & Beverages', icon: FaHeart },
              { name: 'Construction', icon: FaIndustry }
            ].map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Services Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Comprehensive solutions for all your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Bulk Orders', icon: FaBox, description: 'Large quantity orders with special pricing' },
              { title: 'Quick Delivery', icon: FaRocket, description: 'Fast and reliable delivery nationwide' },
              { title: 'Quality Control', icon: FaAward, description: 'Rigorous quality checks on all products' },
              { title: 'Customer Support', icon: FaHandshake, description: '24/7 dedicated customer support' }
            ].map((service, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <service.icon size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-green-100 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Shudh</h2>
              <p className="text-lg text-gray-600 mb-6">
                Shudh is India's leading B2B marketplace dedicated to providing pure, authentic, and quality products. 
                We bridge the gap between buyers and sellers, ensuring transparency and trust in every transaction.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaGlobe className="text-green-600" size={20} />
                  <span className="text-gray-700">Pan-India presence with 500+ cities coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaShieldAlt className="text-green-600" size={20} />
                  <span className="text-gray-700">100% verified suppliers with quality guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaRocket className="text-green-600" size={20} />
                  <span className="text-gray-700">Fast delivery and excellent customer service</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="About Shudh" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Experience Pure Business?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join millions of businesses already using Shudh to find authentic suppliers, quality products, and grow their revenue.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg">
            Start Your Journey Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-2xl font-bold">Shudh</span>
              </div>
              <p className="text-gray-400 mb-6">
                India's leading B2B marketplace for pure and authentic products.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <FaPhone size={16} />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <FaEnvelope size={16} />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <FaMapMarkerAlt size={16} />
                </div>
              </div>
            </div>

            {[
              {
                title: 'Company',
                links: ['About Us', 'Our Team', 'Careers', 'Press', 'Blog']
              },
              {
                title: 'Services',
                links: ['Buy Products', 'Sell Products', 'Quality Assurance', 'Logistics', 'Finance']
              },
              {
                title: 'Support',
                links: ['Help Center', 'Contact Us', 'Dispute Resolution', 'Report Issues', 'FAQ']
              }
            ].map((column, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-6">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Shudh. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button with Text */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 animate-bounce cursor-pointer"
             style={{ animationDuration: '2s' }}
             onClick={handleWhatsAppClick}>
          <div className="flex items-center space-x-3 px-4 py-3">
            <FaWhatsapp size={24} />
            {showWhatsAppText && (
              <span className="font-medium text-sm whitespace-nowrap">Want to chat?</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
