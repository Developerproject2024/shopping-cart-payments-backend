import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ServerConfig } from './contexts/shared/config/server.config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

function getServerConfig(app: INestApplication): ServerConfig {
  const config: ConfigService = app.get(ConfigService);
  return config.get<ServerConfig>('server');
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = getServerConfig(app);
  app.enableCors();
  const swagger = new DocumentBuilder()
    .setTitle('API Shopping Pay')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('api', app, document);

  await app.listen(config.port);
}
bootstrap();
