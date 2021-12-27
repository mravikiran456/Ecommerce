import Header from '../layouts/Header'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
const routes = [
  {
    path: '/',
    component: Header,
    children: [
      { path: '/Home', component: Home },
      { path: '/Product', component: Product },
      { path: '/Cart', component: Cart },
      
    ]
  },
  {
    path: '/Login',
    component: () => import('pages/Login.vue')
  }
]

export default routes
