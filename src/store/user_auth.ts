import { observable, action } from 'mobx';
import Tools from '@utils/tools';

class UserAuth {
  @observable user_info = {}


  @action getUserToken = async() => {
    try {
      const sys_env = Tools.getSystemPayEnv();
      console.log(sys_env)
      // 判断环境
      // 判断是否注册
      // 获取用户 token
    } catch (error) {
      console.log(error)
    }
  }

  @action signOutUser = async() => {
    try {
      console.log('xx退出登录xx')
    } catch (error) {
      console.log(error)
    }
  }
}

export default new UserAuth()
