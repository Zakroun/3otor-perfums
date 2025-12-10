import React, { useState } from "react";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  Facebook,
  Apple,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    setErrors({});

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setLoginSuccess(true);

    // Reset after showing success
    setTimeout(() => {
      setLoginSuccess(false);
      // In real app, redirect to dashboard
      // window.location.to = "/dashboard";
    }, 2000);
  };

  const socialLogins = [
    {
      name: "Google",
      icon: <FcGoogle className="w-5 h-5" />,
      color: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50",
      provider: "google",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5 text-white" />,
      color: "bg-blue-600 text-white hover:bg-blue-700",
      provider: "facebook",
    },
    {
      name: "Apple",
      icon: <Apple className="w-5 h-5 text-white" />,
      color: "bg-black text-white hover:bg-gray-900",
      provider: "apple",
    },
  ];

  const benefits = [
    {
      icon: "🎁",
      title: "Exclusive Offers",
      description: "Receive special promotions and early access to sales",
    },
    {
      icon: "⚡",
      title: "Faster Checkout",
      description: "Save your details for quick and easy purchases",
    },
    {
      icon: "📦",
      title: "Order Tracking",
      description: "Track your orders and view purchase history",
    },
    {
      icon: "💝",
      title: "Wishlist",
      description: "Save your favorite fragrances for later",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <img
              src="/assets/images/3otor1.png"
              alt="3otor Original Logo"
              className="max-w-[80px] md:max-w-[180px] mx-auto mb-6"
            />

            <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Welcome Back to{" "}
              <span className="text-gradient bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                Your Fragrance World
              </span>
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Sign in to access your account and continue your scent journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Login Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
              {/* Form Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sign In</h3>
                <p className="text-gray-600">
                  Enter your credentials to access your account
                </p>
              </div>

              {/* Success Message */}
              {loginSuccess && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                    <div>
                      <h4 className="font-bold text-emerald-900">
                        Login Successful!
                      </h4>
                      <p className="text-emerald-700 text-sm">
                        Welcome back! Redirecting to your dashboard...
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleLogin}>
                <div className="space-y-6">
                  {/* Email Field */}
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
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all ${
                          errors.email 
                            ? "border-red-300 focus:ring-red-500" 
                            : "border-gray-300"
                        }`}
                        placeholder="your@email.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-gray-700 font-medium">
                        Password *
                      </label>
                      <Link
                        to="/forgot-password"
                        className="text-sm text-amber-700 hover:text-amber-800 transition-colors"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all ${
                          errors.password 
                            ? "border-red-300 focus:ring-red-500" 
                            : "border-gray-300"
                        }`}
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                        ) : (
                          <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                    )}
                  </div>

                  {/* Remember Me & Terms */}
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500"
                      />
                      <label
                        htmlFor="rememberMe"
                        className="ml-2 text-gray-700 cursor-pointer"
                      >
                        Remember me on this device
                      </label>
                      <button
                        type="button"
                        className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                        title="Stay logged in on this device"
                      >
                        <AlertCircle className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-sm text-gray-500">
                      By signing in, you agree to our{" "}
                      <Link
                        to="/terms"
                        className="text-amber-700 hover:text-amber-800 underline"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/privacy"
                        className="text-amber-700 hover:text-amber-800 underline"
                      >
                        Privacy Policy
                      </Link>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-gradient-to-r from-amber-600 to-amber-800 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                      isLoading ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Signing in...
                      </span>
                    ) : (
                      "Sign In to Your Account"
                    )}
                  </button>
                </div>
              </form>

              {/* Divider */}
              <div className="my-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-3 gap-3">
                {socialLogins.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => console.log(`Login with ${social.provider}`)}
                    className={`flex items-center justify-center py-3 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md ${social.color}`}
                  >
                    {social.icon}
                    <span className="sr-only">{social.name}</span>
                  </button>
                ))}
              </div>

              {/* Alternative Login */}
              <div className="mt-6 text-center">
                <button className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <Smartphone className="w-5 h-5" />
                  Sign in with phone number
                </button>
              </div>

              {/* Register Link */}
              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-gray-600">
                  New to 3OTOR?{" "}
                  <Link
                    to="/register"
                    className="text-amber-700 hover:text-amber-800 font-semibold underline transition-colors"
                  >
                    Create an account
                  </Link>
                </p>
              </div>
            </div>

            {/* Right Column - Benefits & Features */}
            <div className="space-y-8">
              {/* Benefits Card */}
              <div className="bg-gradient-to-br from-amber-900 to-amber-800 text-white rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Why Sign In?</h3>
                </div>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="text-2xl">{benefit.icon}</div>
                      <div>
                        <h4 className="font-bold text-lg">{benefit.title}</h4>
                        <p className="text-amber-100">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-amber-700">
                  <div className="flex items-center gap-2 text-amber-200">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">
                      Join over 500,000 satisfied customers worldwide
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-3xl border border-amber-100 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  Your Account at a Glance
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-800 mb-1">
                      📦
                    </div>
                    <div className="text-sm text-gray-600">Order History</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-800 mb-1">
                      💝
                    </div>
                    <div className="text-sm text-gray-600">Wishlist Items</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-800 mb-1">
                      ⭐
                    </div>
                    <div className="text-sm text-gray-600">Loyalty Points</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-800 mb-1">
                      🎯
                    </div>
                    <div className="text-sm text-gray-600">Personalized Recommendations</div>
                  </div>
                </div>
              </div>

              {/* Security Info */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl border border-blue-200 p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Secure & Encrypted
                    </h4>
                    <p className="text-sm text-gray-600">
                      Your login is protected with industry-standard encryption. 
                      Your personal information is always safe with us.
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-white rounded-3xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What Our Members Say</h3>
                <div className="space-y-4">
                  <div className="bg-amber-50 rounded-2xl p-4">
                    <p className="text-gray-700 italic text-sm mb-2">
                      "Signing in lets me track all my orders and save my favorite scents. The wishlist feature is a game-changer!"
                    </p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center text-sm font-bold text-amber-800 mr-2">
                        S
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Sarah M.</p>
                        <p className="text-xs text-gray-600">Member since 2021</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-rose-50 rounded-2xl p-4">
                    <p className="text-gray-700 italic text-sm mb-2">
                      "The personalized recommendations based on my purchase history help me discover amazing new fragrances."
                    </p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-rose-200 flex items-center justify-center text-sm font-bold text-rose-800 mr-2">
                        A
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Ahmed K.</p>
                        <p className="text-xs text-gray-600">VIP Member</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-12 text-center text-gray-600">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4">
              <Link
                to="/help"
                className="hover:text-amber-700 transition-colors text-sm"
              >
                Help Center
              </Link>
              <Link
                to="/privacy"
                className="hover:text-amber-700 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-amber-700 transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                to="/contact"
                className="hover:text-amber-700 transition-colors text-sm"
              >
                Contact Us
              </Link>
              <Link
                to="/stores"
                className="hover:text-amber-700 transition-colors text-sm"
              >
                Store Locator
              </Link>
              <Link
                to="/faq"
                className="hover:text-amber-700 transition-colors text-sm"
              >
                FAQ
              </Link>
            </div>
            <p className="text-sm">
              © 2024 3OTOR Luxury Fragrances. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Crafting exceptional scents since 2005
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .text-gradient {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
}