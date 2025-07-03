"use client";

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="relative overflow-hidden glass-card shadow-modern border-0 hover:shadow-lg group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative z-10 flex items-center gap-2">
        <div className="relative">
          {theme === 'light' ? (
            <Moon className="w-4 h-4 transition-all duration-300 group-hover:rotate-12" />
          ) : (
            <Sun className="w-4 h-4 transition-all duration-300 group-hover:rotate-180" />
          )}
        </div>
        <span className="hidden sm:inline font-medium">
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </span>
      </div>
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </Button>
  );
} 