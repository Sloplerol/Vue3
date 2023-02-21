<template>
    <div class="son">
        <h1>我是Son组件</h1>
        <GrandSon/>
    </div>
    
</template>

<script>
import GrandSon from './GrandSon.vue'
export default {
  name: 'Son',
  components: {GrandSon},
}
</script>
<style lang="css">
    .son {
        width: 400px;
        height: 300px;
        background-color: aquamarine;
    }
</style>




