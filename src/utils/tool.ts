export const protocolHead = /[\w\W]+(?=\?appId)/gi;
export const protocolBody = /(?<=startapp\?)[\w\W]+/gi;
export const appIdReg = /(?<=appId=)[\w]+/gi;
export const afterPage = /(?<=page=)[\w\W]+/gi;
export const pageReg = /(?<=page=)[\w\W]+(?=&query)/gi;
export const pageReg2 = /(?<=page=)[\w\W]+(?=&query)?/gi;
export const queryReg = /(?<=query=)[\w\W]+/gi;

export const calcMatchData = (data: RegExpMatchArray | null) => {
  if (!!data) return data[0];
  return null;
}

export const getProtocolHead = (val: string) => calcMatchData(val.match(protocolHead));
export const getProtocolBody = (val: string) => calcMatchData(val.match(protocolBody));
export const getAppId = (val: string) => calcMatchData(val.match(appIdReg));
export const getAfterPage =  (val: string) => calcMatchData(val.match(afterPage));
export const getPageParams = (val: string) => {
  if (val.includes('&query=')) {
    return  calcMatchData(val.match(pageReg))
  } else {
    return  calcMatchData(val.match(pageReg2));
  }
};
export const getQuery = (val: string) => calcMatchData(val.match(queryReg));