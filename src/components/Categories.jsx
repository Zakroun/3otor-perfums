import { ArrowRight, Users, Sparkles, Gem, Crown, Zap, Star, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function Categories() {
    const navigate = useNavigate();
  const categories = [
    {
      name: "Homme",
      type: "Men",
      description: "Bold & Masculine scents for the modern gentleman",
      icon: Crown,
      gradient: "from-amber-500 via-amber-600 to-amber-700",
      bgGradient: "from-amber-50 via-amber-100 to-white",
      count: "12 Collections",
      featured: ["Woody", "Spicy", "Fresh"],
      highlight: "Most Popular"
    },
    {
      name: "Femme",
      type:"Women",
      description: "Elegant & Refined fragrances for timeless beauty",
      icon: Gem,
      gradient: "from-amber-600 via-amber-700 to-amber-800",
      bgGradient: "from-amber-100 via-amber-50 to-white",
      count: "15 Collections",
      featured: ["Floral", "Oriental", "Fruity"],
      highlight: "Best Sellers"
    },
    {
      name: "Unisex",
      type:"Unisex",
      description: "Timeless & Universal scents for everyone",
      icon: Users,
      gradient: "from-amber-500 via-amber-600 to-amber-800",
      bgGradient: "from-amber-50 via-amber-100 to-white",
      count: "8 Collections",
      featured: ["Citrus", "Aromatic", "Musk"],
      highlight: "New Arrivals"
    }
  ];

  return (
    <section className="px-4 bg-white sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-full mb-4">
          <Zap className="w-4 h-4 text-amber-600" />
          <span className="text-sm font-semibold text-amber-700 uppercase tracking-widest">
            Categories
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-amber-900">Explore Our</span>
          <span className="block mt-2 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-800 bg-clip-text text-transparent">
            Signature Collections
          </span>
        </h2>
        <p className="text-lg md:text-xl text-amber-700/80 max-w-2xl mx-auto font-light leading-relaxed">
          Discover fragrances curated for every personality and occasion
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
        {categories.map((category, index) => (
          <div
          onClick={()=>navigate(`/shop/${category.type}`)}
            key={category.name}
            className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-90`}></div>
            
            {/* Animated Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                backgroundSize: '24px 24px'
              }}></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-amber-300/20 to-amber-500/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" style={{ animationDelay: '0.2s' }}></div>

            {/* Highlight Badge */}
            <div className="absolute top-6 left-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full blur-sm"></div>
                <div className="relative px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full">
                  <span className="text-xs font-bold text-white tracking-wide flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    {category.highlight}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10">
              {/* Icon Container */}
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl blur-xl"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-2xl border border-amber-500/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <category.icon className="w-10 h-10 text-amber-600 group-hover:text-amber-700 transition-colors duration-500" />
                </div>
              </div>

              {/* Category Name */}
              <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-3 tracking-tight">
                {category.name}
              </h3>

              {/* Description */}
              <p className="text-amber-700/90 mb-6 font-light leading-relaxed">
                {category.description}
              </p>

              {/* Featured Scents */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-amber-700 mb-3 uppercase tracking-widest">
                  Featured Notes
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.featured.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1.5 bg-gradient-to-r from-amber-500/10 to-amber-600/10 text-amber-700 rounded-full text-sm font-medium border border-amber-500/20 group-hover:from-amber-500/20 group-hover:to-amber-600/20 transition-all duration-300"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent mb-6"></div>

              {/* Bottom Info */}
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="text-sm text-amber-600 font-medium">
                    {category.count}
                  </p>
                </div>
                
                {/* CTA Button */}
                <button className="group/btn relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:from-amber-600 hover:to-amber-700">
                  <span className="relative z-10 flex items-center gap-2">
                    Explore
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} transform origin-left transition-transform duration-700 ${index === 1 ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="relative overflow-hidden rounded-3xl p-8 md:p-12">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-amber-600/5 to-amber-700/5"></div>
        
        {/* Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-semibold text-amber-700 uppercase tracking-widest">
                Need Help Choosing?
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">
              Find Your Perfect Scent
            </h3>
            <p className="text-amber-700/80 max-w-xl">
              Take our 2-minute fragrance quiz and get personalized recommendations
            </p>
          </div>
          
          <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[200px]">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Quiz
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}