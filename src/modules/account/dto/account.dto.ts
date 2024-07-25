import { ApiProperty } from 'uni-nest';

export class CurrentUserDto {
  @ApiProperty({
    description: '用户id',
    example: 1
  })
  id: number;

  @ApiProperty({
    description: '用户名',
    example: 'admin'
  })
  username: string;
}

export class AccountLoginDto {
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
