// services/authService.js
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";


// Signup function
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Returns the signed-up user
  } catch (error) {
    throw error; // Handle errors appropriately
  }
};

// Signin function
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error during sign in:", error);
    throw error;
  }
};

// Signout function
export const signOutUser = async () => {
  try {
    await signOut(auth);
    return true; // Indicates successful signout
  } catch (error) {
    throw error; // Handle errors appropriately
  }
};
