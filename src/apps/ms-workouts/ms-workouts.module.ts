import { Module } from '@nestjs/common';
import { exerciseModule } from './modules/exercise/exercise.module';
import { muscleModule } from './modules/muscle/muscle.module';
import { WorkoutExerciseModule } from './modules/workout-exercise/workout-exercise.module';
import { WorkoutHistoryModule } from './modules/workout-history/workout-history.module';
import { WorkoutModule } from './modules/workout/workout.module';
@Module({
  imports: [
    muscleModule,
    exerciseModule,
    WorkoutModule,
    WorkoutExerciseModule,
    WorkoutHistoryModule,
  ],
})
export class MsWorkOutsModule {}
