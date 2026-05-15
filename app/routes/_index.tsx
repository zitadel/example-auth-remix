import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
  return [
    { title: 'PKCE Authentication Demo - Remix' },
    { name: 'description', content: 'Auth.js PKCE demo with ZITADEL and Remix' },
  ];
};

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-4xl font-bold text-gray-900">
          PKCE Authentication Demo
        </h1>
        <p className="mb-8 text-xl text-gray-600">
          This application demonstrates a PKCE authentication flow with
          ZITADEL, powered by Auth.js and Remix.
        </p>
        <Link
          to="/api/auth/signin/zitadel"
          className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white hover:bg-blue-700"
        >
          Sign in with ZITADEL
        </Link>
      </div>
    </main>
  );
}
