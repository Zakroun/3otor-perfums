import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Lock, Eye, EyeOff, CheckCircle, Shield, Key } from "lucide-react";
import { useEffect } from "react";
export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "your account";

  const calculatePasswordStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 8) strength += 1;
    if (/[A-Z]/.test(pass)) strength += 1;
    if (/[0-9]/.test(pass)) strength += 1;
    if (/[^A-Za-z0-9]/.test(pass)) strength += 1;
    setPasswordStrength(strength);
  };

  const getStrengthColor = () => {
    const colors = [
      "bg-red-500",
      "bg-orange-500",
      "bg-yellow-500",
      "bg-green-500",
      "bg-emerald-600",
    ];
    return colors[passwordStrength] || "bg-gray-300";
  };

  const getStrengthText = () => {
    const texts = ["Very Weak", "Weak", "Fair", "Strong", "Very Strong"];
    return texts[passwordStrength] || "Very Weak";
  };

  const validateForm = () => {
    const newErrors = {};

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (passwordStrength < 3) {
      newErrors.password = "Please create a stronger password";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSuccess(true);

    // Redirect to login after 3 seconds
    setTimeout(() => {
      navigate("/login", { state: { passwordReset: true } });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <img
              src="/assets/images/3otor1.png"
              alt="3otor Original Logo"
              className="max-w-[80px] md:max-w-[180px] mx-auto mb-6"
            />

            <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Create New{" "}
              <span className="text-gradient bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                Password
              </span>
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Set a new password for your account{" "}
              <span className="font-semibold text-amber-700">{email}</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Password Updated!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your password has been successfully reset. You can now sign
                    in with your new password.
                  </p>
                  <p className="text-sm text-gray-500">
                    Redirecting to login page...
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Set New Password
                    </h3>
                    <p className="text-gray-600">
                      Create a strong, secure password for your account
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      {/* New Password */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          New Password *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="w-5 h-5 text-gray-400" />
                          </div>
                          <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                              calculatePasswordStrength(e.target.value);
                            }}
                            className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all ${
                              errors.password
                                ? "border-red-300 focus:ring-red-500"
                                : "border-gray-300"
                            }`}
                            placeholder="Enter new password"
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

                        {/* Password Strength */}
                        {password && (
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
                                {getStrengthText()}
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${getStrengthColor()} transition-all duration-300`}
                                style={{
                                  width: `${(passwordStrength / 4) * 100}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        )}

                        {errors.password && (
                          <p className="mt-2 text-sm text-red-600">
                            {errors.password}
                          </p>
                        )}
                      </div>

                      {/* Confirm Password */}
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
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all ${
                              errors.confirmPassword
                                ? "border-red-300 focus:ring-red-500"
                                : "border-gray-300"
                            }`}
                            placeholder="Confirm new password"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                            ) : (
                              <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                            )}
                          </button>
                        </div>
                        {errors.confirmPassword && (
                          <p className="mt-2 text-sm text-red-600">
                            {errors.confirmPassword}
                          </p>
                        )}

                        {/* Password Match Indicator */}
                        {password && confirmPassword && (
                          <div className="mt-2">
                            {password === confirmPassword ? (
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

                      {/* Password Requirements */}
                      <div className="bg-amber-50 rounded-xl p-4">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Password Requirements:
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li
                            className={`flex items-center ${
                              password.length >= 8 ? "text-green-600" : ""
                            }`}
                          >
                            <span className="mr-2">•</span>
                            At least 8 characters long
                          </li>
                          <li
                            className={`flex items-center ${
                              /[A-Z]/.test(password) ? "text-green-600" : ""
                            }`}
                          >
                            <span className="mr-2">•</span>
                            Contains uppercase letters
                          </li>
                          <li
                            className={`flex items-center ${
                              /[0-9]/.test(password) ? "text-green-600" : ""
                            }`}
                          >
                            <span className="mr-2">•</span>
                            Contains numbers
                          </li>
                          <li
                            className={`flex items-center ${
                              /[^A-Za-z0-9]/.test(password)
                                ? "text-green-600"
                                : ""
                            }`}
                          >
                            <span className="mr-2">•</span>
                            Contains special characters
                          </li>
                        </ul>
                      </div>

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
                            Updating Password...
                          </span>
                        ) : (
                          "Reset Password"
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center">
                  Remember your password?{" "}
                  <a
                    href="/login"
                    className="text-amber-700 hover:text-amber-800 underline"
                  >
                    Sign in here
                  </a>
                </p>
              </div>
            </div>

            {/* Right Column - Information */}
            <div className="space-y-8">
              {/* Security Tips */}
              <div className="bg-gradient-to-br from-amber-900 to-amber-800 text-white rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Password Security Tips</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-700 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs">🔑</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Make it Unique</h4>
                      <p className="text-amber-100 text-sm">
                        Don't reuse passwords from other accounts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-700 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs">📝</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Use a Passphrase</h4>
                      <p className="text-amber-100 text-sm">
                        Combine random words for better security
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-700 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs">🔄</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Regular Updates</h4>
                      <p className="text-amber-100 text-sm">
                        Change your password every 3-6 months
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Security */}
              <div className="bg-white rounded-3xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Account Security
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Key className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Strong Password
                      </p>
                      <p className="text-xs text-gray-600">
                        Protects against unauthorized access
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Encrypted Storage
                      </p>
                      <p className="text-xs text-gray-600">
                        Your password is securely encrypted
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-sm">🔒</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Two-Factor Ready
                      </p>
                      <p className="text-xs text-gray-600">
                        Enable 2FA for extra security
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions 
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl border border-blue-200 p-6">
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Additional Security
                  </h4>
                  <div className="space-y-3">
                    <button
                      onClick={() => navigate("/security-settings")}
                      className="w-full bg-white text-blue-700 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                    >
                      Security Settings
                    </button>
                    <button
                      onClick={() => navigate("/two-factor")}
                      className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Enable Two-Factor Auth
                    </button>
                    <button
                      onClick={() => navigate("/login-history")}
                      className="w-full bg-white text-blue-700 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                    >
                      View Login History
                    </button>
                  </div>
                </div>
              </div>
              */}
            </div>
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
