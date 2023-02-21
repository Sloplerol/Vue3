<template>
    <h1>{{person.name}}</h1>
    <h1>{{person.age}}</h1>
    <h1>{{person.future.direction}}</h1>
    <h1>{{person.future.salary}}</h1>
    <h1>{{person.future.a.b.c.d}}</h1>
    <h1>{{person.arr}}</h1>
    <button @click="change">点击修改姓名和年龄</button>
    <button @click="arrchange">点击修改人的一生</button>
</template>

<script>
import {reactive, ref} from 'vue';
export default {
  name: 'App',
  setup(){
    let person = reactive({
      name : 'zjj',
      age : 29,
      future : {
      direction: '前端搭建',
      salary: '1000000/1',
      a: {
        b: {
          c: {
            d: 20
          }
        }
      }
    },
     arr : ['出生','成长','死亡']
    });
    // ref函数返回的结果是一个引用对象
    function change(){
      // reactive函数用来处理复杂数据类型
      // console.log(future); //返回结果是一个代理对象
      person.future.direction = '后端服务';
      person.future.salary = '22222';
      person.future.a.b.c.d = 30000

    }
    function arrchange(){
      // 在Vue2中可以直接修改数组内部的元素
      person.arr[0] = '死亡'
    }

    return {
      person,
      change,
      arrchange
    }
  }
}
</script>

