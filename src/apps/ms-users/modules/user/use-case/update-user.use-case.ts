import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export default class UpdateUserUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(id: number, updateUserDto: Prisma.UserUpdateInput) {
    await this.isUserExits(String(updateUserDto.email), id);

    const userUpdated = await this.prisma.user.update({
      data: updateUserDto,
      where: {
        id: id,
      },
    });

    delete userUpdated.password;

    return userUpdated;
  }
  private async isUserExits(email: string, id: number) {
    const userExits = await this.prisma.user.findFirst({
      where: {
        email,
        NOT: { id: id! },
      },
    });

    if (userExits) {
      throw new ConflictException('Já existe usuário com esse Email');
    }
  }
}
