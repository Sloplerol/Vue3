<template>
    <h1>{{name}}</h1>
    <h1>{{age}}</h1>
    <button @click="change">点击修改姓名和年龄</button>
</template>

<script>
import {ref} from 'vue';
export default {
  name: 'App',
  setup(){
    let name = ref('zjj');
    let age = ref(29);
    // ref函数返回的结果是一个引用对象
    function change(){
      // Vue3将数据劫持放到了原型身上 
      name.value = 'ljm';
      age.value = 30
    }

    return {
      name,
      age,
      change
    }
  }
}
</script>

