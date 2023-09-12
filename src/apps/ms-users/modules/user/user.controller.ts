import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IsPublic } from 'src/decorators/IsPublic.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto as any);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
  @Get(':id/student/')
  findStudentsOne(@Param('id') id: string) {
    return this.userService.findStudentsOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Patch(':id/active')
  active(@Param('id') id: string) {
    return this.userService.active(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.inactive(+id);
  }

  @IsPublic()
  @Post('login')
  login(@Body() login) {
    return this.userService.login(login.email, login.password);
  }
}
