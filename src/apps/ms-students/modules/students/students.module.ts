import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import UserExternalService from '../../external-service/user.external-service';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService, PrismaService, UserExternalService],
})
export class StudentsModule {}
