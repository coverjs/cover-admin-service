import { ApiProperty } from 'uni-nest';

export class CreateMenuDto {
  @ApiProperty({
    description: '菜单名',
    required: true
  })
  name: string;

  @ApiProperty({
    description: '排序'
  })
  order: number;

  @ApiProperty({
    description: '父级菜单'
  })
  parentId: string;

  @ApiProperty({
    description: '菜单图标',
    required: true
  })
  icon: string;
  @ApiProperty({
    description: '组件路径',
    required: true
  })
  component: string;
  @ApiProperty({
    description: '路由路径',
    required: true
  })
  path: string;
}
