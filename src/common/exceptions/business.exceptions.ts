import { UniBusinessException } from 'uni-nest';
import { ADMIN_ERROR_CODE } from './business.error.code';

// 定义业务异常
export class BusinessException extends UniBusinessException {
  static throwUsernameOrPasswordIncorrect(): void {
    throw new BusinessException(ADMIN_ERROR_CODE.USERNAME_OR_PASSWORD_INCORRECT);
  }
  // 通用业务错误
  static throwCommonIncorrect(msg?: string): void {
    throw new BusinessException(!msg ? ADMIN_ERROR_CODE.COMMON_BUSINESS_ERROR : { ...ADMIN_ERROR_CODE.COMMON_BUSINESS_ERROR, msg });
  }
}
