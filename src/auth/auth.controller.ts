import { Controller, Get, Post, Body, NotFoundException, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { PrismaClientService } from 'src/services/prisma-client/prisma-client.service';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(private prismaService: PrismaClientService) { }

  @Post('login')
  async login(@Body() loginDto: { username: string; password: string }) {
    const { username, password } = loginDto;

    const user = await this.prismaService.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid password");
    }

    return {
      message: 'Login successful',
      userId: user.id,
    };
  }

  @Post('register')
  async register(@Body() registerDto: { username: string; password: string; email: string }) {
    const { username, password, email } = registerDto;

    const existingUser = await this.prismaService.user.findFirst({
      where: {
        OR: [
          { username: username },
          { email: email },
        ],
      },
    });

    if (existingUser) {
      throw new BadRequestException('Username or email already in use');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await this.prismaService.user.create({
      data: {
        username: username,
        passwordHash: hashedPassword,
        email: email,
        created_date: new Date(),
      },
    });

    return {
      message: 'User registered successfully',
      userId: newUser.id,
    };
  }
}
