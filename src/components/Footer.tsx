"use client";

import { Button } from '@/components/ui/button';
import { Github, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Attribution */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by</span>
            <span className="font-medium text-foreground">abdelkarim ait bourich</span>
          </div>
          
          {/* GitHub Link */}
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex items-center gap-2 transition-all duration-200 hover:scale-105"
          >
            <a
              href="https://github.com/VeinDevTtv/nyc-checklist"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code on GitHub"
            >
              <Github className="w-4 h-4" />
              <span className="text-xs sm:text-sm">View on GitHub</span>
            </a>
          </Button>
        </div>
        
        {/* Additional Info */}
        <div className="mt-4 pt-4 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            Your ultimate guide to exploring the Big Apple • Open Source & Free
          </p>
        </div>
      </div>
    </footer>
  );
} 