import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AdminModule } from './modules/admin/admin.module';
import { settings } from '../swagger.config';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main');

export async function bootstrap(port: number) {
  const admin = await NestFactory.create(AdminModule);
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: false,
  });

  const configApp = swaggerConfigugration(settings.api);

  const document = SwaggerModule.createDocument(app, configApp);

  SwaggerModule.setup('api', app, document);

  await app.listen(port);

  logger.log(`APP Application is 🚀 and running on: http://localhost:${port}`);
  logger.log(`Timezone ${process.env.TZ}`);
}

function swaggerConfigugration(role: {
  title: string;
  description: string;
  version: string;
  tag: string;
}) {
  return new DocumentBuilder()
    .setTitle(role.title)
    .setDescription(role.description)
    .setVersion(role.version)
    .addBearerAuth()
    .build();
}
