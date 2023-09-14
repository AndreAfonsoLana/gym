import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class ActiveUserUseCase {
  constructor(private prisma: PrismaService) {}
  execute(id: number) {
    return this.prisma.user.update({
      data: { isActive: true },
      where: {
        id,
      },
    });
  }
}
