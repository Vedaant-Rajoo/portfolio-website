'use client';

export function ResumeSection() {
  return (
    <section className='flex flex-col items-start justify-start w-full px-4 md:px-8 gap-10 pt-32'>
      {/* Main Content */}
      <div className='w-full flex flex-col items-start text-left max-w-4xl'>
        <h1 className='text-4xl sm:text-5xl font-semibold mb-8 text-foreground font-crimson-pro'>
          Resume
        </h1>

        <div className='text-lg text-muted-foreground mb-8'>
          <p>
            Here&#39;s a comprehensive overview of my professional experience, education, and
            technical expertise.
          </p>
        </div>

        <div className='w-full space-y-12'>
          {/* Experience Section */}
          <div>
            <h2 className='text-2xl font-semibold mb-6 text-foreground border-b pb-2'>
              Experience
            </h2>
            <div className='space-y-6'>
              <div className='border-l-2 border-primary/20 pl-6'>
                <h3 className='text-xl font-semibold text-foreground'>Software Engineer</h3>
                <p className='text-muted-foreground mb-2'>Company Name • 2023 - Present</p>
                <ul className='space-y-2 text-muted-foreground'>
                  <li>
                    • Developed and maintained scalable web applications using React and Node.js
                  </li>
                  <li>• Optimized application performance, reducing load times by 40%</li>
                  <li>
                    • Collaborated with cross-functional teams to deliver high-quality software
                    solutions
                  </li>
                  <li>• Implemented modern development practices including CI/CD pipelines</li>
                </ul>
              </div>

              <div className='border-l-2 border-primary/20 pl-6'>
                <h3 className='text-xl font-semibold text-foreground'>Frontend Developer</h3>
                <p className='text-muted-foreground mb-2'>Previous Company • 2022 - 2023</p>
                <ul className='space-y-2 text-muted-foreground'>
                  <li>• Built responsive user interfaces with React and TypeScript</li>
                  <li>• Integrated RESTful APIs and third-party services</li>
                  <li>• Participated in agile development processes and code reviews</li>
                  <li>• Mentored junior developers and contributed to team knowledge sharing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className='text-2xl font-semibold mb-6 text-foreground border-b pb-2'>Education</h2>
            <div className='border-l-2 border-primary/20 pl-6'>
              <h3 className='text-xl font-semibold text-foreground'>
                Bachelor of Science in Computer Science
              </h3>
              <p className='text-muted-foreground mb-2'>University Name • 2018 - 2022</p>
              <p className='text-muted-foreground'>
                Focused on software engineering, algorithms, and system design. Relevant coursework
                included data structures, database systems, and web development.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className='text-2xl font-semibold mb-6 text-foreground border-b pb-2'>
              Technical Skills
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-lg font-semibold mb-3 text-foreground'>
                  Programming Languages
                </h3>
                <ul className='space-y-1 text-muted-foreground'>
                  <li>• JavaScript/TypeScript</li>
                  <li>• Python</li>
                  <li>• Go</li>
                  <li>• Java</li>
                  <li>• C++</li>
                </ul>
              </div>

              <div>
                <h3 className='text-lg font-semibold mb-3 text-foreground'>
                  Frameworks & Libraries
                </h3>
                <ul className='space-y-1 text-muted-foreground'>
                  <li>• React/Next.js</li>
                  <li>• Node.js/Express</li>
                  <li>• Tailwind CSS</li>
                  <li>• Django/FastAPI</li>
                  <li>• Docker</li>
                </ul>
              </div>

              <div>
                <h3 className='text-lg font-semibold mb-3 text-foreground'>Databases</h3>
                <ul className='space-y-1 text-muted-foreground'>
                  <li>• PostgreSQL</li>
                  <li>• MongoDB</li>
                  <li>• Redis</li>
                  <li>• MySQL</li>
                </ul>
              </div>

              <div>
                <h3 className='text-lg font-semibold mb-3 text-foreground'>Tools & Technologies</h3>
                <ul className='space-y-1 text-muted-foreground'>
                  <li>• Git/GitHub</li>
                  <li>• AWS/Cloud Services</li>
                  <li>• Vercel/Netlify</li>
                  <li>• Figma</li>
                  <li>• VS Code</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 className='text-2xl font-semibold mb-6 text-foreground border-b pb-2'>
              Certifications & Achievements
            </h2>
            <div className='space-y-4'>
              <div className='border-l-2 border-primary/20 pl-6'>
                <h3 className='text-lg font-semibold text-foreground'>AWS Certified Developer</h3>
                <p className='text-muted-foreground'>Amazon Web Services • 2023</p>
              </div>
              <div className='border-l-2 border-primary/20 pl-6'>
                <h3 className='text-lg font-semibold text-foreground'>
                  Google Cloud Professional Developer
                </h3>
                <p className='text-muted-foreground'>Google Cloud • 2022</p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12 p-6 bg-muted/50 rounded-lg w-full text-center'>
          <h3 className='text-xl font-semibold mb-4 text-foreground'>Download Resume</h3>
          <p className='text-muted-foreground mb-4'>Get a PDF version of my complete resume</p>
          <button className='px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors'>
            Download PDF
          </button>
        </div>
      </div>
    </section>
  );
}
