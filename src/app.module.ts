import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { MsStudentsModule } from './apps/ms-students/ms-Students.module';
import { UserService } from './apps/ms-users/modules/user/user.service';
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
    UserService,

    { provide: APP_GUARD, useClass: AuthGuard },
  ],
})
export class AppModule {}
