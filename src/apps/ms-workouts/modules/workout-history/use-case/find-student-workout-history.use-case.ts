import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FindStudentWorkoutHistoryUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(studentId: number) {
    return await this.prisma.workoutHistory.findMany({
      where: { studentId },
    });
  }
}
