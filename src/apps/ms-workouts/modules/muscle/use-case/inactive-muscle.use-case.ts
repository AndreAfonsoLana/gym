import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class InactiveMuscleUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(id: number) {
    return this.prisma.muscle.update({
      data: { isActive: false },
      where: {
        id,
      },
    });
  }
}
