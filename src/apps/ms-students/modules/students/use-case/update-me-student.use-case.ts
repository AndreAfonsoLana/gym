import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export default class UpdateMeStudentUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(idUser: number, updateStudentDto: Prisma.StudentUpdateInput) {
    return await this.prisma.student.updateMany({
      data: updateStudentDto,
      where: {
        idUser,
      },
    });
  }
}
