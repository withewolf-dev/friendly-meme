import { asyncComponentLoader } from 'utils';

const routes = [
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/Welcome')),
    path: '/',
  },
  
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/Politics')),
    path: '/politics',
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/Page3')),
    path: '/page3',
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/Editorial')),
    path: '/editorial',
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/Cinema')),
    path: '/cinema',
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/Music')),
    path: '/music',
  },
  {
    component: asyncComponentLoader(_ => import('components/NotFound')),
  },
];

export default routes;
