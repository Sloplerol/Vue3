<template>
    <button @click="isShow=true">点击弹窗</button>
    <teleport to='body'>
    <div class="mask" v-if="isShow">
        <div class="dialogue">
            <h4>我是弹窗</h4>
            <h4>我是弹窗</h4>
            <h4>我是弹窗</h4>
            <button @click="isShow=false">点击隐藏</button>
        </div>
    </div>
    </teleport>
</template>

<script>
import {ref} from 'vue';
export default {
    name: 'Dialogue',
    setup(){
        let isShow = ref(false);
        return {
            isShow
        }
    }
}
</script>

<style>
    .mask {
        position: absolute;
        top: 0;left: 0;right: 0;bottom: 0;
        background-color: rgba(0,0,0,0.5);
    }
    .dialogue {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
        width: 300px;
        height: 300px;
        background-color: pink;
    }
</style>