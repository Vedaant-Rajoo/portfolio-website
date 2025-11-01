'use client';

import * as React from 'react';
import type { SVGProps } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
  type HTMLMotionProps,
  type SpringOptions,
} from 'motion/react';

import { cn } from '@/lib/utils';

type HoverTarget = 'internal-link' | 'external-link' | 'button' | 'interactive' | 'default';

type CursorContextType = {
  cursorPos: { x: number; y: number };
  isActive: boolean;
  hoverTarget: HoverTarget;
  containerRef: React.RefObject<HTMLDivElement | null>;
  cursorRef: React.RefObject<HTMLDivElement | null>;
};

const CursorContext = React.createContext<CursorContextType | undefined>(undefined);

const useCursor = (): CursorContextType => {
  const context = React.useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

type CursorProviderProps = React.ComponentProps<'div'> & {
  children: React.ReactNode;
};

function isExternalLink(linkElement: HTMLAnchorElement): boolean {
  const href = linkElement.getAttribute('href');
  if (!href) return false;

  // Check if it's a mailto, tel, or other protocol links (treat as external)
  if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
    return href.startsWith('mailto:') || href.startsWith('tel:');
  }

  // Check if link has target="_blank" (typically external)
  if (linkElement.getAttribute('target') === '_blank') {
    return true;
  }

  // Check if href starts with http:// or https://
  if (href.startsWith('http://') || href.startsWith('https://')) {
    // If it's a full URL, check if it's the same origin
    try {
      const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
      const linkUrl = new URL(href, currentOrigin);
      return linkUrl.origin !== currentOrigin;
    } catch {
      // If URL parsing fails, assume external
      return true;
    }
  }

  // Relative paths (starting with /) are internal
  return false;
}

function detectHoverTarget(element: Element | null): HoverTarget {
  if (!element) return 'default';

  // Check if it's a link (check before button since buttons can be inside links)
  const linkElement =
    element.tagName === 'A'
      ? (element as HTMLAnchorElement)
      : (element.closest('a') as HTMLAnchorElement | null);

  if (linkElement) {
    return isExternalLink(linkElement) ? 'external-link' : 'internal-link';
  }

  // Check if it's a button
  // Check for shadcn Button component (has data-slot="button")
  if (
    element.tagName === 'BUTTON' ||
    element.getAttribute('role') === 'button' ||
    element.getAttribute('data-slot') === 'button' ||
    element.closest('button') ||
    element.closest('[data-slot="button"]')
  ) {
    return 'button';
  }

  // Check if it's an interactive element
  const hasTabIndex = element.hasAttribute('tabindex') && element.getAttribute('tabindex') !== '-1';
  const isClickable =
    element.getAttribute('onclick') !== null || element.getAttribute('role') === 'button';
  const isInteractiveImage =
    element.tagName === 'IMG' && (element.closest('a') || element.closest('button'));

  if (hasTabIndex || isClickable || isInteractiveImage) {
    return 'interactive';
  }

  return 'default';
}

function CursorProvider({ ref, children, ...props }: CursorProviderProps) {
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = React.useState(false);
  const [hoverTarget, setHoverTarget] = React.useState<HoverTarget>('default');
  const [mounted, setMounted] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const cursorRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

  // Ensure component only runs on client-side
  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted || !containerRef.current) return;

    const parent = containerRef.current.parentElement;
    if (!parent) return;

    if (getComputedStyle(parent).position === 'static') {
      parent.style.position = 'relative';
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      setIsActive(true);

      // Detect hover target using elementFromPoint
      const element = document.elementFromPoint(e.clientX, e.clientY);
      const target = detectHoverTarget(element);
      setHoverTarget(target);
    };

    const handleMouseLeave = () => {
      setIsActive(false);
      setHoverTarget('default');
    };

    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mounted]);

  return (
    <CursorContext.Provider value={{ cursorPos, isActive, hoverTarget, containerRef, cursorRef }}>
      <div ref={containerRef} data-slot='cursor-provider' {...props}>
        {children}
      </div>
    </CursorContext.Provider>
  );
}

type CursorProps = HTMLMotionProps<'div'> & {
  children: React.ReactNode;
};

