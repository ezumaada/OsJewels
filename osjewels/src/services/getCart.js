import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase"; // Firestore instance

export const getCart = async (userId) => {
  try {
    const cartRef = collection(db, "cartOrders");
    const q = query(cartRef, where("userId", "==", userId)); // Fetch cart based on userId

    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data(); // Assuming there is only one cart per user
    } else {
      return null; // Return null if no cart found
    }
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};
