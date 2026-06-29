"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "auto";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "auto",
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("auto");

  useEffect(() => {
    // Read from localStorage on mount
    const savedTheme = localStorage.getItem("chronix-theme") as Theme;
    if (savedTheme) {
      setThemeState(savedTheme);
      applyThemeClass(savedTheme);
    } else {
      applyThemeClass("auto");
    }
  }, []);

  const applyThemeClass = (t: Theme) => {
    const root = document.documentElement;
    root.classList.remove("dark");
    
    if (t === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else if (t === "light") {
      root.style.colorScheme = "light";
    } else {
      // auto
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.classList.add("dark");
        root.style.colorScheme = "dark";
      } else {
        root.style.colorScheme = "light";
      }
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("chronix-theme", newTheme);
    applyThemeClass(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
