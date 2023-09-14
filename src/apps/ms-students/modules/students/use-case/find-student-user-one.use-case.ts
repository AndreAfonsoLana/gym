import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class FindStudentUserOneUse {
  constructor(private prisma: PrismaService) {}
  async execute(idUser: number) {
    return await this.prisma.student.findFirst({
      where: {
        idUser,
      },
    });
  }
}
