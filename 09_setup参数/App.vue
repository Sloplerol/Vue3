<template>
    <Demo @reflName="showName" msg="dsb" school="Zhicheng">
        <span>Hello a</span>
        <!-- Vue3不兼容原来slot的写法了 -->
        <template v-slot:hello>
            <span>asdasd</span>
        </template>
    </Demo>
</template>

<script>
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  components: {Demo},
  setup(){
    function showName(value){
        alert(`Hello everybody,${value}`);
    }
    return {
        showName
    }
  }
}
</script>

