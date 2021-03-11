import HttpServer from '@utils/http';

export const UserLogin = (data: any) => {
  return HttpServer.post({ url: 'xxxx', params: data })
}
