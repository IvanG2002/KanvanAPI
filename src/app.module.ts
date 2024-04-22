import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { PrismaClientService } from './services/prisma-client/prisma-client.service';

@Module({
  imports: [TasksModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
