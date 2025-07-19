import React, { useState, useEffect, useRef } from 'react';
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
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoScrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setShowWhatsAppText(scrollPosition < 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Video carousel scroll tracking
  useEffect(() => {
    const scrollContainer = videoScrollRef.current;
    if (!scrollContainer) return;

    const handleVideoScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const cardWidth = 320 + 24; // card width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentVideoIndex(Math.min(index, 3)); // Max 4 dots (0-3)
    };

    scrollContainer.addEventListener('scroll', handleVideoScroll);
    return () => scrollContainer.removeEventListener('scroll', handleVideoScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+911234567890';
    const message = 'Hello! I would like to know more about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const videos = [
    {
      id: 1,
      title: "How Potato Traders Scaled to National Wholesale",
      description: "Learn how local potato traders expanded their customer base and achieved national reach using Shudh's marketplace...",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "Agriculture"
    },
    {
      id: 2,
      title: "Chandni Chowk Rice Miller's Business Growth Story",
      description: "How a century-old family business expanded their customer base and achieved substantial revenue growth using Shudh's App...",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "Traditional Business"
    },
    {
      id: 3,
      title: "Small Kirana Store to Multi-Location Success",
      description: "Watch how a single pan shop owner expanded to multiple locations and increased monthly revenue significantly using Shudh's inventory management...",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "Retail"
    },
    {
      id: 4,
      title: "How Our Micro-Merchant Delivers Better",
      description: "Learn how Shudh's hyperlocal delivery model helps businesses reach customers faster, improving delivery speed and customer satisfaction...",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "Logistics"
    },
    {
      id: 5,
      title: "Electronics Distributor Digital Transformation",
      description: "How a traditional electronics distributor modernized their operations and doubled their revenue using Shudh's platform...",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "Electronics"
    },
    {
      id: 6,
      title: "Textile Manufacturer's Export Journey",
      description: "Watch how a local textile manufacturer started exporting internationally using Shudh's B2B connections...",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "Manufacturing"
    }
  ];

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
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-green-600 transition-colors font-medium">Home</button>
            <button onClick={() => scrollToSection('products')} className="text-gray-600 hover:text-green-600 transition-colors font-medium">Products</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-green-600 transition-colors font-medium">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-green-600 transition-colors font-medium">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-green-600 transition-colors font-medium">Contact</button>
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
              <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-green-600 transition-colors font-medium text-left">Home</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-600 hover:text-green-600 transition-colors font-medium text-left">Products</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-green-600 transition-colors font-medium text-left">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-green-600 transition-colors font-medium text-left">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-green-600 transition-colors font-medium text-left">Contact</button>
            </nav>
          </div>
        )}
      </header>

      {/* Trusted by Millions Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Trusted by Millions of Small Businesses Across Bharat</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From kiranas and chemists to hotels and offices - Shudh is the growth partner for Bharat's small businesses
            </p>
            <div className="mt-8">
              <span className="text-blue-600 cursor-pointer hover:underline">Swipe to see more stories →</span>
            </div>
          </div>

          {/* Video Carousel */}
          <div className="relative">
            <div ref={videoScrollRef} className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
                {videos.map((video, index) => (
                  <div 
                    key={video.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer flex-shrink-0"
                    style={{ width: '320px' }}
                    onClick={() => openVideoModal(video)}
                  >
                    <div className="relative h-48">
                      <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                          {video.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                          ▶ Video
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">"{video.title}"</h3>
                      <p className="text-gray-600 text-sm line-clamp-3">{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentVideoIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-800">{selectedVideo.title}</h3>
              <button
                onClick={closeVideoModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <p className="text-gray-600">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Red Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  India's Largest eB2B Platform for Small Businesses Owners
                </h2>
                <p className="text-xl text-red-100 leading-relaxed">
                  Order a wide range of high-quality products, trusted brands, and seamless delivery — all in one platform.
                </p>
              </div>

              <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Register Today!
              </button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <img 
                      src="/placeholder.svg" 
                      alt="Mobile App Interface 1" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                    <img 
                      src="/placeholder.svg" 
                      alt="Mobile App Interface 2" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white rounded-xl p-4 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <img 
                      src="/placeholder.svg" 
                      alt="Mobile App Interface 3" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                    <img 
                      src="/placeholder.svg" 
                      alt="Mobile App Interface 4" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
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
      <section id="products" className="py-16 bg-white">
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

      {/* Mobile App Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-800">
                  Order Anywhere, Anytime with the Shudh App
                </h2>
                <p className="text-xl text-gray-600">
                  Experience the power of pure business at your fingertips
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMobile className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Exclusive Mobile-Only Deals</h3>
                    <p className="text-gray-600">Access special discounts and flash sales available only on our mobile app</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaRocket className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart App for Smart Buyer</h3>
                    <p className="text-gray-600">Shop over lakhs of products, set repeat orders, track deliveries, and manage credit — all from your phone.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaShieldAlt className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Secure Payment Gateway</h3>
                    <p className="text-gray-600">Multiple payment options with bank-grade security and instant confirmations</p>
                  </div>
                </div>
              </div>

              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Download Shudh Now
              </button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8">
                <img 
                  src="/lovable-uploads/2f466a80-acad-41f7-82b7-bd647f6325b9.png" 
                  alt="Shudh Mobile App" 
                  className="w-full h-80 object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get Started in Under 10 Minutes</h2>
            <p className="text-xl text-gray-600">Simple steps to join India's largest B2B marketplace</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center space-y-6 p-8 bg-blue-50 rounded-2xl">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Quick Sign-Up</h3>
                <p className="text-gray-600">Sign up with your mobile number, business name and pin code</p>
              </div>
            </div>

            <div className="text-center space-y-6 p-8 bg-green-50 rounded-2xl">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Instant Verification</h3>
                <p className="text-gray-600">Upload GSTIN or Shop License for instant KYC approval</p>
              </div>
            </div>

            <div className="text-center space-y-6 p-8 bg-orange-50 rounded-2xl">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Order & Grow</h3>
                <p className="text-gray-600">Access & enjoy competitive prices, credit, and fast delivery — right from the app</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 shadow-lg">
              Register Today!
            </button>
          </div>
        </div>
      </section>

      {/* New Services Section */}
      <section id="services" className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
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
      <section id="about" className="py-16 bg-white">
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
      <footer id="contact" className="bg-gray-900 text-white py-16">
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
