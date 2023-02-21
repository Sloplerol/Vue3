<template>
    <button @click="name+='~'">点击修改姓名</button>
    <button @click="age++">点击修改年龄</button>
    <button @click="page.last.ending++">点击薪资增加</button>
    <button @click="x.y++">点击x++</button>
    <button @click="changeSex">点击查看真实性别</button>
    <button @click="changeHobby">修改自己的爱好</button>
    <!-- <h1>{{person}}</h1> -->
    <h1>我的姓名是:{{name}}</h1>
    <h1>我的年龄是:{{age}}</h1>
    <h1>薪资{{page.last.ending}}</h1>
    <h1>x: {{x.y}}</h1>
    <h1>{{sex}}</h1>
    <h1>{{hobby.other}}</h1>
    
</template>

<script>
import { reactive,toRef,ref,toRefs, shallowRef, shallowReactive } from '@vue/reactivity'

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
        let person1 = shallowReactive({
            sex: '男',
            hobby: {
                other: 'gan'
            }
        })
        //shallowRef只能处理基本数据类型
        let x = shallowRef({
            y: 2
        });
        console.log(x); //打印出来的value值不是Proxy对象而是最普通的对象
        function changeSex(){
            person1.sex = '女';
            
        }
        function changeHobby(){
            person1.hobby.other = '干架'
        }


        return {
            x,
            ...toRefs(person1),
            ...toRefs(person),
            changeSex,
            changeHobby
        }
    }

}
</script>



