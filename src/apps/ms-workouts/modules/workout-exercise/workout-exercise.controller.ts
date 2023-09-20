import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateWorkoutExerciseDto } from './dto/create-workout-exercise.dto';
import UpdateWorkoutExerciseDto from './dto/update-workout-exercise.dto';
import CreateWorkoutExerciseUseCase from './use-case/create-workout-exercise.use-case';
import { FindAllWorkoutExerciseUseCase } from './use-case/find-all-workout-exercise.use-case';
import { FindOneWorkoutExerciseUseCase } from './use-case/find-one-workout-exercisie.use-case';
import { InactiveWorkoutExerciseUseCase } from './use-case/inactive-workout-exercise.use-case';
import { UpdateWorkoutExerciseUseCase } from './use-case/update-workout-exercise.use-case';

@Controller('/workout/workout-exercise')
export class WorkoutExerciseController {
  constructor(
    private readonly createWorkoutExerciseUseCase: CreateWorkoutExerciseUseCase,
    private readonly findAllWorkoutExerciseUseCase: FindAllWorkoutExerciseUseCase,
    private readonly findOneWorkoutExerciseUseCase: FindOneWorkoutExerciseUseCase,
    private readonly updateWorkoutExerciseUseCase: UpdateWorkoutExerciseUseCase,
    private readonly inactiveWorkoutExerciseUseCase: InactiveWorkoutExerciseUseCase,
  ) {}
  @Post()
  create(@Body() createWorkoutExerciseDto: CreateWorkoutExerciseDto) {
    return this.createWorkoutExerciseUseCase.execute(
      createWorkoutExerciseDto as any,
    );
  }
  @Get()
  findAll() {
    return this.findAllWorkoutExerciseUseCase.execute();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneWorkoutExerciseUseCase.execute(+id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWorkoutExerciseDto: UpdateWorkoutExerciseDto,
  ) {
    return this.updateWorkoutExerciseUseCase.execute(
      +id,
      updateWorkoutExerciseDto,
    );
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.inactiveWorkoutExerciseUseCase.execute(+id);
  }
}
