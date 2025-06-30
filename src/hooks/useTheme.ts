"use client";

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark'); // Default to dark mode

  useEffect(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('nyc-checklist-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference, but default to dark if no preference
      const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      
      if (systemPrefersLight) {
        setTheme('light');
      } else {
        setTheme('dark'); // Default to dark mode
      }
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem('nyc-checklist-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
} 