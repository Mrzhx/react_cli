
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
  // 解析地址栏参数
  param2Obj(url: string) {
    const search = url.split('?')[1]
    if (!search) {
      return {}
    }
    return JSON.parse(
      '{"' +
        decodeURIComponent(search)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"')
          .replace(/\+/g, ' ') +
        '"}'
    )
  }
  // 存储本地缓存
  initUserInfo = () => {
    try {
      const urlParam = this.param2Obj(window.location.href)
      const keysArr = Object.keys(urlParam)
      if (keysArr.length > 0) {
        keysArr.map((item) => {
          return localStorage.setItem(item, urlParam[item])
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default new Tools()

