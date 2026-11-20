// ------------------------------------------------------------
// AuthContext.jsx
// Keeps track of "who is logged in" and shares it with the
// whole app, so any component can ask: is there a user?
// ------------------------------------------------------------
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

// Create an empty "box" (context) that will hold the user.
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // user = the logged-in Firebase user, or null if nobody is logged in
  const [user, setUser] = useState(null);
  // loading = true until Firebase tells us the user state for the first time
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged runs:
    //  - once when the page loads (this is how we stay logged in after refresh,
    //    because Firebase saves the login in the browser), and
    //  - every time the user logs in or logs out.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Stop listening when this component is removed.
    return unsubscribe;
  }, []);

  // While Firebase is still checking, show a small message instead of the app.
  if (loading) {
    return <p style={{ padding: 20 }}>Loading...</p>;
  }

  // Put the user inside the "box" so every child component can read it.
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}

// A small helper hook: any component can call useAuth() to get the user.
export function useAuth() {
  return useContext(AuthContext);
}
