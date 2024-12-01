import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { EndpointTags } from 'src/shared/enums/controller-tags.enum';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../users/models/login.dto';

@Controller('auth')
@ApiTags(EndpointTags.Auth)
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('local'))
  @Post('login')
  signIn(@Body() signInDto: LoginDto) {
    return this.authService.test(signInDto);
  }
}
