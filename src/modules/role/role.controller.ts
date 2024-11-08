import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto, RoleListDto } from './dto/role.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CommonApiResponse } from '@/common/decorators/apiResponse';
import { PaginationPipe } from '@/common/pipes/pagination.pipe';
import { RoleVo } from './dto/role.vo';
@ApiTags('角色管理')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @ApiOperation({ summary: '新建角色' })
  @CommonApiResponse()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  @ApiOperation({ summary: '获取角色列表' })
  @CommonApiResponse({
    type: 'list',
    itemType: RoleVo
  })
  fineList(@Query(PaginationPipe) queryRoleList: RoleListDto) {
    return this.roleService.findList(queryRoleList);
  }

  @Get(':id')
  @ApiOperation({ summary: '根据id查询角色信息' })
  @CommonApiResponse({ type: RoleVo })
  findOne(@Param('id') id: string) {
    console.log(+id);
    // return this.roleService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
  //   return this.roleService.update(+id, updateRoleDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.roleService.remove(+id);
  // }
}
