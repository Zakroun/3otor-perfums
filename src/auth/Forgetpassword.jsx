import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, ArrowLeft, CheckCircle, Sparkles } from "lucide-react";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);

    // Navigate to code verification after 2 seconds
    setTimeout(() => {
      navigate("/code-verification", { state: { email } });
    }, 2000);
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

            <button
              onClick={() => navigate("/login")}
              className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </button>

            <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Reset Your{" "}
              <span className="text-gradient bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                Password
              </span>
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Enter your email address and we'll send you a verification code to reset your password
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Verification Code Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We've sent a 6-digit verification code to{" "}
                    <span className="font-semibold text-amber-700">{email}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Redirecting to verification page...
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Enter Your Email
                    </h3>
                    <p className="text-gray-600">
                      We'll send a verification code to this address
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                        {error && (
                          <p className="mt-2 text-sm text-red-600">{error}</p>
                        )}
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
                            Sending Code...
                          </span>
                        ) : (
                          "Send Verification Code"
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center">
                  Need help?{" "}
                  <a
                    href="/contact"
                    className="text-amber-700 hover:text-amber-800 underline"
                  >
                    Contact Support
                  </a>
                </p>
              </div>
            </div>

            {/* Right Column - Information */}
            <div className="space-y-8">
              {/* Security Tips */}
              <div className="bg-gradient-to-br from-amber-900 to-amber-800 text-white rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Security Tips</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-700 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Check Your Email</h4>
                      <p className="text-amber-100 text-sm">
                        Look for an email from 3OTOR with the subject "Password Reset Code"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-700 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Enter the Code</h4>
                      <p className="text-amber-100 text-sm">
                        Enter the 6-digit code in the verification page
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-700 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Create New Password</h4>
                      <p className="text-amber-100 text-sm">
                        Set a strong, unique password for your account
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Common Questions */}
              <div className="bg-white rounded-3xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Common Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Didn't receive the email?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Check your spam folder or try again in a few minutes
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      How long is the code valid?
                    </h4>
                    <p className="text-sm text-gray-600">
                      The verification code expires in 10 minutes
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Still having trouble?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Contact our support team for immediate assistance
                    </p>
                  </div>
                </div>
              </div>

              {/* Timer Info */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl border border-blue-200 p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800 mb-2">
                    ⏱️
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Time-Sensitive
                  </h4>
                  <p className="text-sm text-gray-600">
                    For security reasons, the verification code expires after 10 minutes
                  </p>
                </div>
              </div>
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