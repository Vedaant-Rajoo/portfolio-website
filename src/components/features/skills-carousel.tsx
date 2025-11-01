'use client';

import {
  ReactIcon,
  NextJSIcon,
  TypeScriptIcon,
  PythonIcon,
  CPlusPlusIcon,
  PostgreSQLIcon,
  KubernetesIcon,
  NestJSIcon,
  RustIcon,
  NodeJSIcon,
  MongoDBIcon,
  LLVMIcon,
  JestIcon,
  GraphQLIcon,
  GitIcon,
  FramerIcon,
  ESPHomeIcon,
  DockerIcon,
  ApacheKafkaIcon,
  BunIcon,
} from '@/components/ui/icons';
import Marquee from 'react-fast-marquee';

const skills: { name: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { name: 'React', icon: ReactIcon },
  { name: 'Next.js', icon: NextJSIcon },
  { name: 'TypeScript', icon: TypeScriptIcon },
  { name: 'Python', icon: PythonIcon },
  { name: 'C++', icon: CPlusPlusIcon },
  { name: 'PostgreSQL', icon: PostgreSQLIcon },
  { name: 'Kubernetes', icon: KubernetesIcon },
  { name: 'Docker', icon: DockerIcon },
  { name: 'ESPHome', icon: ESPHomeIcon },
  { name: 'Framer', icon: FramerIcon },
  { name: 'Git', icon: GitIcon },
  { name: 'GraphQL', icon: GraphQLIcon },
  { name: 'Jest', icon: JestIcon },
  { name: 'LLVM', icon: LLVMIcon },
  { name: 'MongoDB', icon: MongoDBIcon },
  { name: 'NestJS', icon: NestJSIcon },
  { name: 'Node.js', icon: NodeJSIcon },
  { name: 'Rust', icon: RustIcon },
  { name: 'Apache Kafka', icon: ApacheKafkaIcon },
  { name: 'Bun', icon: BunIcon },
];

export function SkillsCarousel() {
  return (
    <div className='w-full flex flex-col items-start justify-start gap-8'>
      <h1 className='text-lg font-semibold mb-6 text-muted-foreground w-full text-center'>
        Technologies I&apos;ve Worked With
      </h1>
      <section className='w-full overflow-hidden'>
        <Marquee
          autoFill={true}
          className='mr-16'
          gradient={true}
          gradientColor='var(--background)'
        >
          {skills.map(skill => (
            <skill.icon className='w-15 h-10 mr-16 text-muted-foreground' key={skill.name} />
          ))}
        </Marquee>
      </section>
    </div>
  );
}
