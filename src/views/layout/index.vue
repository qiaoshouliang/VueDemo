<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
    <navbar class="main-container"></navbar>
    <div style="height: 1px; width: 100%;background: #b7c1cb; margin-bottom: 4px"></div>
    <tags-view class="main-container"></tags-view>
    <app-main class="main-container"></app-main>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar/Sidebar'
  import AppMain from './components/AppMain'
  import SvgIcon from 'src/components/SvgIcon'
  import Hamburger from 'src/components/Hamburger'
  import Breadcrumb from 'src/components/Breadcrumb'
  import Navbar from './components/Navbar'
  import TagsView from './components/TagsView'
  import TabsView from './components/TabsView'

  export default {
    components: {
      TagsView,
      TabsView,
      Navbar,
      Breadcrumb,
      Hamburger,
      SvgIcon,
      Sidebar,
      AppMain
    }
  }
</script>
<style type="text/scss">
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }

</style>
