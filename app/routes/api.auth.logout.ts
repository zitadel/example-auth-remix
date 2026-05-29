import type { ActionFunctionArgs } from 'react-router';
import { buildLogoutUrl, getSession } from '~/auth.server';

// noinspection JSUnusedGlobalSymbols
export async function action({ request }: ActionFunctionArgs) {
  const session = await getSession(request);

  if (!session?.idToken) {
    return new Response(
      JSON.stringify({ error: 'No valid session or ID token found' }),
      { status: 400 },
    );
  }

  const { url, state } = await buildLogoutUrl(session.idToken);
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  const headers = new Headers({ Location: url });
  headers.append(
    'Set-Cookie',
    `logout_state=${state}; HttpOnly; SameSite=Lax; Path=/api/auth/logout/callback${secure}`,
  );
  return new Response(null, { status: 302, headers });
}
