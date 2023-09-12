import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import StudentsExternalService from '../../external-service/students.external-service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private studentsExternalService: StudentsExternalService,
  ) {}
  async create(createUserDto: Prisma.UserCreateInput) {
    if (createUserDto.password) {
      createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    }
    const userCreated = await this.prisma.user.create({
      data: createUserDto,
    });
    delete userCreated.password;

    return userCreated;
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findStudentsOne(id: number) {
    const responseStudents = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    const responseUser = await this.studentsExternalService.getStudentsUser(
      responseStudents.id,
    );

    return { ...responseStudents, students: { responseUser } };
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      data: updateUserDto,
      where: {
        id,
      },
    });
  }
  active(id: number) {
    return this.prisma.user.update({
      data: { isActive: true },
      where: {
        id,
      },
    });
  }
  inactive(id: number) {
    return this.prisma.user.update({
      data: { isActive: false },
      where: {
        id,
      },
    });
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Usuário ou Senha inválida');
    }

    const passwordExists = await bcrypt.compare(password, user.password);

    if (!passwordExists) {
      throw new UnauthorizedException('Usuário ou Senha inválida');
    }

    const token = await this.jwt.signAsync({ sub: user.id });

    const data = this.jwt.decode(token);

    return { token, expired: data['exp'] };
  }
}
