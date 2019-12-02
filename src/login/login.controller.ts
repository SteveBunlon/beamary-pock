import { Controller, Get, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';

@Controller('login')
export class LoginController {
  @Get()
  @HttpCode(HttpStatus.OK)
  login(@Res() res): string {
    const sessionValue = `session-${Math.random()}`;
    res.cookie('beamary-session-cookie', sessionValue, {
      httpOnly: true,
    });

    res.send(`Successfully logged in ! Your session is : ${sessionValue}`);
    return null;
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  postLogin(@Res() res): string {
    const sessionValue = `session-${Math.random()}`;
    res.cookie('beamary-session-cookie', sessionValue, {
      httpOnly: true,
    });

    res.send(`Successfully logged in ! Your session is : ${sessionValue}`);
    return null;
  }
}
