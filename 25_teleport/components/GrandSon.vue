<template>
    <div class="grandson">
        <h1>我是孙组件</h1>
        <Dialogue/>
    </div>
</template>

<script>
import Dialogue from './Dialogue.vue';
export default {
  name: 'GrandSon',
  components: {Dialogue}
}
</script>
<style lang="css">
    .grandson {
        width: 200px;
        height: 150px;
        background-color: blueviolet;
    }
</style>

