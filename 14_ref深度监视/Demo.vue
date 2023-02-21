<template>
    <button @click="person.name+='~'">点击修改人的姓名</button>
    <button @click="person.age++">点击修改人的年龄</button>
    <button @click="person.job.guess.salary++">涨薪</button>
    <h1>姓名: {{person.name}}</h1>
    <h1>年龄: {{person.age}}</h1>
    <h1>薪资: {{person.job.guess.salary}}</h1>
    
</template>

<script>
import {computed, reactive,ref, watch} from 'vue';
export default {
    name: 'Demo',
    setup(){
    let person = ref({
        name: 'zjj',
        age: 20,
        job: {
            guess: {
                salary: 200
            }
        }
    })
    watch(person.value,(newVal,oldVal)=>{
        console.log('person里的值被修改了');
    })
    

    return {
        person
    }
  },

}
</script>

