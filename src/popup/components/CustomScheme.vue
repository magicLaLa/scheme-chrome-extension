<template>
  <section class="custom-scheme">
    <el-form
      :model="ruleForm"
      :rules="rules"
      status-icon
      label-position="left"
      ref="ruleForm"
      label-width="100px"
    >
      <el-form-item label="protocol" prop="protocol">
        <el-input
          type="text"
          v-model="ruleForm.protocol"
          placeholder="小程序协议头"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="appId" prop="appId">
        <el-input
          type="text"
          v-model="ruleForm.appId"
          placeholder="小程序AppId"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="pagePath" prop="pagePath">
        <el-input
          type="text"
          v-model="ruleForm.pagePath"
          placeholder="pages/index/index?channel=xxxx&other=xxx"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="query" prop="query">
        <el-input
          type="text"
          v-model="ruleForm.query"
          autocomplete="off"
          placeholder="可为空"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-alert
      v-if="isAlert"
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
import { notEmpty } from '@/utils/validateors';
import { ElForm } from 'element-ui/types/form';

@Component({
  name: 'CustomScheme',
})
export default class CustomScheme extends Vue {
  private ruleForm: PopupSpace.RuleForm = {
    protocol: 'alipays://platformapi/startapp',
    appId: '',
    pagePath: '',
    query: '',
  };
  private rules: PopupSpace.Rules = {
    protocol: [
      {
        required: true,
        validator: notEmpty('protocol'),
        trigger: 'blur',
      },
    ],
    appId: [
      {
        required: true,
        validator: notEmpty('appId'),
        trigger: 'blur',
      },
    ],
    pagePath: [
      {
        required: true,
        validator: notEmpty('pagePath'),
        trigger: 'blur',
      },
    ],
  };
  private alertText: string = '';
  private isAlert: boolean = false;

  private resetForm(formName: string) {
    (this.$refs[formName] as ElForm).resetFields();
    this.isAlert = false;
  }
  private submitForm(formName: string) {
    (this.$refs[formName] as ElForm).validate((valid) => {
      if (valid) {
        const { appId, pagePath, query, protocol } = this.ruleForm;
        let scheme = `${protocol}?appId=${appId}&page=${encodeURIComponent(
          pagePath,
        )}`;
        if (query) {
          scheme += `&query=${encodeURIComponent(query)}`;
        }
        console.log('scheme', scheme);
        this.alertText = scheme;
        this.isAlert = true;
      } else {
        this.$message('请填写必填字段~');
        this.isAlert = false;
        return false;
      }
    });
  }
}
</script>

<style lang="scss">
.custom-scheme {
  padding-left: 20px;
}
</style>
