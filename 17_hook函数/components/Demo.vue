<template>
    <h3>现在鼠标的坐标为 x: {{point.x}} y: {{point.y}} </h3>
</template>

<script>
import usepoint from '../hook/userpoint';
export default {
    name: 'Demo',
    setup(){
        let point = usepoint();
        return {
            point
        }
    }

}
</script>



