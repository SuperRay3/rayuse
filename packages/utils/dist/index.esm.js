/**
 * 程序暂停运行
 * @param ms 暂停运行的时间（毫秒）
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export { sleep };
