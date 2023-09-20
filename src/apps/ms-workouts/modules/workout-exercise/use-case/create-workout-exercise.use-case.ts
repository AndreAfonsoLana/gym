import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class CreateWorkoutExerciseUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(
    createWorkoutEexerciseUseSase: Prisma.workoutExerciseCreateInput,
  ) {
    return this.prisma.workoutExercise.create({
      data: createWorkoutEexerciseUseSase,
    });
  }
}
