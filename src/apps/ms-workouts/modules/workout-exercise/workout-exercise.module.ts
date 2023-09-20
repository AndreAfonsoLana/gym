import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import CreateWorkoutExerciseUseCase from './use-case/create-workout-exercise.use-case';
import { FindAllWorkoutExerciseUseCase } from './use-case/find-all-workout-exercise.use-case';
import { FindOneWorkoutExerciseUseCase } from './use-case/find-one-workout-exercisie.use-case';
import { InactiveWorkoutExerciseUseCase } from './use-case/inactive-workout-exercise.use-case';
import { UpdateWorkoutExerciseUseCase } from './use-case/update-workout-exercise.use-case';
import { WorkoutExerciseController } from './workout-exercise.controller';

@Module({
  controllers: [WorkoutExerciseController],
  providers: [
    CreateWorkoutExerciseUseCase,
    FindAllWorkoutExerciseUseCase,
    FindOneWorkoutExerciseUseCase,
    UpdateWorkoutExerciseUseCase,
    InactiveWorkoutExerciseUseCase,
    PrismaService,
  ],
})
export class WorkoutExerciseModule {}
