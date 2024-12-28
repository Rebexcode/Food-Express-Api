import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //setting up swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Food-Express Api Documentation')
    .setDescription(
      'An Application that serves as an interface between restaurants and customers.',
    )
    .setVersion('1.0')
    .addTag('users')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('food-express-api', app, document);

  await app.listen(3000);
}
bootstrap();
