import { Controller, Get, HttpCode, HttpStatus, Res } from '@nestjs/common';

@Controller('login')
export class LoginController {
  @Get()
  @HttpCode(HttpStatus.OK)
  login(@Res() res): string {
    res.cookie('beamary-session-cookie', `session-${Math.random()}`, {
      httpOnly: true,
    });

    res.send();
    return 'Supposed to be logged in';
  }
}
