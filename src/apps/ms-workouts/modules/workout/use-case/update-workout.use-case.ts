import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class UpdateWorkOutUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(id: number, updateWorkoutDto: Prisma.workoutUpdateInput) {
    return await this.prisma.workout.update({
      data: updateWorkoutDto,
      where: { id },
    });
  }
}
