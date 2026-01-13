import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ShoppingCart,
  Eye,
  Heart,
  Zap,
  Award,
} from "lucide-react";
import { perfumes } from "../data/data";
import { addToCart } from "../data/perfumslice";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../data/perfumslice";

export default function BestSellers() {
  const bestSellers = perfumes.slice(0, 11);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Items per slide based on screen size
  const getItemsPerSlide = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    if (window.innerWidth < 1280) return 3;
    return 4;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const totalSlides = Math.ceil(bestSellers.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const visibleProducts = bestSellers.slice(
    currentIndex * itemsPerSlide,
    (currentIndex + 1) * itemsPerSlide
  );

  const getDiscountPrice = (price, discount) => {
    return Math.round(price - (price * discount) / 100);
  };

  // Handle button clicks with event propagation prevention
  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  const handleAddToFavorites = (e, product) => {
    e.stopPropagation();
    dispatch(addToFavorites(product));
  };

  const handleQuickView = (e, product) => {
    e.stopPropagation();
    console.log("Quick view:", product.id);
    // You can implement quick view modal here
  };

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #d97706 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div> */}

      {/* Section Header */}
      <div className="relative z-10 text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-full mb-4">
          <Zap className="w-4 h-4 text-amber-600" />
          <span className="text-sm font-semibold text-amber-700 uppercase tracking-widest">
            Bestsellers
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-amber-900">Our Top</span>
          <span className="block mt-2 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-800 bg-clip-text text-transparent">
            Rated Fragrances
          </span>
        </h2>

        <p className="text-lg md:text-xl text-amber-700/80 max-w-2xl mx-auto font-light leading-relaxed">
          Discover the scents that customers love most. Each bottle tells a
          story of excellence.
        </p>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={prevSlide}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="group p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-amber-50 z-20"
        >
          <ChevronLeft className="w-6 h-6 text-amber-700 group-hover:text-amber-800 transition-colors" />
        </button>

        <div className="flex items-center gap-2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-gradient-to-r from-amber-500 to-amber-600"
                  : "bg-amber-300 hover:bg-amber-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="group p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-amber-50 z-20"
        >
          <ChevronRight className="w-6 h-6 text-amber-700 group-hover:text-amber-800 transition-colors" />
        </button>
      </div>

      {/* Products Slider */}
      <div className="relative">
        {/* Slider Container */}
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
          }}
        >
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className={`flex-shrink-0 cursor-pointer px-2 sm:px-2 ${
                itemsPerSlide === 1
                  ? "w-full"
                  : itemsPerSlide === 2
                  ? "w-1/2"
                  : itemsPerSlide === 3
                  ? "w-1/3"
                  : "w-1/4"
              }`}
              onClick={() => handleCardClick(product.id)}
            >
              <div className="group relative bg-gradient-to-br from-white via-amber-50 to-amber-100 rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                  {product.discount > 0 && (
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      -{product.discount}%
                    </div>
                  )}
                  {product.isNew && (
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      NEW
                    </div>
                  )}
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={(e) => handleAddToFavorites(e, product)}
                  onMouseEnter={() => setHoveredCard(product.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-red-50 group/wishlist"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors duration-300 ${
                      hoveredCard === product.id
                        ? "text-red-500 group-hover/wishlist:fill-red-500"
                        : "text-amber-600"
                    }`}
                  />
                </button>

                {/* Product Image */}
                <div className="relative mb-6">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-inner">
                    {/* Image Container */}
                    <div className="relative w-full h-full flex items-center justify-center p-6">
                      <img
                        src={`assets/images/${product.images[0]}`}
                        alt={`${product.title} - ${product.brand}`}
                        className="w-full h-[250px] object-contain transform transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback if image doesn't load
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML = `
                            <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100">
                              <div class="text-4xl font-bold text-amber-600 mb-2">${product.title}</div>
                              <div class="text-sm text-amber-700 font-medium">${product.brand}</div>
                            </div>
                          `;
                        }}
                      />
                    </div>

                    {/* Quick View Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center transition-all duration-300 ${
                        hoveredCard === product.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <button
                        onClick={(e) => handleQuickView(e, product)}
                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110"
                      >
                        <Eye className="w-6 h-6 text-amber-700" />
                      </button>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-amber-500 fill-current"
                            : "text-amber-300"
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-xs font-bold text-amber-700">
                      {product.rating}
                    </span>
                    <span className="text-xs text-amber-500">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-800 transition-colors">
                    {product.title}
                  </h3>
                  {/* <p className="text-sm text-amber-700/80 mb-4 font-light leading-relaxed line-clamp-2">
                    {product.description}
                  </p> */}

                  {/* Price */}
                  <div className="flex items-center justify-center gap-2 mb-6">
                    {product.discount > 0 ? (
                      <>
                        <span className="text-2xl font-bold text-amber-600">
                          {getDiscountPrice(product.price, product.discount)} Dh
                        </span>
                        <span className="text-lg text-amber-400 line-through">
                          {product.price} Dh
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-amber-600">
                        {product.price} Dh
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="group/btn relative rounded-xl w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                      Add to Cart
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-amber-500/30 transition-all duration-500"></div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-400/10 to-amber-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-amber-300/10 to-amber-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-12 md:mt-16">
        <button
          onClick={() => navigate("/shop")}
          className="cursor-pointer group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <span>View All Products</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          <Award className="w-5 h-5 ml-1" />
        </button>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }

        .slider-container {
          scroll-behavior: smooth;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}