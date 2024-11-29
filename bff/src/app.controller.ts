import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { EndpointTags } from './shared/enums/controller-tags.enum';
import { LoginDto } from './modules/users/models/login.dto';

@Controller()
@ApiTags(EndpointTags.Products)
export class AppController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body() req: LoginDto) {
    return req.email;
  }

  @Post('test')
  async test(@Body() req: LoginDto) {
    return req.email;
  }
}
