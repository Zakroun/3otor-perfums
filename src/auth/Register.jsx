import React, { useState } from "react";
import {
  User,
  Lock,
  Mail,
  Eye,
  EyeOff,
  CheckCircle,
  Phone,
  Calendar,
  MapPin,
  Sparkles,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    address: "",
    newsletter: true,
    terms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Calculate password strength
    if (name === "password") {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    setPasswordStrength(strength);
  };

  const getPasswordStrengthText = () => {
    const texts = ["Very Weak", "Weak", "Fair", "Strong", "Very Strong"];
    return texts[passwordStrength] || "Very Weak";
  };

  const getPasswordStrengthColor = () => {
    const colors = [
      "bg-red-500",
      "bg-orange-500",
      "bg-yellow-500",
      "bg-green-500",
      "bg-emerald-600",
    ];
    return colors[passwordStrength] || "bg-gray-300";
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    // Validate terms
    if (!formData.terms) {
      alert("Please accept the Terms of Service and Privacy Policy");
      setIsLoading(false);
      return;
    }

    // Validate password strength
    if (passwordStrength < 2) {
      alert(
        "Please create a stronger password (at least 8 characters with letters and numbers)"
      );
      setIsLoading(false);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setRegistrationSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setRegistrationSuccess(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        birthDate: "",
        address: "",
        newsletter: true,
        terms: false,
      });
      setPasswordStrength(0);
    }, 3000);
  };

  const socialRegistrations = [
    {
      name: "Google",
      icon: <FcGoogle className="w-5 h-5" />,
      color: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50",
      provider: "google",
    },
    {
      name: "Facebook",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: "bg-blue-600 text-white hover:bg-blue-700",
      provider: "facebook",
    },
    {
      name: "Apple",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z" />
        </svg>
      ),
      color: "bg-black text-white hover:bg-gray-900",
      provider: "apple",
    },
  ];

  const benefits = [
    {
      icon: "🎁",
      title: "Welcome Gift",
      description: "Get 15% off your first purchase instantly",
    },
    {
      icon: "⭐",
      title: "VIP Status",
      description: "Access to exclusive members-only events and previews",
    },
    {
      icon: "📦",
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders over 500 MAD",
    },
    {
      icon: "💝",
      title: "Birthday Surprise",
      description: "Special birthday gift and discount every year",
    },
  ];

  const steps = [
    { number: 1, title: "Create Account", active: true },
    { number: 2, title: "Verify Email", active: false },
    { number: 3, title: "Complete Profile", active: false },
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
              className="max-w-[80px] md:max-w-[180px] mx-auto mb-4"
            />

            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Join the{" "}
              <span className="text-gradient bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                3OTOR Family
              </span>
            </h1>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Create your account and unlock exclusive fragrance experiences
            </p>
          </div>

          {/* Progress Steps */}
          <div className="max-w-3xl mx-auto mb-8 md:mb-12">
            <div className="flex items-center justify-center mb-4">
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-2 ${
                        step.active
                          ? "bg-gradient-to-r from-amber-600 to-amber-800 text-white"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      {step.number}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        step.active ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-16 md:w-24 h-1 mx-2 bg-gray-200"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Registration Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
              {/* Success Message */}
              {registrationSuccess && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                    <div>
                      <h4 className="font-bold text-emerald-900">
                        Registration Successful!
                      </h4>
                      <p className="text-emerald-700 text-sm">
                        Welcome to 3OTOR. Please check your email to verify your
                        account.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Registration Form */}
              <form onSubmit={handleRegister}>
                <div className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                          placeholder="John"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                          placeholder="+212 6 XX XX XX XX"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Birth Date
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="date"
                          name="birthDate"
                          value={formData.birthDate}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        City
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                          placeholder="Your city"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Password Fields */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Password *
                    </label>
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
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                        placeholder="Create a strong password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                        ) : (
                          <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                    </div>

                    {/* Password Strength Indicator */}
                    {formData.password && (
                      <div className="mt-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">
                            Password strength:
                          </span>
                          <span
                            className={`font-medium ${
                              passwordStrength === 0
                                ? "text-red-600"
                                : passwordStrength === 1
                                ? "text-orange-600"
                                : passwordStrength === 2
                                ? "text-yellow-600"
                                : passwordStrength === 3
                                ? "text-green-600"
                                : "text-emerald-700"
                            }`}
                          >
                            {getPasswordStrengthText()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${getPasswordStrengthColor()} transition-all duration-300`}
                            style={{
                              width: `${(passwordStrength / 4) * 100}%`,
                            }}
                          ></div>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          <ul className="grid grid-cols-2 gap-1">
                            <li
                              className={
                                formData.password.length >= 8
                                  ? "text-green-600"
                                  : "text-gray-400"
                              }
                            >
                              ✓ At least 8 characters
                            </li>
                            <li
                              className={
                                /[A-Z]/.test(formData.password)
                                  ? "text-green-600"
                                  : "text-gray-400"
                              }
                            >
                              ✓ One uppercase letter
                            </li>
                            <li
                              className={
                                /[0-9]/.test(formData.password)
                                  ? "text-green-600"
                                  : "text-gray-400"
                              }
                            >
                              ✓ One number
                            </li>
                            <li
                              className={
                                /[^A-Za-z0-9]/.test(formData.password)
                                  ? "text-green-600"
                                  : "text-gray-400"
                              }
                            >
                              ✓ One special character
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                        ) : (
                          <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                    {formData.password && formData.confirmPassword && (
                      <div className="mt-2">
                        {formData.password === formData.confirmPassword ? (
                          <span className="text-green-600 text-sm flex items-center">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Passwords match
                          </span>
                        ) : (
                          <span className="text-red-600 text-sm">
                            Passwords do not match
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Newsletter & Terms */}
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500 mt-1"
                      />
                      <label
                        htmlFor="newsletter"
                        className="ml-2 text-gray-700"
                      >
                        Yes, I want to receive exclusive offers, fragrance tips,
                        and updates from 3OTOR via email. I can unsubscribe at
                        any time.
                      </label>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        required
                        className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500 mt-1"
                      />
                      <label htmlFor="terms" className="ml-2 text-gray-700">
                        I agree to the{" "}
                        <Link
                          href="/terms"
                          className="text-amber-700 hover:text-amber-800 underline"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy"
                          className="text-amber-700 hover:text-amber-800 underline"
                        >
                          Privacy Policy
                        </Link>{" "}
                        *
                      </label>
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
                        Creating Account...
                      </span>
                    ) : (
                      "Create Account"
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
                      Or register with
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Registration Buttons */}
              <div className="grid grid-cols-3 gap-3">
                {socialRegistrations.map((social, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      console.log(`Register with ${social.provider}`)
                    }
                    className={`flex items-center justify-center py-3 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                  >
                    {social.icon}
                    <span className="sr-only">{social.name}</span>
                  </button>
                ))}
              </div>

              {/* Login Link */}
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-amber-700 hover:text-amber-800 font-semibold underline"
                  >
                    Sign in here
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
                  <h3 className="text-2xl font-bold">Member Benefits</h3>
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
                      Start enjoying benefits immediately after registration
                    </span>
                  </div>
                </div>
              </div>

              {/* Why Register */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Register with 3OTOR?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="text-gray-700">
                      <strong>Personalized Recommendations:</strong> Get
                      fragrance suggestions based on your preferences
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="text-gray-700">
                      <strong>Order History:</strong> Track all your purchases
                      in one place
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="text-gray-700">
                      <strong>Quick Reorder:</strong> Easily repurchase your
                      favorite fragrances
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="text-gray-700">
                      <strong>Priority Support:</strong> Get faster response
                      from our customer service team
                    </span>
                  </li>
                </ul>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-3xl border border-amber-100 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  Join Our Growing Community
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-800 mb-1">
                      500K+
                    </div>
                    <div className="text-sm text-gray-600">Happy Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-800 mb-1">
                      4.9★
                    </div>
                    <div className="text-sm text-gray-600">Member Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-800 mb-1">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">Secure</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-800 mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>

              {/* Security Notice 
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl border border-blue-200 p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Your Security Matters
                    </h4>
                    <p className="text-sm text-gray-600">
                      We use industry-standard encryption to protect your
                      personal information. Your data is safe with us.
                    </p>
                  </div>
                </div>
              </div>
              */}
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-12 text-center text-gray-600">
            <div className="flex flex-wrap justify-center gap-6 mb-4">
              <Link
                href="/help"
                className="hover:text-amber-700 transition-colors"
              >
                Help Center
              </Link>
              <Link
                href="/privacy"
                className="hover:text-amber-700 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-amber-700 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="hover:text-amber-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <p className="text-sm">
              © 2024 3OTOR Luxury Fragrances. All rights reserved.
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
