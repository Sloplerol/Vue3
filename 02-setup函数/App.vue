<template>
    <h1>这个人的信息是{{name}}</h1>
    <h1>Vue2 way{{sex}}</h1>
    <button @click="getName">点击显示</button>
    <button @click="sayWelcome">点击欢迎</button>
    <!-- Vue2可以访问到Vue3的数据 -->
    <button @click="watchVue3">Vue2读取Vue3的数据</button>
    <!-- 但是Vue3不能访问Vue2的数据 -->
    <button @click="watchVue2">Vue3读取Vue2的数据</button>
</template>

<script>
import {h} from 'vue';
export default {
  name: 'App',
  data() {
    return {
      sex: '男'
    }
  },
  methods: {
    sayWelcome(){
      alert("welcome to study");
    },
    watchVue3(){
        console.log(this.name,this.age);
    }
  },

  setup(){
    let name = 'zjj';
    let age = 29;
    function getName(){
      console.log(`我叫${name}`);
    }

    function watchVue2(){
      console.log(name);
      console.log(age);
      console.log(sex);
    }
    // 1.返回结果为对象
    return {
      name,
      age,
      getName,
      watchVue2
    }
    // 2.返回结果为渲染函数
    // return ()=>h('h1','nihaoa')
  }
}
</script>

