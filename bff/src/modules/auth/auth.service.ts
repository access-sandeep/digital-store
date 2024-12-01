import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../users/models/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.email };
    const accessToken = {
      access_token: await this.jwtService.signAsync(payload),
    };
    return accessToken;
  }

  async test(signInDto: LoginDto) {
    console.log(signInDto);
    return { message: `Your Login success!` };
  }
}
