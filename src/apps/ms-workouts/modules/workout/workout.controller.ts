import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import CreateWorkoutUseCase from './use-case/create-workout.use-case';
import FindAllWorkoutUseCase from './use-case/find-all-workout.use-case';
import FindOneWorkoutUseCase from './use-case/find-one-workout.use-case';
import InactiveWorkoutUseCase from './use-case/inactive-workout.use-case';
import UpdateWorkOutUseCase from './use-case/update-workout.use-case';

@Controller('/workout/workout')
export class WorkoutController {
  constructor(
    private readonly createWorkoutUseCase: CreateWorkoutUseCase,
    private readonly findAllWorkoutUseCase: FindAllWorkoutUseCase,
    private readonly findOneWorkoutUseCase: FindOneWorkoutUseCase,
    private readonly updateWorkOutUseCase: UpdateWorkOutUseCase,
    private readonly inactiveWorkoutUseCase: InactiveWorkoutUseCase,
  ) {}
  @Post()
  create(@Body() createWorkoutDto: CreateWorkoutDto) {
    return this.createWorkoutUseCase.execute(createWorkoutDto as any);
  }
  @Get()
  findAll() {
    return this.findAllWorkoutUseCase.execute();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneWorkoutUseCase.execute(+id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkoutDto: UpdateWorkoutDto) {
    return this.updateWorkOutUseCase.execute(+id, updateWorkoutDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inactiveWorkoutUseCase.execute(+id);
  }
}
