import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class FindOneWorkoutUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(id: number) {
    return await this.prisma.workout.findFirst({
      where: { id },
    });
  }
}
