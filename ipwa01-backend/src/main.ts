import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'debug', 'error', 'fatal', 'verbose', 'warn'],
    cors: true,
  });
  await app.listen(3000);
  console.log('Backend listening on ' + (await app.getUrl()));
}
bootstrap();
