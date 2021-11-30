/** 基于fetch封装的网络请求工具类 **/
import UserDao from "../dao/UserDao";

export const BASE_URL = "https://localhost:8080";

/**
 * GET 请求时，拼接请求URL
 * @param url 请求URL
 * @returns {*}
 */
const handleUrl = (url: string): any => (params: Record<string, any>) => {
  if (params) {
    let paramsArray: Array<string> = [];
    Object.keys(params).forEach(key => {
      if (params[key] != null || params[key] != undefined) {
        paramsArray.push(key + "=" + encodeURIComponent(params[key]));
      }
    });
    if (url.search(/\?/) === -1) {
      typeof (params) === "object" ? url += "?" + paramsArray.join("&") : url;
    } else {
      url += "&" + paramsArray.join("&");
    }
  }
  return url;
};

/**
 * fetch 网络请求超时处理
 * @param original_fetch 原始的fetch
 * @param timeout 超时时间 10s
 * @returns {Promise.<*>}
 */
const timeoutFetch = (original_fetch: Promise<Response>, timeout = 12000) => {
  let timeoutBlock = () => {
  };
  let timeout_promise = new Promise((resolve, reject) => {
    timeoutBlock = () => {
      // 请求超时处理
      reject("请求超时，请稍后重试");
    };
  });

  // Promise.race(iterable)方法返回一个promise
  // 这个promise在iterable中的任意一个promise被解决或拒绝后，立刻以相同的解决值被解决或以相同的拒绝原因被拒绝。
  let abortable_promise = Promise.race([
    original_fetch,
    timeout_promise
  ]);

  setTimeout(() => {
      timeoutBlock();
    },
    timeout);

  return abortable_promise;
};

// 请求接口数据
export interface IResponseData<T = any> {
  /**
   * 状态码
   * @type { number }
   */
  code: number,

  /**
   * 消息
   * @type { string }
   */
  msg: string,

  /**
   * 数据
   * @type { T }
   */
  data: T
}

type HeadersInit = Headers | string[][] | Record<string, string>

export default class HttpUtils {

  /**
   * fetch 网络请求的header，可自定义header 内容
   * @type {{Accept: string, Content-Type: string, X-FM-SHOOTING-TOKEN: *}}
   */
  static header: HeadersInit = {
    "Content-Type": "application/json"
  };

  static returnResponseJson = (response: Response, reject: (reason?: any) => void) => {
    if (response) {
      return response.json();
    } else {
      reject("服务器繁忙，请稍后重试");
    }
  };

  static handleResponse = (url: string, params: Record<string, any>, response: IResponseData, resolve: (value?: IResponseData | PromiseLike<IResponseData>) => void, reject: (reason?: any) => void) => {
    // response.code：是与服务器端约定code：1表示请求成功，非1表示请求失败，msg：请求失败内容
    if (response && response.code === 1) {
      // 设置token
      if (response && response.data && response.data.token) {
        HttpUtils.header = {
          "Content-Type": "application/json",
          "X-FM-Token": response.data.token
        };
        UserDao.saveUserToken(response.data.token);
      }
      resolve(response);
    } else if (response && response.code === 3 && response.msg && response.msg.includes("没有权限") && url !== "/security/logout") {
      /*Alert.alert(
        "提示",
        "登陆过期，请重新登陆 :)",
        [
          {
            text: "确定", onPress: async () => {
              await UserDao.clearUserToken();
              HttpUtils.header = {
                "Content-Type": "application/json"
              };
              //NavigationUtils.reset("Login");
            }
          }
        ],
        { cancelable: false }
      );*/
      reject(response.data && response.data.errors ? response.data.errors.join(",") : response.msg);
    } else if (response && [7, 8].includes(response.code) && url !== "/security/logout") {
      /*Alert.alert(
        "提示",
        response.code === 7 ? "登陆失效，请重新登陆！" : "当前账号在其他地方登陆，请重新登陆！",
        [
          {
            text: "确定", onPress: async () => {
              await UserDao.clearUserToken();
              HttpUtils.header = {
                "Content-Type": "application/json"
              };
              //NavigationUtils.reset("Login");
            }
          }
        ],
        { cancelable: false }
      );*/
      reject(response.code === 7 ? "登陆失效，请重新登陆！" : "当前账号在其他地方登陆，请重新登陆！");
    } else {
      reject(response.data && response.data.errors ? response.data.errors.join(",") : response.msg);
    }
    console.log(url, " params: ", params, " ---> ", response ? JSON.stringify(response).slice(0, 500) : "没返回数据");

  };

  /**
   * 基于fetch 封装的GET 网络请求
   * @param url 请求URL
   * @param params 请求参数
   * @returns {Promise}
   */
  static getRequest = <T>(url: string, params = {}): Promise<IResponseData<T>> => {
    return new Promise((resolve, reject) => {
      timeoutFetch(fetch(handleUrl(BASE_URL + url)(params), {
        credentials: "include",
        method: "GET",
        headers: HttpUtils.header
      }))
        .then((response) => {
          return HttpUtils.returnResponseJson(<Response>response, reject);
        })
        .then((response) => {
          // @ts-ignore
          HttpUtils.handleResponse(url, params, response, resolve, reject);
        })
        .catch((error) => {
          reject("服务器繁忙，请稍后重试");
          console.log("getRequest error ", error);
        });
    });
  };

  static deleteRequest = <T>(url: string, params = {}): Promise<IResponseData<T>> => {
    return new Promise((resolve, reject) => {
      timeoutFetch(fetch(handleUrl(BASE_URL + url)(params), {
        credentials: "include",
        method: "DELETE",
        headers: HttpUtils.header
      }))
        .then((response) => {
          return HttpUtils.returnResponseJson(<Response>response, reject);
        })
        .then((response) => {
          // @ts-ignore
          HttpUtils.handleResponse(url, params, response, resolve, reject);
        })
        .catch((error) => {
          reject("服务器繁忙，请稍后重试");
          console.log("deleteRequest error ", error);
        });
    });
  };

  /**
   * 基于fetch 的 POST 请求
   * @param url 请求的URL
   * @param params 请求参数
   * @returns {Promise}
   */
  static postRequest = <T>(url: string, params = {}): Promise<IResponseData<T>> => {
    return new Promise((resolve, reject) => {
      timeoutFetch(fetch(BASE_URL + url, {
        credentials: "include",
        method: "POST",
        headers: HttpUtils.header,
        body: JSON.stringify(params)
      }))
        .then(response => {
          return HttpUtils.returnResponseJson(<Response>response, reject);
        })
        .then(response => {
          // @ts-ignore
          HttpUtils.handleResponse(url, params, response, resolve, reject);
        })
        .catch((error) => {
          reject("服务器繁忙，请稍后重试");
          console.log("postRequest error ", error);
        });
    });
  };
}
