import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import UserExternalService from 'src/apps/ms-students/external-service/user.external-service';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export default class CreateStudentUseCase {
  constructor(
    private prisma: PrismaService,
    private userExternalService: UserExternalService,
  ) {}
  async execute(createUserDto: Prisma.UserCreateInput) {
    await this.isStudentExits(createUserDto.email);

    const studentCreated = await this.prisma.student.create({
      data: createUserDto,
    });

    if (studentCreated) {
      const dataInsert = {
        name: studentCreated.name,
        password: '123456',
        email: studentCreated.email,
      };
      const responseInsert =
        await this.userExternalService.createUser(dataInsert);

      if (responseInsert) {
        return await this.prisma.student.update({
          data: {
            idUser: +responseInsert,
          },
          where: {
            id: studentCreated.id,
          },
        });
      }
    }

    return studentCreated;
  }
  async isStudentExits(email: string) {
    const studentResult = await this.prisma.student.findFirst({
      where: {
        email,
      },
    });

    if (studentResult) {
      throw new ConflictException('Já existe Estudante com esse Email');
    }
  }
}
