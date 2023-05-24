import { Inter } from 'next/font/google';
import { prisma } from '@/utils/prisma';
import { addHandle } from '@/utils/actions';

const inter = Inter({ subsets: ['latin'] });

function getNames() {
  return prisma.programmer.findMany();
}

export default async function Home() {
  const names = await getNames();
  return (
    <main className='flex flex-col max-w-5xl min-h-screen p-24'>
      <div className='py-4'>
        <h1 className='w-full font-mono text-sm '>opensource inspirations</h1>
      </div>
      {/* @ts-expect-error will work it out later */}
      <form action={addHandle}>
        <h2 className='text-base font-semibold leading-7 text-gray-900'>list of programmers</h2>
        <p className='mt-1 text-sm leading-6 text-gray-600'>
          These are the people who make the work that inspires me
        </p>

        <div>
          <label htmlFor='handle' className='block text-sm font-medium leading-6 text-gray-900'>
            GitHub Username
          </label>
          <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'>
            <input
              type='text'
              name='handle'
              id='handle'
              className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
              placeholder='papadavis47'
            />
          </div>
        </div>
        <button
          type='submit'
          className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-6'
        >
          Submit
        </button>
      </form>
      <div>
        <ul>
          {names?.map((name) => (
            <li key={name.id}>{name.handle}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
