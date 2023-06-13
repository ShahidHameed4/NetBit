/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
 
  {
    icon: 'FormsIcon',
    name: 'Actors',
    routes: [
      // submenu
      {
        path: '/app/ActorAdd',
        name: 'Add Actor',
      },
      {
        path: '/app/ActorsAll',
        name: 'Manage Actors',
      },
      
      
    ],
  },
  {
    icon: 'ModalsIcon',
    name: 'Videos',
    routes: [
      // submenu
      {
        path: '/app/VideoAdd',
        name: 'Add Video',
      },
      {
        path: '/app/VideosAll',
        name: 'Manage Videos',
      },
      
      
    ],
  },


]

export default routes
