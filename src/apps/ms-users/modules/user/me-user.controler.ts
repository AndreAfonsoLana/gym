import { Body, Controller, Get, Patch, Req } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import FindOneUserUseCase from './use-case/find-one-user.use-case';
import UpdateUserUseCase from './use-case/update-user.use-case';

@Controller('/me/user')
export class MeUserController {
  constructor(
    private readonly findOneUserUseCase: FindOneUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
  ) {}
  @Get()
  findOne(@Req() req) {
    return this.findOneUserUseCase.execute(req.user.id);
  }
  @Patch()
  update(@Req() req, @Body() updateUserDto: UpdateUserDto) {
    return this.updateUserUseCase.execute(req.user.id, updateUserDto);
  }
}
