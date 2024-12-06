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
import { Public } from 'src/guards/decorators/public';

@Controller('auth')
@ApiTags(EndpointTags.Auth)
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('local'))
  @Public()
  @Post('login')
  signIn(@Body() signInDto: LoginDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }
}
