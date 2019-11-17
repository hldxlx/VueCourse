<template>
  <div>
    hello vue --{{title}}
    <ul>
      <li>111111</li>
    </ul>

    <button @click="handleClick()">click</button>

    <navbar>
      <button @click="isShow = !isShow">navbar定义的按钮click</button>
    </navbar>
    <sidebar v-show="isShow"></sidebar>

  </div>
</template>

<script>
// 用import导入 , export default  导出
// module.exports=test;   require("")
import Vue from 'vue'
import navbar from '@/components/navbar' // 只是一个普通对象， 必须要注册成组件
import sidebar from './components/sidebar' // 只是一个普通对象， 必须要注册成组件

Vue.component('sidebar', sidebar)// 注册成全局

export default {
  data () {
    return {
      title: '111111',
      isShow: false
    }
  },

  methods: {
    handleClick () {
      this.title = '22222222'
    }
  },

  components: {
    navbar // 注册成局部
  }
}
</script>

<style>

   *{
    margin: 0;
    padding: 0;
   }

   html,body{
    height: 100%;
   }
</style>
