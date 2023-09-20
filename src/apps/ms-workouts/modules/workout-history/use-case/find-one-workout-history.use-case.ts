import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FindOneWorkoutHistoryUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(id: number) {
    return await this.prisma.workoutHistory.findFirst({
      where: {
        id,
      },
    });
  }
}
