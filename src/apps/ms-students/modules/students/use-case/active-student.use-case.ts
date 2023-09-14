import { PrismaService } from 'src/prisma/prisma.service';

export default class ActiveStudentUseCase {
  constructor(private prisma: PrismaService) {}
  execute(id: number) {
    return this.prisma.student.update({
      data: { isActive: true },
      where: {
        id,
      },
    });
  }
}
