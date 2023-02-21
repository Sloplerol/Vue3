<template>
    <button @click="name+='~'">点击修改姓名</button>
    <button @click="age++">点击修改年龄</button>
    <button @click="page.last.ending++">点击薪资增加</button>
    <button @click="sum++">点我sum++</button>
    <button @click="changeRaw">点击变成最原始的数据</button>
    <button @click="addCar">点击添加车辆</button>
    <button @click="carPrice">点击抬高车的价格</button>
    <!-- <h1>{{person}}</h1> -->
    <h1>我的姓名是:{{name}}</h1>
    <h1>我的年龄是:{{age}}</h1>
    <h1>薪资{{page.last.ending}}</h1>
    <h1>sum: {{sum}}</h1>
    <!-- person.car返回结果为undefined不展示 -->
    <h1>car: {{person.car}}</h1>
</template>

<script>
import { reactive,toRef,ref,toRefs, shallowRef, shallowReactive, readonly, shallowReadonly, toRaw, markRaw } from '@vue/reactivity'

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
            },
            // 第一种解决person数据内无car属性
            // car: {}
        })
        
        let sum = ref(0);
        function changeRaw(){
            // let p = toRaw(person);
            // console.log(p); //p是原始对象类型
            // toRaw对ref实现响应式无效
            const s = toRaw(sum);
            console.log(s);
        }
        function addCar(){
            // 后添加的数据为响应式的
            let car = {name: 'Lanb',price: 122133}
            // person.car = car;
            person.car = markRaw(car);
            //对后添加的响应式数据进行还原
        }
        function carPrice(){
            person.car.price++
        }
        return {
            sum,
            // 第二种解决person内无car属性
            person,
            // 由于setup函数只调用一次因此person对象只展开一次
            ...toRefs(person),
            changeRaw,
            addCar,
            carPrice
            
        }
    }

}
</script>



