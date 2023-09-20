import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InactiveWorkoutExerciseUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(id: number) {
    return await this.prisma.workoutExercise.update({
      data: { isActive: false },
      where: { id },
    });
  }
}
