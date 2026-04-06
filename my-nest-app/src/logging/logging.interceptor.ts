import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    console.log(`→ ${request.method} ${request.url}`);

    return next.handle().pipe(
      tap(() => console.log(`← Response sent for ${request.url}`))
    );
  }
}