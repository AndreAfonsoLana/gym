import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MuscleController } from './muscle.controller';
import CreateMuscleUseCase from './use-case/create-muscle.use-case';
import FindAllMuscleUseCase from './use-case/find-all-muscle.use-case';
import FindOneMuscleUseCase from './use-case/find-one-muscle.use-case';
import InactiveMuscleUseCase from './use-case/inactive-muscle.use-case';
import UpdateMuscleUseCase from './use-case/update-muscle.use-case';

@Module({
  controllers: [MuscleController],
  providers: [
    CreateMuscleUseCase,
    FindAllMuscleUseCase,
    UpdateMuscleUseCase,
    FindOneMuscleUseCase,
    InactiveMuscleUseCase,
    PrismaService,
  ],
})
export class muscleModule {}
