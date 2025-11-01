'use client';

import { Button } from '../ui/button';

export function ResumeSection() {
  return (
    <section className='flex flex-col items-center justify-start w-full px-4 md:px-8 pt-20 pb-12'>
      {/* Centered Container with PDF-like width */}
      <div className='w-full max-w-4xl mx-auto'>
        {/* Header Section - Centered */}
        <div className='text-center mb-8'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-2 text-foreground'>Vedaant Rajoo</h1>
          <p className='text-sm sm:text-base text-foreground'>
            Las Vegas, NV |{' '}
            <a href='mailto:vedaant12345@gmail.com' className='text-accent-blue'>
              vedaant12345@gmail.com
            </a>{' '}
            |{' '}
            <a
              href='https://linkedin.com/in/vedaant-rajoo'
              target='_blank'
              rel='noopener noreferrer'
              className='text-accent-blue'
            >
              LinkedIn
            </a>{' '}
            |{' '}
            <a
              href='https://github.com/Vedaant-Rajoo'
              target='_blank'
              rel='noopener noreferrer'
              className='text-accent-blue'
            >
              Github
            </a>
          </p>
        </div>

        {/* Summary Section */}
        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-2 text-foreground border-b border-foreground/20 pb-1'>
            Fullstack Software Engineer
          </h2>
          <p className='text-sm sm:text-base text-foreground leading-relaxed'>
            Fullstack Software Engineer with 7+ years of experience shipping web applications.
            Expert in building scalable backend systems, optimizing performance, and delivering
            high-quality software solutions. Proven track record of driving significant user growth
            and improving system efficiency through modern development practices.
          </p>
        </div>

        {/* Technical Skills Section */}
        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-3 text-foreground border-b border-foreground/20 pb-1'>
            Technical Skills
          </h2>
          <div className='text-sm sm:text-base text-foreground space-y-1'>
            <p>
              <span className='font-semibold'>Languages:</span> JavaScript, TypeScript, Python, Go,
              Java, C++
            </p>
            <p>
              <span className='font-semibold'>Technologies:</span> Node.js, PostgreSQL, Redis,
              Kafka, Docker, Kubernetes, AWS (EKS, S3, RDS), Terraform, GitHub Actions
            </p>
            <p>
              <span className='font-semibold'>Frameworks:</span> React, Next.js, NestJS, Express,
              Django, FastAPI
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-3 text-foreground border-b border-foreground/20 pb-1'>
            Experience
          </h2>
          <div className='space-y-6'>
            {/* Backend Engineer at VBG */}
            <div className='space-y-2'>
              <div className='flex justify-between items-start flex-wrap gap-2'>
                <h3 className='text-base sm:text-lg font-semibold text-foreground'>
                  Backend Engineer, Veteran Benefits Guide (VBG) - Las Vegas, NV
                </h3>
                <span className='text-sm sm:text-base text-foreground whitespace-nowrap'>
                  Nov 2023 - Present
                </span>
              </div>
              <ul className='list-none space-y-1 text-sm sm:text-base text-foreground pl-0'>
                <li>
                  • Engineered production web portal enabling U.S. Veterans to file disability
                  claims online with custom military ID authentication; drove{' '}
                  <strong>65% MAU growth</strong> and <strong>30% increase</strong> in monthly
                  claims processed, directly accelerating business revenue.
                </li>
                <li>
                  • Architected zero-downtime CRM migration from SugarCRM to Salesforce using
                  Node.js/NestJS migration server with Kafka-parallelized ETL pipelines; achieved{' '}
                  <strong>98%+ field accuracy</strong>
                  via blue-green deployment with automated validation and rollback capabilities.
                </li>
                <li>
                  • Deployed portal to AWS EKS (Kubernetes) with LaunchDarkly feature flags for
                  progressive rollouts, ensuring safe production releases and rapid iteration based
                  on user feedback.
                </li>
                <li>
                  • Established observability infrastructure (structured logging, metrics,
                  distributed tracing) and CI/CD automation, reducing mean time to recovery and
                  enabling team to ship features <strong>3x faster</strong>.
                </li>
                <li>
                  • Hardened system reliability with idempotent Kafka consumers, JSON Schema
                  validation, dead-letter queues, and exponential backoff; eliminated data
                  inconsistencies during high-volume migration periods.
                </li>
              </ul>
              <p className='text-sm text-foreground mt-2'>
                <span className='font-semibold'>Tech:</span> Node.js, TypeScript, NestJS, Kafka,
                PostgreSQL, Redis, Salesforce APIs, AWS (EKS, S3, RDS), Docker, Kubernetes,
                LaunchDarkly, Terraform, GitHub Actions
              </p>
            </div>

            {/* Software Analyst at Rolls-Royce */}
            <div className='space-y-2'>
              <div className='flex justify-between items-start flex-wrap gap-2'>
                <h3 className='text-base sm:text-lg font-semibold text-foreground'>
                  Software Analyst, Rolls-Royce - West Lafayette, IN
                </h3>
                <span className='text-sm sm:text-base text-foreground whitespace-nowrap'>
                  Sep 2022 - May 2023
                </span>
              </div>
              <ul className='list-none space-y-1 text-sm sm:text-base text-foreground pl-0'>
                <li>
                  • Built automated migration tooling in TypeScript/C++ for legacy embedded
                  components (FreeRTOS, zlib), reducing migration time from 3 hours to 10 minutes (
                  <strong>90% faster</strong>) for team of 25+ engineers.
                </li>
                <li>
                  • Implemented LLVM-based static analysis with custom compiler passes for memory
                  safety detection, reducing control-flow vulnerabilities by <strong>70%</strong>{' '}
                  before production deployment.
                </li>
                <li>
                  • Collaborated cross-functionally with backend, embedded, and QA teams to deliver
                  developer workflows with real-time feedback loops, improving migration accuracy
                  and eliminating regressions.
                </li>
              </ul>
              <p className='text-sm text-foreground mt-2'>
                <span className='font-semibold'>Tech:</span> TypeScript, C++, LLVM/Clang, FreeRTOS,
                Git, CI/CD
              </p>
            </div>

            {/* Software Associate at Accenture */}
            <div className='space-y-2'>
              <div className='flex justify-between items-start flex-wrap gap-2'>
                <h3 className='text-base sm:text-lg font-semibold text-foreground'>
                  Software Associate, Accenture - Bengaluru, India
                </h3>
                <span className='text-sm sm:text-base text-foreground whitespace-nowrap'>
                  Aug 2020 - Jan 2021
                </span>
              </div>
              <ul className='list-none space-y-1 text-sm sm:text-base text-foreground pl-0'>
                <li>
                  • Revamped data visualization platform frontend using React/AngularJS with WCAG
                  accessibility improvements and A/B testing; increased user retention by{' '}
                  <strong>40%</strong> and engagement metrics by <strong>60%</strong>.
                </li>
                <li>
                  • Developed cloud ETL pipelines for large-scale data processing, improving data
                  ingestion reliability and reducing processing time for analytics workflows.
                </li>
                <li>
                  • Introduced Agile/Scrum practices to service teams, accelerating release cadence
                  and improving delivery throughput across multiple product streams.
                </li>
              </ul>
              <p className='text-sm text-foreground mt-2'>
                <span className='font-semibold'>Tech:</span> React, AngularJS, Java, Node.js, ETL
                Pipelines, Kibana, CI/CD
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-3 text-foreground border-b border-foreground/20 pb-1'>
            Education
          </h2>
          <div className='flex justify-between items-start flex-wrap gap-2'>
            <h3 className='text-base sm:text-lg font-semibold text-foreground'>
              Purdue University, MS in Computer Science
            </h3>
            <span className='text-sm sm:text-base text-foreground whitespace-nowrap'>
              Aug 2021 - June 2023
            </span>
          </div>
        </div>

        {/* PDF Download Button */}
        <div className='mt-12 text-center'>
          <Button asChild>
            <a href='/vedaant-rajoo-resume.pdf' download className='text-foreground'>
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
