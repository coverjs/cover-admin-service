import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loadSwagger } from './utils/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // load swagger docs
  loadSwagger(app);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
