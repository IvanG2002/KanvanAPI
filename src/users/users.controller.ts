import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { PrismaClientService } from 'src/services/prisma-client/prisma-client.service';

@Controller('users')
@ApiTags('users')
export class UsersController {

  constructor(private prismaService: PrismaClientService) { }

  @Post()
  async create(@Body() createUser: User): Promise<User> {
    return await this.prismaService.user.create({
      data: createUser
    })
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.prismaService.user.findMany()
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: +id
      },
    });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUser: User): Promise<User> {
    return await this.prismaService.user.update({
      where: {
        id: +id
      },
      data: updateUser
    })
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<User> {
    return await this.prismaService.user.delete({
      where: {
        id: +id
      }
    })
  }
}
