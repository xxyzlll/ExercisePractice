/**
 * 判断是否是手机号
 * @param phone
 * @return boolean 是就返回true
 */
export function checkPhone(phone: string): boolean {
  return /^1[3456789]\d{9}$/.test(phone);
}
