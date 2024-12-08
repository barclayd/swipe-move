import { Firestore } from '@google-cloud/firestore';
import type { Context as HonoContext } from 'hono';
import { setCookie } from 'hono/cookie';
import type { BlankEnv, BlankInput } from 'hono/types';

const firestore = new Firestore({
  keyFilename: './service-account.json',
  projectId: 'swipemove',
});

export async function createContext(
  c?: HonoContext<BlankEnv, '/trpc/*', BlankInput>,
) {
  return {
    c,
    setUserIdCookie: (userId: string) => {
      if (c === undefined) {
        return;
      }
      setCookie(c, 'userId', userId, {});
    },
    firestore,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
