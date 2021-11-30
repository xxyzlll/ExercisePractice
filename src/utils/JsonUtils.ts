class JsonUtils {
  /*
   * 字符转换为JSON
   * */
  static strToJson(data: string) {
    return JSON.parse(data);
  }

  /*
   * JSON转换为字符
   * */
  static jsonToStr(data: any) {
    return JSON.stringify(data);
  }
}

export default JsonUtils;
