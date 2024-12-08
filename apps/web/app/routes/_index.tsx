import { client } from 'index';
import type { Route } from './+types/_index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export async function loader() {
  return {
    properties: await client.properties.query(),
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <h1 className="font-sans text-2xl">{loaderData.properties[0].id}</h1>;
}
