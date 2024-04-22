import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PrismaClientService } from 'src/services/prisma-client/prisma-client.service';

@Module({
  controllers: [UsersController],
  providers: [PrismaClientService],
})
export class UsersModule {}
