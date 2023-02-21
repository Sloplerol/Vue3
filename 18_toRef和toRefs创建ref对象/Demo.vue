<template>
    <button @click="name+='~'">点击修改姓名</button>
    <button @click="age++">点击修改年龄</button>
    <button @click="page.last.ending++">点击薪资增加</button>
    <!-- <h1>{{person}}</h1> -->
    <h1>我的姓名是:{{name}}</h1>
    <h1>我的年龄是:{{age}}</h1>
    <h1>薪资{{page.last.ending}}</h1>
</template>

<script>
import { reactive,toRef,ref,toRefs } from '@vue/reactivity'

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

        const rname = toRef(person,'name');
        console.log(rname);
        // rname打印结果是一个引用对象 在原型身上配置了响应式
        
        const rname1 = toRefs(person);
        console.log(rname1);
        // 将person下的所有属性都转化为引用对象


        return {
            // 如果返回结果是person.name 实则返回时的结果是一份拷贝过来的固定数据 不会影响到person本身
            // 如果使用ref方法去包裹person里的属性 返回结果虽然也是引用对象 但是实则外部修改是修改的是ref函数新生成的数据
            // person,
            // name: ref(person.name),
            // age: ref(person.age),
            // hobby: ref(person.page.last.ending)
            // toRef是对原数据进行修改
            // name: toRef(person,'name'),
            // age: toRef(person,'age'),
            // hobby: toRef(person.page.last,'ending')

            //用toRefs对对象进行超展开
            ...toRefs(person)
        }
    }

}
</script>



