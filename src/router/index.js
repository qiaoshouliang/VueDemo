import Vue from 'vue'
import Router from 'vue-router'

import CarTable from 'src/views/table/carTable'
import Layout from 'src/views/layout'
import Table1 from 'src/views/table/table1'
import Table2 from 'src/views/table/table2'
import Table3 from 'src/views/table/table3'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '',
    redirect: 'carTable',
    component: Layout,
    meta: {icon: 'home'},
    children: [
      {
        path: 'carTable',
        name: '首页',
        component: CarTable
      }
    ]
  }, {
    path: '/table',
    name: '列表',
    component: Layout,
    meta: {icon: 'table'},
    children: [
      {path: 'table1', name: '表1', component: Table1},
      {path: 'table2', name: '表2', component: Table2},
      {path: 'table3', name: '表3', component: Table3}
    ]
  }
]
export default new Router({
  routes: constantRouterMap
})
