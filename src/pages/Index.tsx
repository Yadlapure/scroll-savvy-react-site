
import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowRight, Users, TrendingUp, Shield, Star, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setShowWhatsApp(scrollPosition > 300);
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
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">BizMarket</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Products</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
          </nav>

          {/* Login Button */}
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Login
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Products</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                  Connect. Trade.{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Grow.
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  India's largest B2B marketplace connecting businesses across the country. 
                  Discover products, find suppliers, and grow your business with us.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  Learn More
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Verified Suppliers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Secure Payments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Fast Delivery</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/placeholder.svg" 
                  alt="B2B Business" 
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">1M+ Active Businesses</span>
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
              { number: '1M+', label: 'Active Buyers', icon: Users },
              { number: '500K+', label: 'Suppliers', icon: TrendingUp },
              { number: '10M+', label: 'Products', icon: Shield },
              { number: '4.8', label: 'Rating', icon: Star }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-3 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <stat.icon className="mx-auto text-blue-600" size={32} />
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose BizMarket?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide everything you need to grow your business in the digital marketplace
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Verified Suppliers',
                description: 'All our suppliers are thoroughly verified to ensure quality and reliability',
                icon: Shield,
                color: 'blue'
              },
              {
                title: 'Competitive Pricing',
                description: 'Get the best prices with our transparent pricing system and bulk discounts',
                icon: TrendingUp,
                color: 'green'
              },
              {
                title: 'Secure Transactions',
                description: 'Your payments are protected with our secure payment gateway and escrow service',
                icon: CheckCircle,
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
            <p className="text-xl text-gray-600">Explore thousands of products across various industries</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Electronics', 'Textiles', 'Agriculture', 'Machinery',
              'Chemicals', 'Automotive', 'Healthcare', 'Construction'
            ].map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{category[0]}</span>
                </div>
                <h3 className="font-semibold text-gray-800">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                company: 'Kumar Electronics',
                feedback: 'BizMarket has transformed our business. We found reliable suppliers and increased our profit margins significantly.',
                rating: 5
              },
              {
                name: 'Priya Sharma',
                company: 'Sharma Textiles',
                feedback: 'The platform is user-friendly and the customer support is excellent. Highly recommended for B2B trading.',
                rating: 5
              },
              {
                name: 'Amit Patel',
                company: 'Patel Industries',
                feedback: 'Great variety of products and competitive prices. BizMarket is our go-to platform for all business needs.',
                rating: 4
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.feedback}"</p>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join millions of businesses already using BizMarket to find suppliers, customers, and grow their revenue.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg">
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
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <span className="text-2xl font-bold">BizMarket</span>
              </div>
              <p className="text-gray-400 mb-6">
                India's leading B2B marketplace connecting businesses nationwide.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Phone size={16} />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Mail size={16} />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <MapPin size={16} />
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
                links: ['Buy Products', 'Sell Products', 'Trade Assurance', 'Logistics', 'Finance']
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
            <p>&copy; 2024 BizMarket. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      {showWhatsApp && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce"
            style={{ animationDuration: '2s' }}
          >
            <MessageCircle size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
