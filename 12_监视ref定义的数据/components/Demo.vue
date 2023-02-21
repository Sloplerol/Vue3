<template>
    <div>n: {{sum}}</div>
    <button @click="sum++">点击n++</button>
    <div>{{msg}}</div>
    <button @click="msg+='!'">点击添加感叹号</button>
</template>

<script>
import {computed, reactive,ref, watch} from 'vue';
export default {
    name: 'Demo',
    // Vue2监听
    // watch: {
    //     sum(){
    //         console.log('sum被修改了');
    //     }
    // },
    setup(){
    
    let sum = ref(0);
    let msg = ref('hello')
    // Vue3监听
    // 监视单个数据 监视数据第三个参数是监视配置项
    // watch(sum,(newVal,oldVal)=>{
    //     console.log('sum数据被修改了',newVal,oldVal);
    // })
    // 监视多个数据 newVal或者是oldVal的值都是以数组的形式进行存储 
    watch([sum,msg],(newVal,oldVal)=>{
        console.log('sum或者是msg的值被修改了',newVal,oldVal);
    },{immediate: true})
    return {
        sum,
        msg
    }
  },

}
</script>

