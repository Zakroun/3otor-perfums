import { ChevronRight, Sparkles, Shield, Globe, Award, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #d97706 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-br from-amber-500 to-amber-800 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Luxury Gold Accents */}
      <div className="absolute top-1/4 left-5 lg:left-20 animate-float">
        <div className="relative">
          <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-full opacity-20 blur-lg"></div>
          <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 text-amber-500" />
        </div>
      </div>

      <div className="absolute bottom-1/4 right-5 lg:right-20 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="relative">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-full opacity-20 blur-lg"></div>
          <Star className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 lg:w-8 lg:h-8 text-amber-500" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12">
          {/* Eyebrow Text */}
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/10 to-amber-600/10 text-amber-700 rounded-full text-sm font-semibold tracking-widest uppercase border border-amber-500/20 backdrop-blur-sm">
              <Award className="w-4 h-4 mr-2" />
              Luxury Collection
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8">
            <span className="block text-amber-900 drop-shadow-sm">Experience the</span>
            <span className="block mt-2 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-800 bg-clip-text text-transparent">
              Essence of Luxury
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-amber-800/90 mb-8 lg:mb-12 max-w-2xl leading-relaxed font-light tracking-wide">
            Immerse yourself in our exclusive collection of handcrafted perfumes, 
            where every scent tells a story of elegance and sophistication.
          </p>

          {/* CTA Button */}
          <button className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-amber-500 to-amber-700 text-white text-base sm:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center justify-center">
              Discover Fragrances
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
            </div>
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">500+</div>
              <div className="text-sm text-amber-700 font-medium">Premium Scents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">50+</div>
              <div className="text-sm text-amber-700 font-medium">Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">10k+</div>
              <div className="text-sm text-amber-700 font-medium">Happy Customers</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex flex-col items-center lg:items-start p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-amber-100">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-semibold text-amber-800">100% Authentic</span>
              </div>
              <p className="text-xs text-amber-700/80 text-center lg:text-left">Guaranteed original products</p>
            </div>
            
            <div className="flex flex-col items-center lg:items-start p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-amber-100">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-semibold text-amber-800">Worldwide Shipping</span>
              </div>
              <p className="text-xs text-amber-700/80 text-center lg:text-left">Free shipping over $100</p>
            </div>
            
            <div className="flex flex-col items-center lg:items-start p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-amber-100 col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-semibold text-amber-800">Premium Quality</span>
              </div>
              <p className="text-xs text-amber-700/80 text-center lg:text-left">Luxury ingredients</p>
            </div>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="lg:w-1/2 relative mt-8 lg:mt-0">
          {/* Main Product Image Container */}
          <div className="relative w-full max-w-2xl mx-auto">
            {/* Floating Image Frame */}
            <div className="relative group">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Glow Effect Container */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-600/10 to-amber-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-white via-amber-50 to-amber-100 rounded-2xl p-2 sm:p-4 shadow-2xl overflow-hidden">
                {/* Image Wrapper with Reflection Effect */}
                <div className="relative rounded-xl overflow-hidden">
                  {/* Image */}
                  <div className="aspect-square relative overflow-hidden rounded-xl">
                    <img 
                      src="assets/images/sectionimage.png" 
                      alt="Luxury Perfume Collection" 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200">
                            <div class="text-center">
                              <Sparkles class="w-12 h-12 text-amber-500 mx-auto mb-3" />
                              <p class="text-amber-700 font-semibold">Luxury Perfume Collection</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating Scent Particles */}
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-amber-800">Floral Notes</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 right-4">
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                        <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-amber-800">Woody Base</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Reflection Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/80 to-transparent"></div>
                </div>
              </div>
              
              {/* Decorative Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-500 to-amber-700 text-white px-4 py-2 rounded-xl shadow-xl rotate-3 group-hover:rotate-6 transition-transform duration-300 z-20">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2 fill-current" />
                  <span className="text-sm font-bold">Bestseller</span>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-br from-amber-400/30 to-amber-600/30 rounded-full blur-md group-hover:scale-125 transition-transform duration-500"></div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-amber-300/30 to-amber-500/30 rounded-full blur-md group-hover:scale-125 transition-transform duration-500"></div>
            </div>

            {/* Customer Reviews Floating Card */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-2xl p-4 shadow-xl max-w-xs transform -rotate-2 group hover:rotate-0 transition-transform duration-300 z-10">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                ))}
                <span className="ml-2 text-xs font-bold text-amber-700">5.0</span>
              </div>
              <p className="text-sm text-amber-800 mb-2 font-medium">"The most exquisite fragrance I've ever owned!"</p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">S</span>
                </div>
                <div className="ml-3">
                  <p className="text-xs font-medium text-amber-700">Sarah M.</p>
                  <p className="text-xs text-amber-600">Verified Buyer</p>
                </div>
              </div>
              
              {/* Verified Badge */}
              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] px-2 py-1 rounded-full font-bold">
                ✓
              </div>
            </div>

            {/* Featured Brands */}
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-xs rotate-3 hidden lg:block">
              <h4 className="text-sm font-bold text-amber-800 mb-3 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-amber-600" />
                Featured Brands
              </h4>
              <div className="space-y-2">
                {['Chanel', 'Dior', 'Tom Ford'].map((brand) => (
                  <div key={brand} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-sm text-amber-700 font-medium">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="flex flex-col items-center">
          <span className="text-xs text-amber-600 font-medium mb-2 tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-amber-500 to-transparent animate-bounce"></div>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}