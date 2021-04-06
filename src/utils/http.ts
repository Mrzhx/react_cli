import qs from 'qs';
import axios from 'axios';

interface HttpParam {
  url: string;
  method?: "POST" | "GET";
  headers?: any;
  query?: any;
  params?: any;
  requestType?: "JSON" | "FormData";
}

interface IObjectKeys {
  [key: string]: string | Blob;
}

class HttpServe {
  constructor(init_config = {}) {
    this.config = {
      ...this.config,
      ...init_config
    };
  }

  config = {
    BASE_URL: 'https://cs.58zltc.com',
    headers: {},
    timeOut: 3000,
    requestType: "JSON"
  };

  dataOperation = {
    JSON: {
      headers: {
        'Content-Type': 'application/json', 
      },
      formatting(params: IObjectKeys) {
        return JSON.stringify(params)
      }
    },
    FormData: {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded' 
      },
      formatting(params: IObjectKeys) {
        let _formData = new FormData();
        Object.keys(params).forEach(key => {
          _formData.append(key, params[key]);
        })
        return _formData
      }
    }
  }

  private Ajax = axios.create({
    baseURL: this.config.BASE_URL,
    headers: this.config.headers,
    timeout: this.config.timeOut,
  });

  send(AjaxParam: HttpParam) {
    // 发送 ajax 请求
    const { BASE_URL } = this.config
    const { url, params, headers, method } = AjaxParam;
    return new Promise((resolve, reject) => {
      this.Ajax({ method, url: `${BASE_URL}/${url}`, data: params, headers }).then((res) => {
        resolve(res.data);
      }).catch((err) => {
        reject(err)
      })
    })
  }

  // 封装请求
  get(AjaxParam: HttpParam): Promise<any> {
    const { url, query, headers } = AjaxParam
    return this.send({ url: `${url}?${qs.stringify(query)}`, headers, method: 'GET' })
  }

  post(AjaxParam: HttpParam): Promise<any> {
    // const { requestType } = this.config
    const { url, params, headers } = AjaxParam
    return this.send({ 
      url,
      params: this.dataOperation.FormData.formatting(params),
      headers: {
        ...this.dataOperation.FormData.headers,
        ...headers
      }, 
      method: 'POST' 
    })
  }
}

export default new HttpServe();