import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { UploadModule } from './modules/upload/upload.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './common/prisma/prisma.module';
import { AccountModule } from './modules/account/account.module';
import { RoleModule } from './modules/role/role.module';

@Module({
  imports: [PrismaModule, UserModule, AccountModule, RoleModule, UploadModule, ConfigModule.forRoot({ isGlobal: true })]
})
export class AppModule {}
