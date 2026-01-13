import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { perfumes } from "../data/data";
import {
  ArrowLeft,
  ShoppingBag,
  Heart,
  Share2,
  Star,
  Truck,
  Shield,
  RotateCcw,
  ChevronRight,
  Check,
  Package,
  Clock,
  Award,
  Sparkles,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
  Eye,
  Tag,
  Users,
  Calendar,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../data/perfumslice";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("100ml");
  const [addedToCart, setAddedToCart] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showAllImages, setShowAllImages] = useState(false);
  
  // Get current size price
  const getCurrentPrice = () => {
    if (!product?.sizes) return product?.price || 0;
    const selectedSizeObj = product.sizes.find(size => size.size === selectedSize);
    return selectedSizeObj ? selectedSizeObj.price : product.price;
  };

  useEffect(() => {
    setIsLoading(true);
    // Find product
    const foundProduct = perfumes.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, [id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Related products (for recommendations)
  const relatedProducts = perfumes
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  const dispatch = useDispatch();
  
  // Handle add to cart
  const handleAddToCart = () => {
    setAddedToCart(true);
    dispatch(addToCart({
      ...product,
      selectedSize,
      quantity,
      price: getCurrentPrice()
    }));
    // Animation
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  // Handle share
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product?.title,
          text: product?.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      setShowShare(!showShare);
    }
  };

  // Get images to display in gallery
  const getGalleryImages = () => {
    if (!product?.images) return [];
    if (showAllImages) {
      return product.images;
    }
    return product.images.slice(0, 3);
    
  };

  // Handle image error
  const handleImageError = (e, imageName) => {
    e.target.style.display = "none";
    const container = e.target.parentElement;
    container.innerHTML = `
      <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-2xl">
        <div class="text-2xl md:text-3xl font-bold text-amber-600 mb-2 text-center">${product.title}</div>
        <div class="text-sm md:text-base text-amber-700 font-medium">${product.brand}</div>
      </div>
    `;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading fragrance details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-10 h-10 text-amber-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Fragrance Not Found
          </h3>
          <p className="text-gray-600 mb-6">
            The perfume you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-full font-medium hover:shadow-lg transition-all"
          >
            Browse All Fragrances
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
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="p-2 hover:bg-amber-50 rounded-full transition-colors"
              >
                <Heart
                  className={`w-6 h-6 ${
                    isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
                  }`}
                />
              </button>
              <button
                onClick={handleShare}
                className="p-2 hover:bg-amber-50 rounded-full transition-colors relative"
              >
                <Share2 className="w-6 h-6 text-gray-600" />
                {showShare && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 p-3 z-50">
                    <div className="flex gap-2">
                      <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                        <Facebook className="w-5 h-5" />
                      </button>
                      <button className="p-2 bg-sky-100 text-sky-600 rounded-lg hover:bg-sky-200 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </button>
                      <button className="p-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition-colors">
                        <Instagram className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Product Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="rounded-3xl p-8 md:p-8 flex items-center justify-center min-h-[400px] md:min-h-[500px] relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
              </div>
              
              {/* Main Product Image */}
              <div className="relative z-10 w-full h-full">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-[300px] md:h-[400px] max-w-md">
                    {product.images ? (
                      <img
                        src={`/assets/images/${product.images[selectedImage]}`}
                        alt={`${product.title} - ${product.brand}`}
                        className="rounded-xl w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-2xl">
                        <div className="text-4xl md:text-6xl mb-4">
                          {product.category === "Men"
                            ? "🧔"
                            : product.category === "Women"
                            ? "👩"
                            : "👥"}
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-amber-600 mb-2 text-center">
                          {product.title}
                        </div>
                        <div className="text-sm md:text-base text-amber-700 font-medium">
                          {product.brand}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Featured/Best Seller Badges */}
                <div className="absolute -top-4 -right-4 flex flex-col gap-2">
                  {product.featured && (
                    <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                      Featured
                    </div>
                  )}
                  {product.bestSeller && (
                    <div className="bg-gradient-to-r from-rose-600 to-rose-800 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Best Seller
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                {product.images && product.images.length > 3 && (
                  <button
                    onClick={() => setShowAllImages(!showAllImages)}
                    className="text-sm text-amber-700 hover:text-amber-800 font-medium flex items-center gap-1"
                  >
                    <Eye className="w-4 h-4" />
                    {showAllImages
                      ? "Show Less"
                      : `View All (${product.images.length})`}
                  </button>
                )}
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 pl-6 gap-3">
                {getGalleryImages().map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 relative group ${
                      selectedImage === index
                        ? "border-amber-600 scale-105 shadow-lg ring-2 ring-amber-200"
                        : "border-gray-200 hover:border-amber-400 hover:scale-102"
                    }`}
                  >
                    <div className="w-full h-full relative">
                      <img
                        src={`/assets/images/${image}`}
                        alt={`${product.title} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                      {selectedImage === index && (
                        <div className="absolute inset-0 border-4 border-amber-400 rounded-2xl"></div>
                      )}
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded">
                      {index + 1}
                    </div>
                  </button>
                ))}

                {/* View All/More Button */}
                {product.images &&
                  product.images.length > 3 &&
                  !showAllImages && (
                    <button
                      onClick={() => setShowAllImages(true)}
                      className="aspect-square rounded-2xl border-2 border-dashed border-gray-300 hover:border-amber-400 hover:bg-amber-50 transition-colors flex items-center justify-center group"
                    >
                      <div className="text-center">
                        <Sparkles className="w-6 h-6 text-gray-400 group-hover:text-amber-600 mx-auto mb-1" />
                        <span className="text-xs text-gray-500 group-hover:text-amber-700">
                          +{product.images.length - 3} more
                        </span>
                      </div>
                    </button>
                  )}
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Product Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Brand</span>
                  <span className="font-medium text-gray-900">
                    {product.brand}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium text-gray-900">
                    {product.category}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Images Available</span>
                  <span className="font-medium text-gray-900">
                    {product.images?.length || 0} images
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Longevity</span>
                  <span className="font-medium text-gray-900">
                    {product.longevity || "8-12 Hours"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sillage</span>
                  <span className="font-medium text-gray-900">
                    {product.sillage || "Moderate to Strong"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Stock Status</span>
                  <span className={`font-medium ${product.stock > 10 ? 'text-green-600' : product.stock > 0 ? 'text-amber-600' : 'text-red-600'}`}>
                    {product.stock > 10 ? 'In Stock' : product.stock > 0 ? 'Low Stock' : 'Out of Stock'} ({product.stock})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Best For</span>
                  <span className="font-medium text-gray-900 text-right">
                    {product.bestFor?.slice(0, 2).join(', ')}
                    {product.bestFor?.length > 2 && '...'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-8">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
              <button
                onClick={() => navigate("/")}
                className="hover:text-amber-700"
              >
                Home
              </button>
              <ChevronRight className="w-4 h-4 mx-2" />
              <button
                onClick={() => navigate("/products")}
                className="hover:text-amber-700"
              >
                Fragrances
              </button>
              <ChevronRight className="w-4 h-4 mx-2" />
              <button
                onClick={() =>
                  navigate(`/products?category=${product.category}`)
                }
                className="hover:text-amber-700"
              >
                {product.category}
              </button>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-gray-900 font-medium">{product.title}</span>
            </div>

            {/* Product Header */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.category === "Men"
                      ? "bg-blue-100 text-blue-800"
                      : product.category === "Women"
                      ? "bg-pink-100 text-pink-800"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {product.category}
                </span>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= Math.round(product.rating)
                          ? "text-amber-500 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                {product.title}
              </h1>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-amber-800">
                  MAD {getCurrentPrice().toLocaleString()}
                </span>
                {product.sizes && (
                  <span className="text-sm text-gray-500">
                    ({selectedSize})
                  </span>
                )}
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                  Free Shipping
                </span>
              </div>
            </div>

            {/* Fragrance Notes */}
            {product.notes && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Fragrance Notes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl p-4">
                    <div className="text-blue-600 mb-2">Top Notes</div>
                    <div className="space-y-1">
                      {product.notes.top.map((note, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          <span className="text-gray-700">{note}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-b from-green-50 to-green-100 rounded-2xl p-4">
                    <div className="text-green-600 mb-2">Middle Notes</div>
                    <div className="space-y-1">
                      {product.notes.middle.map((note, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          <span className="text-gray-700">{note}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-b from-amber-50 to-amber-100 rounded-2xl p-4">
                    <div className="text-amber-600 mb-2">Base Notes</div>
                    <div className="space-y-1">
                      {product.notes.base.map((note, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                          <span className="text-gray-700">{note}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Best For */}
            {product.bestFor && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Perfect For
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.bestFor.map((item, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 rounded-full text-sm font-medium flex items-center gap-2"
                    >
                      <Users className="w-4 h-4" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Select Size
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((sizeObj) => (
                    <button
                      key={sizeObj.size}
                      onClick={() => setSelectedSize(sizeObj.size)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all relative group ${
                        selectedSize === sizeObj.size
                          ? "bg-gradient-to-r from-amber-600 to-amber-800 text-white shadow-lg"
                          : "bg-white border-2 border-gray-200 text-gray-700 hover:border-amber-400"
                      }`}
                    >
                      {sizeObj.size}
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        MAD {sizeObj.price.toLocaleString()}
                      </div>
                    </button>
                  ))}
                </div>
                
                {/* Size Price Comparison */}
                <div className="mt-4 bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-600 mb-2">Price per ml comparison:</div>
                  <div className="grid grid-cols-4 gap-2">
                    {product.sizes.map((sizeObj) => {
                      const sizeMl = parseInt(sizeObj.size);
                      const pricePerMl = sizeObj.price / sizeMl;
                      return (
                        <div key={sizeObj.size} className="text-center">
                          <div className="text-xs text-gray-500">{sizeObj.size}</div>
                          <div className={`text-sm font-medium ${selectedSize === sizeObj.size ? 'text-amber-700' : 'text-gray-700'}`}>
                            MAD {pricePerMl.toFixed(2)}/ml
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-bold text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>

                <div className="flex-1">
                  <button
                    onClick={handleAddToCart}
                    disabled={addedToCart || product.stock === 0}
                    className={`w-full h-12 rounded-xl font-bold transition-all flex items-center justify-center gap-3 ${
                      addedToCart
                        ? "bg-green-600 text-white"
                        : product.stock === 0
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-gradient-to-r from-amber-600 to-amber-800 text-white hover:shadow-xl hover:scale-105"
                    }`}
                  >
                    {addedToCart ? (
                      <>
                        <Check className="w-5 h-5" />
                        Added to Cart
                      </>
                    ) : product.stock === 0 ? (
                      "Out of Stock"
                    ) : (
                      <>
                        <ShoppingBag className="w-5 h-5" />
                        Add to Cart - MAD {(getCurrentPrice() * quantity).toLocaleString()}
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Stock Status */}
              <div className="text-sm text-gray-600">
                {product.stock > 10 ? (
                  <span className="text-green-600">✓ In stock - {product.stock} available</span>
                ) : product.stock > 0 ? (
                  <span className="text-amber-600">⚠ Low stock - Only {product.stock} left</span>
                ) : (
                  <span className="text-red-600">✗ Out of stock</span>
                )}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
                <Truck className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">
                  Free Shipping
                </div>
                <div className="text-xs text-gray-500">2-5 business days</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
                <Shield className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">
                  100% Authentic
                </div>
                <div className="text-xs text-gray-500">Guaranteed</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
                <RotateCcw className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">
                  Easy Returns
                </div>
                <div className="text-xs text-gray-500">30-day policy</div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-4">
              {product.longevity && (
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Longevity</div>
                    <div className="text-sm text-gray-600">
                      Lasts {product.longevity}
                    </div>
                  </div>
                </div>
              )}
              {product.sillage && (
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Sillage</div>
                    <div className="text-sm text-gray-600">
                      {product.sillage} projection
                    </div>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-3">
                <Package className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">
                    Premium Packaging
                  </div>
                  <div className="text-sm text-gray-600">
                    Elegant gift box with complimentary samples
                  </div>
                </div>
              </div>
              {product.bestSeller && (
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Best Seller</div>
                    <div className="text-sm text-gray-600">
                      Top selling fragrance in our collection
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Customer Reviews ({product.reviews})
            </h2>
            <button className="px-6 py-2 border border-amber-600 text-amber-700 rounded-full font-medium hover:bg-amber-50 transition-colors">
              Write a Review
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Sample Reviews - You can replace with real reviews */}
            {[
              {
                name: "Alex M.",
                rating: product.rating,
                comment: "Absolutely love this fragrance! The longevity is amazing and the scent is exactly what I was looking for.",
                date: "2 days ago",
                verified: true
              },
              {
                name: "Sarah J.",
                rating: product.rating,
                comment: "Perfect for everyday wear. The notes develop beautifully throughout the day.",
                date: "1 week ago",
                verified: true
              },
              {
                name: "Michael T.",
                rating: product.rating,
                comment: "Great value for money. The packaging was excellent and delivery was fast.",
                date: "3 weeks ago",
                verified: true
              },
              {
                name: "Emma L.",
                rating: product.rating,
                comment: "My new favorite perfume! The fragrance is unique and gets me compliments every time I wear it.",
                date: "1 month ago",
                verified: true
              }
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center">
                    <span className="font-bold text-amber-800">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{review.name}</div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= Math.round(review.rating)
                              ? "text-amber-500 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{review.comment}"</p>
                <div className="text-sm text-gray-500">
                  {review.verified && <span className="text-green-600 mr-2">✓ Verified Purchase</span>}
                  • {review.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <div
                  key={related.id}
                  onClick={() => navigate(`/product/${related.id}`)}
                  className="group bg-white cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                >
                  <div className="h-48 bg-white flex items-center justify-center p-4 relative">
                    {related.images && related.images.length > 0 ? (
                      <img
                        src={`/assets/images/${related.images[0]}`}
                        alt={related.title}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = "none";
                          const container = e.target.parentElement;
                          container.innerHTML = `
                            <div class="text-6xl text-amber-200">
                              ${
                                related.category === "Men"
                                  ? "🧔"
                                  : related.category === "Women"
                                  ? "👩"
                                  : "👥"
                              }
                            </div>
                          `;
                        }}
                      />
                    ) : (
                      <div className="text-6xl text-amber-200">
                        {related.category === "Men"
                          ? "🧔"
                          : related.category === "Women"
                          ? "👩"
                          : "👥"}
                      </div>
                    )}
                    
                    {/* Product badges */}
                    <div className="absolute top-3 right-3 flex flex-col gap-1">
                      {related.featured && (
                        <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs px-2 py-1 rounded-full">
                          Featured
                        </div>
                      )}
                      {related.bestSeller && (
                        <div className="bg-gradient-to-r from-rose-600 to-rose-800 text-white text-xs px-2 py-1 rounded-full">
                          Best Seller
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-1">
                      {related.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">
                      {related.category} • {related.brand}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-amber-800">
                        MAD {related.price.toLocaleString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-amber-500 fill-current mr-1" />
                        {related.rating} ({related.reviews})
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Need Help Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-900 to-amber-800 text-white rounded-3xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need Help Choosing?</h3>
              <p className="text-amber-100">
                Our fragrance experts are here to help you find your perfect scent
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-3 bg-white text-amber-900 rounded-full font-medium hover:bg-amber-100 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Live Chat
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .hover\:scale-102:hover {
          transform: scale(1.02);
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}