// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Star, Phone, MapPin, Mail, ChefHat, Utensils, Wine, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, H3, P, Div, Footer } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions to ensure type safety for dynamic IDs
const getMenuItemId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['menu-item-0', 'menu-item-1', 'menu-item-2', 'menu-item-3', 'menu-item-4', 'menu-item-5'];
  return ids[index] || 'noID';
};

const getFeatureCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['feature-card-0', 'feature-card-1', 'feature-card-2', 'feature-card-3'];
  return ids[index] || 'noID';
};

const getTestimonialId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['testimonial-0', 'testimonial-1', 'testimonial-2'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [reservationForm, setReservationForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reservation submission
    console.log('Reservation submitted:', reservationForm);
    alert('Reservation request submitted! We will contact you shortly to confirm.');
    setReservationForm({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: ''
    });
  };

  const features = [
    {
      icon: <ChefHat className="w-12 h-12 text-red-500" />,
      title: "Master Chefs",
      description: "Our experienced chefs create culinary masterpieces using the finest ingredients"
    },
    {
      icon: <Utensils className="w-12 h-12 text-red-500" />,
      title: "Fine Dining",
      description: "Elegant atmosphere with impeccable service for an unforgettable dining experience"
    },
    {
      icon: <Wine className="w-12 h-12 text-red-500" />,
      title: "Premium Wines",
      description: "Carefully curated wine selection to perfectly complement your meal"
    },
    {
      icon: <Star className="w-12 h-12 text-red-500" />,
      title: "5-Star Service",
      description: "Exceptional service that exceeds expectations every single time"
    }
  ];

  const menuHighlights = [
    {
      name: "Wagyu Beef Tenderloin",
      description: "Premium wagyu beef with truffle sauce and seasonal vegetables",
      price: "$85",
      category: "Main Course"
    },
    {
      name: "Fresh Atlantic Salmon",
      description: "Pan-seared salmon with lemon herb butter and wild rice",
      price: "$42",
      category: "Seafood"
    },
    {
      name: "Lobster Bisque",
      description: "Rich and creamy lobster bisque with cognac and fresh herbs",
      price: "$28",
      category: "Appetizer"
    },
    {
      name: "Chocolate Soufflé",
      description: "Decadent chocolate soufflé with vanilla bean ice cream",
      price: "$18",
      category: "Dessert"
    },
    {
      name: "Duck Confit",
      description: "Slow-cooked duck leg with cherry gastrique and roasted potatoes",
      price: "$38",
      category: "Main Course"
    },
    {
      name: "Tuna Tartare",
      description: "Fresh yellowfin tuna with avocado, citrus, and sesame",
      price: "$24",
      category: "Appetizer"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely incredible dining experience! The food was exceptional and the service was flawless."
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Best restaurant in the city. The ambiance is perfect for special occasions and the wine selection is outstanding."
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      comment: "Every dish was a work of art. The attention to detail and flavor combinations were simply amazing."
    }
  ];

  return (
    <Container componentId="restaurant-landing-page">
      <Div 
        devId="main-wrapper" 
        devName="Main Wrapper" 
        devDescription="Main page wrapper with black background"
        className="min-h-screen bg-black text-white"
      >
        {/* Header */}
        <Header 
          devId="restaurant-header" 
          devName="Restaurant Header" 
          devDescription="Primary restaurant header with navigation"
          className="container mx-auto px-4 py-6"
        >
          <Nav 
            devId="restaurant-nav" 
            devName="Restaurant Navigation" 
            devDescription="Primary navigation bar"
            className="flex items-center justify-between"
          >
            <Div 
              devId="restaurant-logo" 
              devName="Restaurant Logo" 
              devDescription="Restaurant logo and brand name"
              className="flex items-center space-x-3"
            >
              <Div devId="noID" className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center">
                <ChefHat className="w-7 h-7 text-white" />
              </Div>
              <Span 
                devId="restaurant-name" 
                devName="Restaurant Name" 
                devDescription="Bella Vista restaurant brand name"
                className="text-3xl font-bold text-white"
              >
                Bella Vista
              </Span>
            </Div>
            <Div 
              devId="nav-actions" 
              devName="Navigation Actions" 
              devDescription="Navigation buttons and user menu"
              className="flex items-center space-x-6"
            >
              <a href="#menu" className="text-xl text-gray-300 hover:text-red-400 transition-colors">Menu</a>
              <a href="#reservations" className="text-xl text-gray-300 hover:text-red-400 transition-colors">Reservations</a>
              <a href="#contact" className="text-xl text-gray-300 hover:text-red-400 transition-colors">Contact</a>
              {isAuthenticated ? (
                <Div 
                  devId="user-section" 
                  devName="User Section" 
                  devDescription="Authenticated user welcome area"
                  className="flex items-center space-x-4"
                >
                  <Span 
                    devId="welcome-message" 
                    devName="Welcome Message" 
                    devDescription="Welcome message for authenticated user"
                    className="text-xl text-gray-300"
                  >
                    Welcome, {user?.name?.split(' ')[0]}!
                  </Span>
                  <Link to="/dashboard">
                    <Button 
                      devId="nav-dashboard-button"
                      devName="Navigation Dashboard Button"
                      devDescription="Dashboard button in navigation header for authenticated users"
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors text-lg font-semibold"
                    >
                      <User className="w-5 h-5 mr-2" />
                      Dashboard
                    </Button>
                  </Link>
                </Div>
              ) : (
                <Div 
                  devId="auth-buttons" 
                  devName="Authentication Buttons" 
                  devDescription="Login and register buttons for unauthenticated users"
                  className="flex items-center space-x-3"
                >
                  <Link to="/login">
                    <Button 
                      devId="nav-login-button"
                      devName="Navigation Login Button"
                      devDescription="Login button in navigation header"
                      variant="ghost" 
                      className="text-xl text-gray-300 hover:text-white transition-colors"
                    >
                      Staff Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button 
                      devId="nav-register-button"
                      devName="Navigation Register Button"
                      devDescription="Register button in navigation header"
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors text-lg font-semibold"
                    >
                      Join Team
                    </Button>
                  </Link>
                </Div>
              )}
            </Div>
          </Nav>
        </Header>

        {/* Hero Section */}
        <Container componentId="hero-section">
          <Section 
            devId="hero-content" 
            devName="Hero Content" 
            devDescription="Main hero section with restaurant showcase"
            className="container mx-auto px-4 py-20 text-center"
          >
            <Div 
              devId="hero-content-wrapper" 
              devName="Hero Content Wrapper" 
              devDescription="Animated wrapper for hero content"
              className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <H1 
                devId="hero-title" 
                devName="Hero Title" 
                devDescription="Main hero title showcasing the restaurant"
                className="text-6xl md:text-8xl font-bold text-white mb-8"
              >
                Exquisite Dining
                <Span 
                  devId="experience-highlight" 
                  devName="Experience Highlight" 
                  devDescription="Highlighted experience text in red gradient"
                  className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
                >
                  Experience
                </Span>
              </H1>
              <P 
                devId="hero-description" 
                devName="Hero Description" 
                devDescription="Hero section description explaining the restaurant experience"
                className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Indulge in culinary artistry where every dish tells a story of passion, 
                precision, and the finest ingredients from around the world.
              </P>
              <Div 
                devId="hero-cta-buttons" 
                devName="Hero CTA Buttons" 
                devDescription="Call-to-action buttons in hero section"
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <a href="#reservations">
                  <Button 
                    devId="hero-reserve-button"
                    devName="Reserve Table Button"
                    devDescription="Primary call-to-action button for table reservations"
                    className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-10 py-4 rounded-lg font-bold text-xl transition-all transform hover:scale-105"
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    Reserve Your Table
                  </Button>
                </a>
                <a href="#menu">
                  <Button 
                    devId="hero-menu-button"
                    devName="View Menu Button"
                    devDescription="Secondary button to view the menu"
                    variant="outline"
                    className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-10 py-4 rounded-lg font-bold text-xl transition-all"
                  >
                    <Utensils className="w-6 h-6 mr-3" />
                    View Our Menu
                  </Button>
                </a>
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Features Section */}
        <Container componentId="features-section">
          <Section devId="noID" className="container mx-auto px-4 py-20">
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="features-section-title" className="text-5xl font-bold text-white mb-6">Why Choose Bella Vista?</H2>
              <P devId="noID" className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the perfect blend of culinary excellence, elegant ambiance, and exceptional service
              </P>
            </Div>
            <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  devId={getFeatureCardId(index)}
                  devName={`${feature.title} Feature Card`}
                  devDescription={`Feature card highlighting ${feature.title}: ${feature.description}`}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-red-500/50 transition-all transform hover:scale-105"
                >
                  <CardContent devId="noID" className="p-0 text-center">
                    <Div devId="noID" className="mb-6">{feature.icon}</Div>
                    <H3 devId="noID" className="text-2xl font-bold text-white mb-4">{feature.title}</H3>
                    <P devId="noID" className="text-lg text-gray-400 leading-relaxed">{feature.description}</P>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* Menu Highlights Section */}
        <Container componentId="menu-section">
          <Section devId="noID" id="menu" className="container mx-auto px-4 py-20 bg-gray-900/50">
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="menu-highlights-title" className="text-5xl font-bold text-white mb-6">Menu Highlights</H2>
              <P devId="noID" className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our signature dishes crafted with passion and the finest ingredients
              </P>
            </Div>
            <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuHighlights.map((item, index) => (
                <Card 
                  key={index} 
                  devId={getMenuItemId(index)}
                  devName={`${item.name} Menu Item`}
                  devDescription={`Menu item card for ${item.name}: ${item.description}`}
                  className="bg-black border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-all"
                >
                  <CardContent devId="noID" className="p-0">
                    <Div devId="noID" className="flex justify-between items-start mb-4">
                      <Badge 
                        devId="noID"
                        className="bg-red-600 text-white text-sm font-semibold"
                      >
                        {item.category}
                      </Badge>
                      <Span devId="noID" className="text-2xl font-bold text-red-400">{item.price}</Span>
                    </Div>
                    <H3 devId="noID" className="text-xl font-bold text-white mb-3">{item.name}</H3>
                    <P devId="noID" className="text-gray-400 leading-relaxed">{item.description}</P>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* Reservation Section */}
        <Container componentId="reservation-section">
          <Section devId="noID" id="reservations" className="container mx-auto px-4 py-20">
            <Div devId="noID" className="max-w-4xl mx-auto">
              <Div devId="noID" className="text-center mb-12">
                <H2 devId="reservation-title" className="text-5xl font-bold text-white mb-6">Make a Reservation</H2>
                <P devId="noID" className="text-xl text-gray-300">
                  Book your table for an unforgettable dining experience
                </P>
              </Div>
              <Card 
                devId="reservation-form-card"
                devName="Reservation Form Card"
                devDescription="Card containing the table reservation form"
                className="bg-gray-900 border border-gray-800 rounded-xl p-8"
              >
                <CardContent devId="noID" className="p-0">
                  <form onSubmit={handleReservationSubmit} className="space-y-6">
                    <Div devId="noID" className="grid md:grid-cols-2 gap-6">
                      <Div devId="noID">
                        <label className="block text-lg font-semibold text-white mb-2">Full Name</label>
                        <input
                          type="text"
                          required
                          value={reservationForm.name}
                          onChange={(e) => setReservationForm({...reservationForm, name: e.target.value})}
                          className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white text-lg focus:border-red-500 focus:outline-none"
                          placeholder="Enter your full name"
                        />
                      </Div>
                      <Div devId="noID">
                        <label className="block text-lg font-semibold text-white mb-2">Email</label>
                        <input
                          type="email"
                          required
                          value={reservationForm.email}
                          onChange={(e) => setReservationForm({...reservationForm, email: e.target.value})}
                          className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white text-lg focus:border-red-500 focus:outline-none"
                          placeholder="Enter your email"
                        />
                      </Div>
                    </Div>
                    <Div devId="noID" className="grid md:grid-cols-2 gap-6">
                      <Div devId="noID">
                        <label className="block text-lg font-semibold text-white mb-2">Phone</label>
                        <input
                          type="tel"
                          required
                          value={reservationForm.phone}
                          onChange={(e) => setReservationForm({...reservationForm, phone: e.target.value})}
                          className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white text-lg focus:border-red-500 focus:outline-none"
                          placeholder="Enter your phone number"
                        />
                      </Div>
                      <Div devId="noID">
                        <label className="block text-lg font-semibold text-white mb-2">Number of Guests</label>
                        <select
                          value={reservationForm.guests}
                          onChange={(e) => setReservationForm({...reservationForm, guests: e.target.value})}
                          className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white text-lg focus:border-red-500 focus:outline-none"
                        >
                          {[1,2,3,4,5,6,7,8,9,10].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                          ))}
                        </select>
                      </Div>
                    </Div>
                    <Div devId="noID" className="grid md:grid-cols-2 gap-6">
                      <Div devId="noID">
                        <label className="block text-lg font-semibold text-white mb-2">Date</label>
                        <input
                          type="date"
                          required
                          value={reservationForm.date}
                          onChange={(e) => setReservationForm({...reservationForm, date: e.target.value})}
                          className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white text-lg focus:border-red-500 focus:outline-none"
                        />
                      </Div>
                      <Div devId="noID">
                        <label className="block text-lg font-semibold text-white mb-2">Time</label>
                        <select
                          required
                          value={reservationForm.time}
                          onChange={(e) => setReservationForm({...reservationForm, time: e.target.value})}
                          className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white text-lg focus:border-red-500 focus:outline-none"
                        >
                          <option value="">Select time</option>
                          <option value="17:00">5:00 PM</option>
                          <option value="17:30">5:30 PM</option>
                          <option value="18:00">6:00 PM</option>
                          <option value="18:30">6:30 PM</option>
                          <option value="19:00">7:00 PM</option>
                          <option value="19:30">7:30 PM</option>
                          <option value="20:00">8:00 PM</option>
                          <option value="20:30">8:30 PM</option>
                          <option value="21:00">9:00 PM</option>
                          <option value="21:30">9:30 PM</option>
                        </select>
                      </Div>
                    </Div>
                    <Div devId="noID">
                      <label className="block text-lg font-semibold text-white mb-2">Special Requests</label>
                      <textarea
                        value={reservationForm.specialRequests}
                        onChange={(e) => setReservationForm({...reservationForm, specialRequests: e.target.value})}
                        className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white text-lg focus:border-red-500 focus:outline-none"
                        rows={4}
                        placeholder="Any special requests or dietary restrictions?"
                      />
                    </Div>
                    <Button 
                      devId="submit-reservation"
                      devName="Submit Reservation Button"
                      devDescription="Button to submit the reservation form"
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-4 rounded-lg font-bold text-xl transition-all transform hover:scale-105"
                    >
                      <Calendar className="w-6 h-6 mr-3" />
                      Reserve Table
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Div>
          </Section>
        </Container>

        {/* Testimonials Section */}
        <Container componentId="testimonials-section">
          <Section devId="noID" className="container mx-auto px-4 py-20 bg-gray-900/50">
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="testimonials-title" className="text-5xl font-bold text-white mb-6">What Our Guests Say</H2>
              <P devId="noID" className="text-xl text-gray-300 max-w-3xl mx-auto">
                Read reviews from our satisfied customers who experienced our exceptional service
              </P>
            </Div>
            <Div devId="noID" className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  devId={getTestimonialId(index)}
                  devName={`${testimonial.name} Testimonial`}
                  devDescription={`Customer testimonial from ${testimonial.name}`}
                  className="bg-black border border-gray-800 rounded-xl p-6"
                >
                  <CardContent devId="noID" className="p-0">
                    <Div devId="noID" className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-red-500 fill-current" />
                      ))}
                    </Div>
                    <P devId="noID" className="text-gray-300 mb-4 text-lg leading-relaxed">"{testimonial.comment}"</P>
                    <P devId="noID" className="text-white font-semibold text-lg">- {testimonial.name}</P>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* Contact Section */}
        <Container componentId="contact-section">
          <Section devId="noID" id="contact" className="container mx-auto px-4 py-20">
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="contact-section-title" className="text-5xl font-bold text-white mb-6">Visit Us</H2>
              <P devId="noID" className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find us in the heart of the city for an unforgettable dining experience
              </P>
            </Div>
            <Div devId="noID" className="grid md:grid-cols-3 gap-8">
              <Card 
                devId="location-card"
                devName="Location Card"
                devDescription="Restaurant location information card"
                className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center"
              >
                <CardContent devId="noID" className="p-0">
                  <MapPin className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <H3 devId="location-title" className="text-2xl font-bold text-white mb-4">Location</H3>
                  <P devId="noID" className="text-lg text-gray-300">
                    123 Gourmet Street<br />
                    Downtown District<br />
                    New York, NY 10001
                  </P>
                </CardContent>
              </Card>
              <Card 
                devId="hours-card"
                devName="Hours Card"
                devDescription="Restaurant hours information card"
                className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center"
              >
                <CardContent devId="noID" className="p-0">
                  <Clock className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <H3 devId="hours-title" className="text-2xl font-bold text-white mb-4">Hours</H3>
                  <P devId="noID" className="text-lg text-gray-300">
                    Monday - Thursday: 5:00 PM - 10:00 PM<br />
                    Friday - Saturday: 5:00 PM - 11:00 PM<br />
                    Sunday: 4:00 PM - 9:00 PM
                  </P>
                </CardContent>
              </Card>
              <Card 
                devId="contact-info-card"
                devName="Contact Info Card"
                devDescription="Restaurant contact information card"
                className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center"
              >
                <CardContent devId="noID" className="p-0">
                  <Phone className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <H3 devId="contact-info-title" className="text-2xl font-bold text-white mb-4">Contact</H3>
                  <P devId="noID" className="text-lg text-gray-300">
                    Phone: (555) 123-4567<br />
                    Email: info@bellavista.com<br />
                    Reservations: (555) 123-4568
                  </P>
                </CardContent>
              </Card>
            </Div>
          </Section>
        </Container>

        {/* Footer */}
        <Footer 
          devId="restaurant-footer" 
          devName="Restaurant Footer" 
          devDescription="Restaurant footer with links and copyright"
          className="container mx-auto px-4 py-12 border-t border-gray-800"
        >
          <Div devId="noID" className="grid md:grid-cols-4 gap-8 mb-8">
            <Div devId="noID">
              <H3 devId="footer-brand-title" className="text-xl font-bold text-white mb-4">Bella Vista</H3>
              <P devId="noID" className="text-gray-400 leading-relaxed">
                Experience culinary excellence in the heart of the city. Where every meal is a celebration.
              </P>
            </Div>
            <Div devId="noID">
              <H3 devId="footer-links-title" className="text-xl font-bold text-white mb-4">Quick Links</H3>
              <Div devId="noID" className="space-y-2">
                <a href="#menu" className="block text-gray-400 hover:text-red-400 transition-colors">Menu</a>
                <a href="#reservations" className="block text-gray-400 hover:text-red-400 transition-colors">Reservations</a>
                <a href="#contact" className="block text-gray-400 hover:text-red-400 transition-colors">Contact</a>
                <a href="#" className="block text-gray-400 hover:text-red-400 transition-colors">Private Events</a>
              </Div>
            </Div>
            <Div devId="noID">
              <H3 devId="footer-contact-title" className="text-xl font-bold text-white mb-4">Contact Info</H3>
              <Div devId="noID" className="space-y-2">
                <P devId="noID" className="text-gray-400 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 123-4567
                </P>
                <P devId="noID" className="text-gray-400 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@bellavista.com
                </P>
                <P devId="noID" className="text-gray-400 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  123 Gourmet Street
                </P>
              </Div>
            </Div>
            <Div devId="noID">
              <H3 devId="footer-social-title" className="text-xl font-bold text-white mb-4">Follow Us</H3>
              <Div devId="noID" className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-red-400 transition-colors">Facebook</a>
                <a href="#" className="block text-gray-400 hover:text-red-400 transition-colors">Instagram</a>
                <a href="#" className="block text-gray-400 hover:text-red-400 transition-colors">Twitter</a>
                <a href="#" className="block text-gray-400 hover:text-red-400 transition-colors">Yelp</a>
              </Div>
            </Div>
          </Div>
          <Div devId="noID" className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <Div devId="noID" className="text-gray-400 mb-4 md:mb-0 text-lg">
              © 2024 Bella Vista Restaurant. All rights reserved.
            </Div>
            <Div devId="noID" className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </Div>
          </Div>
        </Footer>
      </Div>
    </Container>
  );
};