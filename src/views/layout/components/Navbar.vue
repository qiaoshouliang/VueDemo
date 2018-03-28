<template>
  <div>
    <el-row :gutter="1">
      <el-col :span="1">
        <div class="grid-content">
          <hamburger></hamburger>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content">
          <breadcrumb></breadcrumb>
        </div>
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

  </div>
</template>

<script>
  import Hamburger from 'src/components/Hamburger'
  import Breadcrumb from 'src/components/Breadcrumb'

  export default {
    name: 'navbar',
    components: {
      Breadcrumb,
      Hamburger
    }
  }
</script>

<style type="text/scss">
  .el-row {
    margin-bottom: 5px;
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
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
