<template>
  <div class="menu-wrapper">
    <template v-for="item in routes">
      <el-menu-item v-if="item.children.length==1" :index="item.path +'/' +item.children[0].path">
        <svg-icon :icon-class="item.meta.icon"></svg-icon>
        <span>{{item.children[0].name}}</span>
      </el-menu-item>
      <el-submenu v-else :index="item.name" :key="item.name">
        <template slot="title">
          <!--<i class="iconfont icon-shenfenzheng"></i>-->
          <svg-icon :icon-class="item.meta.icon"></svg-icon>
          <span>测试</span>
        </template>
        <template v-for="child in item.children">
          <el-menu-item :index="item.path + '/' + child.path">
            <span>{{child.name}}</span>
          </el-menu-item>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'SidebarItem',
    props: {
      routes: {
        type: Array
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
