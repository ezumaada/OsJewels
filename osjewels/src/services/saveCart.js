import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const saveCart = async (cartData) => {
  try {
    const docRef = await addDoc(collection(db, "cartOrders"), cartData);
    console.log("Cart saved with ID:", docRef.id);
  } catch (error) {
    console.error("Error saving cart:", error.message);
  }
};
