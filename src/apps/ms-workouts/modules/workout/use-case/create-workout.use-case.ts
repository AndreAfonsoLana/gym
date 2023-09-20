import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class CreateWorkoutUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(createWorkoutDto: Prisma.workoutCreateInput) {
    await this.isWorkoutExits(createWorkoutDto.name);

    return await this.prisma.workout.create({ data: createWorkoutDto });
  }
  private async isWorkoutExits(name: string) {
    const workoutExits = await this.prisma.workout.findFirst({
      where: { name },
    });

    if (workoutExits) {
      throw new ConflictException(' Já existe Workout com esse nome');
    }
  }
}
