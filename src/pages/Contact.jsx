import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  User,
  HelpCircle,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Flagship Store",
      details: ["N° 2, Corner Rue molay abd lah", "Meknes, Morocco"],
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["Fixe & WhatsApp: +212 6 18 38 23 85", "Customer Service: +212 5 00 00 00 00"],
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["General Inquiries: info@3otor.com", "Support: support@3otor.com"],
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Store Hours",
      details: ["Monday - Friday: 9:00 AM - 8:00 PM", "Saturday - Sunday: 10:00 AM - 7:00 PM"],
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100"
    }
  ];

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unopened and unused products with original packaging."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and times vary by destination."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email to monitor your delivery."
    },
    {
      question: "Are your products cruelty-free?",
      answer: "Yes, all 3OTOR products are cruelty-free and never tested on animals."
    }
  ];

  const inquiryTypes = [
    { id: 'general', label: 'General Inquiry', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'product', label: 'Product Questions', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'wholesale', label: 'Wholesale', icon: <User className="w-5 h-5" /> },
    { id: 'corporate', label: 'Corporate Gifting', icon: <Send className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-amber-900 to-amber-700 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight">
              Get in <span className="text-amber-200">Touch</span>
            </h1>
            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              We're here to help you find your perfect scent. Contact us for personalized 
              fragrance consultations and exceptional customer service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#contact-form" 
                className="bg-white text-amber-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-100 transition-all duration-300"
              >
                Send Message
              </a>
              <a 
                href="tel:+212618382385" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className={`${info.bg} ${info.border} p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className={`${info.color} mb-4`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-amber-800 flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>
              </div>

              {/* Inquiry Type Tabs */}
              <div className="mb-8">
                <p className="text-gray-700 font-medium mb-4">What can we help you with?</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {inquiryTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setActiveTab(type.id)}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 ${
                        activeTab === type.id
                          ? 'bg-amber-50 border-amber-300 text-amber-700'
                          : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="mb-2">{type.icon}</div>
                      <span className="text-sm font-medium">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <form id="contact-form" onSubmit={handleSubmit}>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting 3OTOR. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-amber-700 hover:text-amber-800 font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="w-5 h-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="w-5 h-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="w-5 h-5 text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                            placeholder="+212 6 XX XX XX XX"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block text-gray-700 font-medium mb-2">
                        Message *
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <MessageCircle className="w-5 h-5 text-gray-400" />
                        </div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="6"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                          placeholder="Please provide details about your inquiry..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full bg-gradient-to-r from-amber-600 to-amber-800 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                        isLoading ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </>
                )}
              </form>
            </div>

            {/* FAQ & Additional Info */}
            <div>
              {/* FAQ Section */}
              <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a href="#" className="text-amber-700 hover:text-amber-800 font-medium flex items-center">
                    View all FAQs
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Live Chat & Social */}
              <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white rounded-3xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
                
                <div className="space-y-6">
                  {/* Live Chat */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Live Chat Support</h3>
                        <p className="text-amber-100 text-sm">Available 9AM-6PM</p>
                      </div>
                    </div>
                    <button className="w-full bg-white text-amber-900 py-3 rounded-xl font-semibold hover:bg-amber-100 transition-all">
                      Start Live Chat
                    </button>
                  </div>

                  {/* Social Media */}
                  <div>
                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                    <div className="flex gap-3">
                      <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Instagram className="w-6 h-6" />
                      </a>
                      <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Facebook className="w-6 h-6" />
                      </a>
                      <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Twitter className="w-6 h-6" />
                      </a>
                      <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                        <MessageSquare className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Location Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Visit Our <span className="text-amber-700">Flagship Store</span>
            </h2>
            <p className="text-gray-600">
              Experience our luxury fragrances in person at our Meknes flagship location
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-3">
              {/* Store Info */}
              <div className="lg:col-span-1 p-8 lg:p-12 bg-gradient-to-br from-amber-50 to-amber-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">3OTOR Flagship Store</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-amber-700 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">N° 2, Corner Rue molay abd lah</p>
                      <p className="text-gray-600">Meknes, Morocco</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-amber-700 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+212 6 18 38 23 85</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-amber-700 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Hours</p>
                      <p className="text-gray-600">Mon-Fri: 9:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Sat-Sun: 10:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-amber-200">
                  <h4 className="font-bold text-gray-900 mb-4">Store Features</h4>
                  <ul className="space-y-2">
                    {['Personal Fragrance Consultation', 'Complimentary Samples', 'Gift Wrapping Service', 'Private Testing Rooms'].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Map */}
              <div className="lg:col-span-2 h-96 lg:h-auto">
                <div className="h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map Coming Soon</h3>
                    <p className="text-gray-600 mb-4">Find directions to our flagship store</p>
                    <button className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-semibold">
                      Get Directions
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">Stay in the Scent Loop</h2>
              <p className="text-amber-100 mb-8 text-lg">
                Subscribe to our newsletter for exclusive offers, new arrivals, and fragrance tips
              </p>
              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <button
                    type="submit"
                    className="bg-white text-amber-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-100 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-amber-200 text-sm mt-4">
                  By subscribing, you agree to our Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}