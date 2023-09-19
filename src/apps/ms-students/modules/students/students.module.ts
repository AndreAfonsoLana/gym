import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import UserExternalService from '../../external-service/user.external-service';
import CreateStudentUseCase from './use-case/create-student.use-case';
import FindAllStudentUseCase from './use-case/find-all-student.use-case';
import FindStudentUserOneUse from './use-case/find-student-user-one.use-case';
import FindStudentFindOneUseCase from './use-case/find-student-find-one.use-case';
import UpdateStudentUseCase from './use-case/update-student.use-case';
import ActiveStudentUseCase from './use-case/active-student.use-case';
import InactiveStudentUseCase from './use-case/inactive-student.use-case';
import { MeStudentController } from './me-student.controler';
import UpdateMeStudentUseCase from './use-case/update-me-student.use-case';

@Module({
  controllers: [StudentsController, MeStudentController],
  providers: [
    PrismaService,
    UserExternalService,
    CreateStudentUseCase,
    FindAllStudentUseCase,
    FindStudentUserOneUse,
    FindStudentFindOneUseCase,
    UpdateStudentUseCase,
    UpdateMeStudentUseCase,
    ActiveStudentUseCase,
    InactiveStudentUseCase,
  ],
})
export class StudentsModule {}
