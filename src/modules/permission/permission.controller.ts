import { Controller, Body, Param } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { ApiTags, Method, UniDefine } from 'uni-nest';

@ApiTags('权限管理')
@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @UniDefine({
    summary: '创建权限',
    method: Method.Post,
    body: {
      type: CreatePermissionDto
    }
  })
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionService.create(createPermissionDto);
  }

  @UniDefine({
    summary: '查询所有权限',
    method: Method.Get
  })
  findAll() {
    return this.permissionService.findAll();
  }

  @UniDefine({
    summary: '查询单个角权限',
    method: Method.Get,
    path: '/:id'
  })
  findOne(@Param('id') id: string) {
    return this.permissionService.findOne(+id);
  }

  @UniDefine({
    summary: '更新权限',
    method: Method.Patch,
    path: '/:id',
    body: {
      type: UpdatePermissionDto
    }
  })
  update(@Param('id') id: string, @Body() updatePermissionDto: UpdatePermissionDto) {
    return this.permissionService.update(+id, updatePermissionDto);
  }

  @UniDefine({
    summary: '删除权限',
    method: Method.Delete,
    path: '/:id'
  })
  remove(@Param('id') id: string) {
    return this.permissionService.remove(+id);
  }
}
