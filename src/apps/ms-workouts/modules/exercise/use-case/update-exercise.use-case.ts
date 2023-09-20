import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class UpdateExerciseUseCase {
  constructor(private prismas: PrismaService) {}
  async execute(id: number, updateExerciseDto: Prisma.ExerciseUpdateInput) {
    return await this.prismas.exercise.update({
      data: updateExerciseDto,
      where: {
        id,
      },
    });
  }
}
