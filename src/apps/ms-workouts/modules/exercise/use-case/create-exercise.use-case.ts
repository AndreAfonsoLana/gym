import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class CreateExerciseUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(createExerciseDto: Prisma.ExerciseCreateInput) {
    await this.isExerciseExits(createExerciseDto.name);

    await this.prisma.exercise.create({
      data: createExerciseDto,
    });

    return createExerciseDto;
  }
  async isExerciseExits(name: string) {
    const exerciseExits = await this.prisma.exercise.findFirst({
      where: { name },
    });

    if (exerciseExits) {
      throw new ConflictException('Já existe esse exercício com esse nome');
    }
  }
}
