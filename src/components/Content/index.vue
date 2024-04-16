<script setup>
import Banner from './components/Banner.vue'
import About from '../About/index.vue'
import Service from '../Service/index.vue'
import Model_Library from '../Model_Library/index.vue'
import Pricing from '../Pricing/index.vue'
import Skills from '../Pages/Skills/index.vue'
import TeamMembers from '../Pages/TeamMembers/index.vue'
import Table from '@/components/Compare/index.vue'
import Partake from '@/components/Partake/index.vue'

</script>

<template>
    <Banner></Banner>
    <About></About>
    <Partake></Partake>
    <Model_Library></Model_Library>
    <Table></Table>
    <Pricing></Pricing>
    <TeamMembers></TeamMembers>
</template>