import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UpdateWorkoutExerciseUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(
    id: number,
    updateWorkoutExerciseDto: Prisma.workoutExerciseUpdateInput,
  ) {
    return await this.prisma.workoutExercise.update({
      data: updateWorkoutExerciseDto,
      where: { id },
    });
  }
}
