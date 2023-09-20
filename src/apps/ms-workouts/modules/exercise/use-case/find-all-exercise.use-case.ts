import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class FindAllExerciseUseCase {
  constructor(private prisma: PrismaService) {}
  async execute() {
    return await this.prisma.exercise.findMany();
  }
}
