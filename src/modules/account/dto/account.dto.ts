import { ApiProperty } from 'uni-nest';

export class AccountDto {
  @ApiProperty({
    description: '用户名',
    example: 'admin'
  })
  username: string;

  @ApiProperty({
    description: '密码',
    example: 'admin'
  })
  password: string;

  @ApiProperty({
    description: '登录类型',
    example: 'account',
    enum: ['account', 'mobile']
  })
  type: 'account' | 'mobile';
}
