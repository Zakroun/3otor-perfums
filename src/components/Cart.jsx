import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart, updateQuantity } from "../data/perfumslice";
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowLeft, 
  CreditCard, 
  Truck, 
  Shield, 
  RotateCcw, 
  Check,
  Sparkles,
  Heart,
  X,
  AlertCircle,
  Package
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const cartItems = useSelector((state) => state.perfum.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [quantities, setQuantities] = useState({});
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "Morocco"
  });
  
  // Calculate totals
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const quantity = quantities[item.id] || 1;
      return total + (item.price * quantity);
    }, 0);
  };
  
  const shippingFee = cartItems.length > 0 ? 49 : 0;
  const tax = calculateSubtotal() * 0.10; // 10% tax
  const total = calculateSubtotal() + shippingFee + tax;
  
  // Initialize quantities
  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach(item => {
      initialQuantities[item.id] = initialQuantities[item.id] || 1;
    });
    setQuantities(initialQuantities);
  }, [cartItems]);
  
  // Handle quantity changes
  const handleQuantityChange = (itemId, change) => {
    const currentQty = quantities[itemId] || 1;
    const newQty = Math.max(1, currentQty + change);
    
    setQuantities(prev => ({
      ...prev,
      [itemId]: newQty
    }));
    
    // Update in Redux store
    dispatch(updateQuantity({ id: itemId, quantity: newQty }));
  };
  
  // Handle remove item
  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };
  
  // Handle checkout
  const handleCheckout = () => {
    setIsCheckingOut(true);
  };
  
  // Handle payment submission
  const handlePayment = (e) => {
    e.preventDefault();
    
    // Simulate payment processing
    setTimeout(() => {
      setCheckoutSuccess(true);
      setTimeout(() => {
        dispatch(clearCart());
        navigate("/");
      }, 3000);
    }, 1500);
  };
  
  // Handle input changes for shipping
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Get image path
  const getImagePath = (imageName) => {
    return `/assets/images/${imageName}`;
  };
  
  if (checkoutSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been processed successfully.
            You will receive a confirmation email shortly.
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Package className="w-8 h-8 text-amber-600" />
              <div>
                <div className="font-bold text-gray-900">Order Number</div>
                <div className="text-sm text-gray-500">#ORD{Date.now().toString().slice(-8)}</div>
              </div>
            </div>
            <div className="text-lg font-bold text-gray-900 mb-2">
              Total: MAD {total.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">
              {cartItems.length} items • Free Shipping Included
            </div>
          </div>
          <button
            onClick={() => navigate("/")}
            className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-xl font-bold hover:shadow-xl transition-all"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }
  
  if (isCheckingOut) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setIsCheckingOut(false)}
              className="flex items-center gap-2 text-gray-700 hover:text-amber-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Cart</span>
            </button>
            <div className="text-sm text-gray-500">Step 2 of 2</div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Shipping & Payment */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h2>
              
              {/* Shipping Information */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-amber-600" />
                  Shipping Information
                </h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={shippingAddress.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={shippingAddress.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={shippingAddress.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                      placeholder="+212 600 000 000"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={shippingAddress.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                      placeholder="123 Street Name"
                      required
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={shippingAddress.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                        placeholder="Casablanca"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="zip"
                        value={shippingAddress.zip}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                        placeholder="20000"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <select
                        name="country"
                        value={shippingAddress.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white"
                      >
                        <option value="Morocco">Morocco</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="France">France</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              
              {/* Payment Method */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-amber-600" />
                  Payment Method
                </h3>
                <div className="space-y-3 mb-6">
                  <button
                    onClick={() => setPaymentMethod("card")}
                    className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                      paymentMethod === "card" 
                        ? "border-amber-600 bg-amber-50" 
                        : "border-gray-200 hover:border-amber-400"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === "card" 
                          ? "border-amber-600 bg-amber-600" 
                          : "border-gray-300"
                      }`}>
                        {paymentMethod === "card" && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className="font-medium">Credit/Debit Card</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-5 bg-blue-500 rounded"></div>
                      <div className="w-8 h-5 bg-red-500 rounded"></div>
                      <div className="w-8 h-5 bg-yellow-500 rounded"></div>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => setPaymentMethod("cash")}
                    className={`w-full p-4 rounded-xl border-2 transition-all flex items-center ${
                      paymentMethod === "cash" 
                        ? "border-amber-600 bg-amber-50" 
                        : "border-gray-200 hover:border-amber-400"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === "cash" 
                          ? "border-amber-600 bg-amber-600" 
                          : "border-gray-300"
                      }`}>
                        {paymentMethod === "cash" && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className="font-medium">Cash on Delivery</span>
                    </div>
                  </button>
                </div>
                
                <button
                  onClick={handlePayment}
                  className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-5 h-5" />
                  Complete Purchase - MAD {total.toLocaleString()}
                </button>
              </div>
            </div>
            
            {/* Right Column - Order Summary */}
            <div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-3 bg-amber-50 rounded-xl">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        {item.images && item.images.length > 0 ? (
                          <img
                            src={getImagePath(item.images[0])}
                            alt={item.title}
                            className="w-full h-full object-cover rounded-lg"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = `
                                <div class="text-lg font-bold text-amber-800">
                                  ${item.title.substring(0, 2)}
                                </div>
                              `;
                            }}
                          />
                        ) : (
                          <div className="text-lg font-bold text-amber-800">
                            {item.title.substring(0, 2)}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-500">{item.brand}</div>
                        <div className="text-amber-800 font-bold">MAD {item.price.toLocaleString()}</div>
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        Qty: {quantities[item.id] || 1}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Order Summary */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>MAD {calculateSubtotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{shippingFee === 0 ? "Free" : `MAD ${shippingFee}`}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (10%)</span>
                    <span>MAD {tax.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>Total</span>
                      <span>MAD {total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="text-center p-2">
                    <Shield className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-600">Secure Payment</div>
                  </div>
                  <div className="text-center p-2">
                    <Truck className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-600">Free Shipping</div>
                  </div>
                  <div className="text-center p-2">
                    <RotateCcw className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-600">30-Day Returns</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Main Cart View
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-amber-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any fragrances to your cart yet. 
            Explore our collection to find your perfect scent.
          </p>
          <button
            onClick={() => navigate("/shop")}
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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600 mt-2">
              {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
            </p>
          </div>
          <button
            onClick={() => navigate("/products")}
            className="flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Continue Shopping
          </button>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {cartItems.map((item, index) => (
                <div key={`${item.id}-${index}`} className="p-6 border-b border-gray-100 last:border-b-0">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Product Image */}
                    <div className="w-full sm:w-32 h-32 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl overflow-hidden flex-shrink-0">
                      {item.images && item.images.length > 0 ? (
                        <img
                          src={getImagePath(item.images[0])}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center">
                                <div class="text-3xl">
                                  ${item.category === "Men" ? "🧔" : 
                                    item.category === "Women" ? "👩" : "👥"}
                                </div>
                              </div>
                            `;
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-3xl">
                            {item.category === "Men" ? "🧔" : 
                             item.category === "Women" ? "👩" : "👥"}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                          <p className="text-gray-500 text-sm">{item.brand} • {item.category}</p>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                      
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        {/* Quantity Selector */}
                        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                          <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-10 text-center font-medium text-gray-900">
                            {quantities[item.id] || 1}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        {/* Price */}
                        <div className="text-right">
                          <div className="text-2xl font-bold text-amber-800">
                            MAD {(item.price * (quantities[item.id] || 1)).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500">
                            MAD {item.price.toLocaleString()} each
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Clear Cart Button */}
              <div className="p-6 border-t border-gray-100">
                <button
                  onClick={() => {
                    if (window.confirm("Are you sure you want to clear your cart?")) {
                      dispatch(clearCart());
                    }
                  }}
                  className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                  Clear All Items
                </button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
              
              {/* Summary Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">MAD {calculateSubtotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">{shippingFee === 0 ? "Free" : `MAD ${shippingFee}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span className="font-medium">MAD {tax.toLocaleString()}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>MAD {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-xl font-bold hover:shadow-xl transition-all mb-6 flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                Proceed to Checkout
              </button>
              
              {/* Payment Methods */}
              <div className="space-y-3 mb-6">
                <div className="text-sm text-gray-600 mb-2">We Accept</div>
                <div className="flex gap-2">
                  <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
                    VISA
                  </div>
                  <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                    MC
                  </div>
                  <div className="w-12 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs">
                    CMI
                  </div>
                  <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-white text-xs">
                    COD
                  </div>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-amber-50 rounded-xl">
                  <Shield className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                  <div className="text-xs font-medium text-gray-900">Secure</div>
                  <div className="text-xs text-gray-500">Payment</div>
                </div>
                <div className="text-center p-3 bg-amber-50 rounded-xl">
                  <Truck className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                  <div className="text-xs font-medium text-gray-900">Free</div>
                  <div className="text-xs text-gray-500">Shipping</div>
                </div>
                <div className="text-center p-3 bg-amber-50 rounded-xl">
                  <RotateCcw className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                  <div className="text-xs font-medium text-gray-900">Easy</div>
                  <div className="text-xs text-gray-500">Returns</div>
                </div>
              </div>
              
              {/* Help Text */}
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <div className="font-medium mb-1">Need Help?</div>
                    <div>Contact our customer support for assistance with your order.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}