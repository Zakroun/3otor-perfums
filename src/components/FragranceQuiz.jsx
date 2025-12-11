import React, { useState } from 'react';
import { ArrowRight, X, Check, Sparkles, Clock, Gift, TrendingUp, Award, Crown, Gem, Zap, Star, ArrowLeft, Users, Calendar, Heart, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { perfumes } from '../data/data';

const DiamondIcon = () => <span className="text-2xl">💎</span>;
const CrownIcon = () => <span className="text-2xl">👑</span>;
const StarIcon = () => <span className="text-2xl">⭐</span>;
const SparkleIcon = () => <span className="text-2xl">✨</span>;

export default function FragranceQuiz({ onClose }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  // 3 Questions seulement
  const questions = [
    {
      id: 1,
      title: "What's your gender preference?",
      description: "Choose which fragrance category you're interested in",
      type: "single",
      options: [
        {
          id: "men",
          label: "Men's Fragrances",
          description: "Masculine scents and colognes",
          Icon: Crown,
          color: "from-blue-500 to-blue-700",
          category: "Men"
        },
        {
          id: "women",
          label: "Women's Fragrances",
          description: "Feminine perfumes and scents",
          Icon: Gem,
          color: "from-pink-500 to-pink-700",
          category: "Women"
        },
        {
          id: "unisex",
          label: "Unisex Fragrances",
          description: "Scents for everyone",
          Icon: Users,
          color: "from-purple-500 to-purple-700",
          category: "Unisex"
        }
      ]
    },
    {
      id: 2,
      title: "What's your fragrance style?",
      description: "Choose the style that matches you best",
      type: "single",
      options: [
        {
          id: "fresh",
          label: "Fresh & Clean",
          description: "Light, citrusy, aquatic scents",
          Icon: Zap,
          color: "from-amber-500 to-amber-600",
          style: "fresh"
        },
        {
          id: "warm",
          label: "Warm & Spicy",
          description: "Woody, spicy, oriental notes",
          Icon: Sparkles,
          color: "from-amber-700 to-amber-900",
          style: "warm"
        },
        {
          id: "floral",
          label: "Floral & Sweet",
          description: "Floral, fruity, sweet scents",
          Icon: Gift,
          color: "from-amber-600 to-amber-800",
          style: "floral"
        },
        {
          id: "bold",
          label: "Bold & Intense",
          description: "Strong, long-lasting, statement scents",
          Icon: Crown,
          color: "from-amber-800 to-amber-950",
          style: "bold"
        }
      ]
    },
    {
      id: 3,
      title: "When do you wear fragrance most?",
      description: "Choose your main occasion",
      type: "single",
      options: [
        {
          id: "daytime",
          label: "Daytime / Office",
          description: "For work and daily activities",
          Icon: Clock,
          color: "from-amber-500/20 to-amber-600/20",
          occasion: "daytime"
        },
        {
          id: "evening",
          label: "Evening / Night Out",
          description: "For dates and social events",
          Icon: Sparkles,
          color: "from-amber-700/20 to-amber-800/20",
          occasion: "evening"
        },
        {
          id: "special",
          label: "Special Occasions",
          description: "Weddings, parties, celebrations",
          Icon: Gift,
          color: "from-amber-800/20 to-amber-900/20",
          occasion: "special"
        },
        {
          id: "all",
          label: "All Day, Every Day",
          description: "For any time and any occasion",
          Icon: Users,
          color: "from-amber-600/20 to-amber-700/20",
          occasion: "all"
        }
      ]
    }
  ];

  // Simple matching logic
  const getRecommendations = (answers) => {
    let filteredPerfumes = [...perfumes];
    
    // Filter by category (Q1)
    const category = answers[1];
    if (category) {
      filteredPerfumes = filteredPerfumes.filter(p => p.category === category);
    }
    
    // Filter by style (Q2)
    const style = answers[2];
    if (style) {
      switch(style) {
        case 'fresh':
          filteredPerfumes = filteredPerfumes.filter(p => 
            p.description.toLowerCase().includes('fresh') ||
            p.notes?.top?.some(note => ['Lemon', 'Bergamot', 'Citrus', 'Sea Notes', 'Green Apple', 'Mint'].some(keyword => note.includes(keyword))) ||
            p.bestFor?.some(bf => bf.includes('Summer') || bf.includes('Daytime'))
          );
          break;
        case 'warm':
          filteredPerfumes = filteredPerfumes.filter(p => 
            p.description.toLowerCase().includes('warm') ||
            p.description.toLowerCase().includes('woody') ||
            p.description.toLowerCase().includes('spicy') ||
            p.notes?.base?.some(note => ['Vanilla', 'Amber', 'Sandalwood', 'Cedar', 'Musk'].some(keyword => note.includes(keyword))) ||
            p.bestFor?.some(bf => bf.includes('Winter') || bf.includes('Evening'))
          );
          break;
        case 'floral':
          filteredPerfumes = filteredPerfumes.filter(p => 
            p.description.toLowerCase().includes('floral') ||
            p.description.toLowerCase().includes('sweet') ||
            p.notes?.middle?.some(note => ['Rose', 'Jasmine', 'Lily', 'Peony'].some(keyword => note.includes(keyword))) ||
            p.category === 'Women'
          );
          break;
        case 'bold':
          filteredPerfumes = filteredPerfumes.filter(p => 
            p.description.toLowerCase().includes('bold') ||
            p.description.toLowerCase().includes('powerful') ||
            p.description.toLowerCase().includes('intense') ||
            p.sillage === 'Very Strong' ||
            p.sillage === 'Strong' ||
            p.longevity.includes('12+') ||
            p.longevity.includes('10-12')
          );
          break;
      }
    }
    
    // Filter by occasion (Q3)
    const occasion = answers[3];
    if (occasion) {
      switch(occasion) {
        case 'daytime':
          filteredPerfumes = filteredPerfumes.filter(p => 
            p.bestFor?.some(bf => 
              bf.includes('Daytime') || 
              bf.includes('Office') || 
              bf.includes('Work') ||
              bf.includes('Daily')
            ) ||
            p.sillage === 'Moderate' ||
            p.sillage === 'Light'
          );
          break;
        case 'evening':
          filteredPerfumes = filteredPerfumes.filter(p => 
            p.bestFor?.some(bf => 
              bf.includes('Evening') || 
              bf.includes('Night') || 
              bf.includes('Date') ||
              bf.includes('Club')
            ) ||
            p.sillage === 'Strong' ||
            p.sillage === 'Very Strong'
          );
          break;
        case 'special':
          filteredPerfumes = filteredPerfumes.filter(p => 
            p.bestFor?.some(bf => 
              bf.includes('Special') || 
              bf.includes('Wedding') || 
              bf.includes('Gala') ||
              bf.includes('Formal')
            ) ||
            p.featured === true ||
            p.bestSeller === true
          );
          break;
        case 'all':
          // Keep all perfumes
          break;
      }
    }
    
    // Sort by rating and reviews
    filteredPerfumes.sort((a, b) => {
      if (b.rating !== a.rating) return b.rating - a.rating;
      if (b.reviews !== a.reviews) return b.reviews - a.reviews;
      if (b.featured && !a.featured) return -1;
      if (a.featured && !b.featured) return 1;
      return 0;
    });
    
    // Take top 4 recommendations
    return filteredPerfumes.slice(0, 4).map(perfume => ({
      ...perfume,
      match: calculateMatchPercentage(perfume, answers),
      color: getColorByMatch(calculateMatchPercentage(perfume, answers))
    }));
  };

  const calculateMatchPercentage = (perfume, answers) => {
    let score = 0;
    
    // Category match
    if (perfume.category === answers[1]) {
      score += 40;
    }
    
    // Style match (simplified)
    const style = answers[2];
    if (style) {
      if (style === 'fresh' && (
        perfume.description.toLowerCase().includes('fresh') ||
        perfume.notes?.top?.some(note => ['Lemon', 'Bergamot', 'Citrus'].some(keyword => note.includes(keyword)))
      )) score += 30;
      
      if (style === 'warm' && (
        perfume.description.toLowerCase().includes('warm') ||
        perfume.notes?.base?.some(note => ['Vanilla', 'Amber', 'Sandalwood'].some(keyword => note.includes(keyword)))
      )) score += 30;
      
      if (style === 'floral' && (
        perfume.description.toLowerCase().includes('floral') ||
        perfume.notes?.middle?.some(note => ['Rose', 'Jasmine'].some(keyword => note.includes(keyword)))
      )) score += 30;
      
      if (style === 'bold' && (
        perfume.description.toLowerCase().includes('bold') ||
        perfume.sillage === 'Very Strong'
      )) score += 30;
    }
    
    // Occasion match
    const occasion = answers[3];
    if (occasion && perfume.bestFor) {
      const hasMatch = perfume.bestFor.some(bf => {
        if (occasion === 'daytime' && (bf.includes('Day') || bf.includes('Office'))) return true;
        if (occasion === 'evening' && (bf.includes('Evening') || bf.includes('Night'))) return true;
        if (occasion === 'special' && bf.includes('Special')) return true;
        if (occasion === 'all') return true;
        return false;
      });
      if (hasMatch) score += 30;
    }
    
    return Math.min(score, 100);
  };

  const getColorByMatch = (percentage) => {
    if (percentage >= 90) return "from-green-500 to-green-600";
    if (percentage >= 80) return "from-emerald-500 to-emerald-600";
    if (percentage >= 70) return "from-amber-500 to-amber-600";
    if (percentage >= 60) return "from-orange-500 to-orange-600";
    return "from-rose-500 to-rose-600";
  };

  const handleAnswer = (questionId, answerId, type) => {
    if (type === 'single') {
      setAnswers(prev => ({ ...prev, [questionId]: answerId }));
      setTimeout(() => {
        if (step < questions.length) {
          setStep(prev => prev + 1);
        }
      }, 300);
    }
  };

  const handleSubmit = () => {
    const recs = getRecommendations(answers);
    setShowResults(true);
    setRecommendations(recs);
  };

  const handleRestart = () => {
    setStep(1);
    setAnswers({});
    setShowResults(false);
    setRecommendations([]);
  };

  const handleViewProductDetails = (productId) => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
    navigate(`/product/${productId}`);
  };

  const handleBrowseAll = () => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
    navigate('/shop');
  };

  const handleCloseQuiz = () => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
    navigate('/')
  };

  const progress = (step / questions.length) * 100;

  if (showResults) {
    return (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-amber-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-full mb-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-semibold text-amber-700">Quiz Results</span>
                </div>
                <h1 className="text-3xl font-bold text-amber-900">Your Perfect Matches</h1>
                <p className="text-amber-700">We found {recommendations.length} fragrances that match your style</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleRestart}
                  className="px-4 py-2 text-amber-600 hover:text-amber-700 font-medium rounded-lg hover:bg-amber-50 transition-colors"
                >
                  Retake Quiz
                </button>
                <button
                  onClick={handleCloseQuiz}
                  className="p-2 text-amber-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Summary Card */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-8 mb-12 border border-amber-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-amber-900">Perfect Matches Found!</h2>
                <p className="text-amber-700">Based on your preferences, here are our top recommendations</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {questions.map((q, idx) => {
                const answer = answers[q.id];
                const option = q.options.find(opt => opt.id === answer);
                return (
                  <div key={q.id} className="bg-white/50 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-sm text-amber-600 font-medium mb-1">Q{idx + 1}</p>
                    <p className="text-amber-900 font-semibold truncate">
                      {option?.label || 'Not answered'}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recommendations */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-amber-900">Recommended For You</h2>
                <p className="text-amber-700">Handpicked based on your quiz answers</p>
              </div>
              <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                {recommendations.length} Perfect Matches
              </span>
            </div>

            {recommendations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendations.map((perfume) => (
                  <div
                    key={perfume.id}
                    className="group relative overflow-hidden rounded-2xl border border-amber-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    onClick={() => handleViewProductDetails(perfume.id)}
                  >
                    {/* Match Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${perfume.color} rounded-full blur-sm`}></div>
                        <div className={`relative px-3 mt-12 py-1 bg-gradient-to-r ${perfume.color} rounded-full`}>
                          <span className="text-xs font-bold text-white">{perfume.match}% Match</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              perfume.category === "Men" 
                                ? "bg-blue-100 text-blue-700"
                                : perfume.category === "Women" 
                                ? "bg-pink-100 text-pink-700"
                                : "bg-purple-100 text-purple-700"
                            }`}>
                              {perfume.category}
                            </span>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                              <span className="text-sm font-medium text-amber-700">{perfume.rating}</span>
                              <span className="text-xs text-gray-500">({perfume.reviews})</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-amber-900 mb-2">{perfume.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{perfume.brand}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-amber-600">MAD {perfume.price.toLocaleString()}</p>
                          <p className="text-sm text-gray-500">100ml</p>
                        </div>
                      </div>

                      <p className="text-amber-700 mb-4 text-sm">{perfume.description}</p>

                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium text-amber-600 mb-2">Key Notes</p>
                          <div className="flex flex-wrap gap-2">
                            {perfume.notes?.top?.slice(0, 3).map(note => (
                              <span
                                key={note}
                                className="px-2 py-1 bg-gradient-to-r from-amber-500/10 to-amber-600/10 text-amber-700 rounded-full text-xs font-medium border border-amber-500/20"
                              >
                                {note}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-amber-600 mb-2">Best For</p>
                          <div className="flex flex-wrap gap-2">
                            {perfume.bestFor?.slice(0, 3).map(occasion => (
                              <span
                                key={occasion}
                                className="px-2 py-1 bg-amber-50 text-amber-700 rounded-full text-xs border border-amber-200"
                              >
                                {occasion}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-gray-600">Longevity: <span className="font-medium">{perfume.longevity}</span></span>
                          <span className="text-gray-600">Sillage: <span className="font-medium">{perfume.sillage}</span></span>
                        </div>
                        <button 
                          className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 flex items-center gap-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewProductDetails(perfume.id);
                          }}
                        >
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-amber-50 rounded-2xl p-8 text-center border border-amber-200">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">No Perfect Matches Found</h3>
                <p className="text-amber-700 mb-6">
                  Try adjusting your preferences or browse our full collection
                </p>
                <button
                  onClick={handleBrowseAll}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
                >
                  Browse All Fragrances
                </button>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-3xl p-8 border border-amber-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Ready to Find Your Signature Scent?</h3>
              <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
                Explore our full collection or visit our store for a personal consultation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleBrowseAll}
                  className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Browse All Fragrances
                </button>
                <button
                  onClick={handleRestart}
                  className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-xl border-2 border-amber-200 hover:bg-amber-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Retake Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[step - 1];

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Progress Bar */}
      <div className="sticky top-0 z-10 bg-white">
        <div className="h-2 bg-amber-100">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => step > 1 ? setStep(prev => prev - 1) : null}
                className={`p-2 rounded-lg ${step > 1 ? 'hover:bg-amber-50 text-amber-600' : 'text-amber-300 cursor-not-allowed'}`}
                disabled={step === 1}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-full mb-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-semibold text-amber-700">Question {step}/{questions.length}</span>
                </div>
                <h1 className="text-2xl font-bold text-amber-900">Find Your Perfect Fragrance</h1>
                <p className="text-sm text-amber-600">Answer 3 simple questions to get personalized recommendations</p>
              </div>
            </div>
            <button
              onClick={handleCloseQuiz}
              className="p-2 text-amber-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-24">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-amber-900 mb-3">{currentQuestion.title}</h2>
          <p className="text-lg text-amber-700">{currentQuestion.description}</p>
        </div>

        {/* Options */}
        <div className={`grid grid-cols-1 ${currentQuestion.options.length <= 3 ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-4 mb-12`}>
          {currentQuestion.options.map(option => {
            const isSelected = answers[currentQuestion.id] === option.id;
            
            return (
              <button
                key={option.id}
                onClick={() => handleAnswer(currentQuestion.id, option.id, currentQuestion.type)}
                className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  isSelected 
                    ? 'border-amber-500 bg-gradient-to-br from-amber-50 to-amber-100 shadow-lg' 
                    : 'border-amber-200 hover:border-amber-300 hover:shadow-md'
                }`}
              >
                {/* Check indicator */}
                {isSelected && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}

                {/* Icon */}
                {option.Icon && (
                  <div className="mb-4">
                    <div className={`w-12 h-12 ${option.color.includes('/20') ? 'bg-amber-100' : `bg-gradient-to-br ${option.color}`} rounded-xl flex items-center justify-center mb-3`}>
                      <option.Icon className={option.color.includes('/20') ? "w-6 h-6 text-amber-600" : "w-6 h-6 text-white"} />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-amber-900 mb-2">{option.label}</h3>
                  <p className="text-amber-700 mb-3">{option.description}</p>
                </div>

                {/* Hover effect */}
                <div className={`absolute inset-0 ${option.color.includes('/20') ? 'bg-amber-500/5' : `bg-gradient-to-br ${option.color.replace('from-', 'from-amber-500/10').replace('to-', 'to-amber-600/10')}`} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-amber-100 p-4">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="text-sm text-amber-600">
                {step === questions.length ? 'Last question!' : `${questions.length - step} questions remaining`}
              </div>
              
              <button
                onClick={() => {
                  if (step === questions.length) {
                    handleSubmit();
                  } else {
                    setStep(prev => prev + 1);
                  }
                }}
                disabled={!answers[currentQuestion.id]}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  answers[currentQuestion.id]
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 hover:shadow-lg'
                    : 'bg-amber-100 text-amber-400 cursor-not-allowed'
                }`}
              >
                {step === questions.length ? 'See Results' : 'Next Question'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}