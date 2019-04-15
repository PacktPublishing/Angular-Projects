import { Module, MiddlewareConsumer, RequestMethod, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { AuthenticationMiddleware } from './shared/auth.middleware';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer): void {
  //   console.log('configuring');
  //   consumer.apply(AuthenticationMiddleware).forRoutes(
  //       { path: '/**', method: RequestMethod.ALL }
  //   );
  // }
}
