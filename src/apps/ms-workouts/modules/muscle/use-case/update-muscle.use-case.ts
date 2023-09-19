import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class UpdateMuscleUseCase {
  constructor(private readonly prisma: PrismaService) {}
  async execute(id: number, updateMuscleDto: Prisma.MuscleUpdateInput) {
    return await this.prisma.muscle.update({
      data: updateMuscleDto,
      where: {
        id,
      },
    });
  }
}
