import { prisma } from '@/utils/prisma';
export default function GitHubUserNameForm({ afterSave }) {
  async function addProgrammer(data) {
    'use server';
    const { handle, description, contacted } = Object.fromEntries(data);
    if (handle.length < 1 || description.length < 1) return;

    await prisma.programmer.create({
      data: {
        handle,
        description,
        contacted,
      },
    });
    await afterSave(data);
  }
  return (
    // @ts-expect-error
    <form action={addProgrammer}>
      <div>
        <label htmlFor='handle' className='block text-sm font-medium leading-6 text-gray-900'>
          Enter a GitHub Username
        </label>
        <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'>
          <input
            type='text'
            name='handle'
            id='handle'
            className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
            placeholder='username...'
          />
        </div>
      </div>
      <div className='col-span-full'>
        <div className='mt-2'>
          <label htmlFor='about' className='block text-sm font-medium leading-6 text-gray-900'>
            About
          </label>
          <textarea
            id='description'
            name='description'
            rows={3}
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
  );
}
