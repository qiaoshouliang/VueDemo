<template>
  <el-breadcrumb separator="/">

    <el-breadcrumb-item v-for="item in levelList" :to="{path: item.path}" :key="item.path">{{item.name}}
    </el-breadcrumb-item>
    <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
  </el-breadcrumb>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    created() {
      this.getBreadcrumb()
    },
    data() {
      return {
        levelList: null
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
    methods: {
      getBreadcrumb() {
        this.levelList = this.$route.matched
      }
    }
  }
</script>

<style scoped>

</style>
