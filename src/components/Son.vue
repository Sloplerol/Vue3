<template>
    <div class="son">
        <h1>我是Son组件</h1>
        {{sum}}
    </div>
    
</template>

<script>
export default {
  name: 'Son',
  setup(){
    let sum = 10;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(sum)
        },1000)
    })
  }
}
</script>
<style lang="css">
    .son {
        width: 400px;
        height: 300px;
        background-color: aquamarine;
    }
</style>




