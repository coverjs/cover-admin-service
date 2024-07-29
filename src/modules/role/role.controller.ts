import { Controller, Body, Param, Query } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/role.dto';
import { QueryRoleDto } from './dto/role.query.dto';
import { ApiTags, Method, UniDefine } from 'uni-nest';

@ApiTags('角色管理')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @UniDefine({
    summary: '创建角色',
    method: Method.Post,
    body: {
      type: CreateRoleDto
    }
  })
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @UniDefine({
    summary: '查询所有角色',
    method: Method.Get,
    body: {
      type: QueryRoleDto
    }
  })
  findAll(@Query() query: QueryRoleDto) {
    return this.roleService.findAll(query);
  }

  @UniDefine({
    summary: '查询单个角色',
    method: Method.Get,
    path: '/:id'
  })
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @UniDefine({
    summary: '删除角色',
    method: Method.Delete,
    path: '/:id'
  })
  remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }
}
