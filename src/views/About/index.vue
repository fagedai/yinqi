<script>
import Nav from '@/views/Nav/index.vue'
import Floor from '@/views/Floor/index.vue'
import Content from './components/content.vue'

export default {
    components: { Nav, Floor, Content }
}
</script>

<template>
    <Nav></Nav>
    <Content></Content>
    <Floor></Floor>
</template>