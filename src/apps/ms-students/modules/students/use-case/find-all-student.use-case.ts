import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class FindAllStudentUseCase {
  constructor(private prisma: PrismaService) {}
  execute() {
    return this.prisma.student.findMany();
  }
}
