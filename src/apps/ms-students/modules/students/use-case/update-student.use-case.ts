import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export default class UpdateStudentUseCase {
  constructor(private prisma: PrismaService) {}
  execute(id: number, updateUserDto: Prisma.StudentUpdateInput) {
    return this.prisma.student.update({
      data: updateUserDto,
      where: {
        id,
      },
    });
  }
}
