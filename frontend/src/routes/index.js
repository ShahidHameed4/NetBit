import { lazy } from 'react'



const Page404 = lazy(() => import('../pages/404'))

const ActorAdd = lazy(() => import('../pages/Actor/ActorAdd'))
const ActorTable = lazy(() => import('../pages/Actor/ActorTable'))

const VideoAdd = lazy(() => import('../pages/Videos/VideoAdd'))
const VideoTable = lazy(() => import('../pages/Videos/VideoTable'))
const routes = [
  
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
    path: '/404',
    component: Page404,
  },
  
]

export default routes
