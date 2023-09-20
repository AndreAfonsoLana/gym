import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWorkoutHistoryUseCase } from './use-case/create-workout-history.use-case';
import { FindAllWorkoutHistoryUseCase } from './use-case/find-all-workout-history.use-case';
import { FindOneWorkoutHistoryUseCase } from './use-case/find-one-workout-history.use-case';
import { InactiveWorkoutHistoryUseCase } from './use-case/inactive-workout-history.use-case';
import { UpdateWorkoutHistoryUseCase } from './use-case/update-workout-history.use-case';
import { WorkoutHistoryController } from './workout-history.controller';

@Module({
  controllers: [WorkoutHistoryController],
  providers: [
    CreateWorkoutHistoryUseCase,
    FindAllWorkoutHistoryUseCase,
    FindOneWorkoutHistoryUseCase,
    UpdateWorkoutHistoryUseCase,
    InactiveWorkoutHistoryUseCase,
    PrismaService,
  ],
})
export class WorkoutHistoryModule {}
