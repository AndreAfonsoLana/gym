import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class FindUseActiveByIdUseCase {
  constructor(private readonly prisma: PrismaService) {}
  async execute(id: number) {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
        isActive: true,
      },
    });

    delete user.password;

    return user;
  }
}
