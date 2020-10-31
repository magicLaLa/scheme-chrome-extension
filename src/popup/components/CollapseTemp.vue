<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item title="自定义scheme" name="1">
      <CustomScheme />
    </el-collapse-item>
    <el-collapse-item title="解析scheme" name="2"> </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CustomScheme from './CustomScheme.vue';

@Component({
  name: 'CollapseTemp',
  components: {
    CustomScheme,
  },
})
export default class CollapseTemp extends Vue {
  private activeName: string = '1';
}
</script>

<style lang="scss">
</style>
