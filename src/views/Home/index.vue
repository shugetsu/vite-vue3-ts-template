<script setup lang="ts">
  import HelloWorld from '/@/components/HelloWorld.vue'
  import { ImageResource } from '/@/datas/resources/ImageResource'
  import { useI18n } from '/@/hooks/web/useI18n'

  const { t } = useI18n()
</script>

<template>
  <img class="inline-block" alt="Vue logo" :src="ImageResource.LOGO" />
  <HelloWorld :msg="t('helloWord')" />
</template>

<style lang="scss"></style>
