import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req): string {
    if (req.cookies['beamary-session-cookie']) {
      return this.appService.getHelloWithCookie(req.cookies['beamary-session-cookie']);
    } else {
      return this.appService.getHelloWithoutCookie();
    }
  }
}
