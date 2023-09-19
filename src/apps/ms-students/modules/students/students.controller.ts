import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import CreateStudentUseCase from './use-case/create-student.use-case';
import FindAllStudentUseCase from './use-case/find-all-student.use-case';
import FindStudentUserOneUse from './use-case/find-student-user-one.use-case';
import FindStudentFindOneUseCase from './use-case/find-student-find-one.use-case';
import UpdateStudentUseCase from './use-case/update-student.use-case';
import ActiveStudentUseCase from './use-case/active-student.use-case';
import InactiveStudentUseCase from './use-case/inactive-student.use-case';

@Controller('students')
export class StudentsController {
  constructor(
    private readonly createStudentUseCase: CreateStudentUseCase,
    private readonly findAllStudentUseCase: FindAllStudentUseCase,
    private readonly findStudentUserOneUseCase: FindStudentUserOneUse,
    private readonly findStudentFindOneUseCase: FindStudentFindOneUseCase,
    private readonly updateStudentUseCase: UpdateStudentUseCase,
    private readonly activeStudentUseCase: ActiveStudentUseCase,
    private readonly inactiveStudentUseCase: InactiveStudentUseCase,
  ) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.createStudentUseCase.execute(createStudentDto as any);
  }

  @Get()
  findAll() {
    return this.findAllStudentUseCase.execute();
  }

  @Get(':id/user/')
  findUserOne(@Param('id') idUser: string) {
    return this.findStudentUserOneUseCase.execute(+idUser);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findStudentFindOneUseCase.execute(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.updateStudentUseCase.execute(+id, updateStudentDto);
  }

  @Patch(':id/active')
  active(@Param('id') id: string) {
    return this.activeStudentUseCase.execute(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inactiveStudentUseCase.execute(+id);
  }
}
