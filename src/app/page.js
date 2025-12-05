import { Hero, Stats, WhyGoToSolution, SlideFlow, FoundersCorner} from '@/components/sections';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Stats />
      <SlideFlow />
      <WhyGoToSolution />
      <FoundersCorner />
    </div>
  );
}