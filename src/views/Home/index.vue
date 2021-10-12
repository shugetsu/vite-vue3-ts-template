<script setup lang="ts">
  import HelloWorld from '/@/components/HelloWorld.vue'
  import { ImageResourceEnum } from '/@/datas/enums/ImageResourceEnum'
</script>

<template>
  <img class="inline-block" alt="Vue logo" :src="ImageResourceEnum.LOGO" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style lang="scss"></style>
