import { ApiProperty } from '@nestjs/swagger';

export class AccountLoginVo {
  @ApiProperty({ description: '登录成功后返回token' })
  token: string;
}
