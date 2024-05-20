import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { PrismaClientService } from './services/prisma-client/prisma-client.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TasksModule, UsersModule, AuthModule],
  controllers: [AuthController],
  providers: [PrismaClientService],
})
export class AppModule {}
