export const TOKEN_KEY = "X-FM-TOKEN";
export default class UserDao {
  // 保存用户token
  static saveUserToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  // 获取用户token
  static async getUserToken() {
    try {
      return await localStorage.getItem(TOKEN_KEY);
    } catch (e) {
      return "";
    }
  }

  static async clearUserToken() {
    try {
      await localStorage.setItem(TOKEN_KEY, "");
    } catch (e) {
      console.log(e);
    }
  }
}

