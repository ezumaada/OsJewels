import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Import Firestore database instance

export const saveCart = async (cartData, userId) => {
  try {
    // Check if userId is available
    if (!userId) {
      console.error("User is not logged in. Cart cannot be saved.");
      throw new Error("User is not logged in.");
    }
      // Validate cart data
      console.log("Cart data:", cartData);
      if (!cartData || !cartData.items || cartData.items.length === 0) {
        throw new Error("Invalid cart data");
      }

    

    const docRef = await addDoc(collection(db, "cartOrders"), cartData);
    console.log("Cart saved with ID:", docRef.id);
    return docRef.id; // Return the document ID
  } catch (error) {
    console.error("Error saving cart:", error.message);
    throw error; // Throw the error for better error handling
  }
};
