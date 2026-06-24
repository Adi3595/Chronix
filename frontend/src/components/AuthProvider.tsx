"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({ 
  user: null, 
  loading: true,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check localStorage for mocked session to persist login
  useEffect(() => {
    if (!auth) {
      const isLogged = localStorage.getItem("chronix-demo-login");
      if (isLogged) {
        setUser({
          uid: "demo-user-123",
          email: "demo@chronix.os",
          displayName: "Executive User",
        } as User);
      }
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = () => {
    if (!auth) {
      localStorage.setItem("chronix-demo-login", "true");
      setUser({
        uid: "demo-user-123",
        email: "demo@chronix.os",
        displayName: "Executive User",
      } as User);
    }
  };

  const logout = async () => {
    if (auth) {
      await signOut(auth);
    } else {
      localStorage.removeItem("chronix-demo-login");
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
