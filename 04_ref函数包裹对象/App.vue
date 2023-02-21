<template>
    <h1>{{name}}</h1>
    <h1>{{age}}</h1>
    <h1>{{future.direction}}</h1>
    <h1>{{future.salary}}</h1>
    <button @click="change">点击修改姓名和年龄</button>
</template>

<script>
import {ref} from 'vue';
export default {
  name: 'App',
  setup(){
    let name = ref('zjj');
    let age = ref(29);
    let future = ref({
      direction: '前端搭建',
      salary: '1000000/1'
    })

    // ref函数返回的结果是一个引用对象
    function change(){
      // Vue3将数据劫持放到了原型身上 
      name.value = 'ljm';
      age.value = 30;
      // ref内部对象不在是通过ref引用对象来实现响应式 而是通过reactive函数封装Proxy对象
      future.value.direction = '后端服务';
      future.value.salary = '2000';
    }

    return {
      name,
      age,
      future,
      change
    }
  }
}
</script>

