import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/common/prisma/prisma.service';
import { UserInfoByParseToken } from '@/common/dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prismaService: PrismaService) {}
  async getUserInfo(user: UserInfoByParseToken) {
    const { password, salt, ...userInfo } = await this.prismaService.user.findUnique({
      where: {
        id: user.id
      },
      include: {
        role: true
      }
    });
    return userInfo;
  }
}
