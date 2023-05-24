'use server';

import { prisma } from '@/utils/prisma';

export async function addHandle(data: FormData) {
  'use server';
  const handle = data.get('handle')?.valueOf();
  if (typeof handle !== 'string' || handle.length < 1) {
    throw new Error('invalid name');
  }

  await prisma.programmer.create({
    data: {
      handle,
    },
  });
}
