import { ApiProperty } from 'uni-nest';

export class CreateRoleDto {
  @ApiProperty({
    description: '角色名',
    example: 'admin',
    required: true
  })
  name: string;
}
