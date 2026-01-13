import { useState } from "react";
import { Menu, X, ShoppingCart, User, Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartcount = useSelector((s) => s.perfum.cart).length;
  const favoritescount = useSelector((s) => s.perfum.favorites).length;

  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link
            to="/"
            className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
          >
            <div className="flex-shrink-0 block">
              <img
                src="/assets/images/3otor1.png"
                alt="3otor Original Logo"
                className="max-w-[80px] md:max-w-[150px]"
              />
            </div>
          </Link>

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

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <>
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
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden block p-2 text-gray-700 hover:text-amber-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
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
                    navigate("/favorites");
                    setIsMenuOpen(false);
                  }}
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
                  onClick={() => {
                    navigate("/cart");
                    setIsMenuOpen(false);
                  }}
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