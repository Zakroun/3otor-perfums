import { createSlice } from "@reduxjs/toolkit";

export const perfumSlice = createSlice({
  name: "perfum",
  initialState: {
    cart: [],
    favorites:[],
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.cart.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        if (quantity <= 0) {
          state.cart.splice(itemIndex, 1);
        } else {
          state.cart[itemIndex] = { ...state.cart[itemIndex], quantity };
        }
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    addToFavorites : (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter((item) => item.id !== action.payload);
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.cart = [];
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
});

export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  clearCart,
  addToFavorites,
  removeFromFavorites,
  clearFavorites,
  setUser,
  logout,
  setToken,
  setLoading,
  setError,
  setSuccess,
} = perfumSlice.actions;
