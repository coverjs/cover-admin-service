import { ApiProperty } from 'uni-nest';

export class SetPermissionsDto {
  @ApiProperty({
    description: '角色id',
    required: true
  })
  roleId: number

  @ApiProperty({
    description: '权限ids',
    required: true
  })
  permissionIds: number[]
}
