import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Key, ArrowLeft, CheckCircle, Clock, RefreshCw } from "lucide-react";

export default function CodeVerification() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(600); // 10 minutes in seconds
  const [canResend, setCanResend] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "your email";
  const inputRefs = useRef([]);

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  // Format timer to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }

      // Check if all fields are filled
      if (newCode.every((digit) => digit !== "") && index === 5) {
        handleVerify(newCode.join(""));
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      // Move to previous input on backspace
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split("");
      const newCode = [...code];
      digits.forEach((digit, index) => {
        if (index < 6) {
          newCode[index] = digit;
        }
      });
      setCode(newCode);
      
      // Focus last input
      const lastFilledIndex = Math.min(digits.length - 1, 5);
      inputRefs.current[lastFilledIndex].focus();
      
      // Auto verify if 6 digits
      if (digits.length === 6) {
        setTimeout(() => handleVerify(pastedData), 100);
      }
    }
  };

  const handleVerify = async (verificationCode) => {
    setIsLoading(true);
    setError("");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    
    // Simulate verification (in real app, check against backend)
    if (verificationCode === "123456") {
      setIsVerified(true);
      setTimeout(() => {
        navigate("/reset-password", { state: { email, verificationCode } });
      }, 2000);
    } else {
      setError("Invalid verification code. Please try again.");
      // Clear code on error
      setCode(["", "", "", "", "", ""]);
      inputRefs.current[0].focus();
    }
  };

  const handleResendCode = async () => {
    if (!canResend) return;

    setIsLoading(true);
    setError("");
    setCanResend(false);
    setTimer(600); // Reset timer to 10 minutes

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    // Clear code for new entry
    setCode(["", "", "", "", "", ""]);
    inputRefs.current[0].focus();
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
              onClick={() => navigate("/forgot-password")}
              className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Email Entry
            </button>

            <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Enter Verification{" "}
              <span className="text-gradient bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                Code
              </span>
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We sent a 6-digit code to{" "}
              <span className="font-semibold text-amber-700">{email}</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Verification Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
              {isVerified ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Code Verified!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Success! Redirecting you to create a new password...
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Enter 6-Digit Code
                    </h3>
                    <p className="text-gray-600">
                      Enter the verification code sent to your email
                    </p>
                  </div>

                  {/* Code Inputs */}
                  <div className="mb-8">
                    <div className="flex justify-center gap-2 md:gap-3 mb-6">
                      {code.map((digit, index) => (
                        <input
                          key={index}
                          ref={(el) => (inputRefs.current[index] = el)}
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          maxLength="1"
                          value={digit}
                          onChange={(e) => handleChange(index, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          onPaste={handlePaste}
                          className="w-12 h-12 md:w-12 md:h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                          autoFocus={index === 0}
                        />
                      ))}
                    </div>

                    {error && (
                      <div className="text-center">
                        <p className="text-red-600 font-medium">{error}</p>
                      </div>
                    )}
                  </div>

                  {/* Timer and Actions */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-4 py-2 rounded-full mb-4">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">
                          Code expires in: {formatTime(timer)}
                        </span>
                      </div>
                      
                      <button
                        type="button"
                        onClick={handleResendCode}
                        disabled={!canResend || isLoading}
                        className={`inline-flex items-center gap-2 ${
                          canResend
                            ? "text-amber-700 hover:text-amber-800"
                            : "text-gray-400 cursor-not-allowed"
                        } transition-colors`}
                      >
                        <RefreshCw className={`w-4 h-4 ${canResend ? "animate-spin-once" : ""}`} />
                        Resend Code {!canResend && "(available in " + formatTime(timer) + ")"}
                      </button>
                    </div>

                    <button
                      onClick={() => handleVerify(code.join(""))}
                      disabled={code.some((digit) => digit === "") || isLoading}
                      className={`w-full bg-gradient-to-r from-amber-600 to-amber-800 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                        code.some((digit) => digit === "") || isLoading
                          ? "opacity-75 cursor-not-allowed"
                          : ""
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
                          Verifying Code...
                        </span>
                      ) : (
                        "Verify Code"
                      )}
                    </button>
                  </div>
                </>
              )}

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center">
                  Didn't receive the code? Check your spam folder or{" "}
                  <button
                    onClick={handleResendCode}
                    className={`${
                      canResend
                        ? "text-amber-700 hover:text-amber-800 underline"
                        : "text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!canResend}
                  >
                    resend
                  </button>
                </p>
              </div>
            </div>

            {/* Right Column - Information */}
            <div className="space-y-8">
              {/* Security Tips */}
              <div className="bg-gradient-to-br from-amber-900 to-amber-800 text-white rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Key className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Verification Tips</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-700 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs">🔢</span>
                    </div>
                    <div>
                      <h4 className="font-bold">6-Digit Code</h4>
                      <p className="text-amber-100 text-sm">
                        Enter all 6 digits exactly as shown in the email
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-700 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs">⏱️</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Time-Sensitive</h4>
                      <p className="text-amber-100 text-sm">
                        Code expires in 10 minutes for security reasons
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-700 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs">📧</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Check Email</h4>
                      <p className="text-amber-100 text-sm">
                        Look for email from "3OTOR Security" with subject "Verification Code"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Code (for testing) */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl border border-blue-200 p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800 mb-2">
                    🧪
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Testing Purpose
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Use this demo code to test:
                  </p>
                  <div className="bg-white rounded-lg p-3 border border-blue-300">
                    <code className="text-2xl font-bold text-blue-700 tracking-wider">
                      123456
                    </code>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    This is a demo code for testing. In production, this would be sent via email.
                  </p>
                </div>
              </div>

              {/* Help Section */}
              <div className="bg-white rounded-3xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Need Help?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-amber-700">ℹ️</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Make sure you're entering the correct 6-digit code
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-amber-700">📱</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Codes are valid for only 10 minutes
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-amber-700">📧</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Check spam folder if you don't see the email
                    </p>
                  </div>
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

        @keyframes spin-once {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
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

        .animate-spin-once {
          animation: spin-once 0.5s ease-in-out;
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