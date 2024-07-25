import { Body, Controller } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountLoginDto, CurrentUserDto } from './dto/account.dto';
import { ApiTags, Method, UniDefine, User } from 'uni-nest';
import { AccountLoginVo } from './dto/account.vo';

@ApiTags('账号管理')
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @UniDefine({
    path: 'login',
    method: Method.Post,
    summary: '登录',
    isPublic: true,
    body: {
      type: AccountLoginDto
    },
    response: {
      type: AccountLoginVo
    }
  })
  create(@Body() createAccountDto: AccountLoginDto) {
    return this.accountService.login(createAccountDto);
  }

  @UniDefine({
    path: 'current',
    summary: '获取当前用户信息',
    method: Method.Get
  })
  getCurrentUser(@User() user: CurrentUserDto) {
    return this.accountService.getCurrentUser(user);
  }
}
