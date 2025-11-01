'use client';

import Image from 'next/image';
import { Linkedin, Github, Twitter } from 'lucide-react';

export function ContactMe() {
  return (
    <div className='w-full max-w-7xl mx-auto'>
      <h1 className='text-4xl sm:text-5xl font-semibold mb-6 text-foreground font-crimson-pro'>
        Let&apos;s build something together
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
        {/* Left Column - Map Image */}
        <div className='flex flex-col'>
          <div className='relative w-full h-[280px] rounded-lg overflow-hidden mb-4'>
            <Image
              src='/map_beter.webp'
              alt='Location map'
              width={400}
              height={280}
              className='w-full h-full object-cover brightness-90 dark:brightness-110 dark:invert-[0.1] rounded-lg'
              priority
            />
          </div>
          <p className='text-lg font-medium text-foreground'>
            Based in Las Vegas, building from the heart of innovation
          </p>
        </div>

        {/* Right Column - Social Links */}
        <div className='flex flex-col gap-4 justify-start'>
          <p className='text-2xl font-semibold text-foreground mb-2'>
            Connect, collaborate, or just say hello!
          </p>

          <a
            href='https://linkedin.com/in/vedaant-rajoo'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-3 px-6 py-3 rounded-full border border-foreground/20 bg-background text-foreground hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] dark:bg-input/30 dark:border-input transition-all duration-200 hover:scale-[1.02] shadow-sm'
          >
            <Linkedin className='w-5 h-5' />
            <span className='font-medium'>LinkedIn</span>
          </a>

          <a
            href='https://github.com/Vedaant-Rajoo'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-3 px-6 py-3 rounded-full border border-foreground/20 bg-background text-foreground hover:bg-[#333] hover:text-white hover:border-[#333] dark:bg-input/30 dark:border-input transition-all duration-200 hover:scale-[1.02] shadow-sm'
          >
            <Github className='w-5 h-5' />
            <span className='font-medium'>GitHub</span>
          </a>

          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-3 px-6 py-3 rounded-full border border-foreground/20 bg-background text-foreground hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:bg-input/30 dark:border-input transition-all duration-200 hover:scale-[1.02] shadow-sm'
          >
            <Twitter className='w-5 h-5' />
            <span className='font-medium'>X / Twitter</span>
          </a>
        </div>
      </div>
    </div>
  );
}
