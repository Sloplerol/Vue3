<template>
    <button @click="sum++">点击sum++</button>
    <h1>sum: {{sum}}</h1>
    
    
</template>

<script>
import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue';
export default {
    name: 'Demo',
    setup(){
    console.log('setup');
    let sum = ref(0);
    onBeforeMount(()=>{
        console.log('onBeforeMount');
    }),
    onMounted(()=>{
        console.log('onMounted');
    }),
    onBeforeUpdate(()=>{
        console.log('onBeforeUpdate');
    }),
    onUpdated(()=>{
        console.log('onUpdated');
    }),
    onBeforeUnmount(()=>{
        console.log('onBeforeUnmount');
    }),
    onUnmounted(()=>{
        console.log('onUnmounted');
    })
    
    return {
        sum
    }
    },
    //#region
    //通过配置项的形式书写生命周期钩子
    // beforeCreate(){
    //     console.log('beforeCreate');
    // },
    // created(){
    //     console.log('created');
    // },
    // beforeMount(){
    //     console.log('beforeMount');
    // },
    // mounted(){
    //     console.log('mounted');
    // },
    // beforeUpdate(){
    //     console.log('beforeUpdate');
    // },
    // updated(){
    //     console.log('updated');
    // },
    // beforeUnmount(){
    //     console.log('beforeUnmount');
    // },
    // unmounted(){
    //     console.log('unmounted');
    // }
    //#endregion

}
</script>



