import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/Homepage';
import OleLynggard from './pages/olelynggard/OleLynggard';
import Footer from './components/footer/Footer';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import Navbar from './components/navbar/Navbar';
import ContactPage from './pages/contactpage/ContactPage';
import SignUpPage from './pages/signuppage/SignUpPage';
import SignInPage from './pages/signinpage/SignInPage';
import WatchesPage from './pages/watchespage/WatchesPage';
import RingsPage from './pages/ringspage/RingsPage';
import Necklaces from './pages/necklaces/Necklaces';
import Sales from './pages/sales/Sales';
import Diamonds from './pages/diamonds/Diamonds';
import TopBanner from './components/topbanner/TopBanner';
import BellRoss from './pages/bellross/BellRoss';
import Earrings from './pages/earrings/Earrings';
import Toast from './components/toast/Toast';
import { getCart } from "./services/getCart";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import AboutPage from './pages/aboutpage/AboutPage';
import PrivacyPolicy from './pages/privacypolicy/PrivacyPolicy';
import { useCart } from './cartcontext/CartContext';
import { AuthProvider } from './authcontext/AuthContext';
import Nomos from './pages/nomos/Nomos';

// Initialize Firebase Authentication
const auth = getAuth();

const App = () => {
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchCart = async () => {
      if (!userId || userId === 'guest') return;
      try {
        const cartData = await getCart(userId); // Fetch cart based on user ID
        if (cartData) {
          cartData.items.forEach((item) => {
            dispatch({ type: "ADD_TO_CART", payload: item });
          });
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [userId, dispatch]);

  // Listen for authentication state changes to set or clear the userId
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid); // Set the user ID when logged in
      } else {
        setUserId("guest"); // Default to guest user if not logged in
      }
      setLoading(false); // Stop loading when auth state is determined
    });

    // Fallback timeout in case auth state is delayed
    const timeout = setTimeout(() => {
      if (loading) {
        setUserId("guest");
        setLoading(false);
      }
    }, 5000);

    return () => {
      unsubscribe();
      clearTimeout(timeout);
    };
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>; // Show loading screen while determining auth state
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <TopBanner />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/bens" element={<BellRoss />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/watches" element={<WatchesPage />} />
          <Route path="/rings" element={<RingsPage />} />
          <Route path="/necklaces" element={<Necklaces />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/bellross" element={<BellRoss />} />
          <Route path="/diamonds" element={<Diamonds />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/olelynggard" element={<OleLynggard />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/nomos" element={<Nomos />} />
        </Routes>
        <Toast />
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
