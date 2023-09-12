import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto as any);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get('/user/:id')
  findUserOne(@Param('id') idUser: string) {
    return this.studentsService.findUserOne(+idUser);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Patch(':id/active')
  active(@Param('id') id: string) {
    return this.studentsService.active(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.inactive(+id);
  }
}
