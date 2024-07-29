import { ApiProperty } from 'uni-nest';

export class CreateUserDto {
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
    description: '邮箱',
    example: 'admin@admin.com'
  })
  email?: string;

  @ApiProperty({
    description: '角色id',
    example: 1
  })
  roleId: number;

  @ApiProperty({
    description: '昵称',
    example: 'admin'
  })
  nickname: string;
}
