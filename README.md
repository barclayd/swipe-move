# Swipe Move

*_Your dream property is only a swipe away 💫_*

### Getting started

```sh
git clone git@github.com:barclayd/swipe-move.git
cd swipe-move
bun install
bun dev
```

This will spin up:

web: `localhost:5173`
server: `localhost:3000`

### Architecture

* `turborepo` => monorepo manager:
  * web => `react-router@v7`, `React 19 + compiler`
  * server => `hono`+ `trpc`, connecting to a firestore nosql db
* `bun` => runtime/workspace manager
* `biomejs` => lint