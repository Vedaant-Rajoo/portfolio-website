import { NavigationHeader, AboutSection } from '@/components/layout';

export default function AboutPage() {
  return (
    <div className='min-h-screen'>
      <NavigationHeader />
      <main>
        <AboutSection />
      </main>
    </div>
  );
}
