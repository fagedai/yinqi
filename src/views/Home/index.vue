<script>
import Nav from '@/views/Nav/index.vue'
import Floor from '@/views/Floor/index.vue'
import About_body from '@/views/About/index.vue'
import Banner from './components/Banner.vue'

export default {
    components: { Nav, Floor, About_body, Banner }
}

</script>

<template>
    <Nav />
    <Banner></Banner>
    <About_body></About_body>
    <Floor></Floor>
</template>