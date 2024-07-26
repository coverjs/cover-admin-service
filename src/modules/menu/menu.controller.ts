import { Controller, Body, Param } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { ApiTags, Method, UniDefine } from 'uni-nest';

@ApiTags('菜单管理')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @UniDefine({
    summary: '创建菜单',
    method: Method.Post,
    body: {
      type: CreateMenuDto
    }
  })
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }

  @UniDefine({
    summary: '查询所有菜单',
    method: Method.Get
  })
  findAll() {
    return this.menuService.findAll();
  }

  @UniDefine({
    summary: '查询单个菜单',
    method: Method.Get,
    path: '/:id'
  })
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  @UniDefine({
    summary: '更新菜单',
    method: Method.Patch,
    path: '/:id',
    body: {
      type: UpdateMenuDto
    }
  })
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(+id, updateMenuDto);
  }

  @UniDefine({
    summary: '删除菜单',
    method: Method.Delete,
    path: '/:id'
  })
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id);
  }
}
