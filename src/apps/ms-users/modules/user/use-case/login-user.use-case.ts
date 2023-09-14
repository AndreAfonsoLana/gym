import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export default class LoginUserUseCase {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}
  async execute(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Usuário ou Senha inválida');
    }

    const passwordExists = await bcrypt.compare(password, user.password);

    if (!passwordExists) {
      throw new UnauthorizedException('Usuário ou Senha inválida');
    }

    const token = await this.jwt.signAsync({ sub: user.id });

    const data = this.jwt.decode(token);

    return { token, expired: data['exp'] };
  }
}
