<template>
    <div class="app">
        <h1>我是App组件 </h1>
        <Suspense>
            <template v-slot:default>
                <Son/>
            </template>
            <template v-slot:fallback>
                <h3>Son组件正在加载中</h3>
            </template>
        </Suspense>
    </div>
    
</template>

<script>
// import Son from './components/Son.vue' //静态引入
import {defineAsyncComponent} from 'vue';
const Son = defineAsyncComponent(()=>import('./components/Son.vue')) //异步引入 不需要去等其他组件引入成功才解析模版 

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
