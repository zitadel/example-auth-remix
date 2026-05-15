import { useSearchParams } from 'react-router';
import type { MetaFunction } from 'react-router';
import { getMessage } from '~/lib/message';

export const meta: MetaFunction = () => [
  { title: 'Sign In' },
];

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const error = searchParams.get('error');
  const callbackUrl = searchParams.get('callbackUrl');
  const { message } = getMessage(error, 'signin-error');

  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <div className="w-full max-w-md text-center">
        <h1 className="mb-4 text-4xl font-semibold text-gray-900">Sign in</h1>
        {error && (
          <p className="mb-6 text-red-600">{message}</p>
        )}
        {!error && (
          <p className="mb-6 text-gray-500">Continue to your account</p>
        )}
        <a
          href={`/api/auth/signin/zitadel${callbackUrl ? `?callbackUrl=${encodeURIComponent(callbackUrl)}` : ''}`}
          className="block w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Sign in with ZITADEL
        </a>
      </div>
    </main>
  );
}
