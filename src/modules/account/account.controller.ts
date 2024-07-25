import { Body, Controller } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountDto } from './dto/account.dto';
import { ApiTags, Method, UniDefine } from 'uni-nest';

@ApiTags('账号管理')
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @UniDefine({
    path: 'login',
    method: Method.Post,
    description: '登录',
    body: {
      type: AccountDto
    },
    response: {
      model: AccountDto
    }
  })
  create(@Body() createAccountDto: AccountDto) {
    return this.accountService.login(createAccountDto);
  }
}
