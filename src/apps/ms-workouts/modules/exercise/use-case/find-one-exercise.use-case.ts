import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class FindOneExerciseUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(id: number) {
    return await this.prisma.exercise.findFirst({
      where: {
        id,
      },
    });
  }
}
