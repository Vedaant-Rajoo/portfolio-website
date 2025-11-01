'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  navigationMenuTriggerStyleTransparent,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { ThemeToggle } from '../ui/theme-toggle';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const navigationItems = [
  { href: '/work', label: 'WORK' },
  { href: '/about', label: 'ABOUT' },
  { href: '/fun', label: 'FUN' },
  { href: '/resume', label: 'RESUME' },
];

export function NavigationHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to determine if a navigation link is active
  const isActive = (href: string) => {
    if (!pathname) return false;

    // Normalize paths by removing trailing slashes (except for root)
    const normalizePath = (path: string) => {
      if (path === '/' || path === '') return '/';
      return path.replace(/\/+$/, '');
    };

    const normalizedPathname = normalizePath(pathname);
    const normalizedHref = normalizePath(href);

    // Root path redirects to /work, so treat /work as active on root
    if (normalizedPathname === '/' && normalizedHref === '/work') {
      return true;
    }
    // Exact pathname match after normalization
    return normalizedPathname === normalizedHref;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint (768px)
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <header className='border-b'>
      <div className='mx-auto px-4 sm:px-6 py-4'>
        <nav className='flex items-center justify-between'>
          {/* Left side - Name and Title */}
          <div className='flex items-center gap-2 sm:gap-4 justify-start text-left'>
            <h4 className='!opacity-100 !text-foreground !font-medium font-mono'>VEDAANT RAJOO</h4>
            <div className='hidden sm:flex items-center gap-2'>
              <span className='text-sm text-muted-foreground'>SOFTWARE ENGINEER + DEVELOPER</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-4'>
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map(item => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyleTransparent()}>
                      <Link
                        href={item.href}
                        className={`text-sm transition-colors ${
                          isActive(item.href)
                            ? 'text-accent-blue font-medium'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className='flex md:hidden items-center gap-2'>
            <ThemeToggle />
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='icon' className='h-9 w-9'>
                  <div className='relative w-5 h-5'>
                    <Menu
                      className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                        isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                      }`}
                    />
                    <X
                      className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                        isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                      }`}
                    />
                  </div>
                  <span className='sr-only'>Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='w-56'>
                {navigationItems.map(item => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link
                      href={item.href}
                      className={`w-full cursor-pointer transition-colors ${
                        isActive(item.href)
                          ? 'text-accent-blue font-medium'
                          : 'text-muted-foreground'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  );
}
