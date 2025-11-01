'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 100);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    const isLight = theme === 'light';
    const newTheme = isLight ? 'dark' : 'light';
    setTheme(newTheme);
  };

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
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 360, opacity: 1 }}
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
