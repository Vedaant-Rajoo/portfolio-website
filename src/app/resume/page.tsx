import { NavigationHeader, ResumeSection } from '@/components/layout';

export default function ResumePage() {
  return (
    <div className='min-h-screen'>
      <NavigationHeader />
      <main>
        <ResumeSection />
      </main>
    </div>
  );
}
