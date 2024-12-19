import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { CartProvider } from './cartcontext/CartContext';
//import AuthProvider from "./authcontext/AuthContext";


createRoot(document.getElementById('root')).render(
 
    <CartProvider>
       <App />
    </CartProvider>
  ,
)
