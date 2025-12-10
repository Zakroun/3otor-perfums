import { useState } from "react";
import { Menu, X, ShoppingCart, User, Search, Heart, Heater } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const cartcount = useSelector((s) => s.perfum.cart).length;
  const favoritescount = useSelector((s) => s.perfum.favorites).length;
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement your search logic here
      console.log("Searching for:", searchQuery);
      // You can redirect to search results page or filter products
    }
    setShowSearch(false);
  };
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
          >
            <div
              className={`flex-shrink-0 ${
                showSearch ? "hidden md:block" : "block"
              }`}
            >
              <img
                src="/assets/images/3otor1.png"
                alt="3otor Original Logo"
                className="max-w-[80px] md:max-w-[150px]"
              />
            </div>
          </Link>
          {/* Desktop Search Input - Shows when search is clicked */}
          {showSearch && (
            <div className="hidden md:flex flex-1 mx-8">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full px-4 py-2 pl-10 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    autoFocus
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <button
                    type="button"
                    onClick={() => setShowSearch(false)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 px-2"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Desktop Navigation - Hidden when search is active */}
          {!showSearch && (
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/shop"
                className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
              >
                Contact
              </Link>
            </nav>
          )}

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {!showSearch && (
              <>
                <button
                  onClick={() => setShowSearch(true)}
                  className="p-2 text-gray-700 hover:text-amber-700 transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate("/favorites")}
                  className="p-2 text-gray-700 hover:text-amber-700 transition-colors relative"
                >
                  <Heart className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {favoritescount}
                  </span>
                </button>
                <button
                  onClick={() => navigate("/cart")}
                  className="p-2 text-gray-700 hover:text-amber-700 transition-colors relative"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartcount}
                  </span>
                </button>
                <Link
                  to="/login"
                  className="px-4 py-2 text-gray-700 hover:text-amber-700 transition-colors font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium shadow-sm"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Search Input - Shows when search is clicked */}
          {showSearch && (
            <div className="md:hidden flex-1 mx-2">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full px-4 py-2 pl-10 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    autoFocus
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <button
                    type="button"
                    onClick={() => setShowSearch(false)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 px-2"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Mobile Menu Button - Hidden when search is active on mobile */}
          <button
            onClick={() => {
              if (showSearch) {
                setShowSearch(false);
              } else {
                setIsMenuOpen(!isMenuOpen);
              }
            }}
            className={`${
              showSearch ? "block" : "md:hidden block"
            } p-2 text-gray-700 hover:text-amber-700 transition-colors`}
            aria-label={showSearch ? "Close search" : "Toggle menu"}
          >
            {showSearch ? (
              <X className="w-6 h-6" />
            ) : isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Only show if menu is open and search is not active */}
        {isMenuOpen && !showSearch && (
          <div className="md:hidden border-t border-gray-200 py-4 animate-in slide-in-from-top">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="border-t border-gray-200 pt-4 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setShowSearch(true);
                  }}
                  className="px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors rounded-lg font-medium flex items-center"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </button>
                <button
                  onClick={() => navigate("/favorites")}
                  className="px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors rounded-lg font-medium flex items-center justify-between"
                >
                  <span className="flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Favorites
                  </span>
                  <span className="bg-amber-600 text-white text-xs rounded-full px-2 py-1">
                    {favoritescount}
                  </span>
                </button>
                <button
                  onClick={() => navigate("/cart")}
                  className="px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors rounded-lg font-medium flex items-center justify-between"
                >
                  <span className="flex items-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Cart
                  </span>
                  <span className="bg-amber-600 text-white text-xs rounded-full px-2 py-1">
                    {cartcount}
                  </span>
                </button>
                <Link
                  to="/login"
                  className="px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors rounded-lg font-medium flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-5 h-5 mr-2" />
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium text-center shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
