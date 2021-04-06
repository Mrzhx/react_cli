import { observable, action } from "mobx";
import { getUserInfoByToken } from "@api/user";
import Tools from "@utils/tools";

const user_token = localStorage.getItem("user_token");

class UserAuth {
  @observable user_info = {};

  // 判断登录是否过期
  @action isLoginStatus = async (env: string) => {
    try {
      if (user_token) {
        switch (env) {
          case "h5":
            // 获取用户信息 && 判断token是否过期
            const result = await getUserInfoByToken(user_token);
            if (result.code === 200) {
              return (this.user_info = result.data);
            } else if (result.code === 0) {
              return false;
            }
            break;
           case 'wx':
            // 获取地址栏参数
            const obj = Tools.param2Obj(window.location.href);
            console.log(obj)
            break;
        }
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  };

  @action initUserLogin = async () => {
    try {
      const sys_env = Tools.getSystemPayEnv();
      return await this.isLoginStatus(sys_env);
    } catch (error) {
      console.log(error);
    }
  };

  @action signOutUser = async () => {
    try {
      this.user_info = {};
      console.log("xx退出登录xx");
    } catch (error) {
      console.log(error);
    }
  };
}

export default new UserAuth();
