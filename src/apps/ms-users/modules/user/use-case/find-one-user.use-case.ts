import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class FindOneUserUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(id: number) {
    return this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }
}
