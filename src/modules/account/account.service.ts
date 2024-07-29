import { Injectable } from '@nestjs/common';
import { encryptPassword } from 'uni-nest';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AccountLoginDto, CurrentUserDto } from './dto/account.dto';
import { JWT_SECRET_ENV_KEY, TOKEN_EXPIRES_ENV_KEY } from '../../constants';
import { PrismaService } from '../../common/prisma/prisma.service';
import { BusinessException } from '../../common/exceptions/business.exceptions';

@Injectable()
export class AccountService {
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
          secret: this.configService.get(JWT_SECRET_ENV_KEY),
          expiresIn: this.configService.get(TOKEN_EXPIRES_ENV_KEY)
        }
      );
      return { token };
    }
    BusinessException.throwUsernameOrPasswordIncorrect();
  }

  /**
   * 获取当前用户信息
   * @param user
   * @returns
   */
  async getCurrentUser(user: CurrentUserDto) {
    const { id } = user;
    const userInfo = await this.prismaService.user.findUnique({
      where: { id },
      include: { role: true }
    });
    return userInfo;
  }
}
