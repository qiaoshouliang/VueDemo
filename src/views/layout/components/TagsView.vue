<template>
  <div class="tags-view">
    <el-tag style="margin-right: 4px"
            v-for="tag in tags" :key="tag.name"
            :type="tag.type" closable @close="close(tag)">
      <router-link :to="tag.path" class="router-link">
        {{tag.name}}
      </router-link>
    </el-tag>

  </div>
</template>

<script>
  export default {
    name: 'tags-view',
    created() {
      console.log('created')
      // 在新创建界面时，先把当前的路由地址加到类表中
      const tag = {name: this.$route.name, path: this.$route.path, type: ''}
      this.tags.push(tag)
    },
    data() {
      return {
        tags: []
      }
    },
    methods: {
      close(tag) {
        console.log(tag)
        if (this.tags.length === 1) { // 只剩一个标签
          this.$router.push('/carTable')
        } else { // 有多个标签
          if (tag.type === 'success') { // 是默认选中的情况
            const index = this.tags.indexOf(tag)
            if (index === 0) {
              this.tags[index + 1].type = 'success'
              this.$router.push(this.tags[index + 1].path)
            } else {
              this.tags[index - 1].type = 'success'
              this.$router.push(this.tags[index - 1].path)
            }
          }
        }
        this.tags.removeByValue(tag)
      }
    },
    watch: {
      $route() {
        this.tags.forEach(function (item) {
          item.type = ''
        })
        const tag = {name: this.$route.name, path: this.$route.path, type: 'success'}
        let isDuplicate = false
        this.tags.forEach(function (item) {
          if (item.name === tag.name) {
            item.type = 'success'
            isDuplicate = true
          }
        })
        if (!isDuplicate) {
          this.tags.push(tag)
        }
      }
    }
  }
</script>

<style scoped>
  .tags-view {
    background: white;

  }

  .router-link {
    text-decoration: none;
  }

  .router-link-active {
    color: #fcf6ff;
    font-weight: bold;
    font-size: 12px;
  }
  .el-tag--success {
    background-color: rgb(27, 182, 48);
    border-color: rgba(84, 255, 4, 0.47);
    color: #070a08;
  }
</style>
