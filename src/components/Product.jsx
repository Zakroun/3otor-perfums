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
  // console.log(product)
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

  // Related products (for recommendations)
  const relatedProducts = perfumes
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  // Sizes available
  const sizes = ["30ml", "50ml", "100ml", "200ml"];

  // Fragrance notes (example data)
  const fragranceNotes = {
    top: ["Bergamot", "Marine Notes", "Lemon"],
    middle: ["Jasmine", "Neroli", "Sea Notes"],
    base: ["Musk", "Cedarwood", "Ambergris"],
  };
  const dispatch = useDispatch();
  // Handle add to cart
  const handleAddToCart = () => {
    setAddedToCart(true);
    dispatch(addToCart(product));
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
            <div className=" rounded-3xl p-8 md:p-12 flex items-center justify-center min-h-[400px] md:min-h-[500px] relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
              </div>
              {/* {console.log('product : ' , product)} */}
              {/* Main Product Image */}
              <div className="relative z-10 w-full h-full">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-[400px] md:h-[500px] max-w-md">
                    {product.images ? (
                      <img
                        src={`/assets/images/${product.images[selectedImage]}`}
                        alt={`${product.title} - ${product.brand}`}
                        className=" rounded-xl w-full h-full transform transition-transform duration-700 group-hover:scale-110"
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
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                  Featured
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900">Gallery</h3>
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
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
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
                        // onError={(e) => {
                        //   e.target.style.display = "none";
                        //   const container = e.target.parentElement;
                        //   container.innerHTML = `
                        //     <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100 p-2">
                        //       <div class="text-lg font-bold text-amber-600">${product.title.substring(0, 10)}</div>
                        //     </div>
                        //   `;
                        // }}
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
                  <span className="text-gray-600">Concentration</span>
                  <span className="font-medium text-gray-900">
                    Eau de Parfum
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Longevity</span>
                  <span className="font-medium text-gray-900">8-12 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sillage</span>
                  <span className="font-medium text-gray-900">
                    Moderate to Strong
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
                    ({product.reviews})
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
                  MAD {product.price.toLocaleString()}
                </span>
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                  Free Shipping
                </span>
              </div>
            </div>

            {/* Fragrance Notes */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Fragrance Notes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl p-4">
                  <div className="text-blue-600 mb-2">Top Notes</div>
                  <div className="space-y-1">
                    {fragranceNotes.top.map((note, index) => (
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
                    {fragranceNotes.middle.map((note, index) => (
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
                    {fragranceNotes.base.map((note, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                        <span className="text-gray-700">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Select Size
              </h3>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all ${
                      selectedSize === size
                        ? "bg-gradient-to-r from-amber-600 to-amber-800 text-white shadow-lg"
                        : "bg-white border-2 border-gray-200 text-gray-700 hover:border-amber-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

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
                    disabled={addedToCart}
                    className={`w-full h-12 rounded-xl font-bold transition-all flex items-center justify-center gap-3 ${
                      addedToCart
                        ? "bg-green-600 text-white"
                        : "bg-gradient-to-r from-amber-600 to-amber-800 text-white hover:shadow-xl hover:scale-105"
                    }`}
                  >
                    {addedToCart ? (
                      <>
                        <Check className="w-5 h-5" />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-5 h-5" />
                        Add to Cart - MAD{" "}
                        {(product.price * quantity).toLocaleString()}
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Buy Now Button */}
              {/* <button className="w-full h-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-3">
                <Sparkles className="w-5 h-5" />
                Buy Now
              </button> */}
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
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Long Lasting</div>
                  <div className="text-sm text-gray-600">
                    8-12 hours of consistent fragrance projection
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Award Winning</div>
                  <div className="text-sm text-gray-600">
                    Best Fragrance Award 2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Customer Reviews
            </h2>
            <button className="px-6 py-2 border border-amber-600 text-amber-700 rounded-full font-medium hover:bg-amber-50 transition-colors">
              Write a Review
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((review) => (
              <div
                key={review}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center">
                    <span className="font-bold text-amber-800">U{review}</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      User {review}
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-amber-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "This fragrance is absolutely stunning. The longevity is
                  impressive and the scent profile is exactly what I was looking
                  for."
                </p>
                <div className="text-sm text-gray-500">
                  Verified Purchase • 2 days ago
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
                  className="group bg-white cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer"
                >
                  <div className="h-48 bg-white flex items-center justify-center p-4">
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
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-1">
                      {related.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">
                      {related.category}
                    </p>
                    <div className="text-xl font-bold text-amber-800">
                      MAD {related.price.toLocaleString()}
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
                Our fragrance experts are here to help you find your perfect
                scent
              </p>
            </div>
            <div className="flex gap-4">
              <button onClick={()=>navigate('/contact')} className="px-6 py-3 bg-white text-amber-900 rounded-full font-medium hover:bg-amber-100 transition-colors flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Live Chat
              </button>
              <button onClick={()=>navigate('/contact')} className="px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors">
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
