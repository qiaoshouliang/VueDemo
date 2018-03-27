<template>
  <div>
    <scroll-bar>
      <el-menu mode="vertical" class="el-menu-vertical-demo" router :default-active="$router.path" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
        <sidebar-item :routes="permission_routers"></sidebar-item>
      </el-menu>
    </scroll-bar>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import SidebarItem from './SidebarItem'
  import ScrollBar from 'src/components/ScrollBar'

  export default {
    name: 'Sidebar',
    components: {SidebarItem, ScrollBar},
    computed: {
      ...mapGetters(['permission_routers', 'test'])
    }
  }
</script>

<style scoped>

</style>
