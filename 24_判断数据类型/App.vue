<template>
    <h1>Hello</h1>
</template>

<script>
import { ref,reactive, readonly,isRef,isProxy,isReactive,isReadonly,isShallow } from '@vue/reactivity';
export default {
    name: 'App',
    setup(){
        let name = ref('dsb');
        let person = reactive({name: 'ljm',age: 20});
        let p = readonly(person);
        console.log(isRef(name));
        console.log(isProxy(person));
        console.log(isReactive(person));
        console.log(isReadonly(p));
        console.log(isProxy(p));
    }
}
</script>

<style>

</style>
