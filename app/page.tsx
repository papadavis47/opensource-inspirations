import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen p-24'>
      <div className='z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex'>
        <h1>opensource inspirations</h1>
      </div>
    </main>
  );
}
