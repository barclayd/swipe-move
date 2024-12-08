import { expect, test } from 'bun:test';
import type { inferProcedureInput } from '@trpc/server';
import { createContext } from './context';
import { type AppRouter, createCaller } from './router';
import { swipeSchema } from './schemas';

test('swipe saves data to database', async () => {
  const ctx = await createContext();
  const caller = createCaller(ctx);

  const input: inferProcedureInput<AppRouter['swipe']> = {
    propertyId: 21314,
    status: 'like',
  };

  await caller.swipe(input);

  const document = await ctx.firestore.doc('user/swipes').get();

  const result = swipeSchema.safeParse(document.data());

  expect(result.data?.status).toBe('like');
  expect(result.data?.propertyId).toBe(21314);
});
