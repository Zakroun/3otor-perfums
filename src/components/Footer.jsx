import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Heart,
  Shield,
  Truck,
  Headphones,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-2 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section 
        <div className="relative -top-16 mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 md:p-10 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-3">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-semibold uppercase tracking-widest">Newsletter</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Subscribe for Exclusive Offers
                </h3>
                <p className="text-amber-100/80 max-w-lg">
                  Be the first to know about new arrivals, sales, and special promotions.
                </p>
              </div>
              
              <form className="w-full lg:w-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-amber-500/30 rounded-xl placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-amber-200/60 mt-3 text-center sm:text-left">
                  By subscribing, you agree to our Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
            */}
        {/* Trust Badges 
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 mb-12">
          <div className="flex flex-col items-center p-6 bg-amber-800/30 backdrop-blur-sm rounded-xl border border-amber-700/30">
            <Shield className="w-8 h-8 text-amber-400 mb-3" />
            <span className="font-semibold mb-1">100% Authentic</span>
            <span className="text-sm text-amber-200/60">Guaranteed Quality</span>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-amber-800/30 backdrop-blur-sm rounded-xl border border-amber-700/30">
            <Truck className="w-8 h-8 text-amber-400 mb-3" />
            <span className="font-semibold mb-1">Free Shipping</span>
            <span className="text-sm text-amber-200/60">Orders over $100</span>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-amber-800/30 backdrop-blur-sm rounded-xl border border-amber-700/30">
            <Headphones className="w-8 h-8 text-amber-400 mb-3" />
            <span className="font-semibold mb-1">24/7 Support</span>
            <span className="text-sm text-amber-200/60">We're here to help</span>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-amber-800/30 backdrop-blur-sm rounded-xl border border-amber-700/30">
            <span className="text-2xl font-bold text-amber-400 mb-3">30</span>
            <span className="font-semibold mb-1">Day Returns</span>
            <span className="text-sm text-amber-200/60">Hassle-free</span>
          </div>
        </div>
        */}
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-t border-amber-700/30">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src="/assets/images/3otor2.png"
                alt="3otor Original Logo"
                className="max-w-[100px] md:max-w-[200px] mb-2"
              />
              <p className="text-amber-200/80 mt-2 max-w-md">
                Crafting unforgettable fragrances since 2015. Our perfumes tell
                stories of elegance, passion, and timeless beauty.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <div>
                  <span className="text-sm text-amber-200/60">Call us</span>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <div>
                  <span className="text-sm text-amber-200/60">Email us</span>
                  <p className="font-medium">support@3otororiginal.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1" />
                <div>
                  <span className="text-sm text-amber-200/60">Visit us</span>
                  <p className="font-medium">
                    123 Fragrance Street
                    <br />
                    Luxury District, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-300">Shop</h4>
            <ul className="space-y-3">
              {[
                "All Perfumes",
                "Men's Collection",
                "Women's Collection",
                "Unisex",
                "New Arrivals",
                "Best Sellers",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-amber-200/80 hover:text-amber-300 hover:pl-2 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-300">Company</h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Story",
                "Careers",
                "Press",
                "Sustainability",
                "Affiliate Program",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-amber-200/80 hover:text-amber-300 hover:pl-2 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-300">Support</h4>
            <ul className="space-y-3">
              {[
                "Contact Us",
                "FAQ",
                "Shipping Info",
                "Returns & Exchanges",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-amber-200/80 hover:text-amber-300 hover:pl-2 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="py-8 border-t border-amber-700/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-amber-200/80 mb-4">
                Follow us for fragrance inspiration and exclusive content
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="p-3 bg-amber-800/30 backdrop-blur-sm rounded-full border border-amber-700/30 hover:bg-amber-700/50 hover:scale-110 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-amber-300 group-hover:text-amber-200" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-amber-200/60">Secure Payments</span>
              <div className="flex gap-2">
                {["Visa", "Mastercard", "PayPal", "Apple Pay"].map((method) => (
                  <div
                    key={method}
                    className="px-3 py-2 bg-amber-800/20 rounded-lg text-xs font-medium"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-amber-700/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-amber-200/70 text-center md:text-left">
              © {currentYear} 3otor Original. All Rights Reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-amber-200/70 hover:text-amber-300 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-amber-200/70 hover:text-amber-300 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-amber-200/70 hover:text-amber-300 transition-colors"
              >
                Cookie Policy
              </a>
              <span className="text-amber-200/70">v1.0.0</span>
            </div>
          </div>

          {/* Made with love */}
          <div className="text-center mt-6">
            <p className="text-amber-200/60 text-sm flex items-center justify-center gap-2">
              Made with{" "}
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />{" "}
              in Morocco
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600"></div>
    </footer>
  );
}
