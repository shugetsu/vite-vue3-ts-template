<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import { RouterView } from 'vue-router'
  import { useHtmlTitle } from './hooks/web/useHtmlTitle'

  useHtmlTitle()
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
  #app {
    margin-top: 60px;
    color: #2c3e50;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
