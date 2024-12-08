import { reactRouter } from '@react-router/dev/vite';
import autoprefixer from 'autoprefixer';
import { reactRouterDevTools } from 'react-router-devtools';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    babel({
      include: ['./app/**/*'],
      filter: (name) => name.endsWith('tsx'),
      babelConfig: {
        presets: ['@babel/preset-typescript'],
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    reactRouterDevTools(),
    reactRouter(),
    tsconfigPaths(),
  ],
});
