import Vue from 'vue'
import Router from 'vue-router'

import CarTable from 'src/views/table/carTable'
import Layout from 'src/views/layout'
// import complexTable from '@/views/table/complexTable'
// import siderbar from '@/views/layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '',
    component: Layout,
    children: [
      {path: 'carTable', name: '首页', component: CarTable}
    ]
  }, {
    path: '/carTable',
    name: '列表',
    component: Layout,
    children: [
      {path: 'carTable', name: '表1', component: CarTable},
      {path: 'complexTable1', name: '表2', component: CarTable},
      {path: 'complexTable2', name: '表3', component: CarTable}
    ]
  }
]
export default new Router({
  routes: constantRouterMap
})
