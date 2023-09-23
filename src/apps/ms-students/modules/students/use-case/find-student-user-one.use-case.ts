import { Injectable } from '@nestjs/common';
import WorkoutHistoryExternalService from 'src/apps/ms-students/external-service/workout-history-external-service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class FindStudentUserOneUse {
  constructor(
    private prisma: PrismaService,
    private workoutHistoryExternalService: WorkoutHistoryExternalService,
  ) {}
  async execute(idUser: number) {
    const result = await this.prisma.student.findFirst({
      where: {
        idUser,
      },
    });

    if (result) {
      const workoutHistory =
        await this.workoutHistoryExternalService.getWorkoutHistory(
          result.idUser,
        );
      return { result, workoutHistory };
    }
    return { result };
  }
}
