<template>
    <div class="app">
        <h1>我是App组件 </h1>
        <Son/>
    </div>
    
</template>

<script>
import Son from './components/Son.vue'
export default {
  name: 'App',
  components: {Son},
  
  
}
</script>
<style lang="css">
    .app {
        width: 600px;
        height: 600px;
        background-color: aqua;
    }
</style>
