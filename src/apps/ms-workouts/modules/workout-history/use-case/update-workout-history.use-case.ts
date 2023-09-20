import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UpdateWorkoutHistoryUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(
    id: number,
    updateWorkoutHistoryDto: Prisma.workoutHistoryUpdateInput,
  ) {
    return await this.prisma.workoutHistory.update({
      data: updateWorkoutHistoryDto,
      where: {
        id,
      },
    });
  }
}
