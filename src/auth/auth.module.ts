import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PrismaClientService } from 'src/services/prisma-client/prisma-client.service';

@Module({
  controllers: [AuthController],
  providers: [PrismaClientService],
})
export class AuthModule { }
