import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Task } from '@prisma/client';
import { PrismaClientService } from 'src/services/prisma-client/prisma-client.service';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {

  constructor(private prismaService: PrismaClientService) { }

  @Post()
  async create(@Body() createTask: Task): Promise<Task> {
    return await this.prismaService.task.create({
      data: createTask
    })
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return await this.prismaService.task.findMany()
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task> {
    const task = await this.prismaService.task.findUnique({
      where: {
        id: id
      },
    });
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return task;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTask: Task): Promise<Task> {
    return await this.prismaService.task.update({
      where: {
        id: id
      },
      data: updateTask
    })
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Task> {
    return await this.prismaService.task.delete({
      where: {
        id: id
      }
    })
  }
}
