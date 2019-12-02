import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin: ['http://app.development.forestadmin.com', 'https://app.development.forestadmin.com']});
  app.use(cookieParser());
  await app.listen(80);
}
bootstrap();
