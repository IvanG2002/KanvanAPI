import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { PrismaClientService } from 'src/services/prisma-client/prisma-client.service';

@Module({
  controllers: [TasksController],
  providers: [PrismaClientService],
})
export class TasksModule { }
