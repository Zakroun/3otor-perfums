import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromFavorites,
  clearFavorites,
  addToCart,
} from "../data/perfumslice";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  ShoppingBag,
  Trash2,
  Star,
  Sparkles,
  Package,
  Truck,
  Shield,
  RotateCcw,
  X,
  MessageCircle,
  AlertCircle,
  Check,
} from "lucide-react";

export default function Favorites() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.perfum.favorites);
  const [addingToCart, setAddingToCart] = useState({});
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from favorites
  const categories = [
    "All",
    ...new Set(favorites.map((item) => item.category)),
  ];

  // Filter favorites by category
  const filteredFavorites =
    selectedCategory === "All"
      ? favorites
      : favorites.filter((item) => item.category === selectedCategory);

  // Get image path
  const getImagePath = (imageName) => {
    return `/assets/images/${imageName}`;
  };

  // Handle remove from favorites
  const handleRemoveFavorite = (id, e) => {
    e.stopPropagation();
    dispatch(removeFromFavorites(id));
  };

  // Handle add to cart from favorites
  const handleAddToCart = (item, e) => {
    e.stopPropagation();
    setAddingToCart((prev) => ({ ...prev, [item.id]: true }));

    // Dispatch add to cart action
    dispatch(addToCart(item));

    // Reset button state after animation
    setTimeout(() => {
      setAddingToCart((prev) => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  // Handle clear all favorites
  const handleClearFavorites = () => {
    dispatch(clearFavorites());
    setShowClearConfirm(false);
  };

  // Navigate to product page
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-12 h-12 text-amber-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Your Favorites is Empty
          </h1>
          <p className="text-gray-600 mb-8">
            You haven't added any fragrances to your favorites yet. Explore our
            collection and save your favorite scents for later.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2 mx-auto"
          >
            <Sparkles className="w-5 h-5" />
            Browse Fragrances
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Navigation Bar */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/shop")}
              className="flex items-center gap-2 text-gray-700 hover:text-amber-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Collection</span>
            </button>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {favorites.length} item{favorites.length !== 1 ? "s" : ""}
              </span>
              {favorites.length > 0 && (
                <button
                  onClick={() => setShowClearConfirm(true)}
                  className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                  <span>Clear All</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
              Clear All Favorites?
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Are you sure you want to remove all items from your favorites?
              This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleClearFavorites}
                className="flex-1 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl font-bold hover:shadow-xl transition-all"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full mb-6">
            <Heart className="w-10 h-10 text-amber-500 fill-amber-500" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Your Favorite Fragrances
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Save your favorite scents and come back to them anytime. Your
            personal fragrance collection awaits.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-amber-600 to-amber-800 text-white shadow-lg"
                    : "bg-white border-2 border-gray-200 text-gray-700 hover:border-amber-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Favorites Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredFavorites.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Product Image */}
              <div
                className="relative h-66 bg-gradient-to-br from-amber-50 to-amber-100 overflow-hidden cursor-pointer"
                onClick={() => handleProductClick(item.id)}
              >
                {item.images && item.images.length > 0 ? (
                  <img
                    src={getImagePath(item.images[0])}
                    alt={item.title}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = "none";
                      const container = e.target.parentElement;
                      container.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center">
                          <div class="text-6xl mb-4">
                            ${
                              item.category === "Men"
                                ? "🧔"
                                : item.category === "Women"
                                ? "👩"
                                : "👥"
                            }
                          </div>
                          <div class="text-lg font-bold text-amber-800">${
                            item.title
                          }</div>
                        </div>
                      `;
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="text-6xl mb-4">
                      {item.category === "Men"
                        ? "🧔"
                        : item.category === "Women"
                        ? "👩"
                        : "👥"}
                    </div>
                    <div className="text-lg font-bold text-amber-800">
                      {item.title}
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                    item.category === "Men"
                      ? "bg-blue-100 text-blue-800"
                      : item.category === "Women"
                      ? "bg-pink-100 text-pink-800"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {item.category}
                </div>

                {/* Remove Button */}
                <button
                  onClick={(e) => handleRemoveFavorite(item.id, e)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Remove from favorites"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3
                      className="font-bold text-gray-900 text-lg mb-1 cursor-pointer hover:text-amber-700 transition-colors"
                      onClick={() => handleProductClick(item.id)}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.brand}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-500 fill-current" />
                      <span className="text-sm font-medium text-gray-900">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-amber-800">
                    MAD {item.price.toLocaleString()}
                  </div>

                  <button
                    onClick={(e) => handleAddToCart(item, e)}
                    disabled={addingToCart[item.id]}
                    className={`px-5 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 ${
                      addingToCart[item.id]
                        ? "bg-green-600 text-white"
                        : "bg-gradient-to-r from-amber-600 to-amber-800 text-white hover:shadow-lg"
                    }`}
                  >
                    {addingToCart[item.id] ? (
                      <>
                        <Check className="w-4 h-4" />
                        Added
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white rounded-3xl p-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">
                  {favorites.length}
                </div>
                <div className="text-amber-200">Fragrances</div>
                <div className="text-sm text-amber-300">Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">
                  {categories.length - 1}
                </div>
                <div className="text-amber-200">Categories</div>
                <div className="text-sm text-amber-300">Represented</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">
                  MAD{" "}
                  {favorites
                    .reduce((sum, item) => sum + item.price, 0)
                    .toLocaleString()}
                </div>
                <div className="text-amber-200">Total Value</div>
                <div className="text-sm text-amber-300">Of Favorites</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">
                  {Math.round(
                    favorites.reduce((sum, item) => sum + item.price, 0) /
                      favorites.length
                  ) || 0}
                </div>
                <div className="text-amber-200">Avg Price</div>
                <div className="text-sm text-amber-300">Per Item</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Based on Your Favorites
          </h2>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-amber-600" />
              </div>
              <div className="font-bold text-gray-900 mb-2">
                Premium Quality
              </div>
              <div className="text-sm text-gray-600">
                Authentic fragrances from top brands
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-6 h-6 text-amber-600" />
              </div>
              <div className="font-bold text-gray-900 mb-2">Free Shipping</div>
              <div className="text-sm text-gray-600">
                On all orders over MAD 500
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-amber-600" />
              </div>
              <div className="font-bold text-gray-900 mb-2">100% Authentic</div>
              <div className="text-sm text-gray-600">
                Guaranteed genuine products
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-6 h-6 text-amber-600" />
              </div>
              <div className="font-bold text-gray-900 mb-2">Easy Returns</div>
              <div className="text-sm text-gray-600">30-day return policy</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white rounded-3xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Need Personal Advice?
                </h3>
                <p className="text-amber-100">
                  Our fragrance experts can help you choose based on your
                  favorites
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => navigate("/products")}
                  className="px-6 py-3 bg-white text-amber-900 rounded-full font-medium hover:bg-amber-100 transition-colors flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Explore More
                </button>
                <button className="px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Get Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .grid > div {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .grid > div:nth-child(1) {
          animation-delay: 0.1s;
        }
        .grid > div:nth-child(2) {
          animation-delay: 0.2s;
        }
        .grid > div:nth-child(3) {
          animation-delay: 0.3s;
        }
        .grid > div:nth-child(4) {
          animation-delay: 0.4s;
        }
        .grid > div:nth-child(5) {
          animation-delay: 0.5s;
        }
        .grid > div:nth-child(6) {
          animation-delay: 0.6s;
        }
        .grid > div:nth-child(7) {
          animation-delay: 0.7s;
        }
        .grid > div:nth-child(8) {
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  );
}
