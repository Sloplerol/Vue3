<template>
    <h1>name: {{person.name}}</h1>
    <h1>age: {{person.age}}</h1>
    <button @click="emitName">点击</button>
</template>

<script>
import {reactive} from 'vue';
export default {
    name: 'Demo',
    // beforeCreate(){
    //     console.log('--beforeCreate--');
    // },
    // emits配置项告知绑定了什么自定义事件
    emits: ['reflName'],
    props: ['msg','school'],
    // setup创建的比beforeCreated还早 且里面的this是undefined
    setup(props,context){
    let person = reactive({
        name: 'zjj',
        age: 20
    })
    // props参数打印的是接收到的数据
    console.log(props);

    console.log('--setup--',context);
    // context.attrs用来接收未接收到的数据
    console.log(this); 

    function emitName(){
        context.emit('reflName',5555); //触发自定义事件
    }
    console.log(context.slots);
    return {
        person,
        emitName
    }
  },

}
</script>

<style>

</style>