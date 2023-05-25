import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  return (
    <main className='flex flex-col max-w-5xl min-h-screen p-24'>
      <div className='py-4'>
        <h1 className='w-full font-mono text-sm '>opensource inspirations</h1>
      </div>
    </main>
  );
}
