import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FindAllWorkoutHistoryUseCase {
  constructor(private prisma: PrismaService) {}
  async execute() {
    return this.prisma.workoutHistory.findMany();
  }
}
