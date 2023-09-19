import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import UserExternalService from '../../../external-service/user.external-service';

@Injectable()
export default class FindStudentFindOneUseCase {
  constructor(
    private prisma: PrismaService,
    private userExternalService: UserExternalService,
  ) {}
  async execute(id: number) {
    const responseStudent = await this.prisma.student.findUnique({
      where: {
        id,
      },
    });

    if (responseStudent) {
      const user = await this.userExternalService.getUser(
        responseStudent.idUser,
      );

      return { ...responseStudent, user };
    }

    return responseStudent;
  }
}
