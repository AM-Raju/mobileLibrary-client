import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from "react-hot-toast";
import axios from "axios";
import { getUserRole } from "../api/users";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  /* Hook */

  /* State */
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState(null);

  /* Create user with email and password */
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // get user role
  useEffect(() => {
    if (user) {
      getUserRole(user?.email).then((data) => setRole(data));
    }
  }, [user]);

  /* Login */
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* Google Login */
  const googleLogin = () => {
    return signInWithPopup(auth, googleAuth);
  };

  /* Logout */
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  /* Get current user */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current user", currentUser);
      if (currentUser) {
        axios.post("http://localhost:5000/jwt", { email: currentUser?.email }).then((res) => {
          console.log(res.data.token);
          localStorage.setItem("access_token", res.data.token);
        });
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    auth,
    loading,
    setLoading,
    user,
    createUser,
    login,
    googleLogin,
    logout,
    role,
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
