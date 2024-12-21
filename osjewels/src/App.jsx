import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/homepage/Homepage'
import OleLynggard from './pages/olelynggard/OleLynggard'
import Footer from './components/footer/Footer'
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


//import About from './pages/about/About';

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <TopBanner/>
        <Navbar/>
          <Routes>
            
            <Route path="/" exact element={<Home />} />
            <Route path="/products" exact element={<Products />} />
            <Route path="/cart"  element={<Cart />} />
            <Route path="/watches"  element={<WatchesPage />} />
            <Route path="/rings"  element={<RingsPage />} />
            <Route path="/necklaces"  element={<Necklaces />} />
            <Route path="/sales"  element={<Sales />} />
            <Route path="/bellross"  element={<BellRoss />} />

            <Route path="/diamonds"  element={<Diamonds />} />
            <Route path="/sales"  element={<Sales />} />
            <Route path="/olelynggard"  element={<OleLynggard />} />
            <Route path="/contact" element={<ContactPage />}  />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/earrings" element={<Earrings />} />

            
          </Routes>  
          {/* Routes will render the appropriate component based on the current URL */}
          <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App