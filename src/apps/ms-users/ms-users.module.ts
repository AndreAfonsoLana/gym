import { Module } from '@nestjs/common';
import StudentsExternalService from './external-service/students.external-service';
import { UserModule } from './modules/user/user.module';

@Module({ imports: [UserModule], providers: [StudentsExternalService] })
export class MsUserModule {}
