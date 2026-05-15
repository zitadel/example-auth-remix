import { redirect } from '@remix-run/node';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getSession } from '~/auth.server';
import type { Session } from '@auth/core/types';

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request);
  if (!session) {
    throw redirect('/api/auth/signin/zitadel?callbackUrl=/profile');
  }
  return { session };
}

export default function ProfilePage() {
  const { session } = useLoaderData<{ session: Session }>();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">
          Your Profile
        </h1>
        <div className="rounded-lg border border-gray-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Session Information
          </h2>
          <div className="rounded-lg bg-gray-900 p-6">
            <pre className="overflow-x-auto text-sm leading-relaxed text-green-400">
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>
        </div>
        <form method="post" action="/api/auth/signout" className="mt-6">
          <button
            type="submit"
            className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
          >
            Sign Out
          </button>
        </form>
      </div>
    </main>
  );
}
