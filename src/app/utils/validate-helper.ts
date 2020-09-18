export class ValidateHelper {
  /**
   * 校验是否为有效手机号码
   * @param tel 电话号码
   * @returns boolean
   */
  public static IsTelephone(tel: string): boolean {
    if (!(/^1[34578]\d{9}$/.test(tel))) {
      tel = '';
      return false;
    } else {
      return true;
    }
  }

  /**
   * 校验是否为有效年龄
   * @param age 年龄
   * @returns boolean
   */
  public isNumber(age: any): boolean {
    // this.ageStatus = ;
    if (isNaN(age) === true) {
      age = '';
      return false;
    } else {
      return true;
    }
  }
}

export const validateHelper = new ValidateHelper();
