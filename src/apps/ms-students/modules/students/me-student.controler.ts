import { Body, Controller, Get, Patch, Req } from '@nestjs/common';
import { UpdateStudentDto } from './dto/update-student.dto';
import FindStudentUserOneUse from './use-case/find-student-user-one.use-case';
import UpdateMeStudentUseCase from './use-case/update-me-student.use-case';

@Controller('/me/student')
export class MeStudentController {
  constructor(
    private readonly findStudentUserOneUseCase: FindStudentUserOneUse,
    private readonly updateMeStudentUseCase: UpdateMeStudentUseCase,
  ) {}
  @Get()
  findOne(@Req() req) {
    return this.findStudentUserOneUseCase.execute(req.user.id);
  }

  @Patch()
  update(@Req() req, @Body() updateStudentDto: UpdateStudentDto) {
    return this.updateMeStudentUseCase.execute(req.user.id, updateStudentDto);
  }
}
