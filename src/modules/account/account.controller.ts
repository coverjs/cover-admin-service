import { Body, Controller } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountDto } from './dto/account.dto';
import { ApiTags, Method, UniDefine } from 'uni-nest';
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
      type: AccountDto
    },
    response: {
      type: AccountLoginVo
    }
  })
  create(@Body() createAccountDto: AccountDto) {
    return this.accountService.login(createAccountDto);
  }
}
