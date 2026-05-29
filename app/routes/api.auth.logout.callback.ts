import { redirect } from 'react-router';
import type { LoaderFunctionArgs } from 'react-router';

// noinspection JSUnusedGlobalSymbols
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const state = url.searchParams.get('state');
  const cookieHeader = request.headers.get('Cookie') ?? '';
  const cookies = Object.fromEntries(
    cookieHeader
      .split(';')
      .filter(Boolean)
      .map((c) => {
        const [k, ...v] = c.trim().split('=');
        return [k.trim(), v.join('=')];
      }),
  );
  const logoutStateCookie = cookies['logout_state'];

  if (state && logoutStateCookie && state === logoutStateCookie) {
    const headers = new Headers({ Location: '/logout/success' });
    headers.append('Clear-Site-Data', '"cookies"');
    headers.append(
      'Set-Cookie',
      'logout_state=; Max-Age=0; HttpOnly; SameSite=Lax; Path=/api/auth/logout/callback',
    );
    for (const name of Object.keys(cookies)) {
      if (name.includes('authjs.')) {
        headers.append('Set-Cookie', `${name}=; Max-Age=0; Path=/`);
      }
    }
    return new Response(null, { status: 302, headers });
  } else {
    const errorUrl = new URL('/logout/error', url);
    errorUrl.searchParams.set('reason', 'Invalid or missing state parameter.');
    return redirect(errorUrl.toString());
  }
}
