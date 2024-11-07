import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AccountLoginDto } from './dto/auth.dto';
import { PrismaService } from '@/common/prisma/prisma.service';
import { encryptPassword } from '@/utils/cryptogram';
import { BusinessException } from '@/common/exceptions';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService
  ) {}

  /**
   * 登录
   * @param account
   * @returns
   */
  async login(account: AccountLoginDto) {
    const { username, password } = account;
    const userInfo = await this.prismaService.user.findUnique({
      where: { username }
    });

    if (userInfo && userInfo.password === encryptPassword(password, userInfo.salt)) {
      const { id, username } = userInfo;
      const token = this.jwtService.sign(
        { id, username },
        {
          secret: this.configService.get('JWT_SECRET'),
          expiresIn: this.configService.get('TOKEN_EXPIRES')
        }
      );
      return { token };
    }
    BusinessException.throwUsernameOrPasswordIncorrect();
  }
}
