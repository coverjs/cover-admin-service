import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// 作为全局模块导出
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
