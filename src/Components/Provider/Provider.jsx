import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";

export const ThemeContext = createContext(null);

const Provider = ({ children }) => {
  const [User, setUser] = useState(null);

  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInAccount = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const cuurrentUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      cuurrentUser();
    };
  }, []);

  const signOutAccount = () => {
    return signOut(auth);
  };

  const updateUserProfile = (userinfo) => {
    return updateProfile(auth.currentUser, userinfo);
  };

  const userVerificationEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const passResetEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const info = {
    createAccount,
    signInAccount,
    User,
    signOutAccount,
    updateUserProfile,
    userVerificationEmail,
    passResetEmail,
  };
  return (
    <div>
      <ThemeContext.Provider value={info}>{children}</ThemeContext.Provider>
    </div>
  );
};

export default Provider;
