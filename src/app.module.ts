import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [ ConfigModule.forRoot({
    envFilePath: '.env'
  }), HttpModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
