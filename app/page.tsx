import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='flex flex-col max-w-5xl min-h-screen p-24'>
      <div className='py-4'>
        <h1 className='w-full font-mono text-sm '>opensource inspirations</h1>
      </div>
      <form>
        <h2 className='text-base font-semibold leading-7 text-gray-900'>list of programmers</h2>
        <p className='mt-1 text-sm leading-6 text-gray-600'>
          These are the people who make the work that inspires me
        </p>

        <div className='grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6'>
          <div className='sm:col-span-4'>
            <label htmlFor='username' className='block text-sm font-medium leading-6 text-gray-900'>
              GitHub Username
            </label>
            <div className='mt-2'>
              <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                <input
                  type='text'
                  name='username'
                  id='username'
                  className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  placeholder='papadavis47'
                />
              </div>
            </div>
          </div>
        </div>
        <button
          type='button'
          className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-6'
        >
          Change
        </button>
      </form>
    </main>
  );
}
