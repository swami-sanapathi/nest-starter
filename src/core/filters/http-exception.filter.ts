import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { getISODateString } from '../../utils/date-fns';

export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode = this.getStatus(exception);
    const message = this.getMessage(exception);

    response.status(statusCode).json({
      path: request.url,
      error: exception.name,
      statusCode,
      message,
      timestamp: getISODateString()
    });
  }

  getStatus(exception: HttpException) {
    return exception instanceof HttpException ? exception.getStatus() : 500;
  }

  getMessage(exception: HttpException) {
    return exception instanceof HttpException
      ? exception.getResponse()['message']
      : exception['message'] || 'Internal server error';
  }
}
