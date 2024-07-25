import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AccountController],
  providers: [AccountService, JwtService]
})
export class AccountModule {}
