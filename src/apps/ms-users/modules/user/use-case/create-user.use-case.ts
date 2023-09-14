import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export default class CreateUserUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(createUserDto: Prisma.UserCreateInput) {
    if (createUserDto.password) {
      createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    }

    await this.isUserExits(createUserDto.email);

    const userCreated = await this.prisma.user.create({
      data: createUserDto,
    });
    delete userCreated.password;

    return userCreated;
  }
  private async isUserExits(email: string) {
    const userExits = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userExits) {
      throw new ConflictException('Já existe usuário com esse Email');
    }
  }
}
