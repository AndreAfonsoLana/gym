import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { MsStudentsModule } from './apps/ms-students/ms-students.module';
import FindUseActiveByIdUseCase from './apps/ms-users/modules/user/use-case/find-use-active-by-id.use-case';
import { MsUserModule } from './apps/ms-users/ms-users.module';
import { MsWorkOutsModule } from './apps/ms-workouts/ms-workouts.module';
import { AuthGuard } from './auth.guard';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'andreéodonodessaAPI',
      signOptions: { expiresIn: '1h' },
    }),
    MsUserModule,
    MsStudentsModule,
    MsWorkOutsModule,
  ],
  controllers: [],
  providers: [
    PrismaService,
    FindUseActiveByIdUseCase,

    { provide: APP_GUARD, useClass: AuthGuard },
  ],
})
export class AppModule {}
