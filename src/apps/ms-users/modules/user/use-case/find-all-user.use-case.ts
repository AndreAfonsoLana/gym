import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class FindAllUserUseCase {
  constructor(private readonly prisma: PrismaService) {}
  execute() {
    return this.prisma.user.findMany();
  }
}
