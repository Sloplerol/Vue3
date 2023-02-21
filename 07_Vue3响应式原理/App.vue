<template>
    <h1>name: {{person.name}}</h1>
    <h1 v-show="person.age">age: {{person.age}}</h1>
    <h1 v-show="person.sex">sex: {{person.sex}}</h1>
    <h1>hobby: {{person.hobby}}</h1>
    <button @click="addSex">添加一个性别属性</button>
    <button @click="delAge">删除一个age属性</button>
    <button @click="changeHobby">改变自己的爱好</button>
</template>

<script>
import { reactive } from '@vue/reactivity'
// import {reactive, ref} from 'vue';
export default {
  name: 'App',
  setup(){
    let person = reactive({
        name: 'zjj',
        age: 20,
        hobby: ['吃饭','睡觉','打豆豆']
    })
    function addSex(){
        person.sex = '男'
    }
    function delAge(){
        delete person.age;
    }
    function changeHobby(){
        person.hobby[0] = '打球'
    }
    
    return {
        person,
        addSex,
        delAge,
        changeHobby
    }
  }
}
</script>

