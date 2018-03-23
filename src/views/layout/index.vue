<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <el-row :gutter="1">
        <el-col :span="1">
          <div class="grid-content bg-purple">
            <hamburger>
              
            </hamburger>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar/Sidebar'
  import AppMain from './components/AppMain'
  import SvgIcon from '../../components/SvgIcon'
  import Hamburger from '../../components/Hamburger/'

  export default {
    components: {
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

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
