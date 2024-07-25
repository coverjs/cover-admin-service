import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { UploadModule } from './modules/upload/upload.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './common/prisma/prisma.module';
import { AccountModule } from './modules/account/account.module';

@Module({
  imports: [PrismaModule, UserModule, UploadModule, AuthModule, ConfigModule.forRoot({ isGlobal: true }), AccountModule]
})
export class AppModule {}
