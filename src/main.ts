import { RequestMethod } from '@nestjs/common';
import {
  GlobalPrefixOptions,
  NestApplicationOptions
} from '@nestjs/common/interfaces';
import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/filters/http-exception.filter';
import { LoggerInterceptor } from './core/interceptors/logger.interceptor';

async function bootstrap() {
  const appOpts: NestApplicationOptions = {
    cors: true,
    bodyParser: true
  };
  const appConfig = await NestFactory.create(AppModule, appOpts);

  // set a global prefix as `api` for all routes except the `health` route
  const excludeOpts: GlobalPrefixOptions = {
    exclude: [
      {
        path: '/health',
        method: RequestMethod.GET
      }
    ]
  };

  appConfig.setGlobalPrefix('api', excludeOpts);
  appConfig.useGlobalInterceptors(new LoggerInterceptor());
  appConfig.useGlobalFilters(new HttpExceptionFilter());
  appConfig.use(compression());

  await appConfig.listen(3001);
}
bootstrap();
