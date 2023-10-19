import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'debug', 'error', 'fatal', 'verbose', 'warn'],
    cors: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Keep Track API')
    .setDescription('The CO2 - Footprint API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);

  await app.listen(3000);
  console.log('Backend listening on ' + (await app.getUrl()));
}
bootstrap();
