'use client';

import { useDiscordStatus } from '@/hooks/useDiscordStatus';

export function AboutSection() {
  const discordStatus = useDiscordStatus();

  return (
    <section className='flex flex-col items-start justify-start w-full px-4 md:px-8 gap-10 pt-32'>
      <span className='text-sm text-muted-foreground mb-4'>
        Right now I&#39;m{' '}
        {discordStatus.isListeningToMusic ? (
          <>
            <span className='text-primary font-medium text-success'> listening to</span>
            <span className='text-muted-foreground'>
              <span className='font-medium'> {discordStatus.musicData?.song}</span>
              <span className='text-muted-foreground'> by {discordStatus.musicData?.artist}</span>
            </span>
          </>
        ) : (
          <span className={`font-medium ${discordStatus.statusClass}`}>
            {discordStatus.statusText.toLowerCase()}
          </span>
        )}
      </span>
      <div className='w-full flex flex-col items-start text-left max-w-4xl'>
        <h1 className='text-4xl sm:text-5xl font-semibold mb-8 text-foreground font-crimson-pro'>
          I&#39;m a backend engineer, builder, and gamer—scaling apps and playlists.
        </h1>

        <div className='text-lg text-muted-foreground mb-8 space-y-6'>
          <p>
            I&#39;m a passionate Software Engineer with a deep interest in web development and
            low-level system optimization. Based in the US, I love creating efficient, scalable
            solutions that make a real impact. If you&#39;re working on something cool,&nbsp;
            <a href='mailto:vedaant12345@gmail.com' className='text-primary'>
              let&#39;s chat!
            </a>
          </p>

          <p></p>

          <p>
            When I&#39;m not coding, you&#39;ll find me gaming, exploring new development tools, or
            diving deep into the latest tech trends. I believe in continuous learning and staying
            curious about the future of technology.
          </p>
        </div>
      </div>
    </section>
  );
}
