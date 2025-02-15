import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext } from "react";
import { auth } from "../../firebase.init";

export const ThemeContext = createContext(null);
const Provider = ({ children }) => {
  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInAccount = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const info = {
    createAccount,
    signInAccount,
  };
  return (
    <div>
      <ThemeContext.Provider value={info}>{children}</ThemeContext.Provider>
    </div>
  );
};

export default Provider;
