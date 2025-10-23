'use client';
import { useDiscordStatus } from '@/hooks/useDiscordStatus';
export function WorkSection() {
  const discordStatus = useDiscordStatus();

  return (
    <section className='flex flex-col md:flex-row items-start justify-start w-full px-4 md:px-8 gap-10 pt-64'>
      {/* Main Content */}
      <div className='w-full flex flex-col items-start text-left'>
        <span className='text-sm mb-4'>
          Right now I&#39;m{' '}
          <span className={`font-medium ${discordStatus.statusClass}`}>
            {discordStatus.statusText.toLowerCase()}
          </span>
        </span>
        <h1 className='text-4xl sm:text-5xl font-semibold mb-6 text-foreground font-crimson-pro'>
          I&#39;m Vedaant, a software engineer
          <br />
          who makes <span className='italic'>latency</span>&nbsp;&nbsp;
          <span className='text-accent-teal'>tap out</span>.
        </h1>
      </div>
    </section>
  );
}
