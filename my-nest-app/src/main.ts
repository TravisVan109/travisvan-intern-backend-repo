import { NestFactory, Reflector } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { LoggingInterceptor } from './logging/logging.interceptor';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer/class-serializer.interceptor';
import { Logger } from 'nestjs-pino';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';

process.on('unhandledRejection', (reason) => {
  console.error('UNHANDLED REJECTION:', reason);
});

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useLogger(app.get(Logger));
  app.useGlobalFilters(new HttpExceptionFilter());

  // Add a catch-all filter to log any exceptions that might be missed by the HttpExceptionFilter
  app.useGlobalFilters({
    catch(exception: unknown, host: any) {
      console.error('RAW EXCEPTION:', exception);
    }
  } as any);

  await app.register(helmet);
  await app.register(rateLimit, { max: 100, timeWindow: '1m' });// Limit to 100 requests per minute

  app.enableCors({
    origin: process.env.ALLOWED_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });// Enable CORS with specific settings

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();