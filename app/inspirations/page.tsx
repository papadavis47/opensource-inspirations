import { prisma } from '@/utils/prisma';

function getProgrammers() {
  return prisma.programmer.findMany();
}

export default async function Inspirations() {
  const programmers = await getProgrammers();
  return (
    <>
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
    </>
  );
}
