import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../cartcontext/CartContext';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const CompleteCheckout = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();

  const handleCompleteCheckout = async () => {
    const user = auth.currentUser;

    if (!user) {
      navigate('/signin');
      return;
    }

    try {
      // Save cart to Firebase
      await addDoc(collection(db, 'orders'), {
        userId: user.uid,
        cart,
        timestamp: new Date(),
      });

      // Clear cart
      dispatch({ type: 'CLEAR_CART' });

      // Redirect to Homepage
      navigate('/');
    } catch (error) {
      console.error('Error completing checkout:', error);
    }
  };

  return (
    <button
      onClick={handleCompleteCheckout}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-transform transform hover:scale-105"
    >
      Complete Checkout
    </button>
  );
};

export default CompleteCheckout;
