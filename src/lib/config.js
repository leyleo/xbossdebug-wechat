import utils from './utils';

class Config {
  constructor(options) {
    this.config = {
      version: '1.0.0',
      setSystemInfo: false,
      setLocation: false,
      key: '',
      mergeReport: true, // mergeReport 是否合并上报， false 关闭， true 启动（默认）
      delay: 1000, // 当 mergeReport 为 true 可用，延迟多少毫秒，合并缓冲区中的上报（默认）
      url: '', // 指定错误上报地址
      except: [
        /^Script error\.?/,
        /^Javascript error: Script error\.? on line 0/,
      ], // 忽略某个错误
      random: 1, // 抽样上报，1~0 之间数值，1为100%上报（默认 1）
      repeat: 5, // 重复上报次数(对于同一个错误超过多少次不上报)
      pageWhiteList: ['onLoad', 'onShow', 'onReady'], // 页面方法白名单
      getCustomData: null, // 回调方法，用来获取出问题时的一些自定义数据信息
      pageData: false, // 是否记录 pageData，false 不记录（默认），true 记录
    };
    this.config = utils.assignObject(this.config, options);
  }

  get(name) {
    return this.config[name];
  }

  set(name, value) {
    this.config[name] = value;
    return this.config[name];
  }
}

export default Config;
