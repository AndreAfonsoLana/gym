import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import CreateExerciseDto from './dto/create-exercise.dto';
import UpdateExerciseDto from './dto/update-exercise.dto';
import CreateExerciseUseCase from './use-case/create-exercise.use-case';
import FindAllExerciseUseCase from './use-case/find-all-exercise.use-case';
import FindOneExerciseUseCase from './use-case/find-one-exercise.use-case';
import InactiveExerciseUseCase from './use-case/inactive-exercise.use-case';
import UpdateExerciseUseCase from './use-case/update-exercise.use-case';

@Controller('/workout/exercise')
export default class ExerciseController {
  constructor(
    private readonly createExerciseUseCase: CreateExerciseUseCase,
    private readonly findAllExerciseUseCase: FindAllExerciseUseCase,
    private readonly findOneExerciseUseCase: FindOneExerciseUseCase,
    private readonly updateExerciseUseCase: UpdateExerciseUseCase,
    private readonly inactiveExerciseUseCase: InactiveExerciseUseCase,
  ) {}
  @Post()
  create(@Body() createExerciseDto: CreateExerciseDto) {
    return this.createExerciseUseCase.execute(createExerciseDto as any);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ) {
    return this.updateExerciseUseCase.execute(+id, updateExerciseDto);
  }

  @Get()
  findAll() {
    return this.findAllExerciseUseCase.execute();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneExerciseUseCase.execute(+id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inactiveExerciseUseCase.execute(+id);
  }
}
