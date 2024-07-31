import { ApiProperty } from 'uni-nest';

export class CreateRoleDto {
  @ApiProperty({
    description: '角色名',
    example: 'admin',
    required: true
  })
  name: string;

  @ApiProperty({
    description: '角色描述',
    example: '管理员权限',
    required: false
  })
  description?: string;
}
