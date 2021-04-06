import HttpServer from '@utils/http';

export const getUserInfoByToken = (token: string) => {
  return HttpServer.post({ url: '/shop/user.index/info', params: { token }})
}
