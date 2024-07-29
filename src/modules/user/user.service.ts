import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { PrismaService } from '../../common/prisma/prisma.service';
import { encryptPassword, makeSalt } from 'uni-nest';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async createUser(createUserDto: CreateUserDto) {
    const { password } = createUserDto;
    const salt = makeSalt();
    createUserDto.password = encryptPassword(password, salt);
    await this.prismaService.user.create({
      data: {
        salt,
        ...createUserDto
      }
    });
  }
}
