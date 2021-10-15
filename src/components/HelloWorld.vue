<script setup lang="ts">
  import { ref } from 'vue'
  import { LanguageOptions } from '../datas/options/LanguageOptions'
  import { useLocale } from '../hooks/web/useLocale'

  defineProps<{ msg: string }>()

  const count = ref(0)
  const { changeLocale } = useLocale()
</script>

<template>
  <h1>{{ msg }}</h1>
  <p class="flex gap-x-2 justify-center">
    <button
      v-for="item in LanguageOptions"
      class="bg-emerald-500 hover:bg-emerald-700 text-white px-2"
      :key="item.value"
      @click="changeLocale(item.value)"
    >
      {{ item.label }}
    </button>
  </p>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    padding: 2px 4px;
    color: #304455;
    background-color: #eee;
    border-radius: 4px;
  }
</style>
