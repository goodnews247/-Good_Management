import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from "dotenv"
import * as cookieParser from 'cookie-parser'

dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true
  }))
  app.use(cookieParser())
  app.setGlobalPrefix('api/v1')
  const port = process.env.PROJECT_PORT;
  await app.listen(port,()=>{
    console.log(`project running on port ${3000}`)
  });

}
bootstrap();