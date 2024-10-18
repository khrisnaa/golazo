import { Heading } from '@/components/heading';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const MainSection = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
      <div className="relative h-full w-full">
        <Image
          src={'/images/bellingham.webp'}
          alt="main image"
          fill
          className="object-cover"
        />
        <div className="absolute z-[2] h-full w-full bg-black opacity-20" />
      </div>
      <div className="absolute top-1/4 z-10 flex flex-col gap-8 p-4">
        <Heading>Wear the Legacy Own the Game</Heading>
        <Button variant="secondary" size="lg" className="rounded-none">
          Explore Now
        </Button>
      </div>
    </div>
  );
};
