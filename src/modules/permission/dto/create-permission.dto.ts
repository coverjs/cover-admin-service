import { ApiProperty } from 'uni-nest';

export class CreatePermissionDto {
  @ApiProperty({
    description: '权限名',
    required: true
  })
  name: string;

  @ApiProperty({
    description: '描述',
  })
  des: string;
}
