import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloWithCookie(sessionId): string {
    return `Cookie detected :) Your current session : ${sessionId}`;
  }

  getHelloWithoutCookie(): string {
    return 'Cookie not detected :(';
  }
}
