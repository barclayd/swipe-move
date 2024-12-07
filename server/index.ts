import {publicProcedure, router} from './trpc';
import { createHTTPServer } from '@trpc/server/adapters/standalone';

const appRouter = router({
    swipeList: publicProcedure
        .query(async () => {
            return []
        }),
});

const server = createHTTPServer({
    router: appRouter,
});

server.listen(3000);

export type AppRouter = typeof appRouter;