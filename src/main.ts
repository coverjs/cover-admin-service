import { AppModule } from './app.module';
import { bootstrap } from 'uni-nest';

bootstrap(AppModule, {
  swaggerOptions: {
    title: 'Cover Admin',
    description: 'Cover Admin 接口文档',
    version: '1.0.0',
    license: ['MIT']
  },
  appOptions: {
    port: 1118
  },
  beforeAppListen(app) {
    app.setGlobalPrefix('api');
  },
  jwtVerifyOptions: {
    secret: process.env.JWT_SECRET
  }
});
