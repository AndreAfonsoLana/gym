import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class FindAllMuscleUseCase {
  constructor(private prisma: PrismaService) {}
  async execute() {
    return await this.prisma.muscle.findMany();
  }
}
