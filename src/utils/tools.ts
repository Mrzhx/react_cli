
type PayEnv = 'wx' | 'ali' | 'h5';

class Tools {
  // 是否是微信环境
  isWeixin(): boolean {
    const ua: any = navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) === "micromessenger";
  }
  // 支付环境判断
  getSystemPayEnv(): PayEnv {
    var payEnv: PayEnv;
    if (/MicroMessenger/.test(window.navigator.userAgent)) {
      payEnv = 'wx';
    } else if (/AlipayClient/.test(window.navigator.userAgent)) {
      payEnv = 'ali';
    } else {
      payEnv = 'h5';
    }
    return payEnv;
  }
}

export default new Tools()

