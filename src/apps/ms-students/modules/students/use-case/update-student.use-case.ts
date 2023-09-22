import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
@Injectable()
export default class UpdateStudentUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(id: number, updateUserDto: Prisma.StudentUpdateInput) {
    return await this.prisma.student.update({
      data: updateUserDto,
      where: {
        id,
      },
    });
  }
}
