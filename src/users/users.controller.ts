import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';

@Controller('users')
export class UsersController {
  @Post('login')
  login(@Body() login: LoginDto) {}
}
