/**
 * 程序暂停运行
 * @param ms 暂停运行的时间（毫秒）
 */
 export const sleep = (ms: number):Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))
