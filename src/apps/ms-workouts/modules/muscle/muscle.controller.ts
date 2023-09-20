import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateMuscleDto } from './dto/create-muscle.dto';
import { UpdateMuscleDto } from './dto/update-muscle.dto';
import CreateMuscleUseCase from './use-case/create-muscle.use-case';
import FindAllMuscleUseCase from './use-case/find-all-muscle.use-case';
import FindOneMuscleUseCase from './use-case/find-one-muscle.use-case';
import InactiveMuscleUseCase from './use-case/inactive-muscle.use-case';
import UpdateMuscleUseCase from './use-case/update-muscle.use-case';

@Controller('/workout/muscle')
export class MuscleController {
  constructor(
    private readonly createMuscleUseCase: CreateMuscleUseCase,
    private readonly findAllMuscleUseCase: FindAllMuscleUseCase,
    private readonly uptadeMuscleUseCase: UpdateMuscleUseCase,
    private readonly findOneMuscleUseCase: FindOneMuscleUseCase,
    private readonly inactiveMuscleUseCase: InactiveMuscleUseCase,
  ) {}
  @Post()
  create(@Body() createMuscleDto: CreateMuscleDto) {
    return this.createMuscleUseCase.execute(createMuscleDto as any);
  }

  @Get()
  findAll() {
    return this.findAllMuscleUseCase.execute();
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMuscle: UpdateMuscleDto) {
    return this.uptadeMuscleUseCase.execute(+id, updateMuscle);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneMuscleUseCase.execute(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inactiveMuscleUseCase.execute(+id);
  }
}
