import { Inter } from 'next/font/google';
import { prisma } from '@/utils/prisma';
import GitHubUserNameForm from './_components/GitHubUserNameForm';
import { revalidatePath } from 'next/cache';

const inter = Inter({ subsets: ['latin'] });

function getProgrammers() {
  return prisma.programmer.findMany();
}

export default async function Home() {
  const programmers = await getProgrammers();
  return (
    <main className='flex flex-col max-w-5xl min-h-screen p-24'>
      <div className='py-4'>
        <h1 className='w-full font-mono text-sm '>opensource inspirations</h1>
      </div>
      <div>
        <GitHubUserNameForm
          afterSave={async () => {
            'use server';
            revalidatePath('/');
          }}
        />
      </div>
      <h2 className='text-base font-semibold leading-7 text-gray-900'>list of programmers</h2>
      <p className='mt-1 text-sm leading-6 text-gray-600'>
        These are the people who make the work that inspires me
      </p>
      <div>
        <ul>
          {programmers?.map((programmer) => (
            <li key={programmer.id}>
              <p>{programmer.handle}</p>
              <p>{programmer.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
