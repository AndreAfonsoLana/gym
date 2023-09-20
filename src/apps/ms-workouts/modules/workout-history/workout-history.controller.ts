import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateWorkoutHistoryDto } from './dto/create-workout-history.dto';
import { UpdateWorkoutHistoryDto } from './dto/update-workout-history.dto';
import { CreateWorkoutHistoryUseCase } from './use-case/create-workout-history.use-case';
import { FindAllWorkoutHistoryUseCase } from './use-case/find-all-workout-history.use-case';
import { FindOneWorkoutHistoryUseCase } from './use-case/find-one-workout-history.use-case';
import { InactiveWorkoutHistoryUseCase } from './use-case/inactive-workout-history.use-case';
import { UpdateWorkoutHistoryUseCase } from './use-case/update-workout-history.use-case';

@Controller('/workout/workout-history')
export class WorkoutHistoryController {
  constructor(
    private readonly createWorkoutHistoryUseCase: CreateWorkoutHistoryUseCase,
    private readonly findAllWorkoutHistoryUseCase: FindAllWorkoutHistoryUseCase,
    private readonly findOneWorkoutHistoryUseCase: FindOneWorkoutHistoryUseCase,
    private readonly updateWorkoutHistoryUseCase: UpdateWorkoutHistoryUseCase,
    private readonly inactiveWorkoutHistoryUseCase: InactiveWorkoutHistoryUseCase,
  ) {}
  @Post()
  create(@Body() createdWorkoutHistoryDto: CreateWorkoutHistoryDto) {
    return this.createWorkoutHistoryUseCase.execute(
      createdWorkoutHistoryDto as any,
    );
  }
  @Get()
  findAll() {
    return this.findAllWorkoutHistoryUseCase.execute();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneWorkoutHistoryUseCase.execute(+id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWorkoutHistoryDto: UpdateWorkoutHistoryDto,
  ) {
    return this.updateWorkoutHistoryUseCase.execute(
      +id,
      updateWorkoutHistoryDto,
    );
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.inactiveWorkoutHistoryUseCase.execute(+id);
  }
}
