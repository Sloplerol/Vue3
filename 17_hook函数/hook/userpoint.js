import { reactive,onMounted,onBeforeMount } from "vue";
export default function() {
    let point = reactive({
        x: 0,
        y: 0
    })
    function checkpoint(e){
        point.x = e.pageX;
        point.y = e.pageY;
    }
    onMounted(()=>{
        window.addEventListener('click',checkpoint)
    })
    onBeforeMount(()=>{
        window.removeEventListener('click',checkpoint);
    })
    return point;
}