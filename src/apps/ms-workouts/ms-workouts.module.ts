import { Module } from '@nestjs/common';
import { muscleModule } from './modules/muscle/muscle.module';
@Module({ imports: [muscleModule] })
export class MsWorkOutsModule {}
