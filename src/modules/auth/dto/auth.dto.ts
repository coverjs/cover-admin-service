import { ApiProperty } from 'uni-nest';

export class AuthDto {
  @ApiProperty({
    title: '用户名'
  })
  username: string;

  @ApiProperty({
    title: '密码'
  })
  password: string;

  @ApiProperty({
    title: '是否自动登录'
  })
  autoLogin: boolean;

  @ApiProperty({
    title: '登录类型'
  })
  type: 'account' | 'mobile';
}

export class AuthVo {
  @ApiProperty({
    title: 'token'
  })
  token: string;
}
