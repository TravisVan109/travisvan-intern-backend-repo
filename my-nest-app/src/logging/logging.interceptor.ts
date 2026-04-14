import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    console.log(`→ ${request.method} ${request.url}`);
    console.log('Headers:', request.headers);
    console.log('Body:', request.body);
    return next.handle().pipe(
      tap((response) => console.log(`← Response:`, JSON.stringify(response)))
    );
  }
}