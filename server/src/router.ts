import { initTRPC } from '@trpc/server';
import type { Context } from './context';
import { swipeSchema } from './schemas';

const t = initTRPC.context<Context>().create();

const publicProcedure = t.procedure;
const router = t.router;
export const createCallerFactory = t.createCallerFactory;

export const appRouter = router({
  swipe: publicProcedure.input(swipeSchema).mutation(async ({ input, ctx }) => {
    const document = ctx.firestore.doc('user/swipes');

    await document.set({
      propertyId: input.propertyId,
      status: input.status,
    });
  }),
});

export const createCaller = createCallerFactory(appRouter);
export type AppRouter = typeof appRouter;
