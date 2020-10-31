/* eslint-disable no-unused-vars */
export const notEmpty = (tips: string) => {
  return (rule: any, value: string, callback: (params?: Error) => any) => {
    if (!value) return callback(new Error(`${tips} 不能为空 !`));
    setTimeout(() => {
      if (value) callback();
    }, 1000);
  }
}