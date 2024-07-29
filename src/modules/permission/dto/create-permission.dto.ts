import { ApiProperty } from 'uni-nest';
import { PermissionType } from '@prisma/client';

export class CreatePermissionDto {
  @ApiProperty({
    description: '父节点'
  })
  parentId: number;
  @ApiProperty({
    description: '权限名',
    required: true
  })
  name: string;

  @ApiProperty({
    description: '排序'
  })
  order: number;

  @ApiProperty({
    description: '菜单图标'
  })
  icon: string;

  @ApiProperty({
    description: '组件路径'
  })
  component: string;

  @ApiProperty({
    description: '菜单图标'
  })
  path: string;

  @ApiProperty({
    description: '权限类型(MENU BUTTON)',
    enum: PermissionType
  })
  type: number;

  @ApiProperty({
    description: '权限状态(1:启用 0:禁用)'
  })
  status: number;

  @ApiProperty({
    description: '描述'
  })
  des: string;
}
