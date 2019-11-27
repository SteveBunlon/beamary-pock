import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloWithCookie(): string {
    return 'Cookie detected :)';
  }

  getHelloWithoutCookie(): string {
    return 'Cookie not detected :(';
  }
}
