import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> {
    const request: Request = context.switchToHttp().getRequest();

    console.log(`Before...at in seconds: ${new Date()}`);
    if (request.url === '/health') return next.handle();

    return next.handle().pipe(tap(() => console.log(`After... ${new Date()}`)));
  }
}
