declare namespace PopupSpace {
  interface RuleForm {
    appId: string;
    pagePath: string;
    query: string;
  }
  interface Validateor {
    required?: boolean;
    validator: (rule: any, value: string, callback: (params?: Error | undefined) => any) => void;
    trigger: string;
  }
  interface Rules {
    appId: Validateor[],
    pagePath:  Validateor[],
    query?:  Validateor[],
  }
}