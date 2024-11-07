import { Controller, Get } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { User } from '@/common/decorators/user';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CommonApiResponse } from '@/common/decorators/apiResponse';
import { ProfileVo } from './dto/profile.vo';
import { UserInfoByParseToken } from '@/common/dto';

@Controller('profile')
@ApiTags('个人信息')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  @ApiOperation({ summary: '获取个人信息' })
  @CommonApiResponse({ type: ProfileVo })
  async findUserInfo(@User() user: UserInfoByParseToken) {
    return this.profileService.getUserInfo(user);
  }
}
