import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Star,
  ShoppingBag,
  Eye,
  Grid,
  List,
  ChevronDown,
  X,
  Loader2,
  Heart,
  TrendingUp,
  Award,
  Crown,
  Sparkles,
  Flame,
  Shield,
} from "lucide-react";
import { perfumes } from "../data/data";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../data/perfumslice";
export default function ProductsList() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(perfumes);
  const [filteredProducts, setFilteredProducts] = useState(perfumes);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [priceRange, setPriceRange] = useState([0, 4000]);
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { category } = useParams();
  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);
  console.log("selectedCategory", selectedCategory);
  //   console.log("Category From URL:", category);

  // Categories
  const categories = ["All", "Men", "Women", "Unisex"];

  // Sort options
  const sortOptions = [
    { id: "featured", label: "Featured", icon: <Award className="w-4 h-4" /> },
    {
      id: "price-low",
      label: "Price: Low to High",
      icon: <TrendingUp className="w-4 h-4" />,
    },
    {
      id: "price-high",
      label: "Price: High to Low",
      icon: <TrendingUp className="w-4 h-4" />,
    },
    {
      id: "popular",
      label: "Most Popular",
      icon: <Flame className="w-4 h-4" />,
    },
    {
      id: "newest",
      label: "New Arrivals",
      icon: <Sparkles className="w-4 h-4" />,
    },
  ];
  const navigate = useNavigate();
  // Filter and sort products
  useEffect(() => {
    setIsLoading(true);

    let result = [...products];

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Apply price filter
    result = result.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        // Simulate popularity based on price (higher = more popular for demo)
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        // Simulate newest by ID (higher ID = newer for demo)
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured - default order
        break;
    }

    setTimeout(() => {
      setFilteredProducts(result);
      setIsLoading(false);
    }, 500);
  }, [searchTerm, selectedCategory, sortBy, priceRange, products]);

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle favorite toggle
  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // Handle add to cart
  const handleAddToCart = (product) => {
    // Animation for cart button
    const button = document.getElementById(`cart-btn-${product.id}`);
    if (button) {
      button.innerHTML = '<Loader2 className="w-5 h-5 animate-spin" />';
      setTimeout(() => {
        button.innerHTML = "Added!";
        button.classList.add("bg-green-600");
        setTimeout(() => {
          button.innerHTML = '<ShoppingBag className="w-5 h-5" />';
          button.classList.remove("bg-green-600");
        }, 1500);
      }, 800);
    }
  };

  // Quick view product
  //   const handleQuickView = (product) => {
  //     setHoveredProduct(product);
  //   };

  // Get price display
  const getPriceDisplay = (price) => {
    return `MAD ${price.toLocaleString()}`;
  };

  // Get category badge color
  const getCategoryColor = (category) => {
    switch (category) {
      case "Men":
        return "bg-blue-100 text-blue-800";
      case "Women":
        return "bg-pink-100 text-pink-800";
      case "Unisex":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Get rating stars (random for demo)
  const getRating = () => {
    const ratings = [4.5, 4.7, 4.9, 5.0, 4.3, 4.8];
    return ratings[Math.floor(Math.random() * ratings.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-amber-900 to-amber-800 text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <img
            src="/assets/images/3otor2.png"
            alt="3otor Original Logo"
            className="max-w-[100px] md:max-w-[200px] mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            Our <span className="text-amber-200">Fragrance</span> Collection
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
            Discover the perfect scent from our curated collection of luxury
            fragrances
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search perfumes by name, brand, or notes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-200 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Filters and Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredProducts.length} Fragrances Available
              </h2>
              <p className="text-gray-600">
                Discover your perfect scent from our curated collection
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-amber-600 to-amber-800 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() =>
                    document
                      .getElementById("sort-dropdown")
                      .classList.toggle("hidden")
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {sortOptions.find((opt) => opt.id === sortBy)?.icon}
                  <span>
                    {sortOptions.find((opt) => opt.id === sortBy)?.label}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div
                  id="sort-dropdown"
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 hidden"
                >
                  {sortOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSortBy(option.id);
                        document
                          .getElementById("sort-dropdown")
                          .classList.add("hidden");
                      }}
                      className={`flex items-center gap-2 w-full px-4 py-2 hover:bg-amber-50 transition-colors ${
                        sortBy === option.id
                          ? "text-amber-700 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {option.icon}
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-full p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-full transition-colors ${
                    viewMode === "grid"
                      ? "bg-amber-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-full transition-colors ${
                    viewMode === "list"
                      ? "bg-amber-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Price Range</h3>
              <span className="text-amber-700 font-medium">
                MAD {priceRange[0].toLocaleString()} - MAD{" "}
                {priceRange[1].toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="4000"
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([parseInt(e.target.value), priceRange[1]])
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-600"
            />
            <input
              type="range"
              min="0"
              max="4000"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], parseInt(e.target.value)])
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-600"
            />
          </div>
        </div>

        {/* Products Grid/List */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-amber-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Loading fragrances...</p>
            </div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No fragrances found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setPriceRange([0, 4000]);
              }}
              className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-full font-medium hover:shadow-lg transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            {/* Grid View */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentProducts.map((product) => (
                  <div
                    onClick={() => navigate(`/product/${product.id}`)}
                    key={product.id}
                    className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                    // onMouseEnter={() => handleQuickView(product)}
                    // onMouseLeave={() => setHoveredProduct(null)}
                  >
                    {/* Product Image */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={`/assets/images/${product.images[0]}`}
                          alt={`${product.title} - ${product.brand}`}
                          className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110"
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

                      {/* Badges */}
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                            product.category
                          )}`}
                        >
                          {product.category}
                        </span>
                      </div>

                      {/* Favorite Button */}
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <Heart
                          onClick={() => dispatch(addToFavorites(product))}
                          className={`w-5 h-5 ${
                            favorites.includes(product.id)
                              ? "fill-red-500 text-red-500"
                              : "text-gray-400 hover:text-red-500"
                          }`}
                        />
                      </button>

                      {/* Quick View Overlay */}
                      {hoveredProduct?.id === product.id && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-white text-amber-700 px-6 py-3 rounded-full font-medium hover:bg-amber-50 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            Quick View
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg mb-1 line-clamp-1">
                            {product.title}
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">
                            {product.brand}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-amber-500 fill-current" />
                          <span className="text-sm font-medium text-gray-900">
                            {product.rating}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-amber-800">
                            {getPriceDisplay(product.price)}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button className="w-10 h-10 bg-amber-50 text-amber-700 rounded-full flex items-center justify-center hover:bg-amber-100 transition-colors">
                            <Eye className="w-5 h-5" />
                          </button>
                          <button
                            id={`cart-btn-${product.id}`}
                            onClick={() => handleAddToCart(product)}
                            className="w-10 h-10 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all"
                          >
                            <ShoppingBag className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* List View */
              <div className="space-y-6">
                {currentProducts.map((product) => (
                  <div
                    onClick={() => navigate(`/product/${product.id}`)}
                    key={product.id}
                    className="group bg-white cursor-pointer rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Product Image */}
                      <div className="md:w-1/4 relative h-64 md:h-auto overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <img
                            src={`/assets/images/${product.images[0]}`}
                            alt={`${product.title} - ${product.brand}`}
                            className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110"
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

                        {/* Badges */}
                        <div className="absolute top-3 left-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                              product.category
                            )}`}
                          >
                            {product.category}
                          </span>
                        </div>

                        {/* Favorite Button */}
                        <button
                          onClick={() => toggleFavorite(product.id)}
                          className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                        >
                          <Heart
                            onClick={() => dispatch(addToFavorites(product))}
                            className={`w-5 h-5 ${
                              favorites.includes(product.id)
                                ? "fill-red-500 text-red-500"
                                : "text-gray-400 hover:text-red-500"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Product Details */}
                      <div className="md:w-3/4 p-6">
                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                          <div className="md:w-3/4">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {product.title}
                            </h3>
                            <p className="text-gray-500 mb-3">
                              {product.brand}
                            </p>
                            <p className="text-gray-600 mb-4">
                              {product.description}
                            </p>
                          </div>

                          <div className="md:w-1/4 text-right">
                            <div className="text-3xl font-bold text-amber-800 mb-2">
                              {getPriceDisplay(product.price)}
                            </div>
                            <div className="flex items-center justify-end gap-1 mb-3">
                              <Star className="w-5 h-5 text-amber-500 fill-current" />
                              <span className="font-medium text-gray-900">
                                {getRating()}
                              </span>
                              <span className="text-gray-400 text-sm">
                                ({Math.floor(Math.random() * 100) + 50} reviews)
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                                product.category
                              )}`}
                            >
                              {product.category}
                            </span>
                            <span className="text-sm text-gray-500">
                              <Shield className="w-4 h-4 inline mr-1" />
                              100% Authentic
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            <button className="px-5 py-2 border border-amber-600 text-amber-700 rounded-full font-medium hover:bg-amber-50 transition-colors">
                              View Details
                            </button>
                            <button
                              onClick={() => handleAddToCart(product)}
                              className="px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-full font-medium hover:shadow-lg transition-all flex items-center gap-2"
                            >
                              <ShoppingBag className="w-5 h-5" />
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    ←
                  </button>

                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    let pageNumber;
                    if (totalPages <= 5) {
                      pageNumber = i + 1;
                    } else if (currentPage <= 3) {
                      pageNumber = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNumber = totalPages - 4 + i;
                    } else {
                      pageNumber = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`w-10 h-10 rounded-full font-medium transition-all ${
                          currentPage === pageNumber
                            ? "bg-gradient-to-r from-amber-600 to-amber-800 text-white shadow-lg"
                            : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    →
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 text-center border border-amber-200">
            <div className="text-3xl font-bold text-amber-800 mb-2">
              {perfumes.length}
            </div>
            <div className="text-gray-700 font-medium">Total Fragrances</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border border-blue-200">
            <div className="text-3xl font-bold text-blue-800 mb-2">
              {perfumes.filter((p) => p.category === "Men").length}
            </div>
            <div className="text-gray-700 font-medium">For Him</div>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 text-center border border-pink-200">
            <div className="text-3xl font-bold text-pink-800 mb-2">
              {perfumes.filter((p) => p.category === "Women").length}
            </div>
            <div className="text-gray-700 font-medium">For Her</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center border border-purple-200">
            <div className="text-3xl font-bold text-purple-800 mb-2">
              {perfumes.filter((p) => p.category === "Unisex").length}
            </div>
            <div className="text-gray-700 font-medium">Unisex</div>
          </div>
        </div>

        {/* Quick View Modal */}
        {hoveredProduct && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {hoveredProduct.title}
                    </h3>
                    <p className="text-gray-500">{hoveredProduct.brand}</p>
                  </div>
                  <button
                    onClick={() => setHoveredProduct(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl h-64 flex items-center justify-center">
                    <div className="text-8xl text-amber-200 opacity-70">
                      {hoveredProduct.category === "Men"
                        ? "🧔"
                        : hoveredProduct.category === "Women"
                        ? "👩"
                        : "👥"}
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                          hoveredProduct.category
                        )}`}
                      >
                        {hoveredProduct.category}
                      </span>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-2">
                        Description
                      </h4>
                      <p className="text-gray-600">
                        {hoveredProduct.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-2">
                        Fragrance Notes
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {["Top", "Middle", "Base"].map((note) => (
                          <span
                            key={note}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {note} Notes
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-3xl font-bold text-amber-800">
                        {getPriceDisplay(hoveredProduct.price)}
                      </div>
                      <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-full font-medium hover:shadow-lg transition-all">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }

        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }

        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #d97706;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        input[type="range"]::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #d97706;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
