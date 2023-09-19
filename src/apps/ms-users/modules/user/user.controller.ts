import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IsPublic } from 'src/decorators/IsPublic.decorator';
import CreateUserUseCase from './use-case/create-user.use-case';
import FindAllUserUseCase from './use-case/find-all-user.use-case';
import FindStudentsOneUseCase from './use-case/find-students-one.use-case';
import FindOneUserUseCase from './use-case/find-one-user.use-case';
import UpdateUserUseCase from './use-case/update-user.use-case';
import ActiveUserUseCase from './use-case/active-user.use-case';
import InactiveUserUseCase from './use-case/inactive-user.use-case';
import LoginUserUseCase from './use-case/login-user.use-case';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly findAllUserUseCase: FindAllUserUseCase,
    private readonly findStudentsOneUseCase: FindStudentsOneUseCase,
    private readonly findOneUserUseCase: FindOneUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly activeUserUseCase: ActiveUserUseCase,
    private readonly inactiveUserUseCase: InactiveUserUseCase,
    private readonly loginUserUseCase: LoginUserUseCase,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserUseCase.execute(createUserDto as any);
  }

  @Get()
  findAll() {
    return this.findAllUserUseCase.execute();
  }

  @Get(':id/student')
  findStudentsOne(@Param('id') id: string) {
    return this.findStudentsOneUseCase.execute(+id);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneUserUseCase.execute(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.updateUserUseCase.execute(+id, updateUserDto);
  }

  @Patch(':id/active')
  active(@Param('id') id: string) {
    return this.activeUserUseCase.execute(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inactiveUserUseCase.execute(+id);
  }

  @IsPublic()
  @Post('login')
  login(@Body() login) {
    return this.loginUserUseCase.execute(login.email, login.password);
  }
}
