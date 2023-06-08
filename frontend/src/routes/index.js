import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Forms = lazy(() => import('../pages/Forms'))
const Cards = lazy(() => import('../pages/Cards'))
const Charts = lazy(() => import('../pages/Charts'))
const Buttons = lazy(() => import('../pages/Buttons'))
const Modals = lazy(() => import('../pages/Modals'))
const Tables = lazy(() => import('../pages/Tables'))
const Page404 = lazy(() => import('../pages/404'))
const Blank = lazy(() => import('../pages/Blank'))

const ActorAdd = lazy(() => import('../pages/Actor/ActorAdd'))
const ActorTable = lazy(() => import('../pages/Actor/ActorTable'))

const VideoAdd = lazy(() => import('../pages/Videos/VideoAdd'))
const VideoTable = lazy(() => import('../pages/Videos/VideoTable'))
const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/forms',
    component: Forms,
  },
  {
    path: '/ActorAdd',
    component: ActorAdd,
  },
  {
    path: '/ActorsAll',
    component: ActorTable,
  },
  
  {
    path: '/VideoAdd',
    component: VideoAdd,
  },
  {
    path: '/VideosAll',
    component: VideoTable,
  },

  {
    path: '/cards',
    component: Cards,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/buttons',
    component: Buttons,
  },
  {
    path: '/modals',
    component: Modals,
  },
  {
    path: '/tables',
    component: Tables,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
