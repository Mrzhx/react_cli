import { RouteProps } from 'react-router-dom'
// import Home from '@view/home/index'
import IndexApp from '@view/indexApp/index'
import Person from '@view/person/index'
import Shop from '@view/store_shop/shop_view/index'


const config: RouteProps[] = [
  {
    path: '/',
    component: IndexApp
  },
  {
    path: '/person',
    component: Person
  },
  {
    path: '/shop',
    component: Shop
  },
];


export default config;