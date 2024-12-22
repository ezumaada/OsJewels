import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getCart = async (userId) => {
  const cartRef = collection(db, "cartOrders");
  const querySnapshot = await getDocs(cartRef);
  return querySnapshot.docs
    .map(doc => doc.data())
    .find(cart => cart.userId === userId);
};
