<template>
    <div class="app">
        <h1>我是App组件 i have a car {{name}}</h1>
        <Son/>
    </div>
    
</template>

<script>
import { toRef, reactive,toRefs } from '@vue/reactivity'
import Son from './components/Son.vue'
import { provide } from '@vue/runtime-core'
export default {
  name: 'App',
  components: {Son},
  setup(){
    let car = reactive({
        name: 'benchi',
        price: 200000
    })
    provide('car',car);
    return {
        ...toRefs(car)
    }
  }
}
</script>
<style lang="css">
    .app {
        width: 600px;
        height: 600px;
        background-color: aqua;
    }
</style>
