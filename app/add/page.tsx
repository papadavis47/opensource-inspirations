import { redirect } from 'next/navigation';
import GitHubUserNameForm from '../_components/GitHubUserNameForm';
export default function Add() {
  return (
    <>
      <h1>add to list here</h1>
      <div>
        <GitHubUserNameForm
          afterSave={async () => {
            'use server';
            redirect('/inspirations');
          }}
        />
      </div>
    </>
  );
}
