import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  return (
    <main className='flex flex-col max-w-5xl min-h-screen p-24'>
      <div className='py-4'>
        <h1 className='w-full font-mono text-sm '>opensource inspirations</h1>
      </div>
      <div className='pt-4 mt-6'>
        <Link href='/add'>
          <button
            type='button'
            className='rounded-md mr-3 bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100'
          >
            New Entry
          </button>
        </Link>
        <Link href='/inspirations'>
          <button
            type='button'
            className='rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100'
          >
            See List
          </button>
        </Link>
      </div>
    </main>
  );
}
