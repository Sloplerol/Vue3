<template>
    <div class="grandson">
        <h1>{{p1}} 车名{{car.name}} 车价格{{car.price}}</h1>
        
    </div>
</template>

<script>
import { inject } from '@vue/runtime-core';
export default {
  name: 'GrandSon',
  setup(){
    let p1 = 'hello world';
    let car = inject('car')
    
    return {
        p1,
        car
    }
  }
}
</script>
<style lang="css">
    .grandson {
        width: 200px;
        height: 150px;
        background-color: blueviolet;
    }
</style>

