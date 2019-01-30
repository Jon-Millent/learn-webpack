import Router from './core/Router'


let myRouter = new Router([
  {
    path: '/',
    component: () => import('./views/home/index.js')
  },
  {
    path: '/news',
    component: () => import('./views/news/index.js')
  }
])


export default myRouter


