import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class FindStudentUserOneUse {
  constructor(private prisma: PrismaService) {}
  async execute(idUser: number) {
    const result = await this.prisma.student.findFirst({
      where: {
        idUser,
      },
    });

    return result;
  }
}
