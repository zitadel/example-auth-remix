import { useSearchParams } from '@remix-run/react';
import type { MetaFunction } from '@remix-run/node';
import { getMessage } from '~/lib/message';

export const meta: MetaFunction = () => [
  { title: 'Authentication Error' },
];

export default function ErrorPage() {
  const [searchParams] = useSearchParams();
  const error = searchParams.get('error');
  const { heading, message } = getMessage(error, 'auth-error');

  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <div className="w-full max-w-md text-center">
        <h1 className="mb-4 text-4xl font-semibold text-gray-900">{heading}</h1>
        <p className="mb-6 text-gray-600">{message}</p>
        <a
          href="/"
          className="inline-block rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Go Home
        </a>
      </div>
    </main>
  );
}
