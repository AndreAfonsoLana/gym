import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class InactiveWorkoutUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(id: number) {
    return this.prisma.workout.update({
      data: { isActive: false },
      where: {
        id,
      },
    });
  }
}
