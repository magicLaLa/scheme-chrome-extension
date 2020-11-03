<template>
  <section class="analysis-scheme">
    <el-input
      :value="input"
      @input="onInput"
      placeholder="请输入scheme"
      clearable
      @clear="onClear"
    ></el-input>
    <section class="btn-box">
      <el-button
        type="primary"
        @click.native="parsing"
        :disabled="!input.length"
        >解析</el-button
      >
      <el-tooltip
        effect="dark"
        content="query参数转移到page后面"
        placement="right-end"
      >
        <el-button
          type="primary"
          :disabled="!input.length"
          @click.native="onTransfer"
          >query <i class="el-icon-right"></i> page</el-button
        >
      </el-tooltip>
    </section>
    <el-card v-show="isShowCard" class="card-box">
      <template v-for="(item, name, idx) in cardObj">
        <div class="detail-box" :key="idx">
          <div>{{ name }}:</div>
          <div>{{ item }}</div>
        </div>
      </template>
    </el-card>
    <el-alert
      v-show="isAlert"
      :closable="false"
      :center="false"
      type="success"
      effect="dark"
    >
      <div class="description">{{ alertText }}</div>
    </el-alert>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  getProtocolHead,
  getPageParams,
  getQuery,
  getAppId,
} from '@/utils/tool';

@Component({
  name: 'CustomScheme',
})
export default class CustomScheme extends Vue {
  private input: string = '';
  private isShowCard: boolean = false;
  private cardObj: { [key: string]: string } = {};
  private alertText: string = '';
  private isAlert: boolean = false;

  private onInput(params: string) {
    this.input = decodeURIComponent(params);
  }
  private onClear() {
    this.isShowCard = false;
    this.isAlert = false;
  }

  private getSplicingParams() {
    return {
      protocol: getProtocolHead(this.input) || '',
      appid: getAppId(this.input) || '',
      query: getQuery(this.input) || '',
      page: getPageParams(this.input) || '',
    };
  }

  private parsing() {
    const { appid, query, page, protocol } = this.getSplicingParams();
    this.cardObj = {
      protocol,
      appid,
      query,
      page,
    };
    this.isShowCard = true;
  }

  private onTransfer() {
    const { appid, query, page, protocol } = this.getSplicingParams();

    let beforePage = `${protocol}?appId=${appid}&page=`;
    let afterPage = `${page}`;
    if (page.includes('?')) {
      afterPage += (query && `&${query}`) || '';
    } else {
      afterPage += (query && `?${query}`) || '';
    }
    this.alertText = beforePage + `${encodeURIComponent(afterPage)}`;
    this.isAlert = true;
  }
}
</script>

<style lang="scss">
.analysis-scheme {
  padding-left: 20px;
}
.btn-box {
  display: flex;
  padding: 20px 0;
}
.card-box {
  margin-bottom: 20px;
}
.detail-box {
  display: flex;
  justify-content: flex-start;
  div:first-child {
    margin-right: 20px;
    font-weight: 500;
  }
}
</style>
