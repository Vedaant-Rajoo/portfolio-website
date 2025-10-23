'use client';

export function FunSection() {
  return (
    <section className='flex flex-col items-start justify-start w-full px-4 md:px-8 gap-10 pt-32'>
      {/* Main Content */}
      <div className='w-full flex flex-col items-start text-left max-w-4xl'>
        <h1 className='text-4xl sm:text-5xl font-semibold mb-8 text-foreground font-crimson-pro'>
          Fun Stuff
        </h1>

        <div className='text-lg text-muted-foreground mb-8 space-y-6'>
          <p>
            When I&#39;m not building software, I&#39;m exploring the digital world through gaming,
            experimenting with creative coding projects, and discovering new ways to blend
            technology with art.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
          <div className='space-y-6'>
            <div>
              <h3 className='text-xl font-semibold mb-4 text-foreground'>Gaming</h3>
              <p className='text-muted-foreground mb-4'>
                I&#39;m an avid gamer who enjoys both competitive and casual gaming. Currently
                playing:
              </p>
              <ul className='space-y-2 text-muted-foreground'>
                <li>• Strategy games (Civilization, Total War)</li>
                <li>• FPS games (Valorant, CS2)</li>
                <li>• Indie games and experimental titles</li>
                <li>• VR experiences</li>
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-semibold mb-4 text-foreground'>Creative Projects</h3>
              <p className='text-muted-foreground mb-4'>
                I love experimenting with creative coding and interactive experiences:
              </p>
              <ul className='space-y-2 text-muted-foreground'>
                <li>• Generative art with p5.js</li>
                <li>• Interactive web experiences</li>
                <li>• Game development prototypes</li>
                <li>• Music visualization projects</li>
              </ul>
            </div>
          </div>

          <div className='space-y-6'>
            <div>
              <h3 className='text-xl font-semibold mb-4 text-foreground'>Learning & Exploration</h3>
              <p className='text-muted-foreground mb-4'>
                Always curious about new technologies and creative applications:
              </p>
              <ul className='space-y-2 text-muted-foreground'>
                <li>• WebGL and 3D graphics</li>
                <li>• Machine learning for creative use</li>
                <li>• Blockchain and Web3 technologies</li>
                <li>• Augmented reality development</li>
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-semibold mb-4 text-foreground'>Community</h3>
              <p className='text-muted-foreground mb-4'>
                I enjoy being part of the developer community:
              </p>
              <ul className='space-y-2 text-muted-foreground'>
                <li>• Open source contributions</li>
                <li>• Tech meetups and conferences</li>
                <li>• Mentoring and knowledge sharing</li>
                <li>• Collaborative coding projects</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-12 p-6 bg-muted/50 rounded-lg w-full'>
          <h3 className='text-xl font-semibold mb-4 text-foreground'>Current Obsessions</h3>
          <p className='text-muted-foreground'>
            Right now I&#39;m diving deep into performance optimization techniques, exploring the
            intersection of AI and creative coding, and working on some exciting side projects that
            combine my love for gaming and web development.
          </p>
        </div>
      </div>
    </section>
  );
}
