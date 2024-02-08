import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix("api/v1");

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      })
    );
    //swagger

    const config = new DocumentBuilder()
    .setTitle('QoriStudy APIS')
    .setDescription('Y aquí nace las Apis de los cracks de Back no de fron esos nos bajitos ga')
    .setVersion('1.0')
    .build();
    
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);

    app.enableCors(); 

    const PORT = process.env.PORT || 4000;
    await app.listen(PORT);

    console.log(`Application is running on: http://localhost:${PORT}`);
  } catch (error) {
    console.error('Error starting the application:', error);
  }
}

bootstrap();

