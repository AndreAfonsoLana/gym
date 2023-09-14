import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class InactiveUserUseCase {
  constructor(private prisma: PrismaService) {}
  execute(id: number) {
    return this.prisma.user.update({
      data: { isActive: false },
      where: {
        id,
      },
    });
  }
}
