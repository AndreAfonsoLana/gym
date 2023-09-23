import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class InactiveStudentUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(id: number) {
    return await this.prisma.student.update({
      data: { isActive: false },
      where: {
        id,
      },
    });
  }
}
