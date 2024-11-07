import { PaginationDto } from '@/common/dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ description: '角色名' })
  name: string;

  @ApiProperty({ description: '角色描述' })
  description: string;
}

export class RoleListDto extends PaginationDto {
  @ApiProperty({ description: '角色名', required: false })
  name?: string;
}