function Cursor({ ref, children, className, style, ...props }: CursorProps) {
  const { cursorPos, isActive, hoverTarget, containerRef, cursorRef } = useCursor();
  const [mounted, setMounted] = React.useState(false);
  React.useImperativeHandle(ref, () => cursorRef.current as HTMLDivElement);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Calculate dynamic styles based on hoverTarget
  const getCursorStyles = React.useMemo(() => {
    switch (hoverTarget) {
      case 'internal-link':
      case 'external-link':
      case 'interactive':
        return { scale: 1.5, opacity: 1 };
      case 'button':
        return { scale: 1.5, opacity: 1 };
      default:
        return { scale: 1, opacity: 1 };
    }
  }, [hoverTarget]);

  // Determine color class for SVG
  const getColorClass = React.useMemo(() => {
    switch (hoverTarget) {
      case 'internal-link':
        return 'text-blue-400'; // Lighter blue for internal links
      case 'external-link':
        return 'text-blue-600'; // Darker blue for external links
      case 'button':
        return 'text-blue-700'; // Darkest blue for buttons
      default:
        return 'text-blue-500'; // Medium blue for default
    }
  }, [hoverTarget]);

  // Ensure component only runs on client-side
  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted) return;

    const parentElement = containerRef.current?.parentElement;

    // eslint-disable-next-line react-hooks/immutability
    if (parentElement && isActive) parentElement.style.cursor = 'none';

    return () => {
      if (parentElement) parentElement.style.cursor = 'default';
    };
  }, [mounted, containerRef, cursorPos, isActive]);

  React.useEffect(() => {
    x.set(cursorPos.x);
    y.set(cursorPos.y);
  }, [cursorPos, x, y]);

  // Clone children and apply dynamic color class and stroke to SVG
  const childrenWithDynamicColor = React.useMemo(() => {
    if (React.isValidElement(children) && children.type === 'svg') {
      const svgElement = children as React.ReactElement<SVGProps<SVGSVGElement>>;
      const isHoverState = hoverTarget !== 'default';

      // Clone SVG and update path to use stroke for hover states
      const svgProps: SVGProps<SVGSVGElement> = {
        ...svgElement.props,
        className: cn(svgElement.props.className, getColorClass),
      };

      // For hover states, modify children to use stroke instead of fill
      const modifiedChildren = React.Children.map(svgElement.props.children, child => {
        if (React.isValidElement(child)) {
          // Handle path elements (if any)
          if (child.type === 'path') {
            const pathElement = child as React.ReactElement<SVGProps<SVGPathElement>>;
            if (isHoverState) {
              return React.cloneElement(pathElement, {
                ...pathElement.props,
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: 1.5,
                strokeLinejoin: 'round',
                strokeLinecap: 'round',
              } as React.SVGProps<SVGPathElement>);
            }
          }
          // Handle circle elements
          if (child.type === 'circle') {
            const circleElement = child as React.ReactElement<SVGProps<SVGCircleElement>>;
            if (isHoverState) {
              return React.cloneElement(circleElement, {
                ...circleElement.props,
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: 1.5,
              } as React.SVGProps<SVGCircleElement>);
            }
          }
        }
        return child;
      });

      return React.cloneElement(svgElement, svgProps, modifiedChildren);
    }
    return children;
  }, [children, getColorClass, hoverTarget]);

  return (
    <AnimatePresence>
      {mounted && isActive && (
        <motion.div
          ref={cursorRef}
          data-slot='cursor'
          className={cn(
            'transform-[translate(-50%,-50%)] pointer-events-none z-[9999] absolute',
            className
          )}
          style={{ top: y, left: x, ...style }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: getCursorStyles.scale,
            opacity: getCursorStyles.opacity,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
            mass: 0.5,
          }}
          {...props}
        >
          {childrenWithDynamicColor}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type Align =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'right'
  | 'center';

type CursorFollowProps = HTMLMotionProps<'div'> & {
  sideOffset?: number;
  align?: Align;
  transition?: SpringOptions;
  children: React.ReactNode;
};

function CursorFollow({
  ref,
  sideOffset = 15,
  align = 'bottom-right',
  children,
  className,
  style,
  transition = { stiffness: 500, damping: 50, bounce: 0 },
  ...props
}: CursorFollowProps) {
  const { cursorPos, isActive, cursorRef } = useCursor();
  const [mounted, setMounted] = React.useState(false);
  const cursorFollowRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => cursorFollowRef.current as HTMLDivElement);

  // Ensure component only runs on client-side
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, transition);
  const springY = useSpring(y, transition);

  const calculateOffset = React.useCallback(() => {
    const rect = cursorFollowRef.current?.getBoundingClientRect();
    const width = rect?.width ?? 0;
    const height = rect?.height ?? 0;

    let newOffset;

    switch (align) {
      case 'center':
        newOffset = { x: width / 2, y: height / 2 };
        break;
      case 'top':
        newOffset = { x: width / 2, y: height + sideOffset };
        break;
      case 'top-left':
        newOffset = { x: width + sideOffset, y: height + sideOffset };
        break;
      case 'top-right':
        newOffset = { x: -sideOffset, y: height + sideOffset };
        break;
      case 'bottom':
        newOffset = { x: width / 2, y: -sideOffset };
        break;
      case 'bottom-left':
        newOffset = { x: width + sideOffset, y: -sideOffset };
        break;
      case 'bottom-right':
        newOffset = { x: -sideOffset, y: -sideOffset };
        break;
      case 'left':
        newOffset = { x: width + sideOffset, y: height / 2 };
        break;
      case 'right':
        newOffset = { x: -sideOffset, y: height / 2 };
        break;
      default:
        newOffset = { x: 0, y: 0 };
    }

    return newOffset;
  }, [align, sideOffset]);

  React.useEffect(() => {
    const offset = calculateOffset();
    const cursorRect = cursorRef.current?.getBoundingClientRect();
    const cursorWidth = cursorRect?.width ?? 20;
    const cursorHeight = cursorRect?.height ?? 20;

    x.set(cursorPos.x - offset.x + cursorWidth / 2);
    y.set(cursorPos.y - offset.y + cursorHeight / 2);
  }, [calculateOffset, cursorPos, cursorRef, x, y]);

  return (
    <AnimatePresence>
      {mounted && isActive && (
        <motion.div
          ref={cursorFollowRef}
          data-slot='cursor-follow'
          className={cn(
            'transform-[translate(-50%,-50%)] pointer-events-none z-[9998] absolute',
            className
          )}
          style={{ top: springY, left: springX, ...style }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export {
  CursorProvider,
  Cursor,
  CursorFollow,
  useCursor,
  type CursorContextType,
  type CursorProviderProps,
  type CursorProps,
  type CursorFollowProps,
};
