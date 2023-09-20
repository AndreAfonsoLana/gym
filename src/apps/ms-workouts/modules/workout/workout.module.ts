import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import CreateWorkoutUseCase from './use-case/create-workout.use-case';
import FindAllWorkoutUseCase from './use-case/find-all-workout.use-case';
import FindOneWorkoutUseCase from './use-case/find-one-workout.use-case';
import InactiveWorkoutUseCase from './use-case/inactive-workout.use-case';
import UpdateWorkOutUseCase from './use-case/update-workout.use-case';
import { WorkoutController } from './workout.controller';

@Module({
  controllers: [WorkoutController],
  providers: [
    CreateWorkoutUseCase,
    FindAllWorkoutUseCase,
    FindOneWorkoutUseCase,
    UpdateWorkOutUseCase,
    InactiveWorkoutUseCase,
    PrismaService,
  ],
})
export class WorkoutModule {}
