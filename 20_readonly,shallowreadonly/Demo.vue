<template>
    <button @click="name+='~'">点击修改姓名</button>
    <button @click="age++">点击修改年龄</button>
    <button @click="page.last.ending++">点击薪资增加</button>
    <button @click="sum++">点我sum++</button>
    <!-- <h1>{{person}}</h1> -->
    <h1>我的姓名是:{{name}}</h1>
    <h1>我的年龄是:{{age}}</h1>
    <h1>薪资{{page.last.ending}}</h1>
    <h1>sum: {{sum}}</h1>
</template>

<script>
import { reactive,toRef,ref,toRefs, shallowRef, shallowReactive, readonly, shallowReadonly } from '@vue/reactivity'

export default {
    name: 'Demo',
    setup(){
        let person = reactive({
            name: 'zjj',
            age: 20,
            page: {
                last: {
                    ending: 22
                }
            }
        })
        // person = readonly(person); //person内部数据不允许修改
        person = shallowReadonly(person); //只有数据的第一层不允许修改
        let sum = ref(0);


        return {
            sum,
            ...toRefs(person),
            
        }
    }

}
</script>



