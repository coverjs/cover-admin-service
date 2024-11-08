import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtAuthGuard } from './common/guard';
import { BaseExceptionsFilter, HttpExeptionsFilter } from './common/exceptions';
import { ResponseInterceptor } from './common/interceptor';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './common/prisma/prisma.module';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/system/role/role.module';
import { UploadModule } from './modules/upload/upload.module';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [
    // 根据环境加载不同环境变量
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UploadModule,
    AuthModule,
    UserModule,
    RoleModule,
    ProfileModule
  ],
  providers: [
    // jwt 校验守卫
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    },
    // 统一响应格式
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor
    },
    // 注册基本错误过滤器
    {
      provide: APP_FILTER,
      useClass: BaseExceptionsFilter
    },
    // 注册http错误过滤器
    {
      provide: APP_FILTER,
      useClass: HttpExeptionsFilter
    }
  ]
})
export class AppModule {}
