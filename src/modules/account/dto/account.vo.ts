import { ApiProperty } from 'uni-nest';

export class AccountLoginVo {
  @ApiProperty({ description: 'token' })
  token: string;
}
