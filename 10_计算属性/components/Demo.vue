<template>
    姓: <input type="text" v-model="person.firstName"><br>
    名: <input type="text" v-model="person.secondName"><br>
    <!-- 只考虑读 -->
    全名: {{person.fullName}} <br>
    <!-- 考虑修改计算出来的属性 -->
    全名: <input type="text" v-model='person.fullName'>
</template>

<script>
import {computed, reactive} from 'vue';
export default {
    name: 'Demo',
    // Vue2计算属性
    // computed: {
    //     fullName(){
    //         return this.person.firstName + this.person.secondName;
    //     }
    // },
    // Vue3 computed

    setup(){
    let person = reactive({
        firstName: '张',
        secondName: '三'
    })
    person.fullName = computed({
        get(){
            return person.firstName + '-' +  person.secondName;
        },
        set(value){
            const arr = value.split('-');
            person.firstName = arr[0];
            person.secondName = arr[1];
        }
    })
    
    return {
        person,
    }
  },

}
</script>

<style>

</style>