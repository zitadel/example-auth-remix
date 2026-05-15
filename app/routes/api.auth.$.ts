import { handlers } from '~/auth.server';

export const loader = ({ request }: { request: Request }) =>
  handlers.GET({ request });

export const action = ({ request }: { request: Request }) =>
  handlers.POST({ request });
