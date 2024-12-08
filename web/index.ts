import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type {AppRouter} from '../server/src/router';

const client = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:8787/trpc',
        }),
    ],
})
