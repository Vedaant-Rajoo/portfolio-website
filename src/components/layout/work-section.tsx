'use client';
import { useDiscordStatus } from '@/hooks/useDiscordStatus';
import { SkillsCarousel } from '../features/skills-carousel';
import { ContactMe } from '../features/contact-me';

const experience = [
  {
    id: 1,
    year: '2023',
    company: 'Veteran Benefits Guide',
    title: 'Backend Engineer',
    link: 'https://www.vbg.com',
  },
  {
    id: 2,
    year: '2022',
    company: 'Rolls-Royce',
    title: 'Software Analyst',
    link: 'https://www.rolls-royce.com',
  },
  {
    id: 3,
    year: '2020',
    company: 'Accenture',
    title: 'Software Associate',
    link: 'https://www.accenture.com',
  },
  {
    id: 4,
    year: '2020',
    company: 'UCLA',
    title: 'Undergraduate Research Assistant',
    link: 'https://www.ucla.edu',
  },
];
export function WorkSection() {
  const discordStatus = useDiscordStatus();

  return (
    <section className='w-full px-4 mt-12 md:px-8 pt-64 flex flex-col items-start justify-start gap-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-start w-full'>
        {/* First column - Main Content */}
        <div className='w-full max-w-3xl flex flex-col items-start text-left'>
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

        {/* Second column - Experience */}
        <div className='w-full md:w-full max-w-7xl flex flex-col mt-8 md:mt-0 py-8 items-start font-mono'>
          <div className='space-y-4 w-full'>
            {experience.map(role => (
              <div key={role.id} className='flex items-start gap-6 w-full'>
                <h4 className='w-24 text-muted-foreground'>{role.year}</h4>
                <div className='flex flex-col lg:flex-row gap-1 lg:gap-2 w-full tracking-tighter'>
                  <div className='w-1/2 text-foreground transition-transform duration-150 ease-out hover:scale-[1.005]'>
                    <a href={role.link} target='_blank' rel='noopener noreferrer'>
                      {role.company}
                    </a>
                  </div>
                  <p className='text-muted-foreground font-medium'>{role.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full max-w-7xl mx-auto items-center justify-center py-12'>
        <SkillsCarousel />
      </div>
      <div className='w-full max-w-7xl mx-auto items-center justify-center py-12'>
        <ContactMe />
      </div>
    </section>
  );
}
