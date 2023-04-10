import supabase from '@/utils/supabase';

export default async function Programmers() {
  const { data } = await supabase.from('programmers').select();
  return (
    <div>
      {data!.map((programmer) => (
        <p key={programmer.id}>{programmer.gh_name}</p>
      ))}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
