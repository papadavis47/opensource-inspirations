import { prisma } from '@/utils/prisma';
import Image from 'next/image';

export default async function SingleProgrammer({ params }: { params: { handle: string } }) {
  console.log({ params });
  const ghUser = await prisma.programmer.findUnique({
    where: { handle: params.handle },
  });

  const data = await fetch(`https://api.github.com/users/${params.handle}`).then((res) =>
    res.json()
  );

  return (
    <div>
      <h1>{ghUser.handle}</h1>
      <h2>{ghUser.description}</h2>
      <Image src={data.avatar_url} width={200} height={200} alt='avatar' />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
