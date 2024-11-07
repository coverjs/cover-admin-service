import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CommonResponseVo } from '@/common/dto';

// 加载 swagger 文档
export const loadSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Cover Admin Service')
    .setDescription('Coverjs后台服务端接口文档')
    .setVersion('1.0.0')
    .build();

  const documentFactory = () => {
    return SwaggerModule.createDocument(app, config, {
      extraModels: [CommonResponseVo]
    });
  };
  SwaggerModule.setup('docs', app, documentFactory);
};
