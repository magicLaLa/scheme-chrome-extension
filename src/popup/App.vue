<template>
  <el-container id="app">
    <el-header height="25px">
      <div class="header">小程序 scheme <i class="el-icon-set-up"></i></div>
    </el-header>
    <el-main>
      <CollapseTemp />
    </el-main>
  </el-container>
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
html,
body {
  margin: 0;
  padding: 0;
}
</style>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 500px;
}
.header {
  font-weight: 600;
  color: #409eff;
  line-height: 50px;
}
</style>
