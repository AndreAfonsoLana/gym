import { Injectable } from '@nestjs/common';
import StudentsExternalService from 'src/apps/ms-users/external-service/students.external-service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class FindStudentsOneUseCase {
  constructor(
    private prisma: PrismaService,
    private studentsExternalService: StudentsExternalService,
  ) {}
  async execute(id: number) {
    const responseStudents = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (responseStudents) {
      const responseUser = await this.studentsExternalService.getStudentsUser(
        responseStudents.id,
      );

      return { ...responseStudents, students: { responseUser } };
    }

    return { ...responseStudents };
  }
}
