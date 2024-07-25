import { UniBusinessException } from 'uni-nest';
import { ADMIN_ERROR_CODE } from './business.error.code';

// 定义业务异常
export class BusinessException extends UniBusinessException {
  static throwUsernameOrPasswordIncorrect(): void {
    throw new BusinessException(ADMIN_ERROR_CODE.USERNAME_OR_PASSWORD_INCORRECT);
  }
}
