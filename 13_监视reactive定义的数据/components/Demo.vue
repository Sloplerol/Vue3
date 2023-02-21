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
    // reactive定义的监视属性newVal和oldVal一样 暂未解决
    let person = reactive({
        // reactive定义的对象嵌套监视的时候不需要开启深度监视
        name: 'zjj',
        age: 20,
        job: {
            guess: {
                salary: 200
            }
        }
    })
    // 就算你使用ref包裹对象本质上还是将它转化为了reactive函数 模版里自动为你添加了value 监视的时候监视的一定是代理对象
    // let personal = ref({
    //     name: 'asd',
    //     age: 30
    // })
    watch(person,(newVal,oldVal)=>{
        // 监视一个reactive对象是强制开启深度监视的 
        console.log('person属性被修改了',newVal,oldVal);
    },{immediate: true})


    // 当监视reactive所定义的某一个属性时  
    watch(()=>person.name,(newVal,oldVal)=>{
        console.log('person的name属性被修改了',newVal,oldVal);
    })

    // 当监视reactive定义的多个属性的时候
    watch([()=>person.name,()=>person.age],(newVal,oldVal)=>{
        console.log('person的name或者age属性被修改了',newVal,oldVal);
    })
    // 当监视reative定义的属性是一个对象的时候 可以开启深度监视 
    watch(()=>person.job,(newVal,oldVal)=>{
        console.log('person的job属性被修改了',newVal,oldVal);
    },{deep: true})

    return {
        person
    }
  },

}
</script>

