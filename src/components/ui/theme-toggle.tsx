"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { animate } from "animejs";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const iconRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    const isLight = theme === "light";
    const newTheme = isLight ? "dark" : "light";
    
    // Animate the icon transition
    if (iconRef.current && buttonRef.current) {
      // First, animate the current icon out with rotation and scale
      animate(iconRef.current, {
        rotate: { to: 180, duration: 200 },
        scale: { to: 0.8, duration: 200 },
        opacity: { to: 0, duration: 150 },
        ease: "outQuart"
      }).then(() => {
        // Change the theme (this will update the icon)
        setTheme(newTheme);
        
        // Animate the new icon in
        setTimeout(() => {
          if (iconRef.current) {
            animate(iconRef.current, {
              rotate: { to: 0, duration: 200 },
              scale: { to: 1, duration: 200 },
              opacity: { to: 1, duration: 150 },
              ease: "outBack"
            });
          }
        }, 50);
      });
    } else {
      // Fallback without animation
      setTheme(newTheme);
    }
  };

  return (
    <Button 
      ref={buttonRef}
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className="relative overflow-hidden transition-all duration-200 hover:scale-105 active:scale-95"
    >
      <div ref={iconRef} className="flex items-center justify-center">
        {theme === "light" ? (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
