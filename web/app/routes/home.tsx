import { client } from 'index';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export async function loader() {
  console.log('loader', await client.properties.query());
  return {
    properties: await client.properties.query(),
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <h1>{loaderData.properties[0].id}</h1>;
}
