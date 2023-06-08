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
import BlogPostF from '@/pages/blog/fremtiden';
import BlogPostGU from '@/pages/blog/gaming-utveien';
import BlogPostHOHSH from '@/pages/blog/hvordan-overtale-hvem-som-helst';
import BlogPostJVIAS from '@/pages/blog/jeg-var-ikke-alltid-slik';
import BlogPostLH from '@/pages/blog/lykke-hierarkiet';
import BlogPostMSF from '@/pages/blog/min-storste-forbrytelse';
import BlogPostTNL from '@/pages/blog/tre-nyttige-loyner';
import BlogPostDEAK from '../pages/blog/det-er-alltid-krig';

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
    element: <BlogPostMSF />,
  },

  {
    path: 'blog/lykke-hierarkiet',
    title: 'lykkehierarkiet',
    element: <BlogPostLH />,
  },
  {
    path: 'blog/det-er-alltid-krig',
    title: 'deteralltidkrig',
    element: <BlogPostDEAK />,
  },
  {
    path: 'blog/gaming-utveien',
    title: 'gamingutveien',
    element: <BlogPostGU />,
  },
  {
    path: 'blog/tre-nyttige-loyner',
    title: 'trenyttigeloyner',
    element: <BlogPostTNL />,
  },
  {
    path: 'blog/hvordan-overtale-hvem-som-helst',
    title: 'hvordanovertalehvemsomhelst',
    element: <BlogPostHOHSH />,
  },
  {
    path: 'blog/jeg-var-ikke-alltid-slik',
    title: 'jegvarikkealltidslik',
    element: <BlogPostJVIAS />,
  },
  {
    path: 'blog/fremtiden',
    title: 'fremtiden',
    element: <BlogPostF />,
  },
  {
    path: 'blog/gode-forklaringer',
    title: 'godeforklaringer',
    element: <BlogPostF />,
  },
];

export const currentRoute = () => {
  return defaultRoutes.find((route) =>
    matchPath(window.location.pathname, route.path)
  );
};
