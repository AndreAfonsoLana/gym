import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import UserExternalService from '../../external-service/user.external-service';

@Injectable()
export class StudentsService {
  constructor(
    private prisma: PrismaService,
    private userExternalService: UserExternalService,
  ) {}
  async create(createUserDto: Prisma.UserCreateInput) {
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

  findAll() {
    return this.prisma.student.findMany();
  }

  async findUserOne(idUser: number) {
    return await this.prisma.student.findFirst({
      where: {
        idUser,
      },
    });
  }
  async findOne(id: number) {
    const responseStudent = await this.prisma.student.findUnique({
      where: {
        id,
      },
    });

    const user = await this.userExternalService.getUser(responseStudent.idUser);

    const response = { ...responseStudent, user };

    return response;
  }

  update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.prisma.student.update({
      data: updateUserDto,
      where: {
        id,
      },
    });
  }
  active(id: number) {
    return this.prisma.student.update({
      data: { isActive: true },
      where: {
        id,
      },
    });
  }
  inactive(id: number) {
    return this.prisma.student.update({
      data: { isActive: false },
      where: {
        id,
      },
    });
  }
}
