import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ServerConfig } from './contexts/shared/config/server.config';

function getServerConfig(app: INestApplication): ServerConfig {
  const config: ConfigService = app.get(ConfigService);
  return config.get<ServerConfig>('server');
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = getServerConfig(app);
  await app.listen(config.port);
}
bootstrap();
