import { matchPath } from 'react-router-dom';
import HomePage from '../pages';
import BlogPage from '../pages/blog';
import ToolsPage from '../pages/tools';
import PostDEAK from '../pages/blog/det-er-alltid-krig';
import ExplanationToolPage from '../pages/tools/ExplanationTool';
import {
  PostMSF,
  PostLH,
  PostGU,
  PostTNL,
  PostJVIAS,
  PostF,
} from '@/data/blog';

export interface CustomRoute {
  path: string;
  title: string;
  element: JSX.Element;
}

export const defaultRoutes: CustomRoute[] = [
  // PAGES

  {
    path: '/',
    title: 'HomePage',
    element: <HomePage />,
  },
  {
    path: '/blog',
    title: 'Blogg',
    element: <BlogPage />,
  },

  {
    path: '/tools',
    title: 'Verktøy',
    element: <ToolsPage />,
  },

  // TOOLS
  {
    path: '/tools/forklaring',
    title: 'Forklaringer',
    element: <ExplanationToolPage />,
  },

  // POSTS
  {
    path: 'blog/min-storste-forbrytelse',
    title: 'MSF',
    element: <PostMSF />,
  },

  {
    path: 'blog/lykke-hierarkiet',
    title: 'lykkehierarkiet',
    element: <PostLH />,
  },
  {
    path: 'blog/det-er-alltid-krig',
    title: 'deteralltidkrig',
    element: <PostDEAK />,
  },
  {
    path: 'blog/gaming-utveien',
    title: 'gamingutveien',
    element: <PostGU />,
  },
  {
    path: 'blog/tre-nyttige-loyner',
    title: 'trenyttigeloyner',
    element: <PostTNL />,
  },
  {
    path: 'blog/hvordan-overtale-hvem-som-helst',
    title: 'hvordanovertalehvemsomhelst',
    element: <PostHOHSH />,
  },
  {
    path: 'blog/jeg-var-ikke-alltid-slik',
    title: 'jegvarikkealltidslik',
    element: <PostJVIAS />,
  },
  {
    path: 'blog/fremtiden',
    title: 'fremtiden',
    element: <PostF />,
  },
  {
    path: 'blog/gode-forklaringer',
    title: 'godeforklaringer',
    element: <PostForklaringer />,
  },
];

export const currentRoute = () => {
  return defaultRoutes.find((route) =>
    matchPath(window.location.pathname, route.path)
  );
};
