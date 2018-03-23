import Vue from 'vue'
import Router from 'vue-router'

import CarTable from '@/views/table/carTable'
import Layout from '@/views/layout/'
// import complexTable from '@/views/table/complexTable'
// import siderbar from '@/views/layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'main',
    meta: {title: '首页'},
    component: Layout,
    children: [
      {path: 'carTable', name: '表1', component: CarTable},
      {path: 'complexTable1', name: '表2', component: CarTable},
      {path: 'complexTable2', name: '表3', component: CarTable}
    ]
  }
  // {
  //   path: '/carTable',
  //   name: 'carTable',
  //   meta: { title: '2' },
  //   component: CarTable
  // },
  // {
  //   path: '/complexTable',
  //   name: 'complexTable',
  //   meta: { title: '3' },
  //   component: complexTable
  // },
  // {
  //   path: '/',
  //   name: 'sider',
  //   meta: { title: '4' },
  //   component: siderbar
  // }
]
export default new Router({
  routes: constantRouterMap
})
