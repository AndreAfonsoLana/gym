import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FindAllWorkoutExerciseUseCase {
  constructor(private prisma: PrismaService) {}
  async execute() {
    return await this.prisma.workoutExercise.findMany();
  }
}
