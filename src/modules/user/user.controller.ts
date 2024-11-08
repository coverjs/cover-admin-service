import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UserListDto } from './dto/user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CommonApiResponse } from '@/common/decorators/apiResponse';
import { PaginationPipe } from '@/common/pipes/pagination.pipe';
import { UserInfoVo } from './dto/user.vo';
@ApiTags('用户管理')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: '新建用户' })
  @CommonApiResponse()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: '获取用户列表' })
  @CommonApiResponse({ type: 'list', itemType: UserInfoVo })
  findList(@Query(PaginationPipe) queryUserList: UserListDto) {
    return this.userService.findList(queryUserList);
  }
  @Get(':id')
  @ApiOperation({ summary: '根据id查询用户信息' })
  @CommonApiResponse({ type: UserInfoVo })
  findById(@Query('id') id: string) {
    console.log(+id);
    // return this.userService.findById(id);
  }
}
