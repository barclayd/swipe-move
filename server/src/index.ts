import { Firestore } from '@google-cloud/firestore';
import { trpcServer } from '@hono/trpc-server';
import { Hono } from 'hono';
import { appRouter } from './router';
import { swipeSchema } from './schemas';

const app = new Hono();

const firestore = new Firestore({
  keyFilename: './service-account.json',
  projectId: 'swipemove',
});

app.post('/api/v1/swipe', async (c) => {
  const body = await c.req.json();

  const swipe = swipeSchema.safeParse(body);

  if (!swipe.success) {
    c.status(400);
    return c.json({
      error: swipe.error.message,
    });
  }

  const document = firestore.doc('user/swipes');

  await document.set({
    propertyId: swipe.data.propertyId,
    status: swipe.data.status,
  });

  return c.text('', 204);
});

app.use(
  '/trpc/*',
  trpcServer({
    router: appRouter,
  }),
);

export default app;
