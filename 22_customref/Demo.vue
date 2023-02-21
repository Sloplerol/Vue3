<template>
    <h1>{{keyWord}}</h1>
    <input type="text" v-model="keyWord">
    
</template>

<script>
import { reactive,toRef,ref,toRefs, shallowRef, shallowReactive, readonly, shallowReadonly, toRaw, markRaw,customRef } from '@vue/reactivity'

export default {
    name: 'Demo',
    setup(){
        
        function myRef(value){
            let timer;
            return customRef((track,trigger)=>{
                return {
                    get(){
                        console.log(`我的值被读取了为${value}`);
                        track() //通知Vue去追踪修改过后的数据
                        return value
                    },
                    set(newvalue){
                        clearTimeout(timer);
                        console.log(`我的value值被修改成${newvalue}`);
                        value = newvalue;
                        timer = setTimeout(()=>{
                            trigger(); //通知Vue去重新解析模版 
                        },1000)
                    }
                }
            })
        }

        let keyWord = myRef('hello world');
        
        return {
            keyWord
            
        }
    }

}
</script>



