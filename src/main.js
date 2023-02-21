// 引入createApp工厂函数
import { createApp } from 'vue'
import App from './App.vue'


// 创建的app相当于是vm 不过它身上挂载的属性和方法少了很多
const app = createApp(App)
// mount是用来挂载App到页面上的
// console.log(app);
app.mount('#app');

// app.unmount卸载App
// setTimeout(() => {
//     app.unmount('#app');
// }, 1000);

// const vm = new Vue({
//     el: '#root',
//     render: h => h(app)
// })