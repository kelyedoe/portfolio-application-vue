<script setup>  
    import Login from './components/login.vue'
    import Home from './components/pages/home.vue'
    import Presentation from './components/pages/presentation.vue'
    import Statistics from './components/pages/statistics.vue'
    import Projects from './components/pages/projects.vue'
    import router from './router'
</script>

<template>
    <Home/>
    <Presentation/>
    <Statistics/>
    <Projects/>
</template>

<style scoped>
</style>
