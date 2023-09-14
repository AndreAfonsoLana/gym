import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class InactiveStudentUseCase {
  constructor(private prisma: PrismaService) {}

  execute(id: number) {
    return this.prisma.student.update({
      data: { isActive: false },
      where: {
        id,
      },
    });
  }
}
