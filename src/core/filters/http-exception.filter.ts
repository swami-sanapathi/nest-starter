import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';

export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode =
      exception instanceof HttpException ? exception.getStatus() : 500;
    const message = exception.message;

    response.status(statusCode).json({
      path: request.url,
      error: exception.name,
      statusCode,
      message,
      timestamp: new Date().toISOString()
    });
  }
}
