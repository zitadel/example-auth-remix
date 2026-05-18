import type { LoaderFunctionArgs } from 'react-router';
import { getSession } from '~/auth.server';

// noinspection JSUnusedGlobalSymbols
export async function loader({
  request,
}: LoaderFunctionArgs): Promise<Response> {
  const session = await getSession(request);

  if (!session?.accessToken) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
    });
  }

  try {
    const response = await fetch(
      `${process.env.ZITADEL_DOMAIN}/oidc/v1/userinfo`,
      { headers: { Authorization: `Bearer ${session.accessToken}` } },
    );
    if (!response.ok) {
      throw new Error(`UserInfo API error: ${response.status}`);
    }
    const userInfo = await response.json();
    return new Response(JSON.stringify(userInfo));
  } catch (error) {
    console.error('UserInfo fetch failed:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch user info' }),
      { status: 500 },
    );
  }
}
