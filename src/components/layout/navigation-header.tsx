"use client";

import Link from "next/link";
import {
  navigationMenuTriggerStyleTransparent,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "../ui/theme-toggle";

export function NavigationHeader() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Left side - Name and Title */}
          <div className="flex items-center gap-4">
            <h4 className="!opacity-100 !text-foreground !font-medium font-mono">
              VEDAANT RAJOO
            </h4>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                SOFTWARE ENGINEER + DEVELOPER
              </span>
            </div>
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem >
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyleTransparent()}>
                    <Link href="/work" className="text-primary">ABOUT</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyleTransparent()}>
                    <Link href="/fun" className="text-primary">WORK</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyleTransparent()}>
                    <Link href="/about" className="text-primary">FUN</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyleTransparent()}>
                    <Link href="/resume" className="text-primary">RESUME</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
