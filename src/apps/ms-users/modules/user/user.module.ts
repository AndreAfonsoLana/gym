import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import StudentsExternalService from '../../external-service/students.external-service';
import CreateUserUseCase from './use-case/create-user.use-case';
import FindAllUserUseCase from './use-case/find-all-user.use-case';
import FindStudentsOneUseCase from './use-case/find-students-one.use-case';
import FindOneUserUseCase from './use-case/find-one-user.use-case';
import UpdateUserUseCase from './use-case/update-user.use-case';
import ActiveUserUseCase from './use-case/active-user.use-case';
import InactiveUserUseCase from './use-case/inactive-user.use-case';
import LoginUserUseCase from './use-case/login-user.use-case';
import { MeUserController } from './me-user.controler';
import FindStudentUserOneUse from 'src/apps/ms-students/modules/students/use-case/find-student-user-one.use-case';
import WorkoutHistoryExternalService from 'src/apps/ms-students/external-service/workout-history-external-service';
@Module({
  controllers: [UserController, MeUserController],
  providers: [
    PrismaService,
    StudentsExternalService,
    CreateUserUseCase,
    FindAllUserUseCase,
    FindStudentsOneUseCase,
    FindStudentUserOneUse,
    FindOneUserUseCase,
    UpdateUserUseCase,
    ActiveUserUseCase,
    InactiveUserUseCase,
    LoginUserUseCase,
    WorkoutHistoryExternalService,
  ],
})
export class UserModule {}
