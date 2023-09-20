import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import ExerciseController from './exercise.controller';
import CreateExerciseUseCase from './use-case/create-exercise.use-case';
import FindAllExerciseUseCase from './use-case/find-all-exercise.use-case';
import FindOneExerciseUseCase from './use-case/find-one-exercise.use-case';
import InactiveExerciseUseCase from './use-case/inactive-exercise.use-case';
import UpdateExerciseUseCase from './use-case/update-exercise.use-case';

@Module({
  controllers: [ExerciseController],
  providers: [
    CreateExerciseUseCase,
    FindAllExerciseUseCase,
    FindOneExerciseUseCase,
    UpdateExerciseUseCase,
    InactiveExerciseUseCase,
    PrismaService,
  ],
})
export class exerciseModule {}
