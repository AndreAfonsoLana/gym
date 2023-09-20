import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class InactiveExerciseUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(id: number) {
    return this.prisma.exercise.update({
      data: {
        isActive: false,
      },
      where: { id },
    });
  }
}
