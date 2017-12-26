<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>

    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <input v-model="question">
      </p>
      <p>{{ answer }}</p>
    </div>

  </div>

</template>


<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
      }
    }
    // 如果 `question` 发生改变，这个函数就会运行
    // watch: {
    //   question: function (newQuestion) {
    //     this.answer = 'Waiting for you to stop typing...'
    //     this.getAnswer()
    //   }
    //
    // }
    // methods: {
    //   // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    //   // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    //   // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    //   // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    //   // 请参考：https://lodash.com/docs#debounce
    //   getAnswer: _.debounce(
    //     function () {
    //       if (this.question.indexOf('?') === -1) {
    //         this.answer = 'Questions usually contain a question mark. ;-)'
    //         return
    //       }
    //       this.answer = 'Thinking...'
    //       var vm = this
    //       axios.get('https://yesno.wtf/api')
    //         .then(function (response) {
    //           vm.answer = _.capitalize(response.data.answer)
    //         })
    //         .catch(function (error) {
    //           vm.answer = 'Error! Could not reach the API. ' + error
    //         })
    //     },
    //     // 这是我们为判定用户停止输入等待的毫秒数
    //     500
    //   )
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
