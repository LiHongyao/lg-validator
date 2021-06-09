/*
 * @Author: Li-HONGYAO
 * @Date: 2020-11-28 03:43:56
 * @LastEditors: Li-HONGYAO
 * @LastEditTime: 2021-06-09 11:56:06
 * @Description:
 */
class Validator {
  /**
   * 中文名校验
   * @param val
   */
  public static username(val: string) {
    return /^[\u4e00-\u9fa5]{2,6}$/.test(val);
  }
  /**
   * 身份证校验
   * @param val
   */
  public static idCard(val: string) {
    return /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{7}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/.test(
      val,
    );
  }
  /**
   * 验证微信号
   * 1. 可使用6-20个字母、数字、下划线和减号；
   * 2. 必须以字母开头（字母不区分大小写）；
   * 3. 不支持设置中文；
   * @param val
   */
  public static weChatId(val: string) {
    return /^[a-zA-Z][a-zA-Z\d_-]{5,19}$/.test(val);
  }
  /**
   * 验证QQ号
   * @param val
   */
  public static qq(val: string) {
    return /^\d{5,15}$/.test(val);
  }
  /**
   * 验证邮箱
   * @param val
   */
  public static email(val: string) {
    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(val);
  }
  /**
   * 验证手机号
   * @param val
   */
  public static tel(val: string) {
    return /^1[3-9]\d{9}$/.test(val);
  }
  /**
   * 验证手机验证码
   * @param val
   */
  public static code(val: string) {
    return /^\d{6}$/.test(val);
  }
  /**
   * 验证Android环境
   */
  public static android() {
    return /Linux|Android/i.test(window.navigator.userAgent);
  }
  /**
   * 验证iOS环境
   */
  public static ios() {
    return /iPhone/i.test(window.navigator.userAgent);
  }
  /**
   * 验证微信环境
   */
  public static weixin() {
    return /MicroMessenger/i.test(window.navigator.userAgent);
  }
  /**
   * 验证是否是刘海屏
   */
  public static bangScreen() {
    return window && window.screen.height >= 812 && window.devicePixelRatio >= 2;
  }
}

export default Validator;
