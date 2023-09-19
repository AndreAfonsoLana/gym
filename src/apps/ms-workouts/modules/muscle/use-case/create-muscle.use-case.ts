import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class CreateMuscleUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(createMuscleDto: Prisma.MuscleCreateInput) {
    await this.isMuscleExits(createMuscleDto.name);

    const muscleCreated = await this.prisma.muscle.create({
      data: createMuscleDto,
    });

    return muscleCreated;
  }
  private async isMuscleExits(name: string) {
    const muscleExists = await this.prisma.muscle.findFirst({
      where: { name },
    });
    if (muscleExists) {
      throw new ConflictException('Já existe esse músculo com esse nome');
    }
  }
}
