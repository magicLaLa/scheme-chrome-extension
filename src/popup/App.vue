<template>
  <div id="app">
    <CollapseTemp />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CollapseTemp from '@/popup/components/CollapseTemp.vue';

@Component({
  name: 'Popup',
  components: {
    CollapseTemp,
  },
})
export default class Popup extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 500px;
}
</style>
