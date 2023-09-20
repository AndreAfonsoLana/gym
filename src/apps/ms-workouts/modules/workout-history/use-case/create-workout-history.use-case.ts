import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class CreateWorkoutHistoryUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(createWorkoutHistoryDto: Prisma.workoutHistoryCreateInput) {
    return this.prisma.workoutHistory.create({
      data: createWorkoutHistoryDto,
    });
  }
}
