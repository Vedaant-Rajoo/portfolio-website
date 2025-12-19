'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';

/**
 * Renders a theme toggle button that switches the app theme between "light" and "dark" and animates the icon when the theme changes.
 *
 * The component intentionally renders nothing for a short mount delay, and triggers a brief rotation/fade animation each time the theme is toggled.
 *
 * @returns The toggle button element, or `null` before the component has mounted.
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 100);
  }, []);

  // Reset animation flag after animation completes
  useEffect(() => {
    if (shouldAnimate) {
      const timer = setTimeout(() => {
        setShouldAnimate(false);
      }, 300); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [shouldAnimate]);

  const toggleTheme = () => {
    const isLight = theme === 'light';
    const newTheme = isLight ? 'dark' : 'light';
    setShouldAnimate(true);
    setTheme(newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Button
        variant='outline'
        size='icon'
        onClick={toggleTheme}
        className='relative overflow-hidden'
      >
        <motion.div
          key={theme}
          initial={shouldAnimate ? { rotate: 0, opacity: 0 } : false}
          animate={{ rotate: shouldAnimate ? 360 : 0, opacity: 1 }}
          exit={{ rotate: -360, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
            opacity: { duration: 0.2 },
          }}
          className='flex items-center justify-center'
        >
          {theme === 'light' ? (
            <Sun className='h-[1.2rem] w-[1.2rem]' />
          ) : (
            <Moon className='h-[1.2rem] w-[1.2rem]' />
          )}
        </motion.div>
        <span className='sr-only'>Toggle theme</span>
      </Button>
    </motion.div>
  );
}