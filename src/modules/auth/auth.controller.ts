import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CommonApiResponse } from '@/common/decorators/apiResponse';
import { AccountLoginDto } from './dto/auth.dto';
import { AccountLoginVo } from './dto/auth.vo';

@Controller('auth')
@ApiTags('授权')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  @ApiOperation({ summary: '用户登录' })
  @CommonApiResponse({ isPublic: true, type: AccountLoginVo })
  login(@Body() accountInfo: AccountLoginDto) {
    return this.authService.login(accountInfo);
  }
}
